# Import de données

L'import est au cœur de Conance. Cette fonctionnalité vous permet d'importer vos relevés de commissions depuis vos partenaires.

## Formats supportés

Conance supporte les formats de fichiers suivants :

| Format | Extensions | Description |
|--------|------------|-------------|
| CSV | `.csv` | Fichiers texte avec séparateur |
| Excel | `.xlsx`, `.xls` | Classeurs Microsoft Excel |

## Processus d'import

L'import se déroule en plusieurs étapes :

```
1. Upload du fichier
       ↓
2. Mapping des colonnes
       ↓
3. Pré-analyse et validation
       ↓
4. Import des données
```

### Étape 1 : Upload du fichier

Glissez-déposez votre fichier ou sélectionnez-le depuis votre ordinateur.

→ [Guide détaillé : Upload de fichier](/features/import/upload)

### Étape 2 : Mapping des colonnes

Associez les colonnes de votre fichier aux champs Conance.

→ [Guide détaillé : Mapping des colonnes](/features/import/mapping)

### Étape 3 : Pré-analyse

Vérifiez les données avant l'import et configurez les options.

→ [Guide détaillé : Pré-analyse](/features/import/pre-analysis)

### Étape 4 : Import

Lancez l'import et suivez la progression en temps réel.

## Fonctionnalités avancées

### Détection des doublons

Lors de l'import de commissions, Conance détecte automatiquement les numéros de contrat qui ressemblent à des contrats existants du même partenaire et vous permet de les associer pour éviter les doublons.

→ [En savoir plus : Détection des doublons](/features/import/smart-matching)

### Configurations sauvegardées

Sauvegardez vos configurations de mapping pour les réutiliser lors de vos prochains imports.

→ [En savoir plus : Configurations sauvegardées](/features/import/saved-configs)

### Historique des imports

Consultez l'historique de tous vos imports et leurs statistiques.

→ [En savoir plus : Historique des imports](/features/import/history)

## Types de données importables

Un import peut créer ou mettre à jour plusieurs types de données :

- **Commissions** - Montants, dates, natures d'opération
- **Contrats** - Numéros de contrat, associations
- **Conseillers** - Codes et noms
- **Clients** - Informations clients

## Bonnes pratiques

::: tip Conseil
Avant votre premier import depuis un nouveau partenaire, vérifiez que le partenaire et ses produits sont bien configurés dans Conance. Cela facilitera le mapping.
:::

::: warning Attention
Assurez-vous que votre fichier ne contient pas de lignes vides ou de données parasites qui pourraient perturber l'import.
:::
