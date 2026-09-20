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

Pour un export complet de vos données (portabilité, fin de contrat), contactez [privacy@conance.io](mailto:privacy@conance.io).
