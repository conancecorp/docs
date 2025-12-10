# Gestion des conseillers

Gérez les conseillers de votre cabinet depuis la page Conseillers.

## Vue d'ensemble

La liste des conseillers affiche :

- **Nom** : Prénom et nom du conseiller
- **Code** : Identifiant unique
- **Email** : Adresse email
- **Téléphone** : Numéro de contact
- **Statut** : Actif ou inactif

## Ajouter un conseiller

1. Cliquez sur **Nouveau conseiller**
2. Renseignez les informations :
   - **Prénom** (obligatoire)
   - **Nom** (obligatoire)
   - **Code** : Identifiant unique utilisé lors des imports
   - **Email**
   - **Téléphone**
3. Cliquez sur **Enregistrer**

::: tip Code conseiller
Le code conseiller est crucial pour les imports. Utilisez le même code que celui présent dans vos fichiers de commissions pour que Conance associe automatiquement les commissions au bon conseiller.
:::

## Modifier un conseiller

1. Cliquez sur le conseiller dans la liste
2. Cliquez sur **Modifier**
3. Mettez à jour les informations
4. Enregistrez

## Voir les détails

En cliquant sur un conseiller, vous accédez à :

- Ses **informations** complètes
- Ses **commissions** associées
- Ses **contrats**
- Ses **clients**

## Désactiver un conseiller

Si un conseiller quitte votre cabinet :

1. Ouvrez la fiche du conseiller
2. Cliquez sur **Désactiver**
3. Le conseiller passe en statut inactif

::: info Données conservées
Un conseiller désactivé n'apparaît plus dans les listes de sélection, mais ses données historiques (commissions, contrats) sont conservées.
:::

## Réactiver un conseiller

1. Affichez les conseillers inactifs (filtre)
2. Sélectionnez le conseiller
3. Cliquez sur **Réactiver**

## Supprimer un conseiller

::: warning Attention
La suppression d'un conseiller supprime également toutes ses associations. Préférez la désactivation pour conserver l'historique.
:::

1. Sélectionnez le conseiller
2. Cliquez sur **Supprimer**
3. Confirmez la suppression

## Actions en masse

Vous pouvez effectuer des actions sur plusieurs conseillers :

- **Modifier en masse** : Mettre à jour plusieurs conseillers
- **Supprimer en masse** : Supprimer plusieurs conseillers

→ Voir [Actions en masse](/features/bulk-actions)

## Recherche et filtrage

### Recherche

Utilisez la barre de recherche pour trouver un conseiller par nom ou code.

### Filtres

- **Statut** : Actif / Inactif
- **Recherche textuelle** : Nom, prénom, code

## Import de conseillers

Les conseillers peuvent être créés automatiquement lors de l'import de commissions si le code conseiller est mappé.

→ Voir [Import de données](/features/import/)

## Bonnes pratiques

::: tip Unicité du code
Assurez-vous que chaque conseiller a un code unique et cohérent avec vos fichiers de commissions.
:::

::: tip Complétez les informations
Renseignez l'email et le téléphone pour faciliter la communication et les éventuels rapports.
:::
