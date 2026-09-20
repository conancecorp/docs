# Gestion des produits

Un produit est un support distribué pour le compte d'un partenaire : contrat d'assurance-vie, OPCVM, SCPI, PER… Chaque contrat est rattaché à un produit ; le produit porte le **type** et l'**activité** qui alimentent les répartitions du tableau de bord et la [FRA](/features/reglementaire).

## Colonnes

Nom, code, type, activité, partenaire, statut.

## Types et activités

| | Valeurs livrées | Personnalisable |
|---|---|---|
| **Type** | OPCVM, SCPI, Assurance-vie, FCPI, FIP, PER, FCPR, EMTN, Autres | Oui — [Types de produits personnalisés](/settings/custom-products) |
| **Activité** | CIF (Conseil en Investissements Financiers), Courtage (intermédiation en assurance) | Oui — [Activités personnalisées](/settings/custom-activities) |

Dans le formulaire produit, type et activité se **sélectionnent ou se saisissent** : une valeur nouvelle est créée à la volée.

::: info Pourquoi l'activité compte
La FRA CIF ventile le chiffre d'affaires entre conseil (CIF) et courtage. Un produit mal qualifié fausse la déclaration ; l'alerte *non rattaché* de la page Réglementaire le signale.
:::

## Créer un produit

**Nouveau produit** : nom (obligatoire), code, type, activité, partenaire (obligatoire), description, actif.

Un produit se crée aussi depuis l'assistant d'import, à l'étape [Configuration produits](/features/import/pre-analysis).

## Produits multi-activités

Un même nom de produit chez un partenaire peut recouvrir des lignes CIF et des lignes Courtage. À l'import, une **colonne discriminante d'activité** permet de le scinder en plusieurs produits.

→ [Scinder les produits multi-activités](/features/import/pre-analysis#scinder-les-produits-multi-activites)

## Actions groupées

Sélectionnez des produits (ou tout ce qui correspond au filtre), puis :

- **Modifier** : type, activité, partenaire — chaque champ laissé sur *Ne pas modifier* est conservé. Idéal pour requalifier d'un coup tous les produits d'un partenaire
- **Supprimer**

## Actif / inactif, suppression

Un produit que vous ne distribuez plus passe en **inactif**. Un produit sans contrat est supprimé ; s'il en a, Conance le **désactive** à la place.

## Filtres

Partenaire, type, activité, statut, recherche textuelle.

→ [Tableaux, filtres et colonnes](/features/tables)
