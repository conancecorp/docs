# Gestion des contrats

Un contrat est la souscription d'un client à un produit d'un partenaire, suivie par un conseiller. C'est sur lui que les commissions se rattachent.

## Colonnes et filtres

Colonnes : numéro, client, conseiller, partenaire, détail partenaire, produit, entité, statut, date de création.

| Filtre | Description |
|--------|-------------|
| Statut | Actif, En attente, Résilié |
| Partenaire, Détail partenaire, Entité | Par référentiel |
| Produit, Conseiller, Client | Par référentiel |
| Période | Date de création |

→ [Tableaux, filtres et colonnes](/features/tables)

## Créer un contrat

**Nouveau Contrat** :

| Champ | Description |
|-------|-------------|
| Numéro de contrat | Obligatoire |
| Partenaire | Obligatoire — conditionne la liste des produits et des détails partenaire |
| Détail partenaire | Optionnel ; se recherche ou se crée à la volée |
| Produit | Optionnel |
| Client | Recherche d'un client existant ou création à la volée |
| Conseiller | Recherche ou création à la volée |
| Entité | Optionnel |
| Numéros alternatifs (alias) | Tapez un numéro puis **Entrée** |

::: info Un contrat = un conseiller
Plusieurs lignes d'encours pour un même contrat dans un bordereau sont plusieurs **supports**, jamais une répartition entre conseillers.
:::

## Numéros alternatifs (alias)

Un même contrat peut être désigné par plusieurs numéros : formats différents selon les relevés, renumérotation chez le partenaire, numéro de la base contrats différent de celui des bordereaux. Les alias permettent de rattacher les commissions au bon contrat quel que soit le numéro présent dans le fichier.

Ils s'ajoutent :

- à la main, dans la fiche du contrat ;
- automatiquement, quand vous associez un numéro importé lors d'une [correspondance de contrats](/features/import/smart-matching) ;
- automatiquement, lors d'une [fusion](/features/contracts/merge) : les numéros des contrats fusionnés deviennent des alias du contrat conservé.

Pour retirer un alias : **Modifier** le contrat et supprimez-le de la liste.

## Statuts

| Statut | Sens |
|--------|------|
| **Actif** | Par défaut |
| **En attente** | Statut intermédiaire, à l'appréciation du cabinet (contrat en cours de mise en place, par exemple) |
| **Résilié** | Le contrat est clos : son assiette sort de l'[encours retenu](/features/pilotage/) et il n'est plus signalé parmi les [commissions attendues](/features/pilotage/expected-commissions). Réversible |

Le passage en *Résilié* se fait depuis la fiche du contrat, ou en un clic (**Marquer résilié**) depuis les commissions attendues.

## Fiche du contrat

Le bouton **Voir** ouvre la fiche : informations générales, alias, partenaire et produit (type, activité), client et conseiller. Depuis la fiche :

- **Modifier** le contrat
- **Attendre une commission** : déclarer une [commission attendue](/features/pilotage/expected-commissions#declarer-depuis-la-fiche-du-contrat) sur ce contrat

## Actions groupées

Sélectionnez des contrats, puis :

- **Modifier** : conseiller, partenaire, produit, détail partenaire, client, entité — chaque champ laissé sur *Ne pas modifier* est conservé
- **Supprimer**
- **Fusionner** (bouton dédié en tête de page)

→ [Actions en masse](/features/bulk-actions) · [Fusion de contrats](/features/contracts/merge)

## Supprimer un contrat

La suppression d'un contrat supprime **toutes ses commissions**. Confirmation requise ; les lignes comptent encore dans le quota pendant 30 jours.

## Import et contrats

Les contrats sont créés automatiquement à l'import quand le numéro est mappé et n'existe pas encore. Un fichier de **portefeuille** (liste de contrats sans commissions) s'importe en activant la seule section *Contrats* du [mapping](/features/import/mapping).

Les commissions dont la ligne n'a **pas de numéro de contrat** vont, selon l'option choisie au mapping, sur un contrat générique `SANS_CONTRAT` ou en erreur.
