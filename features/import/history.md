# Historique des imports

**Import → Historique** liste les imports lancés par le cabinet, suit en direct ceux qui tournent, et donne accès au compte rendu et à l'[annulation](/features/import/undo). Les fichiers déposés mais jamais importés ont leur propre choix dans le filtre : **À reprendre**.

## Imports non terminés

Un fichier déposé dont l'import n'a pas été lancé est un **brouillon**. Il ne se mélange pas aux imports lancés : le choix **À reprendre** du filtre les liste, avec leur nombre en orange, la date de dépôt et l'étape où ils se sont arrêtés (« arrêté à la correspondance des colonnes », « fichier analysé, import pas lancé »).

| Action | Effet |
|--------|-------|
| **Reprendre** | Rouvre l'assistant là où le brouillon s'était arrêté |
| **Abandonner** | Supprime le brouillon et son fichier. Rien n'avait été importé : il suffit de redéposer le fichier pour recommencer |
| **Tout abandonner** | Supprime tous les brouillons du cabinet, après confirmation |

Déposer de nouveau le **même fichier** (même nom, même taille) remplace son ancien brouillon : une ligne par fichier. Les brouillons non repris sont supprimés automatiquement au bout de la durée choisie dans la [conservation des imports](/settings/import-retention) (30 jours par défaut).

## Colonnes

| Colonne | Description |
|---------|-------------|
| Date | Date et heure de lancement, le plus récent en tête |
| Fichier | Nom du fichier (« +2 » quand l'import en comptait plusieurs) |
| Partenaire | Partenaires des contrats touchés par l'import |
| Résultat | Ce que l'import a produit : commissions, ou contrats et clients pour une base client. Les **lignes en attente** de rapprochement sont signalées jusqu'à la fin de leur réimport ; ensuite, seules celles que le réimport a lui-même laissées sans contrat restent signalées. Pendant l'import, le temps restant |
| Statut | Terminé, En erreur, Annulé ; pendant l'import, sa progression |
| Par | La personne qui a lancé l'import |

Un clic sur une ligne ouvre le compte rendu. La recherche porte sur le fichier, le partenaire et la personne, mot par mot et sans tenir compte des accents. Le filtre **Tous · Terminés · En erreur · Annulés · À reprendre** affiche le nombre d'imports de chaque catégorie.

## Suivre un import en cours

La ligne d'un import en cours avance d'elle-même : pourcentage, étape (« Commissions · 1 493 / 2 418 lignes ») et temps restant, les mêmes que dans l'assistant. À la fin, elle passe à **Terminé** avec son résultat, sans recharger la page, et la cloche des notifications prévient la personne qui l'a lancé.

Depuis l'assistant, **Continuer en arrière-plan** ouvre l'historique sur la ligne de l'import, mise en évidence.

::: info Comment se calcule la progression
Le serveur compte les lignes traitées dans chaque étape et pondère la barre par la durée réelle des étapes, mesurée sur les derniers imports du cabinet. Une étape qu'il ne sait pas mesurer (lecture du fichier, enregistrement final) ne fait pas monter le chiffre : la barre montre qu'elle travaille. Le pourcentage ne recule jamais, et 100 % n'apparaît qu'avec *Terminé*.
:::

## Actions

| Action | Disponible quand | Effet |
|--------|------------------|-------|
| **Voir la progression** | En cours | Ouvre le suivi détaillé de l'import dans l'assistant |
| **Annuler l'import** | Terminé ou en erreur | Ouvre le dialogue d'[annulation](/features/import/undo) |

## Compte rendu d'un import

Le détail affiche l'utilisateur, la date de fin, le nombre de fichiers, puis le **compte rendu** :

- Commissions, contrats, conseillers, clients **créés** et **mis à jour**
- Lignes en erreur, avec la raison pour chacune
- La liste des **fichiers importés**, que vous retrouvez aussi dans [Fichiers](/features/storage). Un fichier d'origine retiré par la [conservation](/settings/import-retention) y apparaît comme *Retiré du stockage* : l'import, lui, reste dans l'historique

Quand des erreurs ont été détectées, l'étape 4 de l'assistant propose **Voir les fichiers d'erreurs** : les lignes refusées, avec leur motif, sont déposées dans [Fichiers](/features/storage), catégorie *Erreurs*, pour que vous puissiez les corriger puis réimporter uniquement ces lignes.

## Traçabilité des commissions

Chaque commission garde la référence de son **fichier d'import**, et un import terminé ne quitte jamais l'historique. Sur la page [Commissions](/features/commissions), le filtre **Fichier d'import** isole tout ce qu'un fichier a créé ; sur le tableau de bord, un clic sur un mois liste les fichiers importés ce mois-là.

## Combien de temps tout cela est gardé

La durée de vie des brouillons, des fichiers d'origine et de l'annulation complète se règle dans [Conservation des imports](/settings/import-retention).
