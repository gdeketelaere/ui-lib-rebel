import { addons } from "storybook/manager-api";
import { create } from "storybook/theming/create";

const theme = create({
  base: "light",
  brandTitle: "Rebel Design System",
  brandUrl: "https://github.com/gdeketelaere/ui-lib-rebel",
  brandImage: "./rebel.svg",
  brandTarget: "_self",
});

addons.setConfig({
  theme,
});
const style = document.createElement("style");
style.innerHTML = `
  .sidebar-header img,
  [data-item-id="storybook_internal"] img {
    max-width: 120px !important;
    max-height: 40px !important;
    width: auto !important;
    height: auto !important;
    object-fit: contain !important;
  }
  
`;
document.head.appendChild(style);
