# Rôles et permissions

Les **permissions** disent ce qu'un membre peut voir et faire. Un **rôle** est un jeu de permissions nommé, réutilisable. L'onglet **Rôles** de la gestion d'entreprise crée et modifie les rôles du cabinet.

## Trois niveaux d'accès

| Niveau | Comment | Permissions |
|--------|---------|-------------|
| **Administrateur** | Case cochée à l'invitation ou dans la fiche membre | Toutes |
| **Rôle personnalisé** | Rôle créé par le cabinet et attribué au membre | Les permissions de base, plus celles du rôle |
| **Utilisateur** | Aucun rôle attribué | Les permissions de base (ci-dessous) |

### Permissions de base (tout membre)

Voir le tableau de bord, les clients, contrats, conseillers, partenaires, produits, commissions, les types et natures d'opération, les fichiers de la page **Fichiers** (et les télécharger) ; créer des commissions.

Un rôle **ajoute** des permissions, il n'en retire jamais : dans la fenêtre des permissions, ces cases sont cochées et grisées, avec la mention *Accordée à tous les membres*.

## Créer un rôle

1. **Nouveau rôle** : nom et description
2. **Permissions** (icône clé) : cochez les permissions, une ligne par domaine et une colonne par action (*Voir*, *Créer*, *Modifier*, *Supprimer*) ; un clic sur le nom du domaine coche toute la ligne
3. **Enregistrer**

Un rôle se modifie à tout moment : les membres qui le portent voient leurs menus et leurs boutons changer aussitôt, sans se reconnecter. Supprimer un rôle retire ses permissions aux membres qui l'avaient ; ils gardent les permissions de base.

## Permissions disponibles

### Données

| Domaine | Permissions |
|---------|-------------|
| Clients | Voir, Créer, Modifier, Supprimer |
| Contrats | Voir, Créer, Modifier, Supprimer |
| Conseillers | Voir, Créer, Modifier, Supprimer |
| Partenaires | Voir, Créer, Modifier, Supprimer |
| Produits | Voir, Créer, Modifier, Supprimer |
| Commissions | Voir, Créer, Modifier, Supprimer, Exporter |

Certaines actions demandent plusieurs permissions, parce qu'elles en touchent plusieurs :

| Action | Permissions nécessaires |
|--------|-------------------------|
| Fusionner des contrats | Contrats : *Modifier* et *Supprimer* |
| Fusionner des partenaires | Partenaires : *Supprimer*, Contrats : *Supprimer*, Commissions : *Supprimer* |
| Gérer les produits et activités personnalisés (**Paramètres**) | Produits : *Créer*, *Modifier*, *Supprimer* |
| Gérer les entités (**Paramètres**) | Contrats : *Modifier* |
| Saisir un nouveau client ou conseiller dans la fiche d'un contrat | Clients : *Créer*, Conseillers : *Créer* (en plus du droit sur le contrat) |

### Référentiels

| Domaine | Permissions |
|---------|-------------|
| Types d'opération | Voir, Modifier |
| Natures d'opération | Voir, Modifier (et les rubriques de l'onglet *Réglementaire*) |

### Fonctions

| Permission | Donne accès à |
|------------|---------------|
| **Importer des données** | Import, Extraction PDF, modèles d'import |
| **Annuler un import** | L'annulation complète d'un import depuis l'historique (ses commissions, contrats et clients sont supprimés) ; à donner avec *Importer des données* |
| **Utiliser l'IA payante** | Ce qui consomme des crédits IA : lecture d'un bulletin, extraction d'un PDF par l'IA quand la lecture locale échoue, suggestion des colonnes à l'import |
| **Régler la conservation des imports** | [Conservation des imports](/settings/import-retention) : durées des brouillons, des fichiers d'origine et de l'annulation complète |
| Fichiers : **Visualiser**, **Télécharger**, **Modifier**, **Supprimer** | Page **Fichiers** |
| Commissions : **Voir** (+ **Exporter** pour télécharger) | Pilotage (onglets *Vue d'ensemble* et *Réglementaire*), Export |

### Entreprise

Chacune ouvre son onglet de la **Gestion entreprise** ; un membre ne voit que les onglets de ses permissions.

| Permission | Effet |
|------------|-------|
| **Modifier les informations d'entreprise** | Onglet *Informations* : nom, coordonnées et logo du cabinet |
| **Gérer les membres** | Onglet *Membres* : inviter, modifier, retirer des membres |
| **Gérer les rôles** | Onglet *Rôles* : créer, modifier, supprimer des rôles |
| **Gérer la facturation et l'abonnement** | Onglets *Abonnement* et *IA* : formule, factures, achat de crédits IA, recharge automatique |
| **Administration de l'entreprise** | Les réglages réservés à l'administrateur : 2FA obligatoire, accès du support, export complet, gestion des données, cabinets du groupe |

::: warning Garde-fous
Sans être administrateur, un membre qui gère les membres ou les rôles :
- ne peut ni inviter, ni nommer, ni modifier, ni retirer un **administrateur** ;
- ne peut pas modifier **son propre** accès ;
- ne peut attribuer ou composer un rôle qu'avec des permissions **qu'il a lui-même**.

La 2FA obligatoire et l'accès du support restent à l'administrateur, même avec *Modifier les informations d'entreprise*.
:::

## Exemples de rôles

| Rôle | Permissions ajoutées | Pour qui |
|------|----------------------|----------|
| **Consultation** | Aucune : les permissions de base suffisent (elles comprennent la saisie d'une commission) | Un associé qui consulte |
| **Comptable** | Commissions : *Modifier*, *Exporter* ; Types d'opération : *Modifier* | Qui rapproche les bordereaux et exporte vers la compta |
| **Opérateur import** | *Importer des données*, *Utiliser l'IA payante* ; Contrats, Clients : *Créer*, *Modifier* ; Conseillers : *Créer* ; Produits : *Créer*, *Modifier* ; Types d'opération : *Modifier* ; Fichiers | Qui importe les relevés et qualifie produits et types |
| **Gestionnaire** | Tout, sauf *Administration de l'entreprise*, *Gérer la facturation* et *Gérer les rôles* | Un responsable qui ne gère ni l'abonnement ni les rôles |

::: tip Import : les permissions qui vont ensemble
Un import crée des contrats, des clients, des conseillers, des produits et des types d'opération. Un rôle limité à *Importer des données* seul verra ses imports échouer sur les créations. Donnez les permissions *Créer*/*Modifier* correspondantes.
:::
