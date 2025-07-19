import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";

const meta: Meta = {
  title: "Foundations/Getting Started",
  parameters: {
    docs: {
      description: {
        component: `
Some description
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Getting_started: Story = {
  render: () => html`
    <div style="padding: 2rem; max-width: 800px; margin: 0 auto;">
      <div style="text-align: center; margin-bottom: 3rem;">
        <h1 style="font-size: 3rem; margin-bottom: 1rem; color: #1f2937;">
          About the foundations
        </h1>
        <p style="font-size: 1.25rem; color: #6b7280; margin-bottom: 2rem;">
          Foundations are the basic rules that are necessary when creating a
          user interface, such as colors, typography, spacing, etc.
        </p>
      </div>
    </div>
  `,
};
