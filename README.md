# Conance Documentation

Documentation officielle de Conance - Pilotage des commissions pour cabinets de gestion de patrimoine.

## Développement local

### Prérequis

- Node.js 18+
- npm

### Installation

```bash
# Cloner le repository
git clone git@github.com:conancecorp/docs.git
cd docs

# Installer les dépendances
npm install
```

### Lancer le serveur de développement

```bash
npm run docs:dev
```

Le site est accessible sur `http://localhost:5173`

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
│   ├── config.ts          # Configuration VitePress (nav, sidebar)
│   ├── theme/             # Thème (couleurs Conance)
│   └── dist/              # Build de production (généré)
├── public/                # Assets statiques (logo, favicon, CNAME)
├── guide/                 # Démarrage : compte, entreprise, premiers pas
├── features/              # Fonctionnalités
│   ├── pilotage/          # Pilotage, commissions attendues, prévisionnel
│   ├── import/            # Import (upload, mapping, PDF, historique, annulation…)
│   └── contracts/         # Contrats et fusion
├── settings/              # Paramètres (compte, référentiels, IA, données)
├── company/               # Entreprise (membres, rôles, abonnement, crédits IA, multi-cabinets)
├── faq/                   # FAQ
├── index.md               # Page d'accueil
├── package.json
└── README.md
```

## Tenir la documentation à jour

La documentation décrit l'application telle qu'elle est en production. À chaque fonctionnalité livrée dans `frontend`/`backend` :

1. Repérer l'écran ou l'option concernés et la page de doc correspondante (une page par écran, section « Analyse », « Import », « Paramètres »…)
2. Vérifier les libellés **dans le code** (boutons, colonnes, options) plutôt que de mémoire
3. Mettre à jour la page, et la FAQ si la question est susceptible de revenir
4. Ajouter l'entrée dans la sidebar (`.vitepress/config.ts`) pour toute nouvelle page

Ne pas documenter les écrans réservés aux administrateurs Conance (Administration, Sandbox, gestion système des rôles et permissions).

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
