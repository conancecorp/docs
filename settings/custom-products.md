# Produits personnalisés

Créez des produits spécifiques à votre entreprise qui ne sont pas dans le catalogue standard.

## Pourquoi créer des produits personnalisés ?

Certains produits peuvent ne pas être présents dans le catalogue Conance :

- Produits récents pas encore référencés
- Produits spécifiques à certains partenaires
- Mandats de gestion personnalisés

## Accéder aux produits personnalisés

1. Cliquez sur **Paramètres** dans le menu
2. Sélectionnez **Produits personnalisés**

## Créer un produit personnalisé

1. Cliquez sur **Nouveau produit**
2. Renseignez les informations :
   - **Nom** (obligatoire) : Nom du produit
   - **Code** : Code ou ISIN du produit
   - **Type** : Catégorie (OPCVM, SCPI, etc.)
   - **Partenaire** : Associer à un partenaire
   - **Activité** : CIF ou Courtage
   - **Description** : Informations complémentaires
3. Cliquez sur **Enregistrer**

## Types de produits disponibles

| Type | Description |
|------|-------------|
| OPCVM | Organismes de Placement Collectif |
| SCPI | Sociétés Civiles de Placement Immobilier |
| Assurance-vie | Contrats d'assurance-vie |
| FCPI | Fonds Communs de Placement dans l'Innovation |
| FIP | Fonds d'Investissement de Proximité |
| PER | Plan d'Épargne Retraite |
| FCPR | Fonds Communs de Placement à Risques |
| EMTN | Euro Medium Term Notes |
| Autres | Autres produits |

## Activités

Chaque produit doit être associé à une activité :

| Activité | Description |
|----------|-------------|
| **CIF** | Conseil en Investissements Financiers |
| **Courtage** | Intermédiation en assurance |

Cette classification est importante pour les reporting réglementaires.

## Modifier un produit personnalisé

1. Localisez le produit dans la liste
2. Cliquez sur **Modifier**
3. Mettez à jour les informations
4. Enregistrez

## Supprimer un produit personnalisé

1. Sélectionnez le produit
2. Cliquez sur **Supprimer**
3. Confirmez la suppression

::: warning Attention
Un produit ne peut être supprimé que s'il n'est associé à aucune commission ou contrat.
:::

## Utilisation dans les imports

### Pendant la pré-analyse

Si un produit inconnu est détecté lors d'un import :

1. Conance vous signale les produits non reconnus
2. Vous pouvez créer un produit personnalisé directement
3. Associez-le aux commissions concernées
4. Continuez l'import

### Association automatique

Une fois créé, le produit personnalisé sera automatiquement reconnu lors des prochains imports si le code correspond.

## Différence avec les produits standards

| Aspect | Produits standards | Produits personnalisés |
|--------|-------------------|------------------------|
| Source | Catalogue Conance | Créés par vous |
| Modifications | Non modifiables | Entièrement modifiables |
| Partage | Communs à tous | Spécifiques à votre entreprise |

## Bonnes pratiques

::: tip Utilisez les codes ISIN
Quand c'est possible, utilisez le code ISIN comme identifiant pour faciliter les imports.
:::

::: tip Vérifiez les doublons
Avant de créer un produit, vérifiez qu'il n'existe pas déjà dans le catalogue standard ou dans vos produits personnalisés.
:::

::: tip Complétez les informations
Renseignez le maximum d'informations (type, activité) pour un meilleur suivi et des reportings précis.
:::
