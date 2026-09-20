# Multi-cabinets

Les plans **Groupe** permettent de gérer **plusieurs cabinets** sous un seul abonnement : chaque cabinet dispose de son espace isolé — données, membres, quotas — et l'on bascule de l'un à l'autre en un clic.

## Pour qui

- Les **groupements** de CGP qui centralisent le back-office de leurs membres
- Les **prestataires** qui externalisent la gestion des commissions pour plusieurs cabinets clients
- Les **réseaux** dont chaque structure doit rester étanche

Pour ventiler l'activité **d'un seul** cabinet entre agences, ce sont les [entités](/settings/entities) qu'il faut, pas les cabinets.

## Plans Groupe

| | Groupe Starter | Groupe Standard | Groupe Premium |
|---|---|---|---|
| Cabinets inclus | 3 | 10 | 25 |
| Par cabinet | 3 utilisateurs · 500 000 commissions · 10 partenaires · 10 Go | idem | idem |
| Fonctionnalités IA | ✓ | ✓ | ✓ |

Tarifs sur [conance.io](https://conance.io/#tarifs) (onglet *Multi-Cabinets*). Au-delà des cabinets inclus, des cabinets supplémentaires peuvent être ajoutés ; contactez-nous.

## Organisation

```
Espace parent (le groupe)
├── Cabinet A   — données, membres, quotas propres
├── Cabinet B
└── Cabinet C
```

- L'**espace parent** porte l'abonnement, les crédits IA et la liste des cabinets.
- Chaque **cabinet** est une entreprise Conance à part entière : ses partenaires, ses contrats, ses imports, ses rôles, sa FRA.

## Gérer les cabinets

Menu **Cabinets** (administrateurs de l'espace parent) :

| Action | Détail |
|--------|--------|
| **Nouveau cabinet** | Nom du cabinet → **Créer**. Bloqué quand la limite du plan est atteinte |
| **Accéder** | Bascule dans l'espace du cabinet : vous y travaillez comme un membre de ce cabinet |
| **Renommer** | |
| **Supprimer** | Le cabinet et ses données sont supprimés. Ses données **restent comptabilisées dans vos quotas pendant 30 jours** |

## Basculer entre cabinets

Le **sélecteur de cabinet** dans la barre supérieure change d'espace sans se déconnecter. **Retour espace parent** revient au groupe.

Tout ce que vous voyez et faites — tableau de bord, imports, exports, pilotage — concerne le cabinet **courant**.

## Membres

Les membres de l'**espace parent** peuvent basculer dans tous les cabinets du groupe ; seuls ses administrateurs créent, renomment ou suppriment des cabinets. Un collaborateur d'un cabinet précis s'invite **depuis ce cabinet** ([Membres](/company/members)) : il ne voit que celui-là.

## Crédits IA et consentement

- Les [crédits IA](/company/ai-credits) sont **mutualisés** au niveau du groupe.
- Le [consentement IA](/settings/ai-features) se donne **cabinet par cabinet**.

## Configurations d'import

Les configurations d'import et les profils d'extraction sont propres à chaque cabinet. Un format de partenaire commun à tous vos cabinets peut faire l'objet d'un **modèle Conance** : contactez le support.
