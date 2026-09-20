# Pilotage

La page **Pilotage** répond aux questions que le tableau de bord ne pose pas : quel est l'encours réellement retenu par vos partenaires, combien allez-vous encaisser cette année, et quelles commissions auraient dû arriver et n'arrivent pas.

Elle est accessible depuis le menu **Pilotage** (permission `commissions:view`).

## Filtres de la page

Deux filtres s'appliquent à **tous** les blocs de la page, pour que les chiffres se comparent entre eux :

| Filtre | Effet |
|--------|-------|
| Année | Restreint la production, l'évolution et le prévisionnel à l'année choisie. Vide = tout l'historique |
| Partenaire | Restreint tous les blocs à un partenaire |

Le bouton **Actualiser** recharge l'ensemble de la page.

## Les blocs

### Encours retenu par les partenaires et production

Deux tuiles en tête de page.

- **Encours retenu par les partenaires** : somme des dernières assiettes connues, contrat par contrat. C'est la base sur laquelle chaque partenaire calcule sa commission récurrente — pas une valorisation du portefeuille à une date donnée.
- **Production** : somme des montants commissionnés au titre des droits d'entrée (versements et souscriptions) sur la période.

::: info Règle de calcul de l'encours
Pour chaque contrat, Conance retient le **dernier point de mesure** connu : la période la plus récente, puis le mois le plus récent à l'intérieur de cette période. Les lignes de ce dernier point sont additionnées (ce sont des supports différents d'un même contrat), jamais deux points successifs. Un relevé trimestriel qui contient janvier, février et mars n'est donc compté qu'une fois.
:::

Si aucune assiette n'est exploitable sur le périmètre, la tuile affiche **Non disponible** : voyez la section *Couverture* ci-dessous.

### Prévisionnel

Combien cette année, et quand : total annuel (encaissé + à venir) et calendrier des échéances contrat par contrat.

→ [Prévisionnel](/features/pilotage/forecast)

### Commissions attendues

Ce qui aurait dû arriver et n'est pas arrivé : contrats dont la commission récurrente est en retard, attentes déclarées à l'avance, écarts constatés.

→ [Commissions attendues](/features/pilotage/expected-commissions)

### Évolution de l'encours et de la production

Courbe mensuelle de l'encours retenu et de la production sur l'année sélectionnée.

### Répartition de l'encours

Tableau de l'encours et de la production répartis par **client**, **partenaire** ou **conseiller** (sélecteur en tête de bloc), avec le nombre de contrats. Le bouton d'export télécharge la répartition complète en CSV.

### Couverture

Indique sur quelle part du portefeuille l'encours est réellement calculé, partenaire par partenaire.

L'assiette n'existe que si le partenaire la publie dans ses relevés **et** que la colonne a été mappée à l'import. En dessous de 100 %, c'est presque toujours un [mapping](/features/import/mapping) à corriger : la colonne « Base de calcul » (assiette) n'a pas été associée. Le bouton en bout de ligne ouvre l'import pour ce partenaire.

::: warning L'indicateur de couverture fait foi
Conance ne peut pas deviner une assiette absente des relevés. Un encours affiché avec 40 % de couverture est un encours sur 40 % du portefeuille — pas une estimation du total.
:::

## Vocabulaire

| Terme | Sens dans Conance |
|-------|-------------------|
| Encours retenu | Base de calcul retenue par le partenaire pour sa commission récurrente |
| Production | Montants commissionnés en droits d'entrée |
| Nature récurrente | Nature dont l'absence sur un contrat crée une attente (par défaut : Encours). Se règle dans [Natures d'opération](/settings/operation-natures) |
| Rythme observé | Intervalle habituel entre deux commissions récurrentes d'un contrat, déduit de son historique. Il n'est jamais saisi |
| Période | Libellé du **bordereau** (facturation du partenaire). Sans rapport avec le rythme du contrat |
