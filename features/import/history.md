# Historique des imports

Consultez l'historique de tous vos imports et accédez aux détails de chaque opération.

## Accéder à l'historique

L'historique des imports est accessible depuis la page **Import**, dans l'onglet **Historique**.

## Informations affichées

Pour chaque import, vous voyez :

| Information | Description |
|-------------|-------------|
| Date | Date et heure de l'import |
| Fichier | Nom du fichier importé |
| Partenaire | Partenaire concerné |
| Statut | Succès, En cours, Erreur |
| Statistiques | Nombre d'éléments créés/modifiés |

## Statuts d'import

| Statut | Description |
|--------|-------------|
| ✅ Succès | Import terminé sans erreur |
| ⏳ En cours | Import en cours de traitement |
| ⚠️ Partiel | Import terminé avec des avertissements |
| ❌ Erreur | Import échoué |

## Détails d'un import

Cliquez sur un import pour voir les détails :

### Statistiques détaillées

- Nombre de **commissions** créées / modifiées
- Nombre de **contrats** créés / modifiés
- Nombre de **conseillers** créés
- Nombre de **clients** créés

### Répartition par type

Visualisez la répartition des commissions par :
- Nature d'opération
- Partenaire
- Produit

### Erreurs et avertissements

Si des erreurs se sont produites :

- Liste des lignes en erreur
- Raison de l'erreur pour chaque ligne
- Possibilité de télécharger un fichier d'erreurs

## Fichier d'erreurs

Quand un import génère des erreurs, vous pouvez télécharger un fichier contenant :

- Les lignes qui n'ont pas pu être importées
- La raison de l'échec pour chaque ligne

Ce fichier vous permet de corriger les données et de relancer un import.

## Traçabilité des commissions

Chaque commission conserve une référence vers l'import qui l'a créée :

- Depuis une commission, vous pouvez voir de quel import elle provient
- Depuis les filtres de commissions, vous pouvez filtrer par fichier d'import

## Recherche et filtrage

Filtrez l'historique par :

- **Période** : Date de début et fin
- **Partenaire** : Imports d'un partenaire spécifique
- **Statut** : Succès, Erreur, etc.

## Rétention des données

L'historique des imports est conservé indéfiniment. Les fichiers sources sont stockés dans votre [espace de stockage](/features/storage).

## Bonnes pratiques

::: tip Vérification post-import
Après chaque import, consultez les détails pour vérifier que les données ont été correctement traitées.
:::

::: tip Correction des erreurs
En cas d'erreurs, téléchargez le fichier d'erreurs, corrigez les données dans votre fichier source, et relancez un import uniquement pour les lignes corrigées.
:::
