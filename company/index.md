# Gestion d'entreprise

Le menu **Gestion entreprise** est réservé aux administrateurs de l'entreprise. En tête de page : le logo et le nom du cabinet, avec sa formule. La page regroupe cinq onglets.

| Onglet | Contenu | Guide |
|--------|---------|-------|
| **Informations** | Logo et coordonnées du cabinet | Ci-dessous |
| **Membres** | Utilisateurs de l'entreprise, invitations | [Membres](/company/members) |
| **Rôles** | Rôles personnalisés et leurs permissions | [Rôles et permissions](/company/roles) |
| **Abonnement** | Formule actuelle, utilisation, changement de formule, factures | [Abonnement et facturation](/company/subscription) |
| **IA** | Solde de crédits, consommation, recharge automatique | [Crédits IA](/company/ai-credits) |

Les cabinets sous plan **Groupe** disposent en plus du menu **Cabinets** → [Multi-cabinets](/company/multi-cabinets).

## Qui est administrateur ?

- La personne qui **crée** l'entreprise
- Tout membre invité avec la case **Administrateur** cochée, ou dont le rôle porte la permission `company:admin`

Un administrateur peut nommer d'autres administrateurs. Gardez-en au moins deux.

## Informations du cabinet

L'onglet **Informations** (le premier, ouvert par défaut) montre le logo à gauche et, à droite, les informations du cabinet en deux cartes, *Identité* et *Coordonnées* :

| Information | |
|-------|--|
| Nom du cabinet | Affiché dans l'interface et sur les factures |
| Site web | Vous pouvez l'écrire sans « https:// », Conance l'ajoute |
| E-mail | Contact principal |
| Téléphone | |
| Adresse | Numéro et voie, code postal, ville et pays, modifiés ensemble |

Chaque information s'affiche comme du texte (« Non renseigné » si elle est vide) et se modifie sur place : cliquez sa ligne, ou **Modifier** (**Ajouter** si elle est vide). **Entrée** ou **Enregistrer** enregistre cette ligne seule ; **Échap** ou **Annuler** abandonne. « Enregistré » s'affiche un instant sur la ligne.

Une ligne se modifie à la fois : tant qu'elle a des changements non enregistrés, les autres attendent, et fermer l'onglet du navigateur demande confirmation.

### Logo du cabinet

**Ajouter un logo** (ou **Changer le logo**) ouvre une fenêtre de recadrage :

1. Choisissez une image **PNG, JPEG ou WebP** (un logo sur fond transparent garde sa transparence)
2. Au départ, le logo entier tient dans le cadre carré ; zoomez et faites-le glisser pour ne garder, par exemple, que l'emblème d'un logo très large. L'aperçu montre le rendu aux tailles réelles
3. **Enregistrer le logo** : il s'applique aussitôt

Le logo apparaît en tête de la gestion d'entreprise et sur la page Profil des membres. Il n'est visible que des membres du cabinet (et de son groupe), jamais par un lien public, et ne compte pas dans le stockage de l'abonnement. **Retirer** le supprime ; les initiales du cabinet le remplacent.

## Sécurité du cabinet

Deux réglages sensibles vivent dans **Paramètres** (le menu) et non ici :

- imposer la [double authentification](/settings/security#politique-d-entreprise) à tous les membres ;
- activer ou non les [fonctionnalités IA](/settings/ai-features).

## Vider ou fermer un cabinet

→ [Gestion des données](/settings/data-management) pour purger ; [support@conance.io](mailto:support@conance.io) pour fermer le compte.
