# RebelPopover

Un composant popover accessible et personnalisable qui s'ouvre au clic et se ferme automatiquement lors d'un clic extérieur.

## Utilisation

```html
<rebel-popover>
  <span slot="trigger-text">Cliquez pour ouvrir</span>
  <div slot="popover-content">
    <h3>Contenu du popover</h3>
    <p>Votre contenu ici...</p>
  </div>
</rebel-popover>
```

## Propriétés

| Propriété | Type      | Défaut  | Description                 |
| --------- | --------- | ------- | --------------------------- |
| `open`    | `boolean` | `false` | État d'ouverture du popover |

## Slots

| Nom               | Description                                     |
| ----------------- | ----------------------------------------------- |
| `trigger-text`    | Le texte affiché sur le bouton de déclenchement |
| `popover-content` | Le contenu affiché dans le popover              |

## Événements

| Événement  | Description                         |
| ---------- | ----------------------------------- |
| `focusout` | Déclenché lors de la perte de focus |

## Accessibilité

- ✅ Support du clavier (Tab, Escape)
- ✅ Gestion automatique du focus
- ✅ Fermeture automatique lors d'un clic extérieur
- ✅ ARIA attributes appropriés
- ✅ Support des lecteurs d'écran

## Exemples

### Popover simple

```html
<rebel-popover>
  <span slot="trigger-text">Ouvrir</span>
  <div slot="popover-content">
    <p>Contenu simple</p>
  </div>
</rebel-popover>
```

### Popover avec formulaire

```html
<rebel-popover>
  <span slot="trigger-text">Formulaire</span>
  <div slot="popover-content">
    <rebel-input type="text" label="Nom"></rebel-input>
    <rebel-input type="email" label="Email"></rebel-input>
    <rebel-button variant="primary">Envoyer</rebel-button>
  </div>
</rebel-popover>
```

### Popover avec menu

```html
<rebel-popover>
  <span slot="trigger-text">Menu</span>
  <div slot="popover-content">
    <ul>
      <li><a href="#">Éditer</a></li>
      <li><a href="#">Copier</a></li>
      <li><a href="#">Supprimer</a></li>
    </ul>
  </div>
</rebel-popover>
```

## CSS Custom Properties

Le composant utilise les variables CSS suivantes :

```css
:root {
  --popover-background: white;
  --popover-border: #e5e7eb;
  --popover-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --popover-border-radius: 0.5rem;
  --popover-padding: 1rem;
  --popover-z-index: 1000;
}
```

## Comportement

1. **Ouverture** : Clic sur le bouton de déclenchement
2. **Fermeture** :
   - Clic sur le bouton de déclenchement
   - Clic en dehors du popover
   - Perte de focus
   - Touche Escape
3. **Positionnement** : Automatique en bas du bouton
4. **Animations** : Transitions fluides d'ouverture/fermeture
