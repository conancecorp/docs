# Actions en masse

Les actions en masse s'appliquent à une sélection de lignes — ou à **tout ce qui correspond au filtre courant**, sur toutes les pages.

## Disponibilité

| Page | Modifier en masse | Supprimer en masse | Autre |
|------|-------------------|--------------------|-------|
| Commissions | Type d'opération, code ISIN, n° facture, code apporteur, période | Oui | — |
| Contrats | Conseiller, partenaire, produit, détail partenaire, client, entité | Oui | Fusionner |
| Produits | Type, activité, partenaire | Oui | — |
| Clients | — | Oui | — |
| Conseillers | — | Oui | — |
| Partenaires | — | Oui | — |

## Sélectionner

1. Cochez les lignes voulues, ou la case d'en-tête pour toute la page
2. Si le filtre contient plus de lignes que la page, la barre de sélection propose de **sélectionner tous les éléments correspondants** : l'action portera alors sur l'ensemble du filtre, pages suivantes comprises. Le nombre total est affiché

→ [Tableaux, filtres et colonnes](/features/tables#selection-et-actions-groupees)

## Modifier en masse

1. Sélectionnez, puis **Modifier** dans la barre de sélection
2. Le dialogue rappelle le nombre d'éléments concernés (et, pour les commissions de plusieurs partenaires, la répartition)
3. Renseignez uniquement les champs à changer — un champ laissé sur **Ne pas modifier** est conservé
4. **Appliquer**

## Supprimer en masse

1. Sélectionnez, puis **Supprimer**
2. Confirmez

::: warning Rétention de 30 jours
Les lignes supprimées disparaissent des listes mais **comptent encore dans vos quotas pendant 30 jours**. Supprimer pour libérer de la place ne produit d'effet qu'au bout de ce délai. Voir [Quotas et rétention](/company/subscription#quotas-et-retention).
:::

::: danger Irréversible
Il n'y a pas de corbeille. Pour retirer les effets d'un **import** entier, utilisez plutôt l'[annulation d'import](/features/import/undo) : elle est ciblée, et rétablit aussi ce que l'import avait modifié.
:::

## Cas d'usage

### Requalifier des commissions après un import

Le type d'opération a été mal choisi : filtrez par *Fichier d'import* et par *Type d'opération*, sélectionnez tout, **Modifier** → nouveau type d'opération. La nature suit.

### Réaffecter un portefeuille

Un conseiller quitte le cabinet : sur **Contrats**, filtrez par ce conseiller, sélectionnez tout, **Modifier** → nouveau conseiller. Les commissions futures suivront le contrat. Passez ensuite l'ancien conseiller en inactif.

### Qualifier les produits d'un partenaire

Sur **Produits**, filtrez par partenaire, sélectionnez tout, **Modifier** → activité *Courtage*.

### Poser un numéro de facture sur un bordereau

Sur **Commissions**, filtrez par *Fichier d'import*, sélectionnez tout, **Modifier** → n° de facture.

## Volume

Les opérations tournent côté serveur ; quelques milliers de lignes se traitent en quelques secondes. Les très grosses sélections peuvent prendre un peu plus longtemps : la page se met à jour à la fin.
