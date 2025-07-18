import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import style from "./rebel-button.scss?inline";
import { TailwindElement } from "../../shared/tailwindMixin";

export interface RebelButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
}

@customElement("rebel-button")
export class RebelButton extends TailwindElement(style) {
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
