import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";

// Import the component
import "../../lib/components/button/rebel-button";

const meta: Meta = {
  title: "Atomic Components/Button",
  component: "rebel-button",
  parameters: {
    docs: {
      description: {
        component:
          "A customizable button component with multiple variants, sizes, and states. Built with Lit and Tailwind CSS for modern web applications.",
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "outline", "ghost"],
      description: "The visual style variant of the button",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "The size of the button",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the button is disabled",
    },
    loading: {
      control: { type: "boolean" },
      description: "Whether the button is in loading state",
    },
    type: {
      control: { type: "select" },
      options: ["button", "submit", "reset"],
      description: "The HTML button type",
    },
  },
};

export default meta;
type Story = StoryObj;

// Default story
export const Default: Story = {
  args: {
    variant: "primary",
    size: "medium",
    disabled: false,
    loading: false,
    type: "button",
  },
  render: args => html`
    <rebel-button
      variant="${args.variant}"
      size="${args.size}"
      ?disabled="${args.disabled}"
      ?loading="${args.loading}"
      type="${args.type}"
    >
      Button
    </rebel-button>
  `,
};

// Variants story
export const Variants: Story = {
  render: () => html`
    <div
      style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;"
    >
      <rebel-button variant="primary">Primary</rebel-button>
      <rebel-button variant="secondary">Secondary</rebel-button>
      <rebel-button variant="outline">Outline</rebel-button>
      <rebel-button variant="ghost">Ghost</rebel-button>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story:
          "All available button variants. Each variant has a distinct visual style while maintaining consistent behavior.",
      },
    },
  },
};

// Sizes story
export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center;">
      <rebel-button size="small">Small</rebel-button>
      <rebel-button size="medium">Medium</rebel-button>
      <rebel-button size="large">Large</rebel-button>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: "Button sizes from small to large. Medium is the default size.",
      },
    },
  },
};

// States story
export const States: Story = {
  render: () => html`
    <div
      style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;"
    >
      <rebel-button>Normal</rebel-button>
      <rebel-button loading>Loading</rebel-button>
      <rebel-button disabled>Disabled</rebel-button>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story:
          "Different button states: normal, loading (with spinner), and disabled.",
      },
    },
  },
};

// Interactive story
export const Interactive: Story = {
  render: () => html`
    <div
      style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;"
    >
      <rebel-button variant="primary" onclick="alert('Primary clicked!')">
        Click me
      </rebel-button>
      <rebel-button variant="secondary" onclick="alert('Secondary clicked!')">
        Click me too
      </rebel-button>
      <rebel-button variant="outline" onclick="alert('Outline clicked!')">
        And me
      </rebel-button>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story:
          "Interactive buttons with click handlers. Try clicking each button to see the different interactions.",
      },
    },
  },
};

// Form buttons story
export const FormButtons: Story = {
  render: () => html`
    <form
      style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;"
    >
      <rebel-button type="submit" variant="primary"> Submit Form </rebel-button>
      <rebel-button type="reset" variant="outline"> Reset Form </rebel-button>
      <rebel-button type="button" variant="ghost"> Cancel </rebel-button>
    </form>
  `,
  parameters: {
    docs: {
      description: {
        story:
          "Buttons with different HTML types for form handling: submit, reset, and button.",
      },
    },
  },
};

// With icons story
export const WithIcons: Story = {
  render: () => html`
    <div
      style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;"
    >
      <rebel-button variant="primary">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
        Add Item
      </rebel-button>
      <rebel-button variant="outline">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7,10 12,15 17,10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Download
      </rebel-button>
      <rebel-button variant="ghost" size="small">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v6m0 6v6" />
        </svg>
        Settings
      </rebel-button>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story:
          "Buttons with icons using SVG elements. Icons are placed before the text content using the slot system.",
      },
    },
  },
};
