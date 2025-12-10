# Fusion de contrats

La fusion de contrats permet de regrouper plusieurs contrats en un seul, notamment en cas de doublons.

## Pourquoi fusionner des contrats ?

Des doublons de contrats peuvent apparaître pour plusieurs raisons :

- **Formats de numéros différents** : Un même contrat importé avec des formats différents (ex: "12345" et "0012345")
- **Erreurs de saisie** : Contrats créés manuellement avec des erreurs
- **Imports multiples** : Même contrat dans différents fichiers partenaires

## Comment fusionner des contrats

### Étape 1 : Sélectionner les contrats

1. Accédez à la page **Contrats**
2. Sélectionnez les contrats à fusionner (minimum 2)
3. Cliquez sur **Fusionner**

### Étape 2 : Choisir le contrat principal

Conance vous demande de choisir le contrat qui sera conservé :

- Le **contrat principal** sera conservé avec ses informations
- Les **autres contrats** seront fusionnés dans le principal

::: tip Comment choisir ?
Choisissez le contrat qui a les informations les plus complètes ou les plus récentes.
:::

### Étape 3 : Vérifier et confirmer

Avant la fusion, vérifiez le résumé :

| Information | Détail |
|-------------|--------|
| Contrat principal | Numéro du contrat conservé |
| Contrats fusionnés | Liste des contrats qui seront fusionnés |
| Commissions transférées | Nombre de commissions qui seront rattachées |
| Numéros alternatifs | Les numéros des contrats fusionnés deviendront des numéros alternatifs |

Cliquez sur **Confirmer** pour lancer la fusion.

## Ce qui se passe lors de la fusion

1. **Commissions** : Toutes les commissions des contrats fusionnés sont rattachées au contrat principal
2. **Numéros alternatifs** : Les numéros des contrats fusionnés sont ajoutés comme numéros alternatifs du contrat principal
3. **Suppression** : Les contrats fusionnés sont supprimés
4. **Historique** : L'opération est enregistrée dans l'historique

## Exemple de fusion

**Avant fusion :**

| Contrat | Numéro | Commissions |
|---------|--------|-------------|
| Contrat A | 12345 | 10 |
| Contrat B | 012345 | 5 |
| Contrat C | 12345-01 | 3 |

**Après fusion (contrat A choisi comme principal) :**

| Contrat | Numéro | Numéros alternatifs | Commissions |
|---------|--------|---------------------|-------------|
| Contrat A | 12345 | 012345, 12345-01 | 18 |

## Points d'attention

::: warning Vérifiez avant de fusionner
Assurez-vous que les contrats sélectionnés représentent bien le même contrat réel. La fusion est irréversible.
:::

::: warning Contrats de partenaires différents
Évitez de fusionner des contrats de partenaires différents, sauf si vous êtes certain qu'il s'agit du même contrat.
:::

## Annulation de fusion

::: danger Action irréversible
La fusion de contrats ne peut pas être annulée. Une fois fusionnés, les contrats ne peuvent pas être séparés à nouveau.
:::

Si vous avez fusionné des contrats par erreur, vous devrez :
1. Recréer manuellement les contrats séparés
2. Réassocier les commissions aux bons contrats

## Bonnes pratiques

### Avant de fusionner

1. **Vérifiez les informations** de chaque contrat
2. **Comparez les clients** associés - ils doivent être identiques
3. **Vérifiez les partenaires** - ils doivent correspondre

### Prévention des doublons

Pour éviter les doublons futurs :

1. **Standardisez les numéros** : Utilisez toujours le même format
2. **Utilisez les numéros alternatifs** : Ajoutez les variantes comme numéros alternatifs
3. **Vérifiez avant création** : Recherchez si le contrat existe avant d'en créer un nouveau
