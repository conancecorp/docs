# Import de données

L'import est au cœur de Conance : c'est par lui que les relevés de commissions de vos partenaires (bordereaux) deviennent des commissions, des contrats, des clients et des conseillers dans votre base.

## Formats supportés

| Format | Extensions | Remarque |
|--------|------------|----------|
| CSV | `.csv` | Séparateur et encodage détectés automatiquement |
| Excel | `.xlsx`, `.xlsm`, `.xls`, `.xlsb` | Choix de l'onglet, ligne et colonne de départ |
| OpenDocument | `.ods` | Traité comme un classeur |
| PDF | `.pdf` | Converti automatiquement en tableau par l'[extraction PDF](/features/import/pdf) |

Taille maximale : **100 Mo** par fichier.

## La page Import

La page **Import** comporte trois onglets :

| Onglet | Contenu |
|--------|---------|
| **Import** | L'assistant en quatre étapes |
| **Configurations** | Les [configurations sauvegardées](/features/import/saved-configs), les [profils d'extraction PDF](/features/import/pdf#profils-d-extraction) et les [associations de contrats mémorisées](/features/import/smart-matching#associations-memorisees) |
| **Historique** | L'[historique des imports](/features/import/history), avec reprise et [annulation](/features/import/undo) |

## Les quatre étapes de l'assistant

```
1. Upload de fichier
       ↓
2. Mapping des données
       ↓
3. Configuration (produits et types d'opération)
       ↓
4. Import
```

| Étape | Ce que vous faites | Guide |
|-------|--------------------|-------|
| 1 | Déposez le fichier, choisissez l'onglet Excel ou les options CSV si besoin | [Upload de fichier](/features/import/upload) |
| 2 | Associez les colonnes du fichier aux champs Conance, ou chargez une configuration | [Mapping des données](/features/import/mapping) |
| 3 | Qualifiez les produits (type, activité) et les types d'opération (nature) détectés dans le fichier | [Configuration produits et types](/features/import/pre-analysis) |
| 4 | Suivez la progression ; résolvez les correspondances de contrats si nécessaire | [Correspondances de contrats](/features/import/smart-matching) |

L'état de l'assistant est conservé : si vous quittez la page en cours de route, vous reprenez où vous en étiez.

## Ce qu'un import crée ou met à jour

Chaque section du mapping s'active indépendamment :

- **Contrats** — numéro, partenaire, produit, client, conseiller, entité, détail partenaire
- **Commissions** — montant, date, période, type d'opération, taux, assiette, facture, ISIN, code apporteur
- **Conseillers** — code et nom
- **Clients** — numéro, nom, coordonnées

Un fichier peut ne créer que des contrats (liste de portefeuille) ou que des commissions (bordereau).

## Garde-fous

| Garde-fou | Comportement |
|-----------|--------------|
| **Un import à la fois** | Un seul import peut tourner par cabinet. Si un import est en cours, l'assistant vous demande de patienter |
| **Fichier déjà importé** | Si le même fichier a déjà été importé, Conance vous le signale (nom d'origine, date) et vous laisse continuer ou annuler. Désactivable dans les [paramètres généraux](/settings/general) |
| **Quotas** | Si l'import dépasse les limites de votre [abonnement](/company/subscription) (commissions, partenaires, stockage), il est refusé avant d'écrire quoi que ce soit |
| **Journal** | Tout ce qu'un import écrit est journalisé : il peut être [annulé](/features/import/undo) intégralement |

## Après l'import

- Les commissions gardent la référence de leur **fichier d'import** : filtrez-les par fichier depuis la page [Commissions](/features/commissions).
- Le fichier source est conservé dans le [Stockage](/features/storage).
- Les [commissions attendues](/features/pilotage/expected-commissions) sont rapprochées automatiquement.

## Bonnes pratiques

::: tip Avant le premier import d'un partenaire
Créez le partenaire, et si possible ses produits et ses types d'opération. Vous pouvez aussi tout créer depuis l'assistant, mais le mapping est plus rapide quand les référentiels existent.
:::

::: tip Sauvegardez la configuration
À la fin du mapping, sauvegardez la configuration. Au prochain bordereau du même partenaire, l'assistant la retrouvera par compatibilité de colonnes.
:::

::: warning Lignes parasites
Totaux, sous-totaux, lignes vides ou d'en-tête intermédiaires faussent l'import. Utilisez les [filtres de lignes](/features/import/mapping#filtres-de-lignes) du mapping plutôt que de retoucher le fichier à la main.
:::
