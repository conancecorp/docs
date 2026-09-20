# Types d'opération

Chaque partenaire nomme ses commissions à sa façon : « COM. S/ENCOURS TRIMESTRIEL », « Droits Entrée », « STRUCT »… Le **type d'opération** est ce libellé, tel qu'il figure dans les fichiers du partenaire. Il est rattaché à une **nature** Conance, commune à tous les partenaires, qui sert aux analyses.

```
Libellé du partenaire  ──rattaché à──▶  Nature Conance
"COM. S/ENCOURS TRIM."                   Encours
"Droits Entrée"                          Droit d'entrée
"Rétro apporteur"                        Rétrocession apporteur (nature personnalisée)
```

## Natures disponibles

Cinq natures sont livrées ; le cabinet peut en créer d'autres.

→ [Natures d'opération](/settings/operation-natures)

## Où se créent les types d'opération

| Où | Quand |
|----|-------|
| **À l'import**, étape *Configuration produits et types* | Le cas le plus courant : les libellés du fichier sont listés, vous choisissez la nature de chacun. Le rattachement est mémorisé pour le partenaire |
| **Paramètres → Types d'opération** | Pour préparer un partenaire à l'avance ou corriger un rattachement |

## Créer ou modifier dans les paramètres

1. **Nouveau type d'opération**
2. Choisissez le **partenaire**
3. Saisissez le **libellé** exactement comme dans les fichiers (casse et espaces compris)
4. Choisissez la **nature**
5. **Enregistrer**

La liste se filtre par partenaire et se recherche par libellé.

::: warning Modifier la nature d'un type
Changer la nature d'un type d'opération existant **met à jour la nature des commissions qui lui sont rattachées** : c'est le moyen de corriger d'un coup un bordereau mal qualifié.
:::

## Supprimer

Un type d'opération ne se supprime que s'il n'a plus de commission rattachée.

## Types d'opération et Pilotage

La nature détermine si une commission est **récurrente** (Encours par défaut) : c'est sur les natures récurrentes que Conance détecte les [commissions attendues](/features/pilotage/expected-commissions) et construit le [prévisionnel](/features/pilotage/forecast). Un libellé rattaché à la mauvaise nature fausse ces analyses — et la [FRA](/features/reglementaire).

## Bonnes pratiques

- **Un seul type par libellé et par partenaire.** Deux libellés différents pour la même chose = deux types, tous deux rattachés à la même nature.
- **Cohérence entre partenaires** : les honoraires de tous les partenaires vont dans *Honoraires*, l'encours dans *Encours*, quelle que soit la formulation.
- **Cas particuliers** (rétrocession apporteur, bonus, régularisation…) : créez une [nature personnalisée](/settings/operation-natures) plutôt que de tordre une nature standard.
