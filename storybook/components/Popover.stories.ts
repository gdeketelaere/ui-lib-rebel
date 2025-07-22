import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "../../ui-lib/components/popover/rebel-popover";

const meta: Meta = {
  title: "Atomic Components/RebelPopover",
  component: "rebel-popover",
  parameters: {
    docs: {
      description: {
        component:
          "Un composant popover accessible et personnalisable qui s'ouvre au clic et se ferme automatiquement lors d'un clic extérieur.",
      },
    },
    // Configuration spécifique pour les popovers
    viewport: {
      defaultViewport: "desktop",
      viewports: {
        desktop: {
          name: "Desktop",
          styles: {
            width: "1200px",
            height: "800px",
          },
        },
      },
    },
    layout: "centered",
    backgrounds: {
      default: "light",
    },
  },
  argTypes: {
    open: {
      control: "boolean",
      description: "État d'ouverture du popover",
    },
  },
  tags: ["autodocs"],
  // Decorator spécifique pour les popovers avec plus d'espace
  decorators: [
    story => html`
      <div
        style="min-height: 400px; padding: 2rem; display: flex; align-items: center; justify-content: center;"
      >
        ${story()}
      </div>
    `,
  ],
};

export default meta;
type Story = StoryObj;

// Story de base
export const Default: Story = {
  args: {
    open: false,
  },
  render: args => html`
    <rebel-popover ?open=${args.open}>
      <span slot="trigger-text">Cliquez pour ouvrir</span>
      <div slot="popover-content">
        <h3 class="font-bold mb-2">Contenu du popover</h3>
        <p class="mb-3">Ceci est un exemple de contenu dans le popover.</p>
        <rebel-button size="small" variant="primary">Action</rebel-button>
      </div>
    </rebel-popover>
  `,
};

// Story avec formulaire
export const WithForm: Story = {
  args: {
    open: false,
  },
  render: args => html`
    <rebel-popover ?open=${args.open}>
      <span slot="trigger-text">Ouvrir formulaire</span>
      <div slot="popover-content">
        <h3 class="font-bold mb-3">Formulaire de contact</h3>
        <div class="space-y-3">
          <rebel-input type="text" placeholder="Nom" label="Nom"></rebel-input>
          <rebel-input
            type="email"
            placeholder="Email"
            label="Email"
          ></rebel-input>
          <rebel-input
            type="text"
            placeholder="Message"
            label="Message"
          ></rebel-input>
          <div class="flex gap-2 mt-2">
            <rebel-button size="small" variant="primary">Envoyer</rebel-button>
            <rebel-button size="small" variant="outline">Annuler</rebel-button>
          </div>
        </div>
      </div>
    </rebel-popover>
  `,
};
