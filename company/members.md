# Membres

L'onglet **Membres** de la gestion d'entreprise liste les utilisateurs qui ont accès au cabinet et gère les invitations.

::: info Membres ≠ conseillers
Un **membre** est un utilisateur de Conance. Un [conseiller](/features/advisors) est une personne à qui des contrats sont rattachés. Les deux listes sont indépendantes.
:::

## Liste des membres

Pour chaque membre : email, prénom, nom, rôle (**Administrateur** ou rôle personnalisé, sinon *Utilisateur*), statut. L'en-tête rappelle l'utilisation du **quota d'utilisateurs** du plan.

## Inviter un membre

1. **Inviter un membre**
2. **Email** du collaborateur
3. Choisissez :
   - **Administrateur** (case à cocher) — accès complet, y compris la gestion d'entreprise ; ou
   - **Rôle personnalisé** (optionnel) — un des rôles définis dans l'onglet [Rôles](/company/roles). Sans rôle ni case Administrateur, l'invité est *Utilisateur* avec les permissions de base
4. **Inviter**

L'invité reçoit un email avec un lien. S'il n'a pas de compte, il en crée un ; il rejoint ensuite l'entreprise avec le rôle prévu.

::: warning Validité d'une invitation : 1 heure
Le lien d'invitation expire au bout d'une heure. Passé ce délai, utilisez **Renvoyer** sur l'invitation en attente : un nouveau lien est émis.
:::

## Invitations en attente

Les invitations non acceptées apparaissent dans un bloc dédié, avec deux actions : **Renvoyer** et **Annuler**.

Les invitations en attente **comptent dans le quota d'utilisateurs** : annulez celles qui n'aboutiront pas.

## Modifier un membre

**Modifier** ouvre le choix du statut administrateur et du rôle personnalisé. Les changements s'appliquent à la prochaine action du membre.

## Retirer un membre

**Supprimer** retire l'accès immédiatement. Ce que le membre a créé (imports, commissions saisies) reste dans l'entreprise. Il peut être réinvité.

## Quotas

| Plan | Utilisateurs |
|------|--------------|
| Gratuit, Starter | 3 |
| Standard | 10 |
| Premium | 25 |
| Entreprise | 100 |
| Plans Groupe | 3 par cabinet |

→ [Abonnement](/company/subscription)

## Bonnes pratiques

- **Deux administrateurs minimum**, pour ne jamais être bloqué.
- **Moindre privilège** : un rôle personnalisé en lecture pour qui n'a pas à modifier.
- **Revue régulière** : retirez les membres partis, annulez les invitations mortes.
- **2FA obligatoire** : activez la [politique d'entreprise](/settings/security#politique-d-entreprise).
