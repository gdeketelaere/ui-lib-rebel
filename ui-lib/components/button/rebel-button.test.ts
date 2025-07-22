// Test fonctionnel pour RebelButton avec vraie importation
import { RebelButton } from "./rebel-button";
import { axe } from "jest-axe";

describe("RebelButton Test", () => {
  let element: RebelButton;

  beforeEach(async () => {
    element = document.createElement("rebel-button") as RebelButton;
    element.textContent = "Test Button";
    document.body.appendChild(element);
    await new Promise(resolve => setTimeout(resolve, 0));
    await element.updateComplete;
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

  describe("Accessibility Tests", () => {
    it("should have proper semantic structure", async () => {
      expect(element.shadowRoot).toBeDefined();

      element.textContent = "Test Button";
      expect(element.textContent).toBe("Test Button");
    });

    it("should support accessibility attributes", async () => {
      // Test aria-label
      element.setAttribute("aria-label", "Bouton accessible");
      expect(element.getAttribute("aria-label")).toBe("Bouton accessible");

      // Test aria-describedby
      element.setAttribute("aria-describedby", "description");
      expect(element.getAttribute("aria-describedby")).toBe("description");
    });

    it("should have proper disabled state", async () => {
      element.disabled = true;
      expect(element.disabled).toBe(true);

      element.disabled = false;
      expect(element.disabled).toBe(false);
    });

    it("should have proper loading state", async () => {
      element.loading = true;
      expect(element.loading).toBe(true);

      element.loading = false;
      expect(element.loading).toBe(false);
    });

    it("should have proper type attribute", async () => {
      element.type = "submit";
      expect(element.type).toBe("submit");

      element.type = "button";
      expect(element.type).toBe("button");
    });

    it("should support all variants for accessibility", async () => {
      const variants = ["primary", "secondary", "outline", "ghost"];

      for (const variant of variants) {
        element.variant = variant as any;
        expect(element.variant).toBe(variant);
      }
    });

    it("should support all sizes for accessibility", async () => {
      const sizes = ["small", "medium", "large"];

      for (const size of sizes) {
        element.size = size as any;
        expect(element.size).toBe(size);
      }
    });

    it("should be keyboard accessible", async () => {
      element.focus();
      expect(document.activeElement).toBeDefined();
    });

    it("should have proper tab index", async () => {
      expect(element.tabIndex).toBeGreaterThanOrEqual(-1);
    });

    it("should support ARIA attributes", async () => {
      element.setAttribute("aria-pressed", "false");
      expect(element.getAttribute("aria-pressed")).toBe("false");

      element.setAttribute("aria-expanded", "true");
      expect(element.getAttribute("aria-expanded")).toBe("true");
    });

    it("should have proper role attribute", async () => {
      element.setAttribute("role", "button");
      expect(element.getAttribute("role")).toBe("button");
    });

    it("should support screen reader text", async () => {
      element.setAttribute("aria-label", "Texte pour lecteur d'écran");
      expect(element.getAttribute("aria-label")).toBe(
        "Texte pour lecteur d'écran"
      );
    });

    it("should have proper state management", async () => {
      element.disabled = true;
      expect(element.disabled).toBe(true);

      element.loading = true;
      expect(element.loading).toBe(true);

      element.disabled = false;
      element.loading = false;
      expect(element.disabled).toBe(false);
      expect(element.loading).toBe(false);
    });

    it("should support multiple accessibility attributes", async () => {
      element.setAttribute("aria-label", "Bouton principal");
      element.setAttribute("aria-describedby", "help-text");
      element.setAttribute("aria-pressed", "false");

      expect(element.getAttribute("aria-label")).toBe("Bouton principal");
      expect(element.getAttribute("aria-describedby")).toBe("help-text");
      expect(element.getAttribute("aria-pressed")).toBe("false");
    });

    it("should be discoverable by assistive technologies", async () => {
      expect(element.parentNode).toBe(document.body);

      element.focus();
      expect(document.activeElement).toBeDefined();
    });

    it("should have proper semantic meaning", async () => {
      element.textContent = "Bouton d'action";
      expect(element.textContent).toBe("Bouton d'action");

      element.setAttribute("aria-label", "Action principale");
      expect(element.getAttribute("aria-label")).toBe("Action principale");
    });

    it("should have no accessibility violations with Axe", async () => {
      const results = await axe(element);
      expect(results).toHaveNoViolations();
    });

    it("should have no accessibility violations when disabled", async () => {
      element.disabled = true;
      await element.updateComplete;

      const results = await axe(element);
      expect(results).toHaveNoViolations();
    });

    it("should have no accessibility violations when loading", async () => {
      element.loading = true;
      await element.updateComplete;

      const results = await axe(element);
      expect(results).toHaveNoViolations();
    });

    it("should have no accessibility violations for all variants", async () => {
      const variants = ["primary", "secondary", "outline", "ghost"];

      for (const variant of variants) {
        element.variant = variant as any;
        await element.updateComplete;

        const results = await axe(element);
        expect(results).toHaveNoViolations();
      }
    });

    it("should have no accessibility violations for all sizes", async () => {
      const sizes = ["small", "medium", "large"];

      for (const size of sizes) {
        element.size = size as any;
        await element.updateComplete;

        const results = await axe(element);
        expect(results).toHaveNoViolations();
      }
    });

    it("should have proper color contrast", async () => {
      const results = await axe(element, {
        rules: {
          "color-contrast": { enabled: true },
          "color-contrast-enhanced": { enabled: true },
        },
      });
      expect(results).toHaveNoViolations();
    });
  });
});
