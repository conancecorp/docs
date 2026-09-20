# Fusion de contrats

La fusion regroupe plusieurs contrats en un seul : leurs commissions sont rattachées au contrat conservé, et leurs numéros deviennent ses alias.

## Quand fusionner

- Le même contrat a été créé deux fois sous des numéros différents (`12345` et `0012345`)
- Une erreur de saisie a créé un doublon
- Deux fichiers de partenaires nomment le même contrat différemment

## Procédure

1. Sur la page **Contrats**, cliquez sur **Fusionner** (ou sélectionnez des contrats puis Fusionner)
2. Choisissez le **contrat qui va recevoir les alias** — c'est lui qui est conservé, avec ses informations (client, produit, conseiller…)
3. Choisissez les **contrats à fusionner** dans lui
4. Vérifiez l'**aperçu des alias après fusion** : les alias déjà existants sont marqués *Existant*, les nouveaux viennent des contrats fusionnés
5. **Fusionner**

## Ce qui se passe

| Élément | Résultat |
|---------|----------|
| Commissions des contrats fusionnés | Rattachées au contrat conservé |
| Numéros des contrats fusionnés (et leurs alias) | Ajoutés comme alias du contrat conservé |
| Contrats fusionnés | Supprimés |
| Informations du contrat conservé | Inchangées |

**Exemple** — avant :

| Contrat | Numéro | Commissions |
|---------|--------|-------------|
| A | 12345 | 10 |
| B | 012345 | 5 |
| C | 12345-01 | 3 |

Après fusion dans A :

| Contrat | Numéro | Alias | Commissions |
|---------|--------|-------|-------------|
| A | 12345 | 012345, 12345-01 | 18 |

Au prochain import, `012345` et `12345-01` seront reconnus directement.

## Points d'attention

::: danger Irréversible
La fusion ne peut pas être défaite : les contrats fusionnés n'existent plus. Vérifiez que les contrats désignent bien la même souscription (même client, même partenaire).
:::

::: warning Partenaires différents
Fusionner des contrats de partenaires différents n'a de sens que si la base contrats et les bordereaux nomment le même partenaire différemment. Dans ce cas, préférez d'abord renseigner les [noms alternatifs du partenaire](/features/partners#noms-alternatifs).
:::

## Prévenir les doublons

1. Laissez la [détection de correspondances](/features/import/smart-matching) faire son travail à l'import : associer plutôt que créer
2. Renseignez les alias connus dès la création d'un contrat
3. Cherchez un contrat (numéro **et** alias sont recherchés) avant d'en créer un
