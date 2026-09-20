# Natures d'opération

La **nature** est la catégorie commune à toutes les commissions, quel que soit le partenaire : c'est elle qui alimente les répartitions du tableau de bord, le [Pilotage](/features/pilotage/) et la [FRA](/features/reglementaire). Les [types d'opération](/settings/operation-types) de chaque partenaire y sont rattachés.

## Natures livrées

| Nature | Couleur | Description |
|--------|---------|-------------|
| Encours | bleu | Commission récurrente sur l'encours |
| Droit d'entrée | vert | Commission à la souscription ou au versement |
| Structurés | orange | Commission sur produits structurés |
| Avances/Reprises | rouge | Avances sur commissions, reprises, régularisations |
| Honoraires | couleur principale | Rémunération facturée au client |

Ces natures sont marquées *Nature livrée avec l'application* : elles ne se modifient ni ne se suppriment.

## Natures personnalisées

Le cabinet ajoute les natures dont il a besoin : rétrocession apporteur, bonus de production, commission de performance…

1. **Nouvelle nature**
2. Saisissez le **nom** (unique pour votre entreprise)
3. Choisissez une **couleur** — elle identifie la nature dans les graphiques et les étiquettes
4. **Créer**

Une nature personnalisée se renomme, change de couleur, et se supprime si aucun type d'opération ne l'utilise. On peut aussi la créer à la volée depuis l'étape *Configuration* de l'import.

::: tip Rétrocession apporteur
La rétrocession versée à un apporteur ou mandataire se traite comme une commission ponctuelle, au nom de la personne : créez une nature dédiée, non récurrente. Pas besoin d'entité ou de module spécifique.
:::

## Récurrente ou ponctuelle

L'interrupteur **Récurrente** dit si une nature est attendue à intervalle régulier sur un contrat.

| Récurrente | Conséquence |
|------------|-------------|
| **Oui** | Son absence prolongée sur un contrat crée une [commission attendue](/features/pilotage/expected-commissions) ; elle est projetée dans le [prévisionnel](/features/pilotage/forecast) |
| **Non** | Aucune attente : une nature ponctuelle peut ne jamais revenir sans que ce soit anormal |

Par défaut, seule **Encours** est récurrente. Un cabinet qui facture des **honoraires de suivi annuels** peut rendre *Honoraires* récurrente ; le réglage est propre au cabinet.

::: info Le rythme n'est pas ici
Le réglage dit *quelles* natures reviennent, pas *à quelle fréquence* : le rythme de chaque contrat est **observé** sur son historique, jamais saisi.
:::

## Permissions

`operation_natures:view` pour consulter, `operation_natures:edit` pour créer, modifier et régler la récurrence.
