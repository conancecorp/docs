# Pré-analyse et validation

Avant l'import final, Conance analyse vos données et vous permet de configurer les options.

## Analyse des données

Conance examine votre fichier et identifie :

- Les **nouvelles entités** à créer (conseillers, clients, contrats)
- Les **entités existantes** qui seront mises à jour
- Les **erreurs potentielles** ou données manquantes

## Configuration des produits

Si votre fichier contient des produits non encore associés, vous pouvez :

1. **Sélectionner un produit existant** dans la liste
2. **Créer un nouveau produit** directement depuis cette étape

::: tip Conseil
Configurez vos produits à l'avance dans les [paramètres](/settings/custom-products) pour accélérer vos imports.
:::

## Configuration des types d'opération

Les types d'opération correspondent aux libellés utilisés par vos partenaires pour qualifier les commissions.

### Association aux natures

Chaque type d'opération doit être associé à une nature Conance :

| Nature | Description |
|--------|-------------|
| Encours | Commission sur actifs gérés |
| Droit d'entrée | Commission à la souscription |
| Structurés | Commission sur produits structurés |
| Avances/Reprises | Avances sur commissions |
| Honoraires | Rémunération forfaitaire |

### Créer un nouveau type d'opération

Si un type d'opération de votre fichier n'existe pas :

1. Conance vous le signale dans la pré-analyse
2. Cliquez pour créer le type d'opération
3. Associez-le à la nature correspondante
4. Le type sera mémorisé pour les prochains imports

## Créer un nouveau partenaire

Si le partenaire n'existe pas encore :

1. Cliquez sur **Créer un partenaire**
2. Renseignez le nom et les informations
3. Le partenaire sera créé et utilisé pour l'import

## Résumé avant import

Avant de lancer l'import, vous voyez un résumé :

- Nombre de lignes à traiter
- Nombre de commissions qui seront créées
- Nombre de contrats qui seront créés
- Nombre de conseillers/clients qui seront créés

## Validation

Vérifiez les points suivants :

- ✅ Tous les produits sont configurés
- ✅ Tous les types d'opération sont associés
- ✅ Aucune erreur bloquante n'est signalée

::: warning Erreurs bloquantes
Si des erreurs bloquantes sont détectées, vous devez les corriger avant de pouvoir lancer l'import.
:::

## Prochaine étape

Une fois la pré-analyse validée, lancez l'import et suivez la progression. Si des correspondances ambiguës sont détectées, consultez la [correspondance intelligente](/features/import/smart-matching).
