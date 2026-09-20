# Réglementaire — FRA CIF

La page **Réglementaire** prépare les chiffres de la **Fiche de Renseignements Annuels (FRA)** que tout CIF remet à son association professionnelle, à partir des commissions importées dans Conance.

::: info Conance prépare, vous déclarez
Cette page n'est pas la déclaration. Elle prépare les chiffres à recopier sur le portail de votre association, et vous dit ce qu'ils ne contiennent pas. C'est le cabinet qui signe.
:::

Accès : menu **Réglementaire** (permission `commissions:view`).

## Filtres

| Filtre | Défaut |
|--------|--------|
| Exercice | L'année précédente — c'est en général celle que l'on déclare |
| Entité | Tout le cabinet. Utile si vous avez déclaré plusieurs [entités](/settings/entities) et déclarez séparément |

## L'état

L'état affiche le total des commissions de l'exercice, puis les rubriques regroupées par section. Le jeu de départ, livré à la première ouverture :

| Section | Rubrique | Source |
|---------|----------|--------|
| Chiffre d'affaires | Rétrocessions perçues au titre du conseil (CIF) | Commissions — natures Encours, Droit d'entrée, Structurés, Avances/Reprises ; activité CIF |
| Chiffre d'affaires | Honoraires de conseil facturés aux clients (CIF) | Commissions — nature Honoraires ; activité CIF |
| Chiffre d'affaires | Commissions de courtage en assurance | Commissions — toutes natures ; activité Courtage |
| Activité | Clients ayant généré des commissions sur l'exercice | Calcul |
| Activité | Contrats commissionnés sur l'exercice | Calcul |
| Activité | Encours retenu par les partenaires au 31 décembre | Calcul (même définition que la tuile [Pilotage](/features/pilotage/)) |
| À compléter | Réclamations reçues sur l'exercice | Manuel |
| À compléter | Effectif (conseillers) au 31 décembre | Manuel |

Les rubriques **manuelles** se saisissent directement dans l'état, dans la colonne valeur. La saisie est enregistrée par exercice et par entité.

## Les alertes

Avant les chiffres, la page affiche ce que l'état **ne contient pas**. Un chiffre partiel pris pour complet est un risque pour le cabinet ; le module refuse de le laisser passer.

| Alerte | Sens | Que faire |
|--------|------|-----------|
| **Non rattaché** | Des commissions ne tombent dans aucune rubrique (détail par activité × nature) | Ajouter ou élargir une rubrique, ou corriger la nature / l'activité des commissions concernées |
| **Double compte** | Des commissions tombent dans plusieurs rubriques : le total les compterait deux fois | Rendre les rubriques disjointes |
| **Sans honoraires** | Aucun Honoraire saisi alors qu'il y a du chiffre d'affaires | Si vous facturez des honoraires à vos clients, enregistrez-les sous la nature « Honoraires » — sinon la FRA sera partielle |

Les alertes figurent aussi dans l'export Excel.

::: warning Commissions sans nature
Les commissions importées sans type d'opération (donc sans nature) **comptent** dans le total et finissent en « non rattaché ». Corrigez-les via les [types d'opération](/settings/operation-types) ou une [modification en masse](/features/bulk-actions).
:::

## Configurer les rubriques

Chaque association a ses propres libellés. Le bouton **Rubriques** ouvre la configuration : renommez, ajoutez, supprimez.

Une rubrique se définit par :

| Champ | Description |
|-------|-------------|
| Libellé | Tel qu'il apparaît sur le portail de votre association |
| Section | Regroupement à l'écran et dans l'export |
| Source | **Commissions** (agrégat filtré), **Calcul** (nombre de clients, de contrats, encours au 31/12) ou **Manuel** (saisie libre) |
| Natures | Pour une source Commissions : les natures agrégées. Vide = toutes |
| Activités | Pour une source Commissions : les activités agrégées. Vide = toutes |

Une rubrique **Calcul** ne se saisit pas : écraser un chiffre calculé ferait déclarer autre chose que l'importé. Ajoutez une rubrique manuelle à la place.

## Exporter

Le bouton **Exporter** télécharge un classeur Excel (`fra-cif-AAAA.xlsx`) contenant l'état, section par section, et les alertes.

## Ce que la page ne fait pas (volontairement)

- Pas de document opposable, pas de PDF horodaté ni d'archivage : la déclaration se fait sur le portail de l'association.
- Pas d'exercice comptable décalé : l'exercice est l'année civile.
