# Gestion des clients

Les clients sont les titulaires des contrats. Ils sont le plus souvent créés automatiquement à l'import, mais se gèrent aussi à la main depuis la page **Clients**.

## Colonnes

Nom, prénom, numéro client, email, téléphone, adresse, nombre de contrats.

## Créer un client

**Nouveau client** :

| Champ | Description |
|-------|-------------|
| Numéro de client | Optionnel — **généré automatiquement** si vide. C'est l'identifiant utilisé pour reconnaître le client d'un import à l'autre |
| Prénom, Nom | Le nom est obligatoire |
| Email, Téléphone, Adresse | Optionnels |

Un client se crée aussi **à la volée** depuis le formulaire de contrat, sans quitter la saisie.

## Modifier, voir, supprimer

- **Modifier** : depuis la ligne ou la fiche
- **Voir** : informations, contrats et commissions du client
- **Supprimer** : possible seulement si le client n'a plus de contrat — réaffectez ou supprimez ses contrats d'abord. Confirmation requise ; la ligne compte encore dans le quota pendant 30 jours

## Recherche et filtres

Recherche sur nom, prénom, numéro, email. Filtre par conseiller (via les contrats).

→ [Tableaux, filtres et colonnes](/features/tables)

## Actions groupées

Sélectionnez des clients puis **Supprimer**. La sélection peut couvrir tout ce qui correspond au filtre courant.

→ [Actions en masse](/features/bulk-actions)

## Import

La section **Clients** du [mapping](/features/import/mapping#clients) crée ou met à jour les clients : numéro (ou génération automatique), nom complet ou prénom + nom, coordonnées. Sans numéro dans le fichier, la reconnaissance se fait sur le nom.

## Bonnes pratiques

::: tip Un numéro client stable
Si vos partenaires fournissent un identifiant client, mappez-le : c'est le moyen le plus sûr d'éviter les doublons d'orthographe (« Jean DUPONT » / « DUPONT Jean »).
:::
