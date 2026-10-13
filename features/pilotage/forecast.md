# Prévisionnel

Le bloc **Prévisionnel** de la page [Pilotage](/features/pilotage/) répond à la première question qu'un cabinet se pose : **combien cette année, et quand**.

Il propose deux lectures, livrées ensemble :

1. **Le total annuel** — encaissé + à venir, mois par mois (barres empilées)
2. **Les échéances** — contrat par contrat : son rythme, sa prochaine échéance, ce qu'on en attend d'ici décembre

## Le total annuel

En tête de bloc :

- le **total** de l'année (précédé d'un tilde `~` dès qu'il contient une part projetée : un total qui mêle un fait et une projection est une projection) ;
- le détail **encaissés** · **à venir**.

Le graphique empile, pour chaque mois, l'**encaissé** (ce qui est tombé, toutes natures — un fait) et l'**à venir** (une estimation). Le mois en cours porte les deux.

## Méthode de projection

Pour chaque contrat, Conance part du **dernier versement** d'une nature récurrente et de **l'écart médian observé** entre ses versements, puis répète cette échéance jusqu'à décembre, **au dernier montant encaissé, repris tel quel** — sans moyenne, sans tendance, sans multiplicateur.

Le rythme n'est **jamais demandé** : il est déduit des bordereaux importés. Un contrat qui figure dans chaque bordereau mensuel de son partenaire est vu comme **mensuel** ; un contrat présent une fois par trimestre, comme **trimestriel**. Si l'observation se trompe, vous pouvez [corriger le rythme](#corriger-le-rythme) d'un contrat.

Le rythme est **le même** que celui qui signale les [contrats dormants](/features/pilotage/expected-commissions) : un contrat ne peut pas être « en retard » d'un côté et « attendu le mois prochain » de l'autre. Un rythme corrigé vaut des deux côtés.

Règles complémentaires :

| Situation | Traitement |
|-----------|-----------|
| Attente déclarée sur une nature récurrente | **Remplace** la projection du même contrat le même mois : ce que vous avez annoncé vaut mieux que ce qui est extrapolé |
| Attente déclarée sur une autre nature | **S'ajoute** à la projection |
| Commission récurrente déjà tombée ce mois-ci | Le mois n'est pas projeté en plus |
| Année passée | Rien n'est projeté ; le total est exact, sans tilde |
| Année future | Projeté depuis janvier, à partir de ce qu'on sait aujourd'hui |
| Contrat vu une seule fois | Non projeté, mais **compté** — la ligne de réserve indique combien de contrats le total ne contient pas ; vous pouvez lui [donner un rythme](#corriger-le-rythme) |
| Rythme corrigé | Remplace le rythme observé, à partir du dernier versement |
| Contrat masqué (« Ne plus prévoir ») | Sort du prévisionnel, total et liste, attentes déclarées comprises |
| Contrat résilié | L'encaissé compte, l'avenir non |

## Les échéances

Sous le graphique, **Échéances à venir** liste les contrats attendus d'ici décembre, **une ligne par contrat** (un contrat mensuel en ferait douze sinon) :

| Colonne | Contenu |
|---------|---------|
| **Contrat** | Numéro et client |
| **Partenaire** | Partenaire du contrat |
| **Rythme** | Mensuel, trimestriel, semestriel, annuel… et sa source : *observé sur N versements* ou *corrigé* |
| **Prochaine** | Mois de la prochaine échéance, puis le nombre d'échéances suivantes (le détail des mois au survol) |
| **D'ici décembre** | Montant attendu sur le reste de l'année et nombre d'échéances |

La liste se cherche (numéro, client, partenaire, conseiller) et se lit **page par page** : un cabinet peut avoir des milliers d'échéances dans l'année.

Trois vues, au-dessus de la liste :

- **À venir** : les contrats attendus d'ici décembre ;
- **Sans rythme** : les contrats vus une seule fois, non projetés, avec leur dernier versement ;
- **Masqués** : les contrats que vous avez sortis du prévisionnel.

Quand rien n'est projeté mais que des contrats attendent un rythme, la liste s'ouvre directement sur **Sans rythme**.

### Étiquettes

| Étiquette | Sens | Montant |
|-----------|------|---------|
| **Observé** | Déduit du rythme observé sur l'historique du contrat | Estimé (~) |
| **Fragile** | Rythme déduit d'**un seul** intervalle observé | Estimé (~), à lire avec prudence |
| **Corrigé** | Rythme choisi à la main | Estimé (~) |
| **En retard** | Le contrat a déjà sauté une échéance : rien ne dit qu'il paiera encore | Estimé (~), affiché en rouge |
| **Déclaré** | Attentes enregistrées à l'avance (fiche contrat ou bulletin), sans rythme | Annoncé |

Un montant s'écrit sans tilde seulement quand **tout** est déclaré : dès qu'une échéance vient du rythme, le total du contrat est une estimation.

### Corriger le rythme

Le bouton **⋯** d'une ligne propose :

| Action | Effet |
|--------|-------|
| **Corriger le rythme** (*Donner un rythme* pour un contrat sans rythme) | Choix entre **Observé**, **Mensuel**, **Trimestriel**, **Semestriel**, **Annuel** ; la fenêtre indique d'où vient le rythme observé et quand tombera le prochain versement |
| **Revenir au rythme observé** (*Retirer le rythme* pour un contrat sans historique) | Annule la correction |
| **Ne plus prévoir** | Sort le contrat du prévisionnel (total et liste) ; il reste visible dans **Masqués** |
| **Prévoir à nouveau** | Le remet dans le prévisionnel |
| **Voir le contrat** | Ouvre la liste des contrats filtrée sur ce numéro |

Corriger le rythme ou masquer un contrat demande la permission de **modifier les contrats**. Le total et le graphique se recalculent aussitôt.

::: tip Quand corriger ?
Le rythme observé suit les bordereaux. Un contrat payé une fois par an mais qui apparaît dans chaque relevé trimestriel (avec des lignes à zéro, par exemple) serait vu comme trimestriel : passez-le en **Annuel**. Un contrat qui ne paiera plus (transfert, rachat total non encore saisi) : **Ne plus prévoir**.
:::

## Les réserves

Sous le graphique, une ligne apparaît **seulement quand elle s'applique** :

- « *X € reposent sur des contrats déjà en retard* » — la part du total à lire avec prudence ;
- « *N contrats vus une seule fois, non projetés* » — ce que le total ne contient pas ;
- « *N contrats masqués, hors du total* » — les contrats sortis du prévisionnel.

::: info Pourquoi ne pas projeter un contrat neuf ?
On ne devine jamais à la place de l'utilisateur. Un contrat sans historique n'a pas de rythme observable ; il est signalé, pas inventé. Pour le faire apparaître dans le prévisionnel, [donnez-lui un rythme](#corriger-le-rythme) depuis la vue **Sans rythme**, ou [déclarez une attente](/features/pilotage/expected-commissions#attentes-declarees) sur ce contrat.
:::

## Filtres

Le prévisionnel suit les filtres de la page : **année** et **partenaire**.
