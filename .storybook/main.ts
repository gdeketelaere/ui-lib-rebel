import type { StorybookConfig } from "@storybook/web-components-vite";

const config: StorybookConfig = {
  stories: ["../storybook/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
  ],
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
  viteFinal: async config => {
    // Configuration pour utiliser la nouvelle API Sass
    if (config.css?.preprocessorOptions?.scss) {
      config.css.preprocessorOptions.scss = {
        ...config.css.preprocessorOptions.scss,
        api: "modern-compiler",
      };
    } else {
      config.css = {
        ...config.css,
        preprocessorOptions: {
          ...config.css?.preprocessorOptions,
          scss: {
            api: "modern-compiler",
          },
        },
      };
    }

    return config;
  },
};
export default config;
