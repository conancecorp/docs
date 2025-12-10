# Types d'opération

Les types d'opération correspondent aux libellés utilisés par vos partenaires pour qualifier les commissions dans leurs fichiers.

## Qu'est-ce qu'un type d'opération ?

Chaque partenaire utilise ses propres termes pour désigner les types de commissions. Par exemple :

| Partenaire | Libellé fichier | Nature Conance |
|------------|-----------------|----------------|
| Generali | "COMM. ENCOURS" | Encours |
| Swiss Life | "Droits Entrée" | Droit d'entrée |
| Amundi | "STRUCT" | Structurés |

Le type d'opération fait le lien entre le libellé du partenaire et la nature standardisée dans Conance.

## Natures disponibles

Conance gère 5 natures de commissions :

| Nature | Description |
|--------|-------------|
| **Encours** | Commission sur actifs sous gestion |
| **Droit d'entrée** | Commission à la souscription |
| **Structurés** | Commission sur produits structurés |
| **Avances/Reprises** | Avances sur commissions ou reprises |
| **Honoraires** | Rémunération forfaitaire |

## Accéder aux types d'opération

1. Cliquez sur **Paramètres** dans le menu
2. Sélectionnez **Types d'opération**

## Créer un type d'opération

### Depuis les paramètres

1. Cliquez sur **Nouveau type d'opération**
2. Sélectionnez le **partenaire** concerné
3. Entrez le **libellé** exactement comme dans le fichier du partenaire
4. Sélectionnez la **nature** correspondante
5. Cliquez sur **Enregistrer**

::: warning Libellé exact
Le libellé doit correspondre exactement à celui présent dans les fichiers de commissions du partenaire. Respectez la casse et les espaces.
:::

### Pendant un import

Si un nouveau type d'opération est détecté lors d'un import :

1. Conance vous alerte dans l'étape de pré-analyse
2. Cliquez pour créer le type d'opération
3. Associez-le à la nature correspondante
4. Continuez l'import

## Modifier un type d'opération

1. Localisez le type d'opération dans la liste
2. Cliquez sur **Modifier**
3. Changez la nature associée si nécessaire
4. Enregistrez

::: info Impact sur les commissions existantes
La modification d'un type d'opération n'affecte pas les commissions déjà importées. Seules les futures commissions utiliseront la nouvelle association.
:::

## Supprimer un type d'opération

1. Sélectionnez le type d'opération
2. Cliquez sur **Supprimer**
3. Confirmez la suppression

::: warning Attention
Un type d'opération ne peut être supprimé que s'il n'est associé à aucune commission.
:::

## Organisation par partenaire

Les types d'opération sont organisés par partenaire. Chaque partenaire a sa propre liste de types d'opération.

### Recherche et filtrage

- **Filtrer par partenaire** : Affichez les types d'un partenaire spécifique
- **Rechercher** : Trouvez un type par libellé

## Exemple concret

**Situation** : Vous recevez un fichier de Generali avec le libellé "COM. S/ENCOURS TRIMESTRIEL"

**Configuration** :

1. Partenaire : Generali
2. Libellé : "COM. S/ENCOURS TRIMESTRIEL"
3. Nature : Encours

Lors du prochain import d'un fichier Generali contenant ce libellé, la nature "Encours" sera automatiquement appliquée.

## Bonnes pratiques

::: tip Anticipez
Avant votre premier import d'un partenaire, consultez le fichier et créez les types d'opération correspondants.
:::

::: tip Cohérence
Utilisez toujours les mêmes natures pour des types d'opération équivalents entre partenaires. Cela facilite l'analyse globale.
:::

::: tip Documentation
Gardez une trace des correspondances libellé/nature pour chaque partenaire, surtout si plusieurs personnes font des imports.
:::
