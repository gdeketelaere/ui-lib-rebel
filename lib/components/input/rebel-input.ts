import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TW } from "../../shared/tailwindMixin";
const TwLitElement = TW(LitElement);
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
export class RebelInput extends TwLitElement {
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

  @property({ type: String })
  helperText = "";

  @property({ type: String })
  errorText = "";

  private inputElement?: HTMLInputElement;

  static styles = css`
    :host {
      display: block;
    }

    .input-container {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .input-label {
      font-size: 0.875rem;
      font-weight: 500;
      color: #374151;
      margin-bottom: 0.25rem;
    }

    .input-wrapper {
      position: relative;
      display: flex;
      align-items: center;
    }

    .input {
      width: 100%;
      border: 1px solid #d1d5db;
      border-radius: 0.375rem;
      font-family: inherit;
      font-size: inherit;
      background-color: white;
      transition: all 0.2s ease-in-out;
      box-sizing: border-box;
    }

    .input:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }

    .input:disabled {
      background-color: #f9fafb;
      color: #6b7280;
      cursor: not-allowed;
    }

    .input:read-only {
      background-color: #f9fafb;
    }

    /* Variants */
    .input--default {
      border-color: #d1d5db;
    }

    .input--error {
      border-color: #ef4444;
    }

    .input--error:focus {
      border-color: #ef4444;
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }

    .input--success {
      border-color: #10b981;
    }

    .input--success:focus {
      border-color: #10b981;
      box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
    }

    /* Sizes */
    .input--small {
      padding: 0.5rem 0.75rem;
      font-size: 0.875rem;
      min-height: 2rem;
    }

    .input--medium {
      padding: 0.75rem 1rem;
      font-size: 1rem;
      min-height: 2.5rem;
    }

    .input--large {
      padding: 1rem 1.25rem;
      font-size: 1.125rem;
      min-height: 3rem;
    }

    .helper-text {
      font-size: 0.75rem;
      color: #6b7280;
      margin-top: 0.25rem;
    }

    .error-text {
      font-size: 0.75rem;
      color: #ef4444;
      margin-top: 0.25rem;
    }

    .input--error + .helper-text {
      color: #ef4444;
    }
  `;

  firstUpdated() {
    this.inputElement = this.shadowRoot?.querySelector(
      "input"
    ) as HTMLInputElement;
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

        ${this.errorText
          ? html`
              <div class="error-text" id="helper-text">${this.errorText}</div>
            `
          : this.helperText
          ? html`
              <div class="helper-text" id="helper-text">${this.helperText}</div>
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
