import { adoptStyles, type LitElement, unsafeCSS } from "lit";
import style from "../styles/tailwind.global.css?inline";

declare global {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  export type LitMixin<T = unknown> = new (...args: any[]) => T & LitElement;
}

const tailwindStylesheet = unsafeCSS(style);

export const TW = <T extends LitMixin>(superClass: T): T =>
  class extends superClass {
    connectedCallback() {
      super.connectedCallback();
      // Ajouter les styles Tailwind sans remplacer les styles existants
      if (this.shadowRoot) {
        const existingStyles = Array.from(
          this.shadowRoot.adoptedStyleSheets || []
        );
        adoptStyles(this.shadowRoot, [tailwindStylesheet, ...existingStyles]);
      }
    }
  };
