# Gestion des clients

Gérez vos clients finaux depuis la page Clients.

## Vue d'ensemble

La liste des clients affiche :

- **Nom** : Nom du client
- **Numéro client** : Identifiant unique
- **Email** : Adresse email
- **Téléphone** : Numéro de contact
- **Contrats actifs** : Nombre de contrats en cours

## Ajouter un client

1. Cliquez sur **Nouveau client**
2. Renseignez les informations :
   - **Nom** (obligatoire)
   - **Prénom**
   - **Numéro client** : Identifiant unique
   - **Email**
   - **Téléphone**
   - **Adresse**
3. Cliquez sur **Enregistrer**

::: tip Numéro client
Le numéro client permet d'identifier de manière unique chaque client, notamment lors des imports.
:::

## Modifier un client

1. Cliquez sur le client dans la liste
2. Cliquez sur **Modifier**
3. Mettez à jour les informations
4. Enregistrez

## Voir les détails

En cliquant sur un client, vous accédez à :

- Ses **informations** complètes
- Ses **contrats** associés
- Ses **commissions** générées
- Son **conseiller** référent

## Supprimer un client

1. Sélectionnez le client
2. Cliquez sur **Supprimer**
3. Confirmez la suppression

::: warning Attention
La suppression d'un client supprime également ses associations avec les contrats. Les commissions historiques restent conservées mais sans lien vers le client.
:::

## Actions en masse

Vous pouvez supprimer plusieurs clients simultanément :

1. Sélectionnez les clients concernés
2. Cliquez sur **Supprimer la sélection**
3. Confirmez la suppression

→ Voir [Actions en masse](/features/bulk-actions)

## Recherche et filtrage

### Recherche

Utilisez la barre de recherche pour trouver un client par :
- Nom
- Prénom
- Numéro client
- Email

### Filtres disponibles

- **Conseiller** : Clients d'un conseiller spécifique
- **Recherche textuelle**

## Import de clients

Les clients peuvent être créés automatiquement lors de l'import de commissions si les informations client sont mappées dans votre fichier.

→ Voir [Import de données](/features/import/)

## Relations conseiller-client

Dans Conance, chaque client peut être associé à un ou plusieurs conseillers via les contrats.

## Bonnes pratiques

::: tip Informations complètes
Renseignez un maximum d'informations pour faciliter la recherche et le suivi.
:::

::: tip Évitez les doublons
Avant de créer un client, vérifiez qu'il n'existe pas déjà avec une orthographe légèrement différente.
:::
