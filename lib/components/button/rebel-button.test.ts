// Test fonctionnel pour RebelButton avec vraie importation
import { RebelButton } from "./rebel-button";

describe("RebelButton Test", () => {
  let element: RebelButton;

  beforeEach(async () => {
    element = document.createElement("rebel-button") as RebelButton;
    document.body.appendChild(element);
    await new Promise((resolve) => setTimeout(resolve, 0));
  });

  afterEach(() => {
    if (element.parentNode) {
      document.body.removeChild(element);
    }
  });

  it("renders with default properties", async () => {
    expect(element).toBeDefined();
    expect(element.tagName.toLowerCase()).toBe("rebel-button");
    expect(element.shadowRoot).toBeDefined();
  });

  it("can set and get variant property", async () => {
    element.variant = "secondary";
    expect(element.variant).toBe("secondary");
  });

  it("can set and get size property", async () => {
    element.size = "large";
    expect(element.size).toBe("large");
  });

  it("can set and get disabled property", async () => {
    element.disabled = true;
    expect(element.disabled).toBe(true);
  });

  it("can set and get loading property", async () => {
    element.loading = true;
    expect(element.loading).toBe(true);
  });

  it("can set and get type property", async () => {
    element.type = "submit";
    expect(element.type).toBe("submit");
  });

  it("can be created and attached to DOM", async () => {
    const newElement = document.createElement("rebel-button") as RebelButton;
    expect(newElement).toBeDefined();
    expect(newElement.tagName.toLowerCase()).toBe("rebel-button");
  });

  it("can be removed from DOM", async () => {
    const parent = element.parentNode;
    expect(parent).toBe(document.body);

    document.body.removeChild(element);
    expect(element.parentNode).toBeNull();
  });

  it("can set multiple properties", async () => {
    element.variant = "outline";
    element.size = "small";
    element.disabled = true;

    expect(element.variant).toBe("outline");
    expect(element.size).toBe("small");
    expect(element.disabled).toBe(true);
  });
});
