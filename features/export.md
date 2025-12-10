# Export de données

Exportez vos données depuis Conance pour les analyser ou les partager.

## Export des commissions

### Comment exporter

1. Accédez à la page **Commissions** ou **Export**
2. Appliquez les **filtres** souhaités
3. Cliquez sur **Exporter**
4. Choisissez le format
5. Téléchargez le fichier

### Filtres disponibles

Avant l'export, vous pouvez filtrer par :

- **Période** : Date de début et fin
- **Conseiller** : Un ou plusieurs conseillers
- **Partenaire** : Un ou plusieurs partenaires
- **Nature** : Type de commission
- **Produit** : Type ou produit spécifique
- **Activité** : CIF ou Courtage

::: tip Export ciblé
Plus vous filtrez précisément, plus votre fichier d'export sera pertinent et léger.
:::

### Format d'export

Le format principal d'export est **CSV** (Comma-Separated Values), compatible avec :

- Microsoft Excel
- Google Sheets
- LibreOffice Calc
- Tout tableur

### Contenu du fichier exporté

Le fichier contient :

| Colonne | Description |
|---------|-------------|
| Date | Date de la commission |
| Montant | Valeur de la commission |
| Nature | Type de commission |
| Numéro contrat | Référence du contrat |
| Client | Nom du client |
| Conseiller | Nom du conseiller |
| Partenaire | Nom du partenaire |
| Produit | Nom du produit |
| Type produit | Catégorie de produit |
| Activité | CIF ou Courtage |
| Numéro facture | Référence de facturation |
| Période | Période comptable |

## Historique des exports

Consultez l'historique de vos exports :

1. Accédez à la page **Export**
2. Visualisez les exports précédents
3. Re-téléchargez si nécessaire

### Informations de l'historique

| Information | Description |
|-------------|-------------|
| Date | Date et heure de l'export |
| Filtres | Critères utilisés |
| Nombre de lignes | Volume de données |
| Fichier | Téléchargement |

## Cas d'usage

### Rapport pour un conseiller

1. Filtrez par conseiller
2. Sélectionnez la période souhaitée
3. Exportez

### Déclaration partenaire

1. Filtrez par partenaire
2. Filtrez par période (trimestre, année)
3. Exportez

### Analyse comptable

1. Filtrez par nature (Encours, Droit d'entrée, etc.)
2. Filtrez par activité (CIF ou Courtage)
3. Exportez

## Ouverture dans Excel

### Méthode 1 : Ouverture directe

1. Double-cliquez sur le fichier CSV
2. Excel s'ouvre automatiquement

::: warning Problèmes d'encodage
Si les caractères spéciaux (accents) s'affichent mal, utilisez la méthode 2.
:::

### Méthode 2 : Import des données

1. Ouvrez Excel
2. Fichier > Importer > Fichier texte
3. Sélectionnez le fichier CSV
4. Choisissez "UTF-8" comme encodage
5. Sélectionnez "Point-virgule" ou "Virgule" comme séparateur
6. Terminez l'import

## Bonnes pratiques

::: tip Nommez vos fichiers
Renommez vos fichiers exportés avec une convention claire :
- `commissions_2024_Q1_conseiller_dupont.csv`
- `export_partenaire_generali_2024.csv`
:::

::: tip Archivez vos exports
Conservez une copie de vos exports importants, notamment pour les déclarations et contrôles.
:::
