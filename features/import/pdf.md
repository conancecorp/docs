# Import depuis un PDF

Beaucoup de partenaires envoient leurs relevés en PDF. L'**extraction PDF** convertit un PDF en tableau éditable, puis en CSV importable par l'assistant habituel.

Accès : déposez un `.pdf` dans l'[assistant d'import](/features/import/upload) et cliquez sur **Extraire le PDF**, ou ouvrez directement la page **Extraction PDF** depuis l'import.

## Le principe : gratuit d'abord, IA si nécessaire

L'extraction procède par étapes, de la moins coûteuse à la plus coûteuse, et **ne débite jamais de crédit sans votre accord** :

| Étape | Moteur | Coût | Quand |
|-------|--------|------|-------|
| 1 | Lecture des tableaux réglés du PDF (frontières de colonnes exactes) | Gratuit | PDF natifs à tableaux tracés — la majorité des bordereaux |
| 2 | Reconnaissance de structure locale (OCR + détection de tableaux) | Gratuit | PDF scannés, tableaux sans lignes |
| 3 | Lecture par un modèle d'IA | **Crédits IA**, après confirmation | Quand les deux premières étapes échouent, ou pour relancer avec des précisions |

Si l'extraction automatique n'a pas suffi, une carte **L'extraction automatique n'a pas suffi** affiche la raison et le **devis en crédits**. Rien n'est débité tant que vous n'avez pas cliqué sur **Extraire avec l'IA**. Le débit n'a lieu qu'en cas de succès.

::: info Fonctionnalités IA
L'étape 3 nécessite que les [fonctionnalités IA](/settings/ai-features) soient activées pour le cabinet et qu'il dispose de [crédits](/company/ai-credits). Le bouton reste visible sinon : il explique comment activer, au lieu d'échouer.
:::

Limite : 50 pages par PDF.

## Déroulement

1. **Déposez le PDF** — relevé de commissions, liste de contrats, tout document à tableau
2. **Extraire les données** : la progression s'affiche, page par page
3. **Vérifiez et corrigez le tableau** dans l'éditeur : cellules modifiables, ajout / suppression de lignes et de colonnes, renommage des colonnes. Les modifications sont enregistrées automatiquement
4. Choisissez la sortie :
   - **Enregistrer le CSV** : le fichier est déposé dans le [Stockage](/features/storage), catégorie *Extractions*
   - **Utiliser pour un import** : le CSV est envoyé à l'assistant d'import, étape Mapping

**Visualiser le PDF** affiche le document source à côté du tableau pour comparer.

## Relancer avec des précisions

Si le tableau lu est incorrect (colonne mal découpée, dates mal interprétées…), **Relancer avec des précisions** vous laisse écrire vos remarques en français (« la colonne Montant a été mal lue », « les dates sont au format MM/AAAA »). Le modèle reçoit sa lecture précédente, vos corrections et vos remarques.

Cette relance passe par l'IA : elle est **facturée en crédits** (devis affiché sur le bouton).

Chaque relance crée une **version**. **Versions (N)** permet de revenir à une version précédente et de la **charger**.

## Profils d'extraction

Un profil mémorise les **transformations** que vous avez appliquées au tableau (renommage, découpage, fusion, suppression de colonnes) pour les **rejouer gratuitement** sur les prochains PDF du même type.

### Créer un profil

Au moment d'**Enregistrer le CSV** ou d'**Utiliser pour un import**, si vous avez modifié le tableau, Conance propose **Mémoriser ces transformations ?** :

- **Nom du profil** (ex. « NORTIA — Bordereau mouvements »)
- **Partenaire associé** (optionnel — aide au choix lors des prochains imports)
- **Règles détectées** : les transformations inférées de vos modifications, visibles et modifiables
- **Consignes IA** : si vous avez relancé avec des précisions, elles sont mémorisées et fusionnées en une seule consigne

### Appliquer un profil

Au prochain PDF, si la structure des colonnes correspond à un profil connu, la fenêtre **Profil d'extraction disponible** propose :

| Bouton | Effet | Coût |
|--------|-------|------|
| **Appliquer** / **Règles seules** | Rejoue les transformations mémorisées | Gratuit |
| **Règles + IA** | Rejoue les règles **et** les consignes IA mémorisées, en un seul appel | Crédits (devis affiché) |
| **Ignorer** | N'applique rien | — |

Un profil n'est **jamais appliqué silencieusement**.

### Gérer les profils

**Import → Configurations → Profils d'extraction PDF** : renommer, modifier les consignes IA, supprimer. Un profil peut être lié à une [configuration d'import](/features/import/saved-configs) : quand l'import vient d'un PDF avec profil, la configuration est pré-chargée.

## Bulletin de souscription

L'extraction décrite ici rend des **tableaux**. Pour lire un **bulletin de souscription** et en tirer une [commission attendue](/features/pilotage/expected-commissions#declarer-depuis-un-bulletin-de-souscription), utilisez le bouton **Depuis un document** de la page Pilotage : c'est un autre mode de lecture (champs nommés), facturé dès le premier appel.

## Conservation

- Le **PDF** et le **CSV** produits restent dans le Stockage tant que vous ne les supprimez pas.
- Les données intermédiaires de l'extraction (tableau éditable, versions) sont purgées 30 jours après import du CSV, ou 90 jours si le CSV n'a jamais été importé.
- L'historique de facturation est conservé dans l'onglet [Intelligence Artificielle](/company/ai-credits#suivre-la-consommation) de la gestion d'entreprise.
