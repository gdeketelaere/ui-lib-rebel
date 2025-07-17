import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TW } from "../../shared/tailwindMixin";
const TwLitElement = TW(LitElement);
export interface RebelButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
}

@customElement("rebel-button")
export class RebelButton extends TwLitElement {
  @property({ type: String })
  variant: RebelButtonProps["variant"] = "primary";

  @property({ type: String })
  size: RebelButtonProps["size"] = "medium";

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Boolean })
  loading = false;

  @property({ type: String })
  type: RebelButtonProps["type"] = "button";

  static styles = css`
    :host {
      display: block;
    }

    /* Vous pouvez utiliser des classes Tailwind ici */
    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      border: 1px solid var(--color-border);
      border-radius: var(--_radius);
      font-family: inherit;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      text-decoration: none;
      position: relative;
      overflow: hidden;
    }

    /* Exemple avec des styles Tailwind-like */
    .button--primary {
      background-color: var(--color-primary);
      color: var(--color-primary-foreground);
    }

    .button--primary:hover:not(:disabled) {
      background-color: var(
        --bg-primary-600
      ); /* Utilise primary-600 du config */
      color: var(--color-primary-foreground);
    }

    .button--secondary {
      background-color: var(--color-secondary);
      color: var(--color-secondary-foreground);
    }

    .button--secondary:hover:not(:disabled) {
      background-color: var(--color-secondary);
      opacity: 0.9;
    }

    .button--outline {
      background-color: transparent;
      color: var(--color-primary);
      border: 1px solid var(--color-primary);
    }

    .button--outline:hover:not(:disabled) {
      background-color: var(--bg-primary-50); /* Utilise primary-50 du config */
      color: var(--bg-primary-900); /* Utilise primary-900 du config */
    }

    .button--ghost {
      background-color: transparent;
      color: var(--color-foreground);
    }

    .button--ghost:hover:not(:disabled) {
      background-color: var(
        --bg-primary-100
      ); /* Utilise primary-100 du config */
      color: var(--bg-primary-900); /* Utilise primary-900 du config */
    }

    .button:focus-visible {
      outline: 2px solid var(--color-ring);
      outline-offset: 2px;
    }

    .button:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }

    /* Sizes */
    .button--small {
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
      min-height: 2rem;
    }

    .button--medium {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      min-height: 2.5rem;
    }

    .button--large {
      padding: 1rem 2rem;
      font-size: 1.125rem;
      min-height: 3rem;
    }

    /* Loading state */
    .button--loading {
      pointer-events: none;
    }

    .spinner {
      width: 1em;
      height: 1em;
      border: 2px solid currentColor;
      border-bottom-color: transparent;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    .button--loading .spinner {
      opacity: 1;
    }
  `;

  render() {
    const buttonClasses = [
      "button inline-flex items-center justify-center gap-2 px-6 py-2 rounded-xl transition-all duration-200",
      `button--${this.variant}`,
      `button--${this.size}`,
      this.loading ? "button--loading" : "",
    ]
      .filter(Boolean)
      .join(" ");

    return html`
      <button
        class="${buttonClasses}"
        ?disabled="${this.disabled || this.loading}"
        type="${this.type}"
        aria-label="${this.loading ? "Chargement..." : ""}"
      >
        ${this.loading
          ? html`<span class="spinner" aria-hidden="true"></span>`
          : ""}
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "rebel-button": RebelButton;
  }
}
