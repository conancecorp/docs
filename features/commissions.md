# Gestion des commissions

La page Commissions vous permet de visualiser, filtrer et gérer l'ensemble de vos commissions.

## Vue d'ensemble

La liste des commissions affiche :

- **Montant** : Valeur de la commission
- **Date** : Date de l'opération
- **Nature** : Type de commission
- **Contrat** : Numéro de contrat associé
- **Conseiller** : Conseiller concerné
- **Partenaire** : Source de la commission
- **Produit** : Produit financier

## Natures de commission

Conance gère 5 natures de commissions :

| Nature | Description |
|--------|-------------|
| Encours | Commission sur actifs sous gestion |
| Droit d'entrée | Commission à la souscription |
| Structurés | Commission sur produits structurés |
| Avances/Reprises | Avances sur commissions ou reprises |
| Honoraires | Rémunération forfaitaire |

## Filtrage avancé

### Filtres disponibles

| Filtre | Description |
|--------|-------------|
| Conseiller | Filtrer par conseiller |
| Période | Date de début et fin |
| Nature | Type de commission |
| Partenaire | Source des commissions |
| Produit | Type de produit |
| Activité | CIF ou Courtage |
| Numéro de facture | Recherche par facture |
| Période comptable | Ex: "Janvier 2024", "T1 2024" |
| Fichier d'import | Filtrer par source d'import |

### Utiliser les filtres

1. Cliquez sur les champs de filtre
2. Sélectionnez les valeurs souhaitées
3. La liste se met à jour automatiquement

::: tip Combinaison de filtres
Vous pouvez combiner plusieurs filtres pour affiner votre recherche.
:::

## Actions sur une commission

### Voir les détails

Cliquez sur une commission pour afficher toutes ses informations :
- Détails du contrat
- Informations du client et conseiller
- Historique des modifications
- Source de l'import

### Modifier une commission

1. Sélectionnez la commission
2. Cliquez sur **Modifier**
3. Modifiez les champs souhaités
4. Enregistrez

### Supprimer une commission

1. Sélectionnez la commission
2. Cliquez sur **Supprimer**
3. Confirmez la suppression

::: warning Attention
La suppression est définitive. Cette action ne peut pas être annulée.
:::

## Actions en masse

Pour modifier ou supprimer plusieurs commissions à la fois, consultez la page [Actions en masse](/features/bulk-actions).

## Créer une commission manuellement

Bien que la plupart des commissions soient créées par import, vous pouvez en créer manuellement :

1. Cliquez sur **Nouvelle commission**
2. Sélectionnez le contrat
3. Renseignez les informations
4. Enregistrez

## Export des commissions

Exportez vos commissions filtrées :

1. Appliquez les filtres souhaités
2. Cliquez sur **Exporter**
3. Choisissez le format (CSV)
4. Téléchargez le fichier

→ Plus de détails sur l'[export de données](/features/export)

## Traçabilité

Chaque commission conserve :

- La **date de création**
- Le **fichier d'import** source
- L'**historique** des modifications

Cette traçabilité vous permet de retrouver l'origine de chaque commission.
