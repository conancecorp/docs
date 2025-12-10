# Upload de fichier

La première étape de l'import consiste à charger votre fichier dans Conance.

## Comment uploader un fichier

### Méthode 1 : Glisser-déposer

1. Accédez à la page **Import**
2. Glissez votre fichier dans la zone d'upload
3. Le fichier est automatiquement analysé

### Méthode 2 : Sélection

1. Accédez à la page **Import**
2. Cliquez sur la zone d'upload
3. Sélectionnez votre fichier depuis l'explorateur
4. Le fichier est automatiquement analysé

## Formats acceptés

| Format | Extension | Taille max |
|--------|-----------|------------|
| CSV | `.csv` | 10 Mo |
| Excel | `.xlsx`, `.xls` | 10 Mo |

## Options pour les fichiers Excel

Pour les fichiers Excel, des options supplémentaires sont disponibles :

### Sélection de la feuille

Si votre fichier contient plusieurs feuilles, sélectionnez celle à importer.

### Configuration avancée

- **Ligne de départ** : Définissez à partir de quelle ligne commencent les données
- **Colonne de départ** : Définissez à partir de quelle colonne commencent les données
- **Ligne d'en-tête** : Indiquez quelle ligne contient les noms de colonnes

::: tip Fichiers avec en-têtes multiples
Si votre fichier contient plusieurs lignes d'en-tête ou des informations au-dessus des données, utilisez la configuration avancée pour indiquer où commencent réellement vos données.
:::

## Aperçu des données

Après l'upload, Conance affiche un aperçu de votre fichier :

- Liste des colonnes détectées
- Premières lignes de données
- Nombre total de lignes

Cet aperçu vous permet de vérifier que le fichier a été correctement lu avant de passer au mapping.

## Résolution des problèmes

### Le fichier n'est pas reconnu

- Vérifiez que l'extension est bien `.csv`, `.xlsx` ou `.xls`
- Assurez-vous que le fichier n'est pas corrompu

### Les données semblent décalées

- Utilisez la configuration avancée pour ajuster la ligne/colonne de départ
- Vérifiez que votre fichier Excel ne contient pas de cellules fusionnées

### Caractères spéciaux mal affichés

- Pour les fichiers CSV, essayez de les réenregistrer en UTF-8

## Prochaine étape

Une fois votre fichier uploadé et analysé, passez au [mapping des colonnes](/features/import/mapping).
