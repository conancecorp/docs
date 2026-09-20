# Historique des imports

**Import → Historique** liste tous les imports du cabinet, leur état, et donne accès au compte rendu, à la reprise et à l'[annulation](/features/import/undo).

## Colonnes

| Colonne | Description |
|---------|-------------|
| Nom | Nom de l'import (fichier ou libellé) |
| Date | Date et heure de lancement |
| Statut | Voir ci-dessous |
| Progression | Avancement en pourcentage |
| Utilisateur | Qui a lancé l'import |
| Fichiers | Nombre de fichiers |
| Actions | Détails, progression, reprendre, annuler |

Une recherche filtre par nom, utilisateur ou statut.

## Statuts

| Statut | Signification |
|--------|---------------|
| **En attente** | L'import attend une action : en général la [résolution de correspondances](/features/import/smart-matching) |
| **En cours** | Traitement en cours — vous pouvez suivre la progression ou continuer à travailler ailleurs |
| **Terminé** | Import achevé |
| **Échoué** | L'import s'est arrêté sur une erreur ; le compte rendu en donne la cause |
| **Annulé** | L'import a été [annulé](/features/import/undo) : ses effets ont été retirés |

## Actions

| Action | Disponible quand | Effet |
|--------|------------------|-------|
| **Voir les détails** | Toujours | Ouvre le compte rendu |
| **Voir la progression** | En cours | Rouvre l'écran de progression |
| **Reprendre l'import** | En attente | Rouvre la résolution des correspondances puis importe les commissions restantes |
| **Annuler l'import** | Terminé ou en cours (hors déjà annulé) | Ouvre le dialogue d'[annulation](/features/import/undo) |

## Compte rendu d'un import

Le détail affiche l'utilisateur, la date de fin, le nombre de fichiers, puis le **compte rendu** :

- Commissions, contrats, conseillers, clients **créés** et **mis à jour**
- Lignes en erreur, avec la raison pour chacune
- La liste des **fichiers importés**, avec un lien vers le [Stockage](/features/storage)

Quand des erreurs ont été détectées, l'étape 4 de l'assistant propose **Voir les fichiers d'erreurs** : les lignes refusées, avec leur motif, sont déposées dans le [Stockage](/features/storage) pour que vous puissiez les corriger puis réimporter uniquement ces lignes.

## Traçabilité des commissions

Chaque commission garde la référence de son **fichier d'import**. Sur la page [Commissions](/features/commissions), le filtre **Fichier d'import** isole tout ce qu'un fichier a créé ; sur le tableau de bord, un clic sur un mois liste les fichiers importés ce mois-là.

## Gérer l'historique

Le bouton **Gérer l'historique** nettoie les imports antérieurs à une période choisie. Les **métadonnées** des fichiers sont conservées pour la traçabilité des commissions ; seuls les détails d'exécution sont archivés.

::: warning Un import archivé n'est plus annulable
Le journal des modifications d'un import est purgé à l'archivage. Si vous pensez devoir annuler un import, faites-le avant de nettoyer l'historique.
:::
