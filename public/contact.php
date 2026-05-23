<?php
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
$to      = 'labs@allwebbedup.com.au';
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

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Message sent successfully.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send. Please email us directly at labs@allwebbedup.com.au']);
}
