# Rebel UI Components

A modern web components library based on Lit and Tailwind CSS for Quentin L.'s team.

## Installation

```bash
pnpm install
```

## Development

```bash
pnpm dev
```

## Build

```bash
pnpm build
```

## Tests

The library uses Jest for unit testing and accessibility testing with Axe.

The test suite includes:

- Unit tests for web components
- WCAG 2.1 compliance checks
- Color contrast validation
- Keyboard navigation testing
- Screen reader compatibility

```bash
# Run all tests (including accessibility)
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

## Storybook

Storybook provides an interactive documentation and development environment for the components.

```bash
# Start Storybook development server
pnpm storybook

# Build Storybook for production
pnpm build-storybook
```

## Design Tokens

The project uses Style Dictionary to generate CSS variables from design tokens.

```bash
# Generate CSS variables from tokens
pnpm codegen
```

This command:

- Processes design tokens from `tokens/tokens.json`
- Resolves all token references (e.g., `{core-font-family.body}`)
- Generates CSS variables in `lib/styles/variables.css`
- Creates TypeScript types in `lib/types/`
