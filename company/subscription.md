# Abonnement et facturation

L'onglet **Abonnement** de la gestion d'entreprise affiche votre plan, son utilisation, et donne accès au changement de plan et aux factures.

## Plans Cabinet

| | Gratuit | Starter | Standard | Premium | Entreprise |
|---|---|---|---|---|---|
| Commissions | 5 000 | 500 000 | 2 millions | 8 millions | 20 millions |
| Partenaires | 3 | 10 | 25 | 75 | Illimités |
| Utilisateurs | 3 | 3 | 10 | 25 | 100 |
| Stockage | 1 Go | 10 Go | 50 Go | 100 Go | 300 Go |
| Fonctionnalités IA | — | ✓ | ✓ | ✓ | ✓ |
| Support | Communautaire | Email | Email | Email | Dédié |

Les tarifs (mensuel ou annuel, deux mois offerts à l'année) sont sur [conance.io](https://conance.io/#tarifs). Les plans **Groupe** (multi-cabinets) ont leur propre grille → [Multi-cabinets](/company/multi-cabinets).

## Votre abonnement

La page affiche :

- le **plan** et son **statut** (actif, en attente de paiement, annulé)
- les dates de début, de fin ou d'annulation
- **Limites et utilisation** : jauges stockage, utilisateurs, contrats, commissions, partenaires

Les limites affichées sont les **limites effectives** : celles du plan, ou celles négociées pour votre cabinet si Conance vous a accordé une extension.

## Quotas et rétention

Chaque quota se mesure sur les éléments **existants et récemment supprimés** :

- une ligne supprimée (commission, contrat, client, conseiller, produit, partenaire, fichier) **compte encore 30 jours** dans le quota ;
- une **invitation en attente** compte comme un utilisateur ;
- l'[annulation d'import](/features/import/undo) fait exception : ce qu'elle retire ne compte plus immédiatement.

Quand un import ferait dépasser une limite, il est refusé **avant** d'écrire quoi que ce soit, avec un lien vers les abonnements.

## Changer de plan

1. **Changer de plan**
2. Choisissez le plan et la périodicité (mensuelle ou annuelle)
3. Paiement sécurisé par Stripe
4. Le plan est actif immédiatement

**Retourner au gratuit** est possible à tout moment ; si vos données dépassent les limites du plan Gratuit, les imports sont bloqués jusqu'à ce qu'elles reviennent dans les limites (les données ne sont pas supprimées).

Si un paiement est en attente, le bouton **Finaliser le paiement** rouvre le tunnel Stripe.

## Factures

**Historique des factures** : numéro, date, montant, statut, téléchargement PDF. Les factures sont aussi accessibles depuis *Gestion entreprise → Factures*.

## Paiement échoué

En cas d'échec de prélèvement, vous êtes prévenu par email et disposez d'un délai pour mettre à jour votre moyen de paiement (le prélèvement est retenté). En l'absence de régularisation, l'accès au cabinet est suspendu : les données sont conservées, l'accès complet revient dès le paiement.

## Résiliation

**Annuler l'abonnement** maintient le plan jusqu'à la fin de la période payée, puis bascule en Gratuit. **Réactiver l'abonnement** annule la résiliation tant que la période court.

## Contact

Facturation : [billing@conance.io](mailto:billing@conance.io) · Support : [support@conance.io](mailto:support@conance.io)
