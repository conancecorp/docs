# Conance Documentation

Documentation officielle de Conance - Gestion de commissions pour cabinets de gestion de patrimoine.

## Développement local

### Prérequis

- Node.js 18+
- npm

### Installation

```bash
# Cloner le repository
git clone https://github.com/conance/docs.git
cd docs

# Installer les dépendances
npm install
```

### Lancer le serveur de développement

```bash
npm run docs:dev
```

Le site est accessible sur [http://localhost:5173](http://localhost:5173)

### Build de production

```bash
npm run docs:build
```

Les fichiers statiques sont générés dans `.vitepress/dist/`

### Prévisualiser le build

```bash
npm run docs:preview
```

## Structure du projet

```
docs/
├── .vitepress/
│   ├── config.ts          # Configuration VitePress
│   └── dist/              # Build de production (généré)
├── public/                # Assets statiques
│   ├── logo.svg
│   └── favicon.ico
├── guide/                 # Section Guide
├── features/              # Section Fonctionnalités
│   └── import/            # Sous-section Import
│   └── contracts/         # Sous-section Contrats
├── settings/              # Section Paramètres
├── company/               # Section Entreprise
├── faq/                   # Section FAQ
├── index.md               # Page d'accueil
├── package.json
└── README.md
```

## Contribuer

### Ajouter une page

1. Créez un fichier `.md` dans le dossier approprié
2. Ajoutez l'entrée dans la sidebar (`.vitepress/config.ts`)
3. Rédigez le contenu en Markdown

### Syntaxe VitePress

#### Callouts

```markdown
::: tip Conseil
Contenu du conseil
:::

::: warning Attention
Contenu de l'avertissement
:::

::: danger Danger
Contenu du danger
:::

::: info Information
Contenu de l'information
:::
```

#### Liens internes

```markdown
[Texte du lien](/chemin/vers/page)
[Texte du lien](/chemin/vers/page#ancre)
```

#### Tableaux

```markdown
| Colonne 1 | Colonne 2 |
|-----------|-----------|
| Cellule 1 | Cellule 2 |
```

### Convention de nommage

- Fichiers en kebab-case : `mon-fichier.md`
- Dossiers en kebab-case : `mon-dossier/`
- Utiliser `index.md` pour la page principale d'un dossier

## Déploiement

Le site est automatiquement déployé sur `docs.conance.io` lors d'un push sur la branche `main`.

## Ressources

- [Documentation VitePress](https://vitepress.dev/)
- [Markdown Guide](https://www.markdownguide.org/)

## Support

Pour toute question concernant la documentation :
- Email : [support@conance.io](mailto:support@conance.io)
