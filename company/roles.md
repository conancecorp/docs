# Rôles et permissions

Configurez les rôles et définissez précisément les accès de chaque collaborateur.

## Accès

1. Accédez à **Gestion d'entreprise**
2. Sélectionnez l'onglet **Rôles**

## Concept de rôles et permissions

### Rôles

Un rôle est un ensemble de permissions attribué à un utilisateur. Par exemple :

- **Administrateur** : Toutes les permissions
- **Conseiller** : Accès aux commissions et contrats
- **Assistant** : Accès en lecture seule

### Permissions

Les permissions définissent ce qu'un utilisateur peut faire :

- Voir les données (lecture)
- Modifier les données (écriture)
- Supprimer les données
- Accéder à certaines fonctionnalités

## Rôles par défaut

Conance propose des rôles par défaut :

| Rôle | Description |
|------|-------------|
| **Administrateur** | Accès complet à toutes les fonctionnalités |
| **Utilisateur** | Accès standard aux fonctionnalités courantes |

## Créer un rôle personnalisé

1. Cliquez sur **Nouveau rôle**
2. Donnez un **nom** au rôle
3. Sélectionnez les **permissions** à accorder
4. Enregistrez

### Permissions disponibles

#### Tableau de bord
- `dashboard:view` - Voir le tableau de bord

#### Conseillers
- `advisors:view` - Voir les conseillers
- `advisors:create` - Créer des conseillers
- `advisors:edit` - Modifier des conseillers
- `advisors:delete` - Supprimer des conseillers

#### Clients
- `clients:view` - Voir les clients
- `clients:create` - Créer des clients
- `clients:edit` - Modifier des clients
- `clients:delete` - Supprimer des clients

#### Partenaires
- `partners:view` - Voir les partenaires
- `partners:create` - Créer des partenaires
- `partners:edit` - Modifier des partenaires
- `partners:delete` - Supprimer des partenaires

#### Produits
- `products:view` - Voir les produits
- `products:create` - Créer des produits
- `products:edit` - Modifier des produits
- `products:delete` - Supprimer des produits

#### Contrats
- `contracts:view` - Voir les contrats
- `contracts:create` - Créer des contrats
- `contracts:edit` - Modifier des contrats
- `contracts:delete` - Supprimer des contrats

#### Commissions
- `commissions:view` - Voir les commissions
- `commissions:create` - Créer des commissions
- `commissions:edit` - Modifier des commissions
- `commissions:delete` - Supprimer des commissions
- `commissions:export` - Exporter des commissions

#### Import
- `import:data` - Importer des données

#### Stockage
- `storage:view` - Voir les fichiers
- `storage:delete` - Supprimer des fichiers

#### Entreprise
- `company:admin` - Administrer l'entreprise

## Modifier un rôle

1. Sélectionnez le rôle dans la liste
2. Cliquez sur **Modifier**
3. Ajoutez ou retirez des permissions
4. Enregistrez

::: warning Rôle en cours d'utilisation
Si des utilisateurs ont ce rôle, les changements s'appliquent immédiatement.
:::

## Supprimer un rôle

1. Sélectionnez le rôle
2. Cliquez sur **Supprimer**
3. Réattribuez les utilisateurs à un autre rôle
4. Confirmez

::: info Rôles par défaut
Les rôles par défaut ne peuvent pas être supprimés.
:::

## Exemples de rôles personnalisés

### Rôle "Conseiller"

Pour un conseiller qui doit voir ses données mais ne pas modifier la configuration :

- ✅ `dashboard:view`
- ✅ `commissions:view`
- ✅ `contracts:view`
- ✅ `clients:view`
- ❌ Import, paramètres, gestion d'entreprise

### Rôle "Comptable"

Pour un comptable qui doit pouvoir exporter les données :

- ✅ `dashboard:view`
- ✅ `commissions:view`
- ✅ `commissions:export`
- ❌ Création, modification, suppression

### Rôle "Opérateur Import"

Pour quelqu'un qui gère uniquement les imports :

- ✅ `import:data`
- ✅ `commissions:view`
- ✅ `storage:view`
- ❌ Modifications manuelles

## Bonnes pratiques

::: tip Granularité
Créez des rôles précis plutôt qu'un rôle fourre-tout avec trop de permissions.
:::

::: tip Documentation
Documentez la raison d'être de chaque rôle personnalisé pour faciliter la gestion future.
:::

::: tip Audit régulier
Vérifiez régulièrement que les rôles correspondent toujours aux besoins réels.
:::
