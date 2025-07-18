import { LitElement, unsafeCSS } from "lit";
import style from "../styles/tailwind.global.css?inline";

const tailwindElement = unsafeCSS(style);

export const TailwindElement = (style: any) =>
  class extends LitElement {
    static styles = [tailwindElement, unsafeCSS(style)];
  };
