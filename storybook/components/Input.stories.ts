import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";

// Import the component
import "../../lib/components/input/rebel-input";

const meta: Meta = {
  title: "Atomic Components/Input",
  component: "rebel-input",
  parameters: {
    docs: {
      description: {
        component:
          "A flexible input component with multiple types, sizes, and states. Built with Lit and Tailwind CSS for modern web applications.",
      },
    },
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "number", "tel", "url", "search"],
      description: "The HTML input type",
    },
    placeholder: {
      control: { type: "text" },
      description: "Placeholder text for the input",
    },
    value: {
      control: { type: "text" },
      description: "The current value of the input",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the input is disabled",
    },
    required: {
      control: { type: "boolean" },
      description: "Whether the input is required",
    },
    readonly: {
      control: { type: "boolean" },
      description: "Whether the input is readonly",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "The size of the input",
    },
    variant: {
      control: { type: "select" },
      options: ["default", "error", "success"],
      description: "The visual variant of the input",
    },
    label: {
      control: { type: "text" },
      description: "Label text for the input",
    },
    helperText: {
      control: { type: "text" },
      description: "Helper text below the input",
    },
    errorText: {
      control: { type: "text" },
      description: "Error text below the input",
    },
  },
};

export default meta;
type Story = StoryObj;

// Default story
export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Enter your text...",
    value: "",
    disabled: false,
    required: false,
    readonly: false,
    size: "medium",
    variant: "default",
    label: "",
    helperText: "",
    errorText: "",
  },
  render: args => html`
    <rebel-input
      type="${args.type}"
      placeholder="${args.placeholder}"
      value="${args.value}"
      ?disabled="${args.disabled}"
      ?required="${args.required}"
      ?readonly="${args.readonly}"
      size="${args.size}"
      variant="${args.variant}"
      label="${args.label}"
      helper-text="${args.helperText}"
      error-text="${args.errorText}"
    ></rebel-input>
  `,
};

// Input types story
export const InputTypes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <rebel-input
        type="text"
        placeholder="Text input"
        label="Text"
      ></rebel-input>
      <rebel-input
        type="email"
        placeholder="email@example.com"
        label="Email"
      ></rebel-input>
      <rebel-input
        type="password"
        placeholder="Enter password"
        label="Password"
      ></rebel-input>
      <rebel-input
        type="number"
        placeholder="Enter number"
        label="Number"
      ></rebel-input>
      <rebel-input
        type="tel"
        placeholder="+1 (555) 123-4567"
        label="Phone"
      ></rebel-input>
      <rebel-input
        type="url"
        placeholder="https://example.com"
        label="URL"
      ></rebel-input>
      <rebel-input
        type="search"
        placeholder="Search..."
        label="Search"
      ></rebel-input>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story:
          "All available input types. Each type provides appropriate validation and mobile keyboard layouts.",
      },
    },
  },
};

// Sizes story
export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <rebel-input
        size="small"
        placeholder="Small input"
        label="Small"
      ></rebel-input>
      <rebel-input
        size="medium"
        placeholder="Medium input"
        label="Medium"
      ></rebel-input>
      <rebel-input
        size="large"
        placeholder="Large input"
        label="Large"
      ></rebel-input>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: "Input sizes from small to large. Medium is the default size.",
      },
    },
  },
};

// States story
export const States: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <rebel-input placeholder="Normal input" label="Normal"></rebel-input>
      <rebel-input
        disabled
        placeholder="Disabled input"
        label="Disabled"
      ></rebel-input>
      <rebel-input
        readonly
        value="Read-only value"
        label="Read-only"
      ></rebel-input>
      <rebel-input
        required
        placeholder="Required input"
        label="Required"
      ></rebel-input>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story:
          "Different input states: normal, disabled, read-only, and required.",
      },
    },
  },
};

// Variants story
export const Variants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <rebel-input
        placeholder="Default input"
        label="Default"
        variant="default"
      ></rebel-input>
      <rebel-input
        placeholder="Error input"
        label="Error"
        variant="error"
        error-text="This field is required"
      ></rebel-input>
      <rebel-input
        placeholder="Success input"
        label="Success"
        variant="success"
        value="Valid input"
        helper-text="Input is valid"
      ></rebel-input>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story:
          "Input variants: default, error (with red styling), and success (with green styling).",
      },
    },
  },
};

// With labels and helper text story
export const WithLabelsAndHelperText: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <rebel-input
        label="Email Address"
        type="email"
        placeholder="Enter your email"
        helper-text="We'll never share your email with anyone else."
        required
      ></rebel-input>

      <rebel-input
        label="Password"
        type="password"
        placeholder="Enter your password"
        helper-text="Must be at least 8 characters long"
        required
      ></rebel-input>

      <rebel-input
        label="Username"
        placeholder="Choose a username"
        error-text="Username is already taken"
        variant="error"
      ></rebel-input>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story:
          "Inputs with labels, helper text, and error messages. Labels can be required and show asterisks.",
      },
    },
  },
};

// Interactive story
export const Interactive: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <rebel-input
        label="Interactive Input"
        placeholder="Type something..."
        oninput="console.log('Input changed:', event.detail.value)"
        onchange="console.log('Input changed (on change):', event.detail.value)"
      ></rebel-input>

      <div style="margin-top: 1rem;">
        <p>Check the browser console to see input events</p>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story:
          "Interactive input with event handlers. Try typing in the input and check the browser console for events.",
      },
    },
  },
};

// Form example story
export const FormExample: Story = {
  render: () => html`
    <form
      style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;"
    >
      <h3 style="margin: 0 0 1rem 0;">Contact Form</h3>

      <rebel-input
        label="Full Name"
        placeholder="Enter your full name"
        required
      ></rebel-input>

      <rebel-input
        label="Email"
        type="email"
        placeholder="Enter your email"
        required
      ></rebel-input>

      <rebel-input
        label="Phone Number"
        type="tel"
        placeholder="Enter your phone number"
      ></rebel-input>

      <rebel-input
        label="Message"
        placeholder="Enter your message"
        helper-text="Tell us about your inquiry"
      ></rebel-input>

      <rebel-button type="submit" variant="primary" style="margin-top: 1rem;">
        Submit Form
      </rebel-button>
    </form>
  `,
  parameters: {
    docs: {
      description: {
        story:
          "A complete form example showing how inputs work together with buttons and form validation.",
      },
    },
  },
};
