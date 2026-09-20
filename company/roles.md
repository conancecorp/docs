# Rôles et permissions

Les **permissions** disent ce qu'un membre peut voir et faire. Un **rôle** est un jeu de permissions nommé, réutilisable. L'onglet **Rôles** de la gestion d'entreprise crée et modifie les rôles du cabinet.

## Trois niveaux d'accès

| Niveau | Comment | Permissions |
|--------|---------|-------------|
| **Administrateur** | Case cochée à l'invitation ou dans la fiche membre | Toutes, y compris la gestion d'entreprise |
| **Rôle personnalisé** | Rôle créé par le cabinet et attribué au membre | Celles du rôle |
| **Utilisateur** | Aucun rôle attribué | Les permissions de base (ci-dessous) |

### Permissions de base (tout utilisateur)

Voir le tableau de bord, les clients, contrats, conseillers, partenaires, produits, commissions, les types et natures d'opération, les fichiers du stockage (et les télécharger), les informations de l'entreprise ; créer des commissions ; modifier son profil.

## Créer un rôle

1. **Nouveau rôle** : nom et description
2. **Gérer les permissions** : cochez les permissions, groupées par domaine
3. **Enregistrer**

Un rôle se modifie à tout moment ; les changements s'appliquent immédiatement à tous les membres qui le portent. Un rôle se supprime s'il n'est attribué à personne.

## Permissions disponibles

### Données

| Domaine | Permissions |
|---------|-------------|
| Clients | `clients:view`, `clients:create`, `clients:edit`, `clients:delete` |
| Contrats | `contracts:view`, `contracts:create`, `contracts:edit`, `contracts:delete` |
| Conseillers | `advisors:view`, `advisors:create`, `advisors:edit`, `advisors:delete` |
| Partenaires | `partners:view`, `partners:create`, `partners:edit`, `partners:delete` |
| Produits | `products:view`, `products:create`, `products:edit`, `products:delete` |
| Commissions | `commissions:view`, `commissions:create`, `commissions:edit`, `commissions:delete`, `commissions:export` |

### Référentiels

| Domaine | Permissions |
|---------|-------------|
| Types d'opération | `operation_type_mappings:view`, `operation_type_mappings:edit` |
| Natures d'opération | `operation_natures:view`, `operation_natures:edit` |

### Fonctions

| Domaine | Permissions | Donne accès à |
|---------|-------------|---------------|
| Import | `import:data` | Import, Extraction PDF |
| Stockage | `storage:view`, `storage:download`, `storage:edit`, `storage:delete` | Stockage |
| Tableau de bord | `dashboard:view` | Tableau de bord |
| Pilotage, Réglementaire, Export | `commissions:view` (+ `commissions:export` pour télécharger) | Pilotage, Réglementaire, Export |

### Entreprise

| Permission | Effet |
|------------|-------|
| `company:view` | Voir les informations de l'entreprise |
| `company:edit` | Modifier les informations de l'entreprise |
| `company:admin` | Administrer l'entreprise (équivaut à Administrateur) |
| `members:manage` | Gérer les membres |
| `roles:manage` | Gérer les rôles |
| `profile:edit` | Modifier son propre profil |

## Exemples de rôles

| Rôle | Permissions | Pour qui |
|------|-------------|----------|
| **Lecture** | Les permissions de base, sans `commissions:create` | Un associé qui consulte |
| **Comptable** | Base + `commissions:edit`, `commissions:export`, `operation_type_mappings:edit` | Qui rapproche les bordereaux et exporte vers la compta |
| **Opérateur import** | Base + `import:data`, `contracts:create`, `contracts:edit`, `clients:create`, `advisors:create`, `storage:*`, `operation_type_mappings:edit`, `products:create`, `products:edit` | Qui importe les relevés et qualifie produits et types |
| **Gestionnaire** | Tout sauf `company:admin`, `members:manage`, `roles:manage` | Un responsable qui ne gère pas l'abonnement ni l'équipe |

::: tip Import : les permissions qui vont ensemble
Un import crée des contrats, des clients, des conseillers, des produits et des types d'opération. Un rôle limité à `import:data` seul verra ses imports échouer sur les créations. Donnez les permissions `create`/`edit` correspondantes.
:::
