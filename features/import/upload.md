# Upload de fichier

Première étape de l'assistant : charger le fichier et vérifier que Conance le lit correctement.

## Déposer un fichier

1. Ouvrez **Import**
2. Glissez-déposez le fichier dans la zone, ou cliquez pour parcourir
3. Cliquez sur **Analyser le fichier** (ou **Extraire le PDF** pour un PDF)

Formats acceptés : `.csv`, `.xlsx`, `.xlsm`, `.xls`, `.xlsb`, `.ods`, `.pdf` — 100 Mo maximum.

Vous pouvez aussi lancer un import depuis un fichier déjà présent dans le [Stockage](/features/storage) (action **Importer** sur le fichier) — par exemple le CSV produit par une [extraction PDF](/features/import/pdf).

## Options selon le format

### Fichiers Excel et OpenDocument

Une fenêtre de configuration s'ouvre après l'analyse :

| Option | Usage |
|--------|-------|
| **Onglet** | Choisissez la feuille à importer, avec aperçu |
| **Ligne de départ** | Première ligne utile — utile quand le relevé commence par un cartouche |
| **Colonne de départ** | Première colonne utile |
| **En-têtes** | Indiquez si la première ligne retenue contient les noms de colonnes |

**Utiliser par défaut** garde la détection automatique ; **Utiliser cette configuration** applique vos réglages. Ils sont mémorisés avec la [configuration sauvegardée](/features/import/saved-configs).

### Fichiers CSV

Le séparateur et l'encodage sont détectés. La fenêtre vous demande seulement si la première ligne contient des en-têtes ; sinon des en-têtes automatiques (Colonne 1, Colonne 2…) sont générés.

### Fichiers PDF

Le PDF est envoyé à l'[outil d'extraction](/features/import/pdf), qui le convertit en tableau éditable puis en CSV importable. Si ce PDF a déjà été extrait, Conance propose de **reprendre** l'extraction existante ou d'**extraire à nouveau**.

## Aperçu

Après l'analyse, l'assistant affiche :

- le nombre de **colonnes détectées** et leurs noms ;
- les **premières lignes** de données ;
- le nombre total de lignes.

Vérifiez que les colonnes sont bien découpées et que les en-têtes sont les bons avant de passer au mapping. **Analyser un autre fichier** permet de recommencer.

## Fichier déjà importé

Si l'empreinte du fichier correspond à un import passé, une fenêtre **Fichier déjà importé** liste les imports concernés (nom d'origine, date). Vous pouvez **Continuer quand même** ou **Annuler**.

Ce contrôle se désactive dans les [paramètres généraux](/settings/general) si vous réimportez volontairement les mêmes fichiers.

## Résolution des problèmes

| Symptôme | Piste |
|----------|-------|
| Les données semblent décalées | Ajustez ligne et colonne de départ dans la configuration Excel |
| Les en-têtes sont « Colonne 1, Colonne 2… » | La ligne d'en-tête n'a pas été détectée : indiquez-la, ou utilisez une configuration sauvegardée |
| Caractères accentués illisibles (CSV) | Réenregistrez le fichier en UTF-8 depuis votre tableur |
| Cellules fusionnées, sous-totaux | Préférez les [colonnes calculées et filtres de lignes](/features/import/mapping#options-avancees) du mapping à une retouche manuelle |
| Le fichier est refusé | Vérifiez l'extension et la taille (100 Mo) ; un fichier protégé par mot de passe n'est pas lisible |

## Prochaine étape

→ [Mapping des données](/features/import/mapping)
