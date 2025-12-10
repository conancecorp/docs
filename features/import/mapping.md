# Mapping des colonnes

Le mapping consiste à associer les colonnes de votre fichier aux champs attendus par Conance.

## Principe du mapping

Chaque partenaire peut avoir son propre format de fichier. Le mapping permet de "traduire" ce format vers la structure Conance.

**Exemple :**
| Colonne du fichier | Champ Conance |
|--------------------|---------------|
| "Montant HT" | Montant de la commission |
| "Réf. contrat" | Numéro de contrat |
| "Date opé" | Date de la commission |

## Catégories de mapping

### Informations du contrat

- **Numéro de contrat** : Identifiant unique du contrat
- **Partenaire** : Sélection fixe ou colonne du fichier
- **Produit** : Association au produit correspondant

### Informations de la commission

- **Montant** : Valeur de la commission
- **Date** : Date de l'opération
- **Nature d'opération** : Type de commission (Encours, Droit d'entrée, etc.)
- **Numéro de facture** : Référence de facturation
- **Code ISIN** : Code du produit financier
- **Période** : Période concernée (ex: "Janvier 2024", "T1 2024")

### Informations du conseiller

- **Code conseiller** : Identifiant du conseiller
- **Nom du conseiller** : Nom complet ou prénom + nom séparés

### Informations du client

- **Numéro client** : Identifiant du client
- **Nom du client** : Nom complet
- **Coordonnées** : Adresse, email, téléphone (optionnel)

## Comment mapper une colonne

1. Pour chaque champ Conance, sélectionnez la colonne correspondante dans votre fichier
2. Si un champ n'existe pas dans votre fichier, laissez-le vide
3. Certains champs peuvent être définis avec une valeur fixe au lieu d'une colonne

::: tip Mapping automatique
Conance tente de détecter automatiquement les correspondances basées sur les noms de colonnes. Vérifiez et ajustez si nécessaire.
:::

## Modes de mapping spéciaux

### Partenaire fixe vs colonne

- **Mode fixe** : Tous les contrats du fichier sont associés au même partenaire
- **Mode colonne** : Le partenaire est déterminé par une colonne du fichier

### Nom du conseiller

- **Nom complet** : Une seule colonne contient "Prénom Nom" ou "NOM Prénom"
- **Prénom + Nom séparés** : Deux colonnes distinctes

## Validation du mapping

Avant de continuer, vérifiez que :

- ✅ Le numéro de contrat est bien mappé
- ✅ Le montant de la commission est mappé
- ✅ La date est mappée et dans un format reconnu
- ✅ Le partenaire est défini (fixe ou colonne)

::: warning Champs obligatoires
Certains champs sont obligatoires pour créer une commission. Conance vous indiquera les champs manquants.
:::

## Prochaine étape

Une fois le mapping configuré, passez à la [pré-analyse](/features/import/pre-analysis) pour valider les données.
