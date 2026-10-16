# Gestion des données

*Paramètres → Gestion des données* (administrateurs) donne une vue d'ensemble des volumes du cabinet et permet des suppressions par catégorie — jusqu'à la remise à zéro complète.

## Vue d'ensemble

Pour chaque catégorie : le **nombre** d'éléments, le **quota** du plan, et les données qui seraient supprimées **en cascade**.

| Catégorie | Supprimer entraîne aussi |
|-----------|--------------------------|
| Commissions | — |
| Contrats | Commissions |
| Clients | Contrats, commissions |
| Produits | Contrats, commissions |
| Partenaires | Produits, contrats, commissions, types d'opération, détails partenaire |
| Conseillers | Contrats, commissions |
| Sessions d'import | Fichiers d'import, résultats d'import |
| Sessions d'export | — |
| Fichiers stockés | — |

## Supprimer une catégorie

1. Cliquez sur **Supprimer** en face de la catégorie
2. Le dialogue affiche le **détail de la cascade** (combien de contrats, de commissions… partiront avec)
3. Confirmez

## Zone de danger : remise à zéro

**Supprimer les données** propose deux niveaux :

| Niveau | Effet |
|--------|-------|
| Supprimer les données | Toutes les données métier (commissions, contrats, clients, conseillers, produits, partenaires) |
| Reset total | Tout, y compris fichiers, imports, exports et référentiels |

La confirmation exige de taper **« Tout Supprimer »**.

::: danger Irréversible
Aucune restauration n'est possible côté application. Exportez avant. Les membres, rôles et l'abonnement ne sont pas touchés.
:::

Comme toute suppression dans Conance, les lignes supprimées **comptent encore dans les quotas pendant 30 jours** ([rétention](/company/subscription#quotas-et-retention)).

## Quand l'utiliser

- Repartir de zéro après une phase de test ou de démonstration
- Purger un cabinet avant de le fermer
- Retirer un partenaire et tout ce qui en dépend

Pour retirer un **import** précis, préférez l'[annulation d'import](/features/import/undo) : ciblée, et sans rétention de quota.

## Export et portabilité

La carte **Exporter toutes les données** prépare une archive de toutes les données du cabinet : portabilité, fin de contrat, sauvegarde de votre côté. Réservée aux **administrateurs du cabinet**.

1. **Préparer l'archive** : la préparation se fait en tâche de fond, vous pouvez quitter la page.
2. Un **e-mail** et une notification vous préviennent quand elle est prête.
3. **Télécharger** depuis la carte, ou depuis l'[historique des exports](/features/export#historique-des-exports) (type *Export complet*). Le lien de l'e-mail ramène dans Conance : aucune donnée n'est jointe au message.

Une seule préparation à la fois par cabinet. Les **autres administrateurs** reçoivent une notification et un e-mail (« Camille Durand a exporté toutes les données du cabinet ») : un export complet ne passe jamais inaperçu.

### Contenu de l'archive

| Fichier | Contenu |
|---------|---------|
| `LISEZMOI.txt` | Ce que contient chaque fichier, et le nombre de lignes |
| Un CSV par table | Clients, Conseillers, Partenaires, Détails partenaires, Produits, Entités, Contrats, Commissions (montants exacts), Commissions attendues, Types d'opération, Rubriques FRA |
| `Fichiers.csv` | La **liste** des fichiers stockés (nom, catégorie, format, taille, date) : les fichiers eux-mêmes se téléchargent depuis [Fichiers](/features/storage) |
| `Export complet.xlsx` | Les mêmes tables, une par onglet ; absent si une table dépasse la limite d'Excel (1 048 576 lignes), les CSV restant complets |

Les CSV sont au format habituel de Conance : point-virgule, UTF-8, virgule décimale. Les colonnes **Identifiant** relient les tables entre elles (le contrat d'une commission, le client d'un contrat). Les éléments supprimés n'y figurent pas.

Pour toute autre demande liée à vos données personnelles, écrivez à [privacy@conance.io](mailto:privacy@conance.io).
