import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";

const meta: Meta = {
  title: "Welcome",
  parameters: {
    previewTabs: {
      canvas: { hidden: true },
    },
    docs: {
      description: {
        component: `
# Rebel Design System

Welcome to the Rebel Design System documentation. This is a comprehensive collection of reusable components, patterns, and guidelines for building consistent and accessible user interfaces.

## What is Rebel Design System?

Rebel Design System is a collection of web components built with modern web standards. Our components are:



*Built with ❤️ by the Rebel team*
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Welcome: Story = {
  render: () => html`
    <div style="padding: 2rem; max-width: 800px; margin: 0 auto;">
      <div style="text-align: center; margin-bottom: 3rem;">
        <h1 style="font-size: 3rem; margin-bottom: 1rem; color: #1f2937;">
          Rebel Design System
        </h1>
        <p style="font-size: 1.25rem; color: #6b7280; margin-bottom: 2rem;">
          Welcome to the Rebel Design System documentation
        </p>
        <div
          style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;"
        >
          <a
            href="/?path=/story/components-button--variants"
            style="padding: 0.75rem 1.5rem; background: #3b82f6; color: white; text-decoration: none; border-radius: 0.5rem; transition: background-color 0.2s;"
          >
            View Components
          </a>
          <a
            href="https://github.com/gdeketelaere/ui-lib-rebel"
            style="padding: 0.75rem 1.5rem; background: #6b7280; color: white; text-decoration: none; border-radius: 0.5rem; transition: background-color 0.2s;"
          >
            GitHub
          </a>
        </div>
      </div>

      <div
        style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-bottom: 3rem;"
      >
        <div
          style="background: white; padding: 2rem; border-radius: 1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);"
        >
          <h3 style="margin-bottom: 1rem; color: #1f2937;">
            🎨 Design Principles
          </h3>
          <ul style="list-style: none; padding: 0; margin: 0;">
            <li style="margin-bottom: 0.5rem;">
              ✅ Consistency across all components
            </li>
            <li style="margin-bottom: 0.5rem;">🎯 Simplicity and clarity</li>
            <li style="margin-bottom: 0.5rem;">♿ Accessibility first</li>
            <li style="margin-bottom: 0.5rem;">⚡ Performance optimized</li>
          </ul>
        </div>

        <div
          style="background: white; padding: 2rem; border-radius: 1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);"
        >
          <h3 style="margin-bottom: 1rem; color: #1f2937;">
            🧩 Component Categories
          </h3>
          <ul style="list-style: none; padding: 0; margin: 0;">
            <li style="margin-bottom: 0.5rem;">
              📝 Form Components (Button, Input)
            </li>
            <li style="margin-bottom: 0.5rem;">
              📐 Templates and Organisms Components (Coming soon)
            </li>
            <li style="margin-bottom: 0.5rem;">😎 And many more...</li>
          </ul>
        </div>
      </div>

      <div
        style="background: white; padding: 2rem; border-radius: 1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);"
      >
        <h3 style="margin-bottom: 1rem; color: #1f2937;">🚀 Quick Start</h3>
        <div
          style="background: #f3f4f6; padding: 1rem; border-radius: 0.5rem; font-family: monospace; font-size: 0.875rem;"
        >
          <div style="margin-bottom: 0.5rem;"># Install the package</div>
          <div style="margin-bottom: 0.5rem;">
            npm install @ui-rebel-ds/rebel
          </div>
          <div style="margin-bottom: 0.5rem;"></div>
          <div style="margin-bottom: 0.5rem;"># Import components</div>
          <div style="margin-bottom: 0.5rem;">
            import '@ui-rebel-ds/rebel/button';
          </div>
          <div style="margin-bottom: 0.5rem;">
            import '@ui-rebel-ds/rebel/input';
          </div>
          <div style="margin-bottom: 0.5rem;"></div>
          <div style="margin-bottom: 0.5rem;"># Use in your HTML</div>
          <div style="margin-bottom: 0.5rem;">
            &lt;rebel-button variant="primary"&gt;Click me&lt;/rebel-button&gt;
          </div>
        </div>
      </div>
    </div>
  `,
};
