# Gestion des contrats

Les contrats représentent les souscriptions de vos clients auprès de vos partenaires.

## Vue d'ensemble

La liste des contrats affiche :

- **Numéro** : Numéro de contrat
- **Client** : Client titulaire
- **Conseiller** : Conseiller associé
- **Partenaire** : Compagnie/société de gestion
- **Produit** : Produit souscrit
- **Statut** : État du contrat

## Ajouter un contrat

1. Cliquez sur **Nouveau contrat**
2. Renseignez les informations :
   - **Numéro de contrat** (obligatoire)
   - **Client** : Sélectionnez ou créez le client
   - **Conseiller** : Associez un conseiller
   - **Partenaire** : Sélectionnez le partenaire
   - **Produit** : Sélectionnez le produit
3. Cliquez sur **Enregistrer**

## Numéros alternatifs

Un même contrat peut avoir plusieurs numéros (alias). Cela arrive quand :

- Un partenaire utilise différents formats de numéros
- Un numéro a été modifié au fil du temps
- Le fichier de commissions utilise un format différent

### Ajouter un numéro alternatif

1. Ouvrez la fiche du contrat
2. Dans la section **Numéros alternatifs**, cliquez sur **Ajouter**
3. Saisissez le numéro alternatif
4. Enregistrez

::: tip Utilité des numéros alternatifs
Les numéros alternatifs permettent de rattacher des commissions à un contrat même si le numéro dans le fichier d'import diffère légèrement.
:::

## Modifier un contrat

1. Cliquez sur le contrat dans la liste
2. Cliquez sur **Modifier**
3. Mettez à jour les informations
4. Enregistrez

## Voir les détails

En cliquant sur un contrat, vous accédez à :

- Ses **informations** complètes
- Ses **commissions** associées
- Son **historique**
- Ses **numéros alternatifs**

## Supprimer un contrat

1. Sélectionnez le contrat
2. Cliquez sur **Supprimer**
3. Confirmez la suppression

::: warning Attention
La suppression d'un contrat supprime également toutes les commissions associées.
:::

## Fusion de contrats

Si vous avez des doublons de contrats, vous pouvez les fusionner.

→ [Guide : Fusion de contrats](/features/contracts/merge)

## Recherche et filtrage

### Filtres disponibles

| Filtre | Description |
|--------|-------------|
| Client | Contrats d'un client |
| Conseiller | Contrats d'un conseiller |
| Partenaire | Contrats d'un partenaire |
| Produit | Contrats d'un produit |
| Numéro | Recherche par numéro |
| Recherche textuelle | Nom client, numéro |

## Import et contrats

Les contrats sont automatiquement créés lors de l'import de commissions si le numéro de contrat est mappé et qu'il n'existe pas encore.

→ Voir [Import de données](/features/import/)

## Bonnes pratiques

::: tip Vérifiez les doublons
Avant de créer un contrat manuellement, vérifiez qu'il n'existe pas déjà (y compris avec un numéro alternatif).
:::

::: tip Utilisez la fusion
Si des doublons existent, utilisez la fonction de fusion plutôt que de supprimer manuellement.
:::
