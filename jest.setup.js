require("@testing-library/jest-dom");
require("jest-axe/extend-expect");

const { createCanvas } = require("canvas");
global.HTMLCanvasElement.prototype.getContext = function (type) {
  const canvas = createCanvas(100, 100);
  return canvas.getContext(type);
};

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

global.customElements = {
  define: jest.fn(),
  get: jest.fn(),
  whenDefined: jest.fn(),
};
