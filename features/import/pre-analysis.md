# Configuration produits et types d'opération

Troisième étape : Conance a lu le fichier et en a extrait les **produits** et les **types d'opération** qu'il contient. Avant d'importer, il faut dire à quoi ils correspondent.

## Produits détectés

Pour chaque produit lu dans la colonne Produit, indiquez :

| Champ | Description |
|-------|-------------|
| Type | OPCVM, SCPI, Assurance-vie, FCPI, FIP, PER, FCPR, EMTN, Autres — ou un [type personnalisé](/settings/custom-products) |
| Activité | CIF, Courtage — ou une [activité personnalisée](/settings/custom-activities) |

Les produits déjà connus pour ce partenaire sont pré-remplis (et, avec l'IA, les nouveaux produits aussi : voir [Propositions de l'IA](#propositions-de-l-ia)). Le compteur en tête (**total / configurés / à configurer**) suit votre avancement.

Outils :

- **Recherche** par nom, filtre par partenaire ;
- **Édition en masse** : sélectionnez plusieurs produits, choisissez type et activité, **Appliquer** ;
- création d'un type ou d'une activité à la volée si la valeur n'existe pas encore.

## Types d'opération détectés

Pour chaque libellé lu dans la colonne Type d'opération, choisissez la **nature** Conance :

| Nature | Description |
|--------|-------------|
| Encours | Commission récurrente sur l'encours |
| Droit d'entrée | Commission à la souscription ou au versement |
| Structurés | Commission sur produits structurés |
| Avances/Reprises | Avances sur commissions, reprises, régularisations |
| Honoraires | Rémunération facturée au client |
| *Personnalisée* | Toute nature créée par le cabinet — voir [Natures d'opération](/settings/operation-natures) |

Le bouton à côté du sélecteur crée une **nouvelle nature** directement (ex. « Rétrocession apporteur ») puis la sélectionne.

Les correspondances libellé → nature sont mémorisées par partenaire : au prochain bordereau, elles seront déjà remplies.

→ [Types d'opération](/settings/operation-types)

## Propositions de l'IA

Si votre cabinet a activé les [fonctionnalités IA](/settings/ai-features), Conance propose ce que la base ne connaît pas encore :

- la **nature** d'un libellé jamais rencontré ;
- le **type** et l'**activité** d'un nouveau produit ;
- le **partenaire** déjà enregistré qui correspond à un nom écrit autrement dans le fichier (« NORTIA VIE » pour Nortia).

Une valeur proposée par l'IA est **encadrée du dégradé IA**, ce qui la distingue d'une valeur reprise de la base. Elle reste modifiable : dès que vous la changez, le cadre disparaît. Seules les propositions dont l'IA est sûre sont affichées ; les autres champs restent à remplir.

Un partenaire proposé se refuse avec la **croix** : le nom du fichier devient alors un nouveau partenaire, comme avant. Gardé, ce nom est enregistré comme **alias** du partenaire, et les bordereaux suivants le reconnaîtront directement.

## Scinder les produits multi-activités

Certains partenaires regroupent sous un même nom de produit des lignes CIF et des lignes Courtage. Si vous avez renseigné une **colonne discriminante d'activité** au [mapping](/features/import/mapping#contrats), Conance compte, pour chaque produit, les valeurs différentes de cette colonne **dans le fichier importé** :

- **une seule valeur** : le produit se configure comme les autres, dans le tableau (type et activité) ;
- **deux valeurs ou plus** : il est marqué **À scinder**, et l'étape **3b** apparaît après le tableau.

Ce compte est refait à chaque import. Un produit configuré normalement, parce que le fichier ne contenait qu'une valeur, sera proposé à la scission le jour où un fichier en contiendra plusieurs.

À l'étape 3b :

1. Le produit est présenté avec les **valeurs distinctes** trouvées dans la colonne discriminante
2. Créez des **buckets** : chacun reçoit une activité, un type, et les valeurs qu'il regroupe
3. **Valider et lancer l'import**

Chaque bucket devient un produit distinct, et Conance retient les valeurs qui lui reviennent pour les imports suivants. Les buckets marqués **Déjà en base** reprennent un produit existant :

- **une scission déjà enregistrée** : elle reste modifiable. Si toutes les valeurs du fichier y sont déjà rangées, le produit est marqué **Déjà scindé** dans le tableau et il suffit de valider ;
- **le produit tel qu'il existe, pas encore scindé** (importé jusque-là avec une seule valeur) : il arrive avec son activité et son type. Cochez les valeurs qui lui reviennent : il garde son historique, et seuls les autres buckets créent de nouveaux produits. Laissé sans valeur, il reste à part et un nouveau produit est créé à côté.

## Ignorer l'étape

**Ignorer cette étape** lance l'import sans qualifier produits et types. Les commissions concernées seront importées **sans nature** et les produits sans type ni activité — vous pourrez les corriger ensuite via une [modification en masse](/features/bulk-actions), mais elles n'apparaîtront correctement ni dans les répartitions du tableau de bord ni dans la [FRA](/features/reglementaire) tant que ce n'est pas fait.

## Prochaine étape

**Continuer l'import** lance l'étape 4. Si des numéros de contrat ressemblent à des contrats existants sans leur être identiques, l'assistant vous demandera de trancher.

→ [Correspondances de contrats](/features/import/smart-matching)
