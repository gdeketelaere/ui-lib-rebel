# Rebel Button Component

A customizable button component built with Lit and Tailwind CSS, designed for modern web applications.

## Overview

The `rebel-button` component provides a flexible, accessible button with multiple variants, sizes, and states. It's built using Lit framework and integrates seamlessly with Tailwind CSS for styling.

## Features

- **Multiple variants**: Primary, secondary, outline, and ghost
- **Three sizes**: Small, medium, and large
- **Loading state**: Built-in loading spinner
- **Disabled state**: Proper accessibility handling
- **Type support**: Button, submit, and reset types
- **Accessibility**: ARIA labels and keyboard navigation support

## Usage

### Basic Usage

```html
<rebel-button>Click me</rebel-button>
```

### With Variants

```html
<rebel-button variant="primary">Primary Button</rebel-button>
<rebel-button variant="secondary">Secondary Button</rebel-button>
<rebel-button variant="outline">Outline Button</rebel-button>
<rebel-button variant="ghost">Ghost Button</rebel-button>
```

### With Sizes

```html
<rebel-button size="small">Small Button</rebel-button>
<rebel-button size="medium">Medium Button</rebel-button>
<rebel-button size="large">Large Button</rebel-button>
```

### With Loading State

```html
<rebel-button loading>Loading...</rebel-button>
```

### With Disabled State

```html
<rebel-button disabled>Disabled Button</rebel-button>
```

### With Button Type

```html
<rebel-button type="submit">Submit Form</rebel-button>
<rebel-button type="reset">Reset Form</rebel-button>
```

## Props

| Prop       | Type                                               | Default     | Description                            |
| ---------- | -------------------------------------------------- | ----------- | -------------------------------------- |
| `variant`  | `"primary" \| "secondary" \| "outline" \| "ghost"` | `"primary"` | The visual style variant of the button |
| `size`     | `"small" \| "medium" \| "large"`                   | `"medium"`  | The size of the button                 |
| `disabled` | `boolean`                                          | `false`     | Whether the button is disabled         |
| `loading`  | `boolean`                                          | `false`     | Whether the button is in loading state |
| `type`     | `"button" \| "submit" \| "reset"`                  | `"button"`  | The HTML button type                   |

## Variants

### Primary

- **Default variant**
- Uses primary brand colors
- Solid background with contrasting text
- Hover effect with darker background

### Secondary

- Alternative to primary
- Uses secondary brand colors
- Good for less prominent actions

### Outline

- Transparent background with border
- Uses primary color for border and text
- Hover effect adds subtle background

### Ghost

- Minimal styling
- Transparent background, no border
- Subtle hover effect
- Good for toolbar actions

## Sizes

### Small

- Padding: `0.5rem 1rem`
- Font size: `0.875rem`
- Min height: `2rem`

### Medium (Default)

- Padding: `0.75rem 1.5rem`
- Font size: `1rem`
- Min height: `2.5rem`

### Large

- Padding: `1rem 2rem`
- Font size: `1.125rem`
- Min height: `3rem`

## States

### Loading State

When `loading` is `true`:

- Shows a spinning animation
- Disables pointer events
- Adds "Chargement..." aria-label
- Maintains button structure

### Disabled State

When `disabled` is `true`:

- Reduces opacity to 60%
- Changes cursor to not-allowed
- Prevents all interactions
- Maintains accessibility

## Accessibility

The component includes several accessibility features:

- **ARIA labels**: Loading state includes descriptive aria-label
- **Focus management**: Visible focus outline with custom styling
- **Keyboard navigation**: Full keyboard support
- **Screen reader support**: Proper semantic structure

## CSS Custom Properties

The component uses CSS custom properties for theming:

- `--color-primary`: Primary button background
- `--color-primary-foreground`: Primary button text color
- `--color-secondary`: Secondary button background
- `--color-secondary-foreground`: Secondary button text color
- `--color-foreground`: Default text color
- `--color-ring`: Focus ring color
- `--bg-primary-50`, `--bg-primary-100`, `--bg-primary-600`, `--bg-primary-900`: Various primary color shades

## Examples

### Complete Example

```html
<!DOCTYPE html>
<html>
  <head>
    <script type="module" src="path/to/rebel-button.js"></script>
  </head>
  <body>
    <!-- Basic button -->
    <rebel-button>Default Button</rebel-button>

    <!-- Form submission -->
    <form>
      <rebel-button type="submit" variant="primary" size="large">
        Submit Form
      </rebel-button>
    </form>

    <!-- Loading state -->
    <rebel-button loading variant="secondary"> Processing... </rebel-button>

    <!-- Disabled state -->
    <rebel-button disabled variant="outline"> Unavailable </rebel-button>

    <!-- Icon button (using slot) -->
    <rebel-button variant="ghost" size="small">
      <svg>...</svg>
      Settings
    </rebel-button>
  </body>
</html>
```

### React/JSX Usage

```jsx
import "@your-org/rebel-button";

function MyComponent() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <rebel-button
      variant="primary"
      size="large"
      loading={isLoading}
      onClick={() => setIsLoading(true)}
    >
      {isLoading ? "Processing..." : "Click Me"}
    </rebel-button>
  );
}
```

## Styling

The component uses Tailwind CSS classes and custom SCSS for styling. All styles are scoped to the component using Shadow DOM.

### Custom Styling

You can customize the appearance by overriding CSS custom properties:

```css
:root {
  --color-primary: #3b82f6;
  --color-primary-foreground: #ffffff;
  --color-secondary: #6b7280;
  --color-secondary-foreground: #ffffff;
}
```

## Browser Support

- Modern browsers with Shadow DOM support
- IE11+ (with polyfills)
- Mobile browsers

## Dependencies

- Lit (^2.0.0)
- Tailwind CSS (^3.0.0)

## License

[Your License Here]
