import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import style from "./rebel-input.scss?inline";
import { TailwindElement } from "../../utils/tailwindElement";
import "../../styles/variables.css";
export interface RebelInputProps {
  type?: "text" | "email" | "password" | "number" | "tel" | "url" | "search";
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  required?: boolean;
  readonly?: boolean;
  size?: "small" | "medium" | "large";
  variant?: "default" | "error" | "success";
  label?: string;
  helperText?: string;
  errorText?: string;
}

@customElement("rebel-input")
export class RebelInput extends TailwindElement(style) {
  @property({ type: String })
  type: RebelInputProps["type"] = "text";

  @property({ type: String })
  placeholder = "";

  @property({ type: String })
  value = "";

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Boolean })
  required = false;

  @property({ type: Boolean })
  readonly = false;

  @property({ type: String })
  size: RebelInputProps["size"] = "medium";

  @property({ type: String })
  variant: RebelInputProps["variant"] = "default";

  @property({ type: String })
  label = "";

  @property({ type: String, attribute: "helper-text" })
  helperText = "";

  @property({ type: String, attribute: "error-text" })
  errorText = "";

  firstUpdated() {
    console.log("RebelInput firstUpdated:");
  }

  private handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    this.value = target.value;
    this.dispatchEvent(
      new CustomEvent("input", {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      })
    );
  }

  private handleChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this.value = target.value;
    this.dispatchEvent(
      new CustomEvent("change", {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    const inputClasses = [
      "input",
      `input--${this.size}`,
      `input--${this.variant}`,
    ].join(" ");

    const hasError = this.variant === "error" || this.errorText;

    return html`
      <div class="input-container">
        ${this.label
          ? html`
              <label class="input-label" for="input">
                ${this.label}
                ${this.required
                  ? html`<span style="color: #ef4444;">*</span>`
                  : ""}
              </label>
            `
          : ""}

        <div class="input-wrapper">
          <input
            id="input"
            class="${inputClasses}"
            type="${this.type}"
            placeholder="${this.placeholder}"
            .value="${this.value}"
            ?disabled="${this.disabled}"
            ?required="${this.required}"
            ?readonly="${this.readonly}"
            @input="${this.handleInput}"
            @change="${this.handleChange}"
            aria-describedby="${this.helperText || this.errorText
              ? "helper-text"
              : ""}"
            aria-invalid="${hasError ? "true" : "false"}"
          />
        </div>

        ${this.errorText && this.errorText.trim() !== ""
          ? html`
              <div class="error-text" id="helper-text">${this.errorText}</div>
            `
          : this.helperText && this.helperText.trim() !== ""
            ? html`
                <div class="helper-text" id="helper-text">
                  ${this.helperText}
                </div>
              `
            : ""}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "rebel-input": RebelInput;
  }
}
