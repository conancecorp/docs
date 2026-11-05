# Fichiers

La page **Fichiers** (menu *Données*) regroupe tous les fichiers du cabinet : ceux que vous avez importés, ceux que Conance a produits (exports, extractions PDF, fichiers d'erreurs).

## En-tête

Trois indicateurs : nombre de fichiers, espace **utilisé** sur le quota du plan, fichiers **nouveaux sur 30 jours**.

## Catégories

| Catégorie | Contenu |
|-----------|---------|
| **Imports** | Les fichiers sources des imports (CSV, Excel, PDF) |
| **Erreurs** | Les lignes refusées par un import, avec leur motif |
| **En attente** | Les lignes d'un import en attente de [résolution des correspondances](/features/import/smart-matching) |
| **Exports** | Les CSV produits par la page [Export](/features/export) |
| **Extractions** | Les PDF et les CSV produits par l'[extraction PDF](/features/import/pdf) |

## Fichiers liés à un import

Les **lignes en attente** et les **lignes en erreur** d'un import sont rangées sous son fichier source : la flèche au début de la ligne les affiche. Tant que des lignes restent à reprendre, le fichier source l'indique, par exemple *12 lignes à reprendre*.

Elles remontent au premier niveau, avec le nom du fichier d'où elles viennent, dans deux cas : quand vous filtrez sur la catégorie *En attente* ou *Erreurs*, et quand leur fichier source n'est plus là.

Les lignes en attente indiquent où elles en sont :

| État | Signification |
|------|---------------|
| **À reprendre** | Leur contrat reste à choisir, ou elles restent à importer. L'action **Reprendre** rouvre l'import là où il s'est arrêté, depuis n'importe quel poste |
| **Reprise en cours** | Leur import est en train de tourner |
| **Repris** | Leur import est terminé |
| **Non repris** | L'import ou sa reprise a été annulé, ou l'import est trop ancien pour être rouvert. L'action **Importer** repart de ces lignes dans un nouvel import |

## Colonnes et filtres

Nom du fichier, type, catégorie, taille. Filtres par **type de fichier** (CSV, Excel et ses variantes, OpenDocument, PDF, texte) et par **catégorie** ; recherche par nom, y compris celui d'un fichier lié.

→ [Tableaux, filtres et colonnes](/features/tables)

## Actions

| Action | Détail |
|--------|--------|
| **Prévisualiser** | Aperçu du contenu. Pour un fichier d'import : configuration détectée (onglet, délimiteur, encodage, nombre de lignes). Pour un export : filtres appliqués |
| **Importer** | Lance l'assistant d'import sur ce fichier — par exemple un CSV d'extraction ou un fichier d'erreurs corrigé |
| **Reprendre** | À la place d'*Importer* sur des lignes en attente à reprendre : voir [ci-dessus](#fichiers-lies-a-un-import) |
| **Renommer** | Change le nom affiché |
| **Télécharger** | Récupère le fichier |
| **Supprimer** | Confirmation requise. Un fichier source part avec ses fichiers liés |

::: warning Supprimer un fichier d'import
Supprimer un fichier source **ne supprime pas** les commissions qu'il a créées ; seule la trace vers le fichier disparaît. Pour retirer les données, utilisez l'[annulation d'import](/features/import/undo).

Ses **lignes en attente** partent avec lui : si elles n'ont pas été reprises, elles ne pourront plus l'être. La fenêtre de confirmation l'indique.
:::

## Quota

L'espace dépend du [plan](/company/subscription) : 1 Go en Gratuit, 10 Go en Starter, 50 Go en Standard, 100 Go en Premium, 300 Go en Entreprise. Une jauge dans l'en-tête et dans la gestion d'entreprise suit l'utilisation ; à 100 %, les nouveaux imports sont bloqués jusqu'à libération d'espace ou changement de plan.

Les fichiers supprimés comptent encore dans le quota pendant **30 jours**.

## Permissions

`storage:view` pour consulter, `storage:download` pour télécharger, `storage:edit` pour renommer, `storage:delete` pour supprimer.

## Bonnes pratiques

- Nommez vos fichiers avant l'import (partenaire, période) : c'est ce nom qui apparaîtra dans les filtres *Fichier d'import*.
- Archivez localement les gros fichiers anciens avant de les supprimer.
