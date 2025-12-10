# Détection des doublons

Lors de l'import de commissions, Conance détecte automatiquement les numéros de contrat qui ressemblent à des contrats existants pour éviter la création de doublons.

## Quand cette fonctionnalité se déclenche

La détection des doublons s'active **uniquement lors de l'import de commissions** quand :

1. Un numéro de contrat dans votre fichier ne correspond pas exactement à un contrat existant
2. Mais ce numéro ressemble à un contrat existant du même partenaire

**Exemple :**
- Votre fichier contient le contrat `"CONT-2024-001"`
- En base, vous avez un contrat `"CONT2024001"` chez le même partenaire
- Conance détecte la similarité et vous demande de confirmer

## Comment ça fonctionne

### Calcul de la similarité

Conance compare le numéro importé avec les contrats existants du même partenaire en utilisant plusieurs méthodes :

| Méthode | Description | Exemple |
|---------|-------------|---------|
| Normalisation | Supprime espaces, tirets | `"AB-123"` = `"AB123"` |
| Inclusion | Un numéro contient l'autre | `"12345"` ≈ `"A12345B"` |
| Similarité textuelle | Caractères en commun | `"ABC123"` ≈ `"ABC124"` |

### Seuils de décision

| Score | Action |
|-------|--------|
| **≥ 90%** | Association automatique (pas de confirmation requise) |
| **65% - 90%** | Confirmation manuelle requise |
| **< 65%** | Pas de correspondance, nouveau contrat créé |

## La fenêtre de résolution

Quand des correspondances nécessitent votre validation, une fenêtre s'affiche avec :

### Informations affichées

Pour chaque correspondance à résoudre :

- **Numéro importé** : Le numéro de contrat présent dans votre fichier
- **Nom du client** : Si disponible dans le fichier
- **Candidats** : Liste des contrats existants qui ressemblent au numéro importé

Pour chaque candidat :

- Numéro de contrat existant
- **Score de similarité** (ex: "87% de correspondance")
- Nom du client associé
- Produit associé
- Date de création

### Actions possibles

Pour chaque correspondance, vous pouvez :

| Action | Description | Résultat |
|--------|-------------|----------|
| **Associer** | Lier au contrat existant sélectionné | Le numéro importé devient un alias du contrat |
| **Créer nouveau** | Créer un nouveau contrat | Un nouveau contrat est créé avec ce numéro |
| **Rechercher** | Chercher manuellement un autre contrat | Permet de trouver un contrat par recherche |

### Actions groupées

Pour traiter rapidement plusieurs correspondances :

- **Résolution auto** : Associe automatiquement au meilleur candidat pour toutes les correspondances
- **Nouveau pour tous** : Crée un nouveau contrat pour toutes les correspondances

## Numéros alternatifs

Quand vous choisissez **Associer**, le numéro importé est ajouté comme **numéro alternatif** du contrat existant.

**Avantage** : Lors des prochains imports, ce numéro sera reconnu automatiquement et associé au bon contrat sans intervention.

**Exemple :**
1. Premier import : `"CONT-2024-001"` → vous l'associez au contrat `"CONT2024001"`
2. Le numéro `"CONT-2024-001"` est ajouté aux numéros alternatifs
3. Prochain import : `"CONT-2024-001"` est reconnu automatiquement

## Bonnes pratiques

::: tip Vérifiez attentivement
Même avec un score élevé, vérifiez que le client et le produit correspondent avant d'associer. Deux contrats peuvent avoir des numéros similaires mais être différents.
:::

::: tip Utilisez la recherche
Si le bon contrat n'apparaît pas dans les candidats, utilisez la fonction de recherche pour le trouver manuellement.
:::

::: tip Standardisez vos numéros
Pour éviter ces situations, essayez d'utiliser le même format de numéro de contrat dans tous vos fichiers d'import.
:::

## FAQ

### Pourquoi je ne vois pas cette fenêtre ?

La détection ne s'affiche que si :
- Vous importez des commissions (pas juste des contrats)
- Le numéro de contrat n'existe pas exactement
- Un contrat similaire existe chez le même partenaire
- Le score de similarité est entre 65% et 90%

### Que se passe-t-il si je me trompe ?

Si vous associez par erreur :
- Le numéro alternatif peut être retiré depuis la fiche du contrat
- Vous pouvez utiliser la [fusion de contrats](/features/contracts/merge) si nécessaire

### Les 5 candidats affichés ne suffisent pas ?

Cliquez sur **Afficher plus de candidats** pour charger 5 candidats supplémentaires.
