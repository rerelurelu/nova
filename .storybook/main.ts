import type { StorybookConfig } from 'storybook-framework-qwik'

const config: StorybookConfig = {
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: 'storybook-framework-qwik',
  },
  core: {
    renderer: 'storybook-framework-qwik',
  },
  stories: [
    // ...rootMain.stories,
    '../src/components/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  // biome-ignore lint/suspicious/noExplicitAny: This is auto-generated code.
  viteFinal: async (config: any) => {
    return config
  },
}

export default config
