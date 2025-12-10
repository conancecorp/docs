# Actions en masse

Les actions en masse vous permettent de modifier ou supprimer plusieurs éléments simultanément.

## Disponibilité

Les actions en masse sont disponibles pour :

- **Commissions**
- **Conseillers**
- **Clients**
- **Contrats**

## Modification en masse

### Comment modifier en masse

1. Accédez à la page de l'entité concernée (ex: Commissions)
2. **Sélectionnez les éléments** à modifier en cochant les cases
3. Cliquez sur **Modifier la sélection**
4. Choisissez les champs à modifier
5. Définissez les nouvelles valeurs
6. Confirmez la modification

### Champs modifiables (Commissions)

Pour les commissions, vous pouvez modifier en masse :

| Champ | Description |
|-------|-------------|
| Nature | Type de commission |
| Type d'opération | Libellé de l'opération |
| Produit | Produit associé |
| Code ISIN | Code du produit |
| Numéro de facture | Référence de facturation |

### Champs modifiables (Conseillers)

Pour les conseillers :

| Champ | Description |
|-------|-------------|
| Statut | Actif / Inactif |

## Suppression en masse

### Comment supprimer en masse

1. Accédez à la page de l'entité concernée
2. **Sélectionnez les éléments** à supprimer
3. Cliquez sur **Supprimer la sélection**
4. Vérifiez le résumé de suppression
5. Confirmez en tapant le nombre d'éléments à supprimer
6. Validez

::: danger Attention - Action irréversible
La suppression en masse est définitive et ne peut pas être annulée. Vérifiez attentivement votre sélection avant de confirmer.
:::

### Confirmation de sécurité

Pour éviter les suppressions accidentelles, Conance vous demande de confirmer en saisissant le nombre exact d'éléments à supprimer.

**Exemple :**
```
Vous êtes sur le point de supprimer 25 commissions.
Pour confirmer, tapez "25" :
```

## Sélection des éléments

### Sélection individuelle

Cochez la case à gauche de chaque élément que vous souhaitez sélectionner.

### Sélection de la page

Cochez la case en en-tête de colonne pour sélectionner tous les éléments de la page actuelle.

### Sélection avec filtres

::: tip Astuce
Utilisez les filtres pour affiner la liste avant de sélectionner. Vous pouvez ainsi cibler précisément les éléments à modifier ou supprimer.

**Exemple :** Filtrez les commissions d'un partenaire spécifique, puis sélectionnez toute la page pour les modifier en masse.
:::

## Cas d'usage courants

### Corriger une nature de commission

Après un import, vous réalisez que certaines commissions ont été importées avec la mauvaise nature :

1. Filtrez les commissions concernées
2. Sélectionnez-les
3. Modifiez en masse la nature
4. Confirmez

### Supprimer un import erroné

Un fichier a été importé par erreur :

1. Filtrez les commissions par **fichier d'import**
2. Sélectionnez toutes les commissions
3. Supprimez en masse

### Désactiver plusieurs conseillers

Suite à un départ groupé :

1. Sélectionnez les conseillers concernés
2. Modifiez en masse leur statut en "Inactif"

## Limites et performances

### Nombre d'éléments

Il n'y a pas de limite stricte au nombre d'éléments modifiables ou supprimables en masse, mais :

- Les opérations sur un grand nombre d'éléments peuvent prendre du temps
- Privilégiez des lots de quelques centaines d'éléments

### Temps de traitement

Le temps de traitement dépend du nombre d'éléments :

| Nombre d'éléments | Temps estimé |
|-------------------|--------------|
| 1-100 | Quelques secondes |
| 100-500 | 10-30 secondes |
| 500+ | 1 minute ou plus |

## Bonnes pratiques

::: tip Testez sur un petit échantillon
Avant une modification en masse importante, testez d'abord sur quelques éléments pour vérifier que le résultat correspond à vos attentes.
:::

::: tip Utilisez les filtres
Les filtres sont vos meilleurs alliés pour cibler précisément les éléments à traiter.
:::

::: warning Sauvegardez vos données
Pour les suppressions importantes, assurez-vous d'avoir un export de vos données au préalable.
:::
