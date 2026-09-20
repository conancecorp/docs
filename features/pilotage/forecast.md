# Prévisionnel

Le bloc **Prévisionnel** de la page [Pilotage](/features/pilotage/) répond à la première question qu'un cabinet se pose : **combien cette année, et quand**.

Il propose deux lectures, livrées ensemble :

1. **Le total annuel** — encaissé + à venir, mois par mois (barres empilées)
2. **Les échéances** — tel mois, sur tel contrat, on doit toucher tel montant

## Le total annuel

En tête de bloc :

- le **total** de l'année (précédé d'un tilde `~` dès qu'il contient une part projetée : un total qui mêle un fait et une projection est une projection) ;
- le détail **encaissés** · **à venir**.

Le graphique empile, pour chaque mois, l'**encaissé** (ce qui est tombé, toutes natures — un fait) et l'**à venir** (une estimation). Le mois en cours porte les deux.

## Méthode de projection

Pour chaque contrat, Conance part du **dernier versement** d'une nature récurrente et de **l'écart médian observé** entre ses versements, puis répète cette échéance jusqu'à décembre, **au dernier montant encaissé, repris tel quel** — sans moyenne, sans tendance, sans multiplicateur.

Le rythme est **le même** que celui qui signale les [contrats dormants](/features/pilotage/expected-commissions) : un contrat ne peut pas être « en retard » d'un côté et « attendu le mois prochain » de l'autre.

Règles complémentaires :

| Situation | Traitement |
|-----------|-----------|
| Attente déclarée sur une nature récurrente | **Remplace** la projection du même contrat le même mois : ce que vous avez annoncé vaut mieux que ce qui est extrapolé |
| Attente déclarée sur une autre nature | **S'ajoute** à la projection |
| Commission récurrente déjà tombée ce mois-ci | Le mois n'est pas projeté en plus |
| Année passée | Rien n'est projeté ; le total est exact, sans tilde |
| Année future | Projeté depuis janvier, à partir de ce qu'on sait aujourd'hui |
| Contrat vu une seule fois | Non projeté, mais **compté** — la ligne de réserve indique combien de contrats le total ne contient pas |
| Contrat résilié | L'encaissé compte, l'avenir non |

## Les échéances

Le tableau **Échéances à venir** liste, par mois, chaque contrat avec son partenaire, son origine et le montant attendu. Vingt lignes s'affichent, le bouton **Voir les suivantes** déplie le reste.

### Étiquettes d'origine

| Étiquette | Sens | Montant |
|-----------|------|---------|
| **Observé** | Déduit du rythme observé sur l'historique du contrat | Estimé (~) |
| **Fragile** | Rythme déduit d'**un seul** intervalle observé | Estimé (~), à lire avec prudence |
| **En retard** | Le contrat a déjà sauté une échéance : rien ne dit qu'il paiera encore | Estimé (~), affiché en rouge |
| **Déclaré** | Attente enregistrée à l'avance (fiche contrat ou bulletin) | Annoncé |

## Les réserves

Sous le graphique, une ligne apparaît **seulement quand elle s'applique** :

- « *X € reposent sur des contrats déjà en retard* » — la part du total à lire avec prudence ;
- « *N contrats vus une seule fois, non projetés* » — ce que le total ne contient pas.

::: info Pourquoi ne pas projeter un contrat neuf ?
On ne devine jamais à la place de l'utilisateur. Un contrat sans historique n'a pas de rythme observable ; il est signalé, pas inventé. Pour le faire apparaître dans le prévisionnel, [déclarez une attente](/features/pilotage/expected-commissions#attentes-declarees) sur ce contrat.
:::

## Filtres

Le prévisionnel suit les filtres de la page : **année** et **partenaire**.
