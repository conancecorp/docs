# Stockage

La page **Stockage** regroupe tous les fichiers du cabinet : ceux que vous avez importés, ceux que Conance a produits (exports, extractions PDF, fichiers d'erreurs).

## En-tête

Trois indicateurs : nombre de fichiers, espace **utilisé** sur le quota du plan, fichiers **nouveaux sur 30 jours**.

## Catégories

| Catégorie | Contenu |
|-----------|---------|
| **Imports** | Les fichiers sources des imports (CSV, Excel, PDF) et les fichiers d'erreurs |
| **Exports** | Les CSV produits par la page [Export](/features/export) |
| **Extractions** | Les PDF et les CSV produits par l'[extraction PDF](/features/import/pdf) |

## Colonnes et filtres

Nom du fichier, type, catégorie, taille. Filtres par **type de fichier** (CSV, Excel et ses variantes, OpenDocument, PDF, texte) et par **catégorie** ; recherche par nom.

→ [Tableaux, filtres et colonnes](/features/tables)

## Actions

| Action | Détail |
|--------|--------|
| **Prévisualiser** | Aperçu du contenu. Pour un fichier d'import : configuration détectée (onglet, délimiteur, encodage, nombre de lignes). Pour un export : filtres appliqués |
| **Importer** | Lance l'assistant d'import sur ce fichier — par exemple un CSV d'extraction ou un fichier d'erreurs corrigé |
| **Renommer** | Change le nom affiché |
| **Télécharger** | Récupère le fichier |
| **Supprimer** | Confirmation requise |

::: warning Supprimer un fichier d'import
Supprimer un fichier source **ne supprime pas** les commissions qu'il a créées ; seule la trace vers le fichier disparaît. Pour retirer les données, utilisez l'[annulation d'import](/features/import/undo).
:::

## Quota

L'espace dépend du [plan](/company/subscription) : 1 Go en Gratuit, 10 Go en Starter, 50 Go en Standard, 100 Go en Premium, 300 Go en Entreprise. Une jauge dans l'en-tête et dans la gestion d'entreprise suit l'utilisation ; à 100 %, les nouveaux imports sont bloqués jusqu'à libération d'espace ou changement de plan.

Les fichiers supprimés comptent encore dans le quota pendant **30 jours**.

## Permissions

`storage:view` pour consulter, `storage:download` pour télécharger, `storage:edit` pour renommer, `storage:delete` pour supprimer.

## Bonnes pratiques

- Nommez vos fichiers avant l'import (partenaire, période) : c'est ce nom qui apparaîtra dans les filtres *Fichier d'import*.
- Archivez localement les gros fichiers anciens avant de les supprimer.
