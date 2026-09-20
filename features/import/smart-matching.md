# Correspondances de contrats

À l'import, chaque numéro de contrat du fichier est recherché dans votre base. Quand il n'existe pas exactement mais **ressemble** à un contrat connu du même partenaire, Conance vous demande de trancher plutôt que de créer un doublon.

## Quand cela se déclenche

Lors de l'import de **commissions** ou de **contrats**, si :

1. le numéro n'existe ni comme numéro principal ni comme [numéro alternatif](/features/contracts/#numeros-alternatifs-alias) d'un contrat ;
2. un contrat du **même partenaire** a un numéro proche.

**Exemple :** le fichier contient `CONT-2024-001`, la base contient `CONT2024001` chez le même partenaire.

## Score de similarité

Conance compare le numéro importé aux contrats du partenaire selon plusieurs méthodes :

| Méthode | Description | Exemple |
|---------|-------------|---------|
| Normalisation | Ignore espaces, tirets, zéros non significatifs | `AB-123` = `AB123` |
| Inclusion | Un numéro contient l'autre | `12345` ≈ `A12345B` |
| Similarité textuelle | Caractères et ordre en commun | `ABC123` ≈ `ABC124` |

| Score | Décision |
|-------|----------|
| **≥ 90 %** | Association automatique, sans question |
| **65 % – 90 %** | Votre confirmation est requise |
| **< 65 %** | Aucun rapprochement : nouveau contrat |

## La fenêtre de résolution

Quand des confirmations sont requises, l'import des commissions concernées est mis **en attente** et la fenêtre **Résolution des correspondances approximatives** s'ouvre, une correspondance à la fois (**Précédent** / **Suivant**).

Pour chaque correspondance :

- **Numéro importé** et **client importé** (si présent dans le fichier)
- **Candidats trouvés** : contrats existants avec leur score, client, produit, conseiller

| Action | Résultat |
|--------|----------|
| Sélectionner un candidat | Le numéro importé devient un **numéro alternatif** du contrat choisi ; les commissions lui sont rattachées |
| **Créer un nouveau contrat** | Un contrat est créé avec le numéro importé |
| **Rechercher un autre contrat** | Recherche par numéro ou nom de client si le bon contrat n'est pas parmi les candidats |
| **Afficher plus de candidats** | Charge cinq candidats supplémentaires |

Actions groupées :

- **Résolution auto** : associe chaque correspondance à son meilleur candidat
- **Nouveau pour tous** : crée un nouveau contrat pour chaque correspondance

**Terminer** applique vos choix et lance l'import des commissions en attente.

## Reprendre plus tard

Vous pouvez fermer la fenêtre : l'import reste au statut **En attente** dans l'[historique](/features/import/history). L'action **Reprendre l'import** rouvre la résolution. Depuis l'étape 4, **Résoudre les correspondances** et **Importer les commissions restantes** font la même chose.

## Associations mémorisées

Chaque association que vous validez manuellement est **mémorisée** : au prochain import, ce numéro sera rattaché sans question — y compris si le contrat appartient à un autre partenaire que celui de l'import (cas des plateformes dont la base contrats et les bordereaux ne nomment pas les partenaires de la même façon). Si deux associations existent pour le même numéro, la fenêtre de résolution est rouverte.

Elles se consultent et se retirent dans **Import → Configurations → Associations de contrats mémorisées**. Retirer une association ne modifie pas le contrat ; elle ne sera simplement plus appliquée automatiquement. Le numéro alternatif, lui, se retire depuis la [fiche du contrat](/features/contracts/).

## Bonnes pratiques

::: tip Vérifiez le client
Même à 89 %, deux contrats de numéros proches peuvent appartenir à deux clients. Le nom du client importé et celui des candidats sont affichés côte à côte pour cette raison.
:::

::: tip Doublons déjà créés
Si des doublons existent malgré tout, utilisez la [fusion de contrats](/features/contracts/merge) : les numéros des contrats fusionnés deviennent des alias du contrat conservé.
:::

::: tip Noms alternatifs de partenaire
Le même mécanisme existe pour les **partenaires** : renseignez les [noms alternatifs](/features/partners#noms-alternatifs) d'un partenaire pour qu'un fichier qui l'appelle autrement soit reconnu.
:::
