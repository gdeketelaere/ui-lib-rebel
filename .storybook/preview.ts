import type { Preview } from "@storybook/web-components-vite";
import "./preview.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },

    docs: {
      toc: true,
    },

    options: {
      storySort: {
        method: "alphabetical",
        order: [
          "Welcome",
          "Foundations",
          "Atomic Components",
          "Organisms",
          "Templates",

          ["Default"],
          "*",
        ],
        locales: "en-US",
      },
    },
  },

  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: ["light", "dark"],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
