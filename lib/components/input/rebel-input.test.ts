// Test fonctionnel pour RebelInput avec vraie importation
import { RebelInput } from "./rebel-input";

describe("RebelInput Test", () => {
  let element: RebelInput;

  beforeEach(async () => {
    element = document.createElement("rebel-input") as RebelInput;
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
    expect(element.tagName.toLowerCase()).toBe("rebel-input");
    expect(element.shadowRoot).toBeDefined();
  });

  it("can set and get type property", async () => {
    element.type = "email";
    expect(element.type).toBe("email");
  });

  it("can set and get placeholder property", async () => {
    element.placeholder = "Enter your email";
    expect(element.placeholder).toBe("Enter your email");
  });

  it("can set and get value property", async () => {
    element.value = "test@example.com";
    expect(element.value).toBe("test@example.com");
  });

  it("can set and get disabled property", async () => {
    element.disabled = true;
    expect(element.disabled).toBe(true);
  });

  it("can set and get required property", async () => {
    element.required = true;
    expect(element.required).toBe(true);
  });

  it("can set and get readonly property", async () => {
    element.readonly = true;
    expect(element.readonly).toBe(true);
  });

  it("can set and get size property", async () => {
    element.size = "large";
    expect(element.size).toBe("large");
  });

  it("can set and get variant property", async () => {
    element.variant = "error";
    expect(element.variant).toBe("error");
  });

  it("can set and get label property", async () => {
    element.label = "Email Address";
    expect(element.label).toBe("Email Address");
  });

  it("can set and get helperText property", async () => {
    element.helperText = "We will never share your email";
    expect(element.helperText).toBe("We will never share your email");
  });

  it("can set and get errorText property", async () => {
    element.errorText = "Please enter a valid email";
    expect(element.errorText).toBe("Please enter a valid email");
  });

  it("can be created and attached to DOM", async () => {
    const newElement = document.createElement("rebel-input") as RebelInput;
    expect(newElement).toBeDefined();
    expect(newElement.tagName.toLowerCase()).toBe("rebel-input");
  });

  it("can be removed from DOM", async () => {
    const parent = element.parentNode;
    expect(parent).toBe(document.body);

    document.body.removeChild(element);
    expect(element.parentNode).toBeNull();
  });

  it("can set multiple properties", async () => {
    element.type = "password";
    element.placeholder = "Enter password";
    element.required = true;
    element.disabled = false;

    expect(element.type).toBe("password");
    expect(element.placeholder).toBe("Enter password");
    expect(element.required).toBe(true);
    expect(element.disabled).toBe(false);
  });
});
