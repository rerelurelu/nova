import type { Parameters } from 'storybook-framework-qwik'

import '../src/global.css'

export const parameters: Parameters = {
  a11y: {
    config: {},
    options: {
      checks: { 'color-contrast': { options: { noScroll: true } } },
      restoreScroll: true,
    },
  },
  options: {
    showRoots: true,
  },
  docs: {
    iframeHeight: '200px',
  },
  backgrounds: {
    default: 'default',
    values: [
      {
        name: 'default',
        value: '#1a1e2e',
      },
      {
        name: 'light',
        value: '#f0f0f0',
      },
    ],
  },
}
