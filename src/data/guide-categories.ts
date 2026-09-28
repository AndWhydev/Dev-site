export const guideCategories = {
  cost: {
    label: 'Cost guides',
    intro: 'Typical Australian price ranges for software and AI projects, what drives them, and how to spend less without cutting corners.',
  },
  compare: {
    label: 'Comparisons',
    intro: 'Fair, side-by-side comparisons of the options Australian buyers weigh up, with a clear recommendation for each situation.',
  },
  explainer: {
    label: 'Explainers',
    intro: 'Plain-English explanations of the AI and software terms that come up when you are buying or planning a build.',
  },
  australia: {
    label: 'Australian rules and programs',
    intro: 'Australian regulation, government policy and incentives that shape software and AI projects, explained with links to the primary sources.',
  },
} as const;

export type GuideCategory = keyof typeof guideCategories;
