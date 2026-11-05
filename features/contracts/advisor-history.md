# Historique du conseiller

Un contrat peut changer de conseiller. Conance garde qui l'a suivi et depuis quand : chaque commission reste au conseiller qui la gérait à sa période, même quand le contrat passe à un autre.

## La règle

Une commission va au **conseiller en place au premier jour de sa période** : une commission de mars va au conseiller qui suivait le contrat le 1er mars. Sans période, c'est sa date qui compte ; sans date, son jour d'import.

| Situation | Résultat |
|-----------|----------|
| Le conseiller change le 15 mars | Mars reste à l'ancien, avril va au nouveau |
| Une commission plus ancienne que l'entrée du contrat dans Conance | Elle va au premier conseiller du contrat |
| Un contrat sans conseiller en reçoit un | Il le reçoit pour **tout** son historique : « aucun conseiller » veut dire « inconnu » |

Le tableau des commissions, le filtre *Conseiller*, le tableau croisé, le *Top 5 conseillers* du [tableau de bord](/features/dashboard), l'export des commissions, l'export comptable et la production de la répartition par conseiller de [Pilotage](/features/pilotage/) suivent cette règle. Tout ce qui concerne les contrats (liste, filtres, contrats dormants, prévisionnel, encours de la répartition par conseiller) montre le conseiller **actuel**.

## Voir l'historique

Sur la page **Contrats**, ouvrez un contrat (**Voir**). La section *Client et Conseiller* montre l'**Historique du conseiller**, en deux affichages :

- **Frise** : une barre de l'*Entrée dans Conance* à *Aujourd'hui*, une couleur par conseiller. Si le contrat a des commissions plus anciennes que son entrée dans Conance (bordereaux importés avant la base), la frise part de la *Première commission*. Survolez une partie pour voir le conseiller, les dates et l'origine du changement.
- **Tableau** : la période, le conseiller et l'origine de chaque changement (*Entrée dans Conance*, *Import · nom du fichier*, *Modifié par …*, *Historique corrigé par …*).

Si des commissions du contrat ont été attribuées à un autre conseiller, une ligne le signale (« 3 commissions attribuées à un autre conseiller »).

## Changer le conseiller d'un contrat

Dans le formulaire du contrat (**Modifier**), choisissez le nouveau conseiller. Si le contrat en avait déjà un, deux choix apparaissent sous le champ :

- **À partir du** [date] : aujourd'hui par défaut. Les commissions à partir de cette date vont au nouveau conseiller, celles d'avant restent à l'ancien. La date ne peut pas être dans le futur.
- **Corriger tout l'historique** : pour réparer une erreur. Toutes les commissions du contrat passent au nouveau conseiller, sauf celles [attribuées à la main](#attribuer-des-commissions-a-un-autre-conseiller).

Une phrase indique ce que le changement va déplacer, par exemple « 12 commissions sur 40 passent à Marie Dupont ».

Le même choix existe dans la [modification en masse](/features/bulk-actions) des contrats, pour réaffecter un portefeuille d'un coup.

::: tip Départ d'un conseiller
Sur **Contrats**, filtrez par le conseiller qui part, sélectionnez tout, **Modifier** → nouveau conseiller, *À partir du* la date de son départ. Ses commissions passées lui restent ; il apparaît toujours dans les chiffres des périodes où il gérait ces contrats.
:::

## À l'import

Quand une base contrats donne un autre conseiller pour un contrat existant, le nouveau conseiller le prend **à partir du jour de l'import**, même si vous aviez choisi le conseiller précédent à la main. Les commissions dont la période a commencé avant l'import restent à l'ancien, et celles attribuées à la main ne bougent pas.

Le contrôle de l'import, à l'étape de [pré-analyse](/features/import/pre-analysis), l'annonce avant de lancer :

- **Contrat modifié à la main** : c'est un point à vérifier (« 1 contrat modifié à la main change de conseiller »), et l'assistant s'arrête sur cette étape.
- **Autres contrats** : c'est une simple information (« 3 contrats changent de conseiller »), et l'étape peut être sautée si elle n'a rien d'autre à montrer.

Un contrat qui n'avait aucun conseiller et en a reçu un à la main compte parmi les autres contrats.

Pour garder votre choix, corrigez le fichier ou décochez *Activer l'import des conseillers* à l'étape des correspondances. Une cellule vide ou un contrat absent du fichier ne change rien.

[Annuler l'import](/features/import/undo) remet le conseiller d'avant, l'historique et l'attribution des commissions comme avant l'import.

## Attribuer des commissions à un autre conseiller

Une commission peut revenir à quelqu'un d'autre que le conseiller du contrat, par exemple un commercial qui touche le droit d'entrée d'un contrat qu'il ne suit pas. Le contrat, lui, ne change pas.

**Une commission** : dans sa fenêtre **Modifier** (ou à sa création), champ **Conseiller**. Vide, il indique *Conseiller du contrat (Marie Dupont)* : la commission suit le contrat. Choisissez un conseiller pour la lui attribuer ; videz le champ pour la rendre au conseiller du contrat.

**Plusieurs commissions** :

1. Sur la page **Commissions**, sélectionnez les commissions concernées
2. **Modifier**, champ **Conseiller** → *Attribuer à un conseiller*, puis choisissez-le
3. **Appliquer**

Pour annuler : même chemin, *Revenir au conseiller du contrat*.

Ces commissions gardent ce conseiller quoi qu'il arrive ensuite au contrat. Dans le tableau, une icône suit le nom du conseiller (*Attribuée à la main : ne suit plus le conseiller du contrat* au survol), et leur fiche indique le conseiller actuel du contrat.

## Points d'attention

- Un conseiller qui a touché des commissions ne peut pas être supprimé, même s'il ne suit plus aucun contrat : désactivez-le.
- L'[export des conseillers](/features/export) sépare les deux : le portefeuille (contrats, encours) est celui que le conseiller suit aujourd'hui, les commissions sont celles qu'il a touchées, y compris sur des contrats qu'il ne suit plus.
- Les données d'avant cette fonctionnalité n'ont pas d'historique : chaque contrat commence avec son conseiller actuel. Corrigez les cas que vous connaissez avec *À partir du*.
