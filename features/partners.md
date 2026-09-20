# Gestion des partenaires

Les partenaires sont les compagnies d'assurance, sociétés de gestion, plateformes et autres établissements qui vous versent des commissions. Chaque bordereau importé est rattaché à un partenaire.

## Colonnes

Nom, code, noms alternatifs, contact, site web, statut.

## Créer un partenaire

**Nouveau partenaire** :

| Champ | Description |
|-------|-------------|
| Nom | Obligatoire |
| Code | Identifiant court, unique |
| **Noms alternatifs** | Autres libellés sous lesquels ce partenaire apparaît dans vos fichiers — voir ci-dessous |
| Site web, Description | Optionnels |
| Contact | Nom, email, téléphone de votre interlocuteur |
| Actif | Interrupteur |

Un partenaire se crée aussi depuis l'assistant d'import, au moment du mapping.

## Noms alternatifs

À l'import en mode *Partenaire = colonne*, Conance reconnaît un partenaire par son nom **ou par l'un de ses noms alternatifs**. Renseignez-y les variantes rencontrées dans vos fichiers (« GENERALI VIE », « Generali Patrimoine », « GNL »…) pour éviter la création de doublons.

## Détails partenaire

Un partenaire peut se décliner en **détails partenaire** : ses entités juridiques ou ses gammes (« Eres Assurances » et « Eres Gestion » sous *Eres*). Le détail se renseigne sur le contrat et se filtre partout où le partenaire se filtre.

→ [Détails partenaire](/settings/partner-details)

## Actif / inactif

Un partenaire avec lequel vous ne travaillez plus passe en **inactif** : il disparaît des listes de sélection, son historique reste.

## Supprimer

Un partenaire sans contrat ni produit est supprimé. S'il en a, Conance le **désactive** à la place et vous l'indique : l'historique reste intact. Confirmation requise ; sélection multiple possible.

## Fiche du partenaire

**Voir** : informations, produits, types d'opération, commissions.

## Ce qui dépend du partenaire

| Élément | Lien |
|---------|------|
| Produits | Chaque produit appartient à un partenaire — [Produits](/features/products) |
| Types d'opération | Les libellés du partenaire et leur nature — [Types d'opération](/settings/operation-types) |
| Correspondances de contrats | La recherche de contrats similaires se fait au sein du même partenaire — [Correspondances](/features/import/smart-matching) |
| Couverture de l'encours | Mesurée partenaire par partenaire — [Pilotage](/features/pilotage/) |
| Quota | Le nombre de partenaires est limité par votre [abonnement](/company/subscription) |

::: tip Nommage
Utilisez le nom officiel comme nom principal, et mettez toutes les variantes en noms alternatifs. Un seul partenaire par établissement.
:::
