import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import style from "./rebel-popover.scss?inline";
import { TailwindElement } from "../../utils/tailwindElement";
import "../../styles/variables.css";

export interface RebelPopoverProps {
  open: boolean;
}

@customElement("rebel-popover")
export class RebelPopover extends TailwindElement(style) {
  @property({ type: Boolean, reflect: true })
  open: boolean = false;

  private handleFocusout = (event: FocusEvent) => {
    console.log("Focusout event:", event);
    if (!this.contains(event.relatedTarget as Node)) {
      this.open = false;
    }
  };

  private handleButtonClick = () => {
    console.log("Button clicked, current open state:", this.open);
    this.open = !this.open;
    console.log("New open state:", this.open);
  };

  private handleOutsideClick = (event: Event) => {
    if (!this.contains(event.target as Node)) {
      this.open = false;
    }
  };

  constructor() {
    super();
    this.addEventListener("focusout", this.handleFocusout);
  }

  get popoverEl() {
    return this.shadowRoot?.getElementById("popover-el") as HTMLElement;
  }

  get buttonEl() {
    return this.shadowRoot?.querySelector("rebel-button") as HTMLElement;
  }

  updated(changes: Map<string, any>) {
    if (changes.has("open")) {
      console.log("Open state changed to:", this.open);
      if (this.open) {
        this.popoverEl?.classList.add("popover-open");
        document.addEventListener("click", this.handleOutsideClick);
      } else {
        this.popoverEl?.classList.remove("popover-open");
        document.removeEventListener("click", this.handleOutsideClick);
      }
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("click", this.handleOutsideClick);
  }

  render() {
    return html`
      <rebel-button @click=${this.handleButtonClick}>
        <slot name="trigger-text"></slot>
      </rebel-button>
      <div id="popover-el" class="popover">
        <slot name="popover-content"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "rebel-popover": RebelPopover;
  }
}
