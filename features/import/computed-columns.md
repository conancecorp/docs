# Colonnes calculées et filtres de lignes

Un bordereau n'a pas toujours la colonne dont l'import a besoin : le numéro de contrat est collé au nom du client, la commission est répartie sur deux colonnes, le libellé d'opération change à chaque trimestre… Les **colonnes calculées** fabriquent cette colonne à partir de celles du fichier. Les **filtres de lignes** écartent les lignes qui ne sont pas des commissions (totaux, sous-totaux, lignes de regroupement).

Le fichier n'est jamais modifié : ces réglages sont rejoués à chaque import et enregistrés avec la [configuration](/features/import/saved-configs). Au prochain bordereau du même partenaire, il n'y a plus rien à refaire.

## Où les trouver

- **Pendant un import**, à l'étape [Mapping](/features/import/mapping) : tout en bas, dépliez **Options avancées**.
- **Dans la fiche d'une configuration** (Import › Configurations) : section **Options avancées**, après **Modifier**. Un modèle Conance ne se modifie pas : **Dupliquez**-le d'abord.

## Créer une colonne calculée

1. Cliquez sur **Ajouter une colonne calculée**.
2. Donnez-lui un nom dans **Nom de la nouvelle colonne**. C'est ce nom que vous choisirez ensuite dans le mapping. Il doit être différent des colonnes du fichier.
3. Choisissez le calcul dans la liste, puis ses réglages : colonne(s) source(s), séparateur, valeur…
4. Utilisez-la dans le mapping : elle apparaît dans les listes de colonnes avec la mention *calculée*, comme une colonne du fichier.
5. Pendant un import, cliquez sur **Prévisualiser le résultat** : les premières lignes du fichier s'affichent avec les colonnes calculées (repérées par une icône de calculatrice) et le nombre de lignes avant et après les filtres.

::: tip Les espaces comptent
Dans un séparateur ou un texte à retirer, un espace est un caractère comme un autre : « ␣-␣ » (espace, tiret, espace) n'est pas « - ». Sous le champ, l'écran affiche les espaces saisis : *Séparateur saisi : « ␣-␣ »*.
:::

## Les calculs disponibles

### Somme, moyenne, produit de colonnes

Choisissez les **colonnes sources**, puis éventuellement un coefficient : **× Multiplier par** ou **÷ Diviser par**, et sa valeur.

Les nombres au format français sont lus tels quels (`1 234,56`, `12 %`, `30 €`). Si une cellule source est vide ou n'est pas un nombre, le résultat de la ligne est vide.

**Exemple : la commission est répartie sur deux colonnes.** Somme de *Com. encours* et *Com. OPCVM*, nommée « Commission totale » :

| Com. encours | Com. OPCVM | Commission totale |
|---|---|---|
| 120,50 | 30 | 150,50 |
| 1 000 | 15,5 | 1 015,50 |
| *(vide)* | 8 | *(vide)* |

**Exemple : l'encours moyen du trimestre.** Moyenne de *Encours M1*, *Encours M2* et *Encours M3* : 100 000, 110 000 et 120 000 donnent 110 000.

**Exemple : un taux annuel ramené à la période.** Produit de *Taux annuel* et *Nb jours*, ÷ Diviser par 365 : 0,80 × 90 ÷ 365 donne 0,197.

### Concaténation

Choisissez les **colonnes sources** dans l'ordre voulu et un **séparateur** (un espace par défaut).

**Exemple : le nom du client est sur deux colonnes.** Concaténation de *Nom* et *Prénom* :

| Nom | Prénom | Client |
|---|---|---|
| DUPONT | Jean | DUPONT Jean |
| MARTIN | *(vide)* | MARTIN |

Le séparateur est ajouté même quand une colonne est vide. Avec le séparateur « ␣-␣ », la deuxième ligne donnerait « MARTIN - ».

### Texte avant / après un séparateur

Choisissez la **colonne source** et le **séparateur**. Le texte est coupé à la **première** occurrence du séparateur. Les majuscules comptent : « T » n'est pas « t ».

**Exemple : le numéro de contrat est collé au nom du client.** Dans la colonne *Compte*, « Texte avant un séparateur » et « Texte après un séparateur » avec le séparateur « ␣-␣ » :

| Compte | N° contrat (texte avant) | Client (texte après) |
|---|---|---|
| 12345 - DUPONT Jean | 12345 | DUPONT Jean |
| 67890 | 67890 | *(vide)* |

Quand le séparateur est absent, « avant » renvoie tout le texte et « après » ne renvoie rien.

### Premier mot

Le premier mot de la **colonne source**.

**Exemple : le produit est en tête du code du contrat.** « PERCOI 59322 » donne « PERCOI » ; « PEI 59371 » donne « PEI ».

### Retirer un texte

Choisissez la **colonne source** et le **texte à retirer**. Dans ce texte, deux jokers remplacent chacun **un seul** caractère :

- **`#`** : n'importe quel chiffre (`T# ####` retire « T1 2026 », mais pas « TA 2026 ») ;
- **`?`** : n'importe quel caractère, lettre, chiffre ou espace (`Lot ?` retire « Lot A » et « Lot 7 »). Un `?` vaut un seul caractère : sur « Lot AB », `Lot ?` retire « Lot A » et laisse « B » ; écrivez `Lot ??` pour deux caractères.

Tous les autres caractères sont cherchés tels quels. Le texte est retiré partout où il apparaît, sans tenir compte des majuscules, et les espaces laissés autour sont fusionnés.

**Exemple : garder le même type d'opération d'un trimestre à l'autre.** Le libellé d'opération contient la période : à chaque bordereau, un nouveau type d'opération apparaîtrait à l'étape [Configuration produits et types](/features/import/pre-analysis). En retirant `T# ####` de la colonne *Opération* :

| Opération | Type d'opération |
|---|---|
| Frais de gestion conseillé T1 2026 | Frais de gestion conseillé |
| Frais de gestion conseillé T2 2026 - Blocage KYC KO | Frais de gestion conseillé - Blocage KYC KO |
| Frais de tenue de compte T4 2025 | Frais de tenue de compte |

Mappez ensuite le **Type d'opération** sur cette colonne calculée. Autres exemples : `##/####` retire un mois comme « 03/2026 » ; `T? ####` retire aussi bien « T1 2026 » que « TA 2026 ».

### Condition (si… alors… sinon)

**Si** une colonne *contient*, *ne contient pas*, *est égal à*, *est différent de*, *commence par* ou *ne commence pas par* une valeur, ou bien *est vide* ou *n'est pas vide* (sans valeur à saisir), **alors** la colonne prend la valeur d'une autre colonne ou une valeur fixe, **sinon** celle d'une autre colonne ou une valeur fixe (vide par défaut). La comparaison ne tient pas compte des majuscules.

**Exemple : une date seulement pour certaines lignes.** Si *Type* contient « chiffre d'affaires », alors la colonne *Date effet*, sinon rien :

| Type | Date effet | Date de l'événement |
|---|---|---|
| Commission sur encours | 15/01/2026 | *(vide)* |
| Commission sur chiffre d'affaires | 20/01/2026 | 20/01/2026 |

**Exemple : déduire une valeur fixe.** Si *Type* contient « encours », alors « Gestion », sinon « Acquisition ».

**Exemple : une colonne parfois vide.** Si *Prénom* est vide, alors la colonne *Nom*, sinon la colonne *Nom complet*.

### Valeur de section

Pour les bordereaux présentés par blocs, où une ligne d'en-tête (« PRODUIT : PANTHEA ») annonce les lignes qui suivent. Indiquez comment reconnaître les lignes d'en-tête (**Si** *Colonne* *commence par* « PRODUIT »), et éventuellement un séparateur pour ne garder que le texte qui le suit (« : »). La valeur est reportée sur toutes les lignes suivantes, jusqu'à la prochaine ligne d'en-tête.

| Colonne 2 | Produit |
|---|---|
| PRODUIT : PANTHEA | PANTHEA |
| C 1129 DUPONT Jean | PANTHEA |
| C 1130 MARTIN Paul | PANTHEA |
| PRODUIT : ODYSSEE | ODYSSEE |
| C 2001 LEROY Anne | ODYSSEE |

Les lignes situées avant la première ligne d'en-tête restent vides. Quand seules les lignes d'en-tête ont quelque chose dans la colonne, la condition *n'est pas vide* suffit.

## Partir d'une colonne calculée

Une colonne calculée peut se construire à partir d'une **autre colonne calculée**, à condition que celle-ci soit placée **au-dessus** d'elle dans la liste. Dans les colonnes sources, elle apparaît avec la mention *calculée*. Les colonnes calculées se calculent de haut en bas : chacune voit les colonnes du fichier et celles qui la précèdent.

C'est ce qui permet de découper un texte en plusieurs temps. **Exemple : la désignation « C 112900196 DUPONT Jean » contient le contrat et le client.**

| # | Nom de la colonne | Calcul | Résultat |
|---|---|---|---|
| 1 | Sans préfixe | Texte après « C␣ » dans *Désignation* | 112900196 DUPONT Jean |
| 2 | N° de contrat | Texte avant « ␣ » dans *Sans préfixe* (calculée) | 112900196 |
| 3 | Client | Texte après « ␣ » dans *Sans préfixe* (calculée) | DUPONT Jean |

Les colonnes 2 et 3 partent de la colonne 1. Une colonne intermédiaire comme *Sans préfixe* n'a pas besoin d'être mappée : elle ne sert qu'aux suivantes.

::: warning Renommer ou supprimer une colonne utilisée
Si vous renommez ou supprimez une colonne calculée dont une autre dépend, la suivante ne peut plus être calculée : elle est ignorée, et **Prévisualiser le résultat** l'indique en avertissement. Remettez-la à jour avant d'importer.
:::

Une colonne calculée peut aussi servir de colonne à un **filtre de lignes** (voir ci-dessous).

## Filtres de lignes

Cliquez sur **Ajouter un filtre**, puis choisissez :

- la **colonne** (du fichier ou calculée) ;
- la **condition** : *contient*, *ne contient pas*, *est égal à*, *est différent de*, *commence par*, *ne commence pas par* (sans tenir compte des majuscules), *est vide*, *n'est pas vide* ;
- la **valeur**, sauf pour *est vide* et *n'est pas vide* ;
- l'**action** : **Exclure la ligne**, ou **Arrêter la lecture à cette ligne** (cette ligne et toutes les suivantes sont ignorées).

| Besoin | Filtre |
|---|---|
| Des lignes de sous-total au milieu du relevé | *Libellé* contient « Total » → Exclure la ligne |
| Un bloc récapitulatif en fin de relevé | *Libellé* est égal à « TOTAL » → Arrêter la lecture à cette ligne |
| Ne garder que les lignes de détail | *Désignation* ne commence pas par « C␣ » → Exclure la ligne |
| Écarter les lignes sans numéro de contrat | *N° contrat* est vide → Exclure la ligne |

Les lignes entièrement vides sont retirées d'office : pas besoin de filtre pour elles. Une cellule qui ne contient que des espaces compte comme vide.

::: warning Un texte qui ne « marche » pas : vérifiez sa colonne
Dans certains relevés, les lignes de regroupement (souvent en couleur) ne sont pas dans la même colonne que les lignes de détail : la ligne « PRODUIT : … » est par exemple dans la deuxième colonne, sans titre, alors qu'elle semble alignée sous *Désignation* parce que les cellules voisines sont fusionnées. Un filtre ou une condition sur *Désignation* ne la voit pas : sa *Désignation* est vide. La couleur du texte, elle, ne change rien. Cliquez sur **Prévisualiser le résultat** pour voir dans quelle colonne se trouve chaque texte, et visez cette colonne (ici « Colonne 2 »).
:::

## Dans quel ordre tout s'applique

1. Lecture du fichier (onglet, ligne et colonne de départ).
2. Retrait des lignes entièrement vides.
3. Colonnes calculées, de haut en bas.
4. Filtres de lignes, de haut en bas.
5. Mapping, puis les coefficients **Normaliser** du taux, de l'assiette ou du montant.

Les filtres passant après les colonnes calculées, ils peuvent porter sur elles.

## Exemple complet : un bordereau présenté par produit

Certains relevés regroupent les lignes par produit, avec des lignes de regroupement et un total. La deuxième colonne n'a pas de titre dans le fichier : Conance l'appelle « Colonne 2 ».

| Désignation | Colonne 2 | Montant | Commission |
|---|---|---|---|
| Code partenaire : CABINET | | | |
| | PRODUIT : PANTHEA | | |
| C 112900196 DUPONT Jean | | 10 000 | 50,00 |
| C 113100968 MARTIN Paul | | 4 000 | 20,00 |
| Total général | | | 70,00 |

1. **Colonnes calculées**, dans cet ordre :
   - *Produit* : Valeur de section, si *Colonne 2* commence par « PRODUIT », texte après « : » ;
   - *Sans préfixe* : Texte après « C␣ » dans *Désignation* ;
   - *N° de contrat* : Texte avant « ␣ » dans *Sans préfixe* ;
   - *Client* : Texte après « ␣ » dans *Sans préfixe*.
2. **Filtre de lignes** : *Désignation* ne commence pas par « C␣ » → Exclure la ligne. Il ne reste que les deux lignes de commission.
3. **Mapping** : Numéro de contrat ← *N° de contrat*, Produit ← *Produit*, nom du client ← *Client*, Montant ← *Commission*, Base de calcul ← *Montant*.

C'est la recette du modèle Conance « NORTIA — Bordereau détaillé par produit » : chargez-le plutôt que de la refaire.

## Voir aussi

- [Mapping des données](/features/import/mapping)
- [Configurations sauvegardées](/features/import/saved-configs)
