<?php
// ─────────────────────────────────────────────────────────────────────────
// CRM webhook forwarding.
// Set this to the real CRM/automation webhook URL when available (Andy to
// provide). When empty, submissions are emailed only. When set, each
// submission is also POSTed as JSON to this endpoint on a best-effort basis
// (a webhook failure never blocks the email or the user's success response).
// You can also set it via an environment variable named CRM_WEBHOOK_URL.
// ─────────────────────────────────────────────────────────────────────────
$CRM_WEBHOOK_URL = getenv('CRM_WEBHOOK_URL') ?: ''; // TODO: paste real CRM webhook URL here

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Sanitise inputs
$firstName   = strip_tags(trim($_POST['firstName'] ?? ''));
$lastName    = strip_tags(trim($_POST['lastName'] ?? ''));
$email       = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$company     = strip_tags(trim($_POST['company'] ?? ''));
$phone       = strip_tags(trim($_POST['phone'] ?? ''));
$service     = strip_tags(trim($_POST['service'] ?? ''));
$budget      = strip_tags(trim($_POST['budget'] ?? ''));
$message     = strip_tags(trim($_POST['message'] ?? ''));
$nda         = isset($_POST['nda']) ? 'Yes' : 'No';
$hearAbout   = strip_tags(trim($_POST['hear'] ?? ''));

// Basic validation
if (empty($firstName) || empty($lastName) || empty($email) || empty($company) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please enter a valid email address.']);
    exit;
}

// Build email
$to      = 'andy@allwebbedup.com.au';
$subject = "New Enquiry from $firstName $lastName — $company";

$body = "
New contact form submission from aibusinesssolutions.au

---

NAME:        $firstName $lastName
EMAIL:       $email
COMPANY:     $company
PHONE:       $phone
SERVICE:     $service
BUDGET:      $budget
HEARD FROM:  $hearAbout
NDA:         $nda

MESSAGE:
$message

---
Submitted: " . date('d M Y, H:i:s') . " AEST
";

$headers  = "From: noreply@aibusinesssolutions.au\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$sent = mail($to, $subject, $body, $headers);

// ── Best-effort CRM webhook forward ───────────────────────────────────────
// Posts the lead as JSON to the configured webhook. Any failure here is
// swallowed so it never affects the email result or the user's response.
if (!empty($CRM_WEBHOOK_URL)) {
    $payload = json_encode([
        'source'      => 'aibusinesssolutions.au',
        'firstName'   => $firstName,
        'lastName'    => $lastName,
        'email'       => $email,
        'company'     => $company,
        'phone'       => $phone,
        'service'     => $service,
        'budget'      => $budget,
        'heardFrom'   => $hearAbout,
        'nda'         => $nda,
        'message'     => $message,
        'submittedAt' => date('c'),
    ]);

    if (function_exists('curl_init')) {
        $ch = curl_init($CRM_WEBHOOK_URL);
        curl_setopt_array($ch, [
            CURLOPT_POST           => true,
            CURLOPT_POSTFIELDS     => $payload,
            CURLOPT_HTTPHEADER     => ['Content-Type: application/json'],
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT        => 5,
        ]);
        curl_exec($ch);
        curl_close($ch);
    } else {
        // Fallback when cURL is unavailable on the host.
        @file_get_contents($CRM_WEBHOOK_URL, false, stream_context_create([
            'http' => [
                'method'        => 'POST',
                'header'        => "Content-Type: application/json\r\n",
                'content'       => $payload,
                'timeout'       => 5,
                'ignore_errors' => true,
            ],
        ]));
    }
}

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Message sent successfully.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send. Please email us directly at labs@allwebbedup.com.au']);
}
