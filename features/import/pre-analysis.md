# Configuration produits et types d'opération

Troisième étape : Conance a lu le fichier et en a extrait les **produits** et les **types d'opération** qu'il contient. Avant d'importer, il faut dire à quoi ils correspondent.

## Produits détectés

Pour chaque produit lu dans la colonne Produit, indiquez :

| Champ | Description |
|-------|-------------|
| Type | OPCVM, SCPI, Assurance-vie, FCPI, FIP, PER, FCPR, EMTN, Autres — ou un [type personnalisé](/settings/custom-products) |
| Activité | CIF, Courtage — ou une [activité personnalisée](/settings/custom-activities) |

Les produits déjà connus pour ce partenaire sont pré-remplis. Le compteur en tête (**total / configurés / à configurer**) suit votre avancement.

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

## Scinder les produits multi-activités

Certains partenaires regroupent sous un même nom de produit des lignes CIF et des lignes Courtage. Si vous avez renseigné une **colonne discriminante d'activité** au [mapping](/features/import/mapping#contrats), l'étape **3b** apparaît pour ces produits :

1. Le produit est présenté avec les **valeurs distinctes** trouvées dans la colonne discriminante
2. Créez des **buckets** : chacun reçoit une activité, un type, et les valeurs qu'il regroupe
3. **Valider et lancer l'import**

Chaque bucket devient un produit distinct. Une scission déjà enregistrée pour ce produit est reprise (**Déjà en base**) et reste modifiable.

## Ignorer l'étape

**Ignorer cette étape** lance l'import sans qualifier produits et types. Les commissions concernées seront importées **sans nature** et les produits sans type ni activité — vous pourrez les corriger ensuite via une [modification en masse](/features/bulk-actions), mais elles n'apparaîtront correctement ni dans les répartitions du tableau de bord ni dans la [FRA](/features/reglementaire) tant que ce n'est pas fait.

## Prochaine étape

**Continuer l'import** lance l'étape 4. Si des numéros de contrat ressemblent à des contrats existants sans leur être identiques, l'assistant vous demandera de trancher.

→ [Correspondances de contrats](/features/import/smart-matching)
