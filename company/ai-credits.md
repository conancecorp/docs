# Crédits IA

Les fonctionnalités IA payantes de Conance — [extraction PDF avec IA](/features/import/pdf), [lecture de bulletins](/features/pilotage/expected-commissions#declarer-depuis-un-bulletin-de-souscription) — se règlent en **crédits**. L'onglet **Intelligence Artificielle** de la gestion d'entreprise gère le solde, la consommation et la recharge.

## Prérequis

- Un plan **Starter ou supérieur** (les fonctionnalités IA ne sont pas incluses en Gratuit)
- Le [consentement IA](/settings/ai-features) activé par un administrateur

## Le crédit

- **1 crédit = 0,10 €**
- Les crédits **n'expirent jamais** et s'ajoutent au solde
- Un crédit n'est débité **qu'en cas de succès** : une extraction qui échoue ou expire ne coûte rien

## Ce qui coûte, ce qui ne coûte pas

| Fonctionnalité | Coût |
|----------------|------|
| Complétion IA du mapping d'import | Gratuit |
| Extraction PDF : lecture locale (tableaux réglés, reconnaissance de structure) | Gratuit |
| Extraction PDF **avec l'IA** (secours ou relance avec précisions) | 1 crédit par tranche de 8 pages en lecture texte, 2 crédits par tranche de 8 pages en lecture image (scan) — minimum 1 crédit, maximum 200 |
| Rejeu d'un profil d'extraction avec consignes IA | Même grille, en un seul appel |
| Lecture d'un bulletin de souscription | Même grille |

Le devis exact s'affiche sur chaque bouton IA **avant** le clic. Aucun débit n'a lieu sans action explicite.

::: info Ordre de grandeur
Un bordereau de 10 pages qui a résisté à l'extraction gratuite coûte 2 crédits (0,20 €) en lecture texte. Sur un corpus réel, seuls 4 à 8 % des PDF ont besoin de l'IA.
:::

## Acheter des crédits

**Acheter des crédits** :

1. Choisissez un pack (50, 100, 250, 500, 1 000 crédits) ou un **montant personnalisé** (50 minimum, par tranche de 10)
2. Vérifiez le récapitulatif
3. **Procéder au paiement** — paiement sécurisé par Stripe

Les crédits sont ajoutés au solde dès la confirmation du paiement.

## Recharge automatique et alertes

Section **Automatisation** de l'onglet :

| Réglage | Effet |
|---------|-------|
| **Recharge automatique** | Quand le solde tombe sous le **seuil**, la **quantité** choisie est achetée automatiquement avec le moyen de paiement enregistré |
| **Alerte de solde bas** | Email aux administrateurs quand le solde passe sous le seuil (une alerte par semaine au plus) |

Une bannière apparaît aussi dans l'interface quand le solde devient bas.

## Suivre la consommation

- **Solde** et évolution de la consommation dans le temps
- **Répartition par fonctionnalité** : appels et crédits par usage
- **Mouvements de crédits** : achats, recharges automatiques, débits
- **Consommation détaillée** : chaque appel, avec la fonctionnalité, le nombre de pages, le coût

## Multi-cabinets

Sous un plan Groupe, les crédits sont **mutualisés** : un seul solde au niveau du groupe, consommé par tous les cabinets. Le consentement IA, lui, se donne cabinet par cabinet.

## Désactivation

Désactiver les [fonctionnalités IA](/settings/ai-features) bloque les usages mais **conserve le solde**.
