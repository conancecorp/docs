# Mapping des données

Deuxième étape : dire à Conance quelle colonne du fichier alimente quel champ. Chaque partenaire a son format ; le mapping traduit ce format vers la structure Conance.

## Commencer vite

En haut de l'étape, la bannière **Complétion des champs** propose deux aides :

| Bouton | Ce qu'il fait | Coût |
|--------|---------------|------|
| **Complétion basique** | Reconnaît les colonnes d'après leur nom (« Montant », « N° contrat », « Date »…) | Gratuit |
| **Complétion IA** | Envoie les en-têtes et au plus trois lignes d'exemple (valeurs tronquées) à un modèle, qui propose un mapping complet. Vous validez suggestion par suggestion dans une fenêtre de confirmation | Gratuit (fonctionnalité IA, nécessite le [consentement du cabinet](/settings/ai-features)) |

Ou, mieux : **Charger une configuration** déjà sauvegardée pour ce partenaire. L'assistant ne propose que les configurations **compatibles avec les colonnes** du fichier, et les **modèles Conance** (configurations fournies pour des formats de partenaires connus).

→ [Configurations sauvegardées](/features/import/saved-configs)

## En-tête du mapping

| Champ | Description |
|-------|-------------|
| **Partenaire** | Le partenaire du bordereau. **Manuel** (un seul partenaire pour tout le fichier) ou **Colonne** (le partenaire varie ligne par ligne). Un bouton permet de créer le partenaire à la volée |
| **Période** | Le libellé du bordereau (Mensuel, Bimensuel, Trimestriel, Semestriel, Annuel + valeur), fixé pour le fichier ou lu dans une colonne |
| **Date des commissions** | Date unique appliquée à tout le fichier, si le fichier n'en contient pas |
| **Type d'opération** | Type unique appliqué à tout le fichier, si le fichier n'en contient pas |
| **Produit** | Produit unique, si le fichier n'en contient pas |
| **Détail partenaire** | [Détail partenaire](/settings/partner-details) unique |
| **Entité / Cabinet** | [Entité](/settings/entities) unique |
| **Numéro de facture** | Référence de facturation du bordereau (ex. `26.001`) |

Chaque champ marqué *(optionnel)* peut rester vide.

::: info Période ≠ rythme
La période est le libellé du **bordereau** : quand le partenaire a facturé. Elle n'a aucun rapport avec le rythme de commissionnement des contrats — un bordereau trimestriel peut contenir un contrat commissionné une fois par an. Conance n'utilise jamais la période pour deviner un rythme.
:::

## Les quatre sections

Chaque section s'active par un interrupteur. Une section désactivée n'écrit rien.

### Contrats

| Champ | Description |
|-------|-------------|
| Numéro de contrat | Identifiant du contrat chez le partenaire |
| Partenaire | Manuel ou colonne (voir en-tête) |
| Produit | **Manuel** ou **Colonne**. En mode colonne, une **colonne discriminante d'activité** optionnelle permet de scinder un produit selon la valeur observée (cas des produits multi-activités CIF / Courtage) — voir [Configuration produits](/features/import/pre-analysis#scinder-les-produits-multi-activites) |
| Détail partenaire | Manuel ou colonne |
| Entité / Cabinet | Manuel ou colonne |

### Commissions

| Champ | Description |
|-------|-------------|
| Montant | La commission |
| Date | Avec un **format de date** : automatique, `JJ/MM/AAAA`, `AAAA-MM-JJ`, `AAAAMMJJ`, `JJMMAAAA`, `MM/JJ/AAAA`, `JJ.MM.AAAA`, `MM/AAAA`, `MM/AA`, ou `MM` seul avec une **année à préciser** |
| Type d'opération | Colonne contenant les libellés du partenaire (ex. « COM. S/ENCOURS ») — ils seront rattachés à une nature à l'étape suivante |
| Taux | Colonne des taux de commission (en pourcentage). Option **Normaliser** pour multiplier ou diviser par un coefficient si le fichier exprime le taux autrement |
| Base de calcul (assiette) | Colonne de l'assiette : c'est elle qui alimente l'**encours retenu** dans [Pilotage](/features/pilotage/). Sans elle, la couverture de l'encours est incomplète |
| Numéro de facture | Colonne ou valeur unique |
| Code ISIN | Colonne |
| Code apporteur | Colonne |
| Période | Colonne ou valeur unique (voir en-tête) |
| **Commissions sans numéro de contrat** | **Créer un contrat générique** (`SANS_CONTRAT`) ou **Mettre ces commissions en erreur** |

### Conseillers

| Champ | Description |
|-------|-------------|
| Code conseiller | Optionnel — généré automatiquement si absent. C'est lui qui rattache les commissions au bon conseiller d'un import à l'autre |
| Nom | **Nom complet (une colonne)** ou **Prénom + Nom (deux colonnes)** |
| Email | Optionnel |

### Clients

| Champ | Description |
|-------|-------------|
| Numéro client | Optionnel — généré automatiquement si absent |
| Nom | **Nom complet (une colonne)** ou **Prénom + Nom (deux colonnes)** |
| Adresse, email, téléphone | Optionnels |

## Options avancées

Repliées par défaut, elles évitent de retoucher le fichier avant l'import. Le bouton **Prévisualiser le résultat** montre l'effet sur les premières lignes.

### Colonnes calculées

Créez une colonne virtuelle à partir des colonnes du fichier (et des colonnes calculées définies avant elle — elles s'enchaînent) :

| Opération | Exemple |
|-----------|---------|
| Somme, moyenne, produit de colonnes | Montant = HT + TVA |
| Concaténation (avec séparateur) | Nom complet = Prénom + Nom |
| Texte avant / après un séparateur | Numéro = texte avant « - » dans « 12345 - DUPONT » |
| Premier mot | Code = premier mot du libellé |
| Condition (si… alors… sinon) | Activité = si Colonne contient « ASSURANCE » alors Courtage sinon CIF |
| Valeur de section (propagée jusqu'à la section suivante) | Le nom du produit figure sur une ligne d'en-tête au-dessus de ses lignes : propagez-le sur chacune d'elles |

La colonne calculée s'utilise ensuite comme n'importe quelle colonne dans le mapping.

### Filtres de lignes

Excluez des lignes ou arrêtez la lecture à une ligne donnée, d'après le contenu d'une colonne :

- Opérateurs : *contient*, *ne contient pas*, *est égal à*, *est différent de*, *commence par*, *ne commence pas par*
- Actions : **Exclure la ligne** (sous-totaux, lignes de commentaire) ou **Arrêter la lecture à cette ligne** (bloc « Total » en fin de relevé)

## Valider

Les erreurs de validation s'affichent en bas de l'étape : un champ obligatoire de section active non mappé, un format de date incohérent… Corrigez puis **Continuer**.

**Sauvegarder la configuration** mémorise l'ensemble (colonnes, modes, options avancées, réglages Excel) pour les prochains bordereaux du même partenaire. Si vous ne l'avez pas fait, l'assistant vous le propose avant de lancer l'import.

## Prochaine étape

→ [Configuration produits et types](/features/import/pre-analysis)
