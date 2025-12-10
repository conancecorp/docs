# Gestion des produits

Les produits représentent les produits financiers que vous distribuez pour le compte de vos partenaires.

## Vue d'ensemble

La liste des produits affiche :

- **Nom** : Nom du produit
- **Code** : Identifiant du produit
- **Type** : Catégorie de produit
- **Partenaire** : Partenaire associé
- **Activité** : CIF ou Courtage
- **Statut** : Actif ou inactif

## Types de produits

Conance gère plusieurs types de produits financiers :

| Type | Description |
|------|-------------|
| OPCVM | Organismes de Placement Collectif en Valeurs Mobilières |
| SCPI | Sociétés Civiles de Placement Immobilier |
| Assurance-vie | Contrats d'assurance-vie |
| FCPI | Fonds Communs de Placement dans l'Innovation |
| FIP | Fonds d'Investissement de Proximité |
| PER | Plan d'Épargne Retraite |
| FCPR | Fonds Communs de Placement à Risques |
| EMTN | Euro Medium Term Notes |
| Autres | Autres produits |

## Activités

Chaque produit est associé à une activité :

| Activité | Description |
|----------|-------------|
| CIF | Conseil en Investissements Financiers |
| Courtage | Intermédiation en assurance |

## Ajouter un produit

1. Cliquez sur **Nouveau produit**
2. Renseignez les informations :
   - **Nom** (obligatoire)
   - **Code** : Identifiant
   - **Type** : Catégorie de produit
   - **Partenaire** : Associer à un partenaire
   - **Activité** : CIF ou Courtage
   - **Description**
3. Cliquez sur **Enregistrer**

## Modifier un produit

1. Cliquez sur le produit dans la liste
2. Cliquez sur **Modifier**
3. Mettez à jour les informations
4. Enregistrez

## Voir les détails

En cliquant sur un produit, vous accédez à :

- Ses **informations** complètes
- Ses **commissions** associées
- Ses **contrats** liés

## Désactiver un produit

Si vous ne distribuez plus un produit :

1. Ouvrez la fiche du produit
2. Cliquez sur **Désactiver**
3. Le produit n'apparaît plus dans les listes de sélection

## Supprimer un produit

1. Sélectionnez le produit
2. Cliquez sur **Supprimer**
3. Confirmez la suppression

::: warning Attention
Un produit ne peut être supprimé que s'il n'a aucune commission ou contrat associé.
:::

## Recherche et filtrage

### Filtres disponibles

- **Partenaire** : Produits d'un partenaire
- **Type** : Catégorie de produit
- **Activité** : CIF ou Courtage
- **Statut** : Actif / Inactif
- **Recherche textuelle**

## Produits personnalisés

Vous pouvez créer des produits personnalisés depuis les [Paramètres](/settings/custom-products). Ces produits sont spécifiques à votre entreprise.

## Import et produits

Lors d'un import, les produits sont associés aux commissions. Si un produit n'existe pas, vous pouvez le créer depuis l'interface de pré-analyse.

→ Voir [Pré-analyse](/features/import/pre-analysis)

## Bonnes pratiques

::: tip Organisation
Organisez vos produits par partenaire pour une meilleure lisibilité.
:::

::: tip Codes cohérents
Utilisez les codes ISIN ou les codes officiels des produits pour faciliter les imports.
:::
