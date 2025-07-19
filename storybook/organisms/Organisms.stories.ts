import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";

const meta: Meta = {
  title: "Organisms/About",
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

export const About: Story = {
  render: () => html`
    <div style="padding: 2rem; max-width: 800px; margin: 0 auto;">
      <div style="text-align: center; margin-bottom: 3rem;">
        <h1 style="font-size: 3rem; margin-bottom: 1rem; color: #1f2937;">
          About Organisms
        </h1>
        <p style="font-size: 1.25rem; color: #6b7280; margin-bottom: 2rem;">
          Lorem ipsum
        </p>

        <div style="margin: 2rem 0;">
          <img
            src="/atomic-design.webp"
            alt="Atomic Design Methodology"
            style="max-width: 100%; height: auto; border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);"
          />
        </div>
      </div>
    </div>
  `,
};
