# UI Lib Rebel

Une librairie de composants UI basée sur [Lit](https://lit.dev/) avec support de Tailwind CSS.

## 🚀 Installation

```bash
pnpm install
```

## 🛠️ Développement

```bash
# Démarrer le serveur de développement
pnpm dev

# Construire le projet
pnpm build
```

## 📦 Utilisation

Les composants sont disponibles dans `src/components/` et peuvent être utilisés dans vos projets web.

### Exemple

```html
<script type="module" src="/src/components/button/rebel-button.ts"></script>
<rebel-button>Cliquez-moi</rebel-button>
```

## 🎨 Technologies

- **Lit** - Framework pour composants web
- **Tailwind CSS** - Framework CSS utilitaire
- **Vite** - Outil de build et serveur de développement
- **TypeScript** - Support TypeScript complet

## 📁 Structure

```
src/
├── components/     # Composants UI
├── index.ts       # Exports principaux
└── test/          # Tests
```

## 🧪 Tests

```bash
pnpm test
```
