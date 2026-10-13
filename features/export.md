# Export de données

La page **Export** produit des fichiers à partir de vos commissions filtrées, un tableau croisé dynamique pour l'analyse et les écritures comptables pour votre expert-comptable. Chaque export est historisé et re-téléchargeable.

## Modes d'export

| Mode | Contenu | État |
|------|---------|------|
| **Commissions** | Export CSV des commissions filtrées | Disponible |
| **Tableau** | Tableau croisé dynamique, avec détail par cellule | Disponible |
| **Comptable** | Écritures comptables au format FEC ou CSV | Disponible |
| Contrats, Conseillers | Exports dédiés | À venir |

## Export des commissions

1. Choisissez le mode **Commissions**
2. Appliquez les [filtres](/features/commissions#filtres) — les mêmes que sur la page Commissions : période, conseiller, entité, type et nature d'opération, activité, type de produit, partenaire, détail partenaire, n° de facture, fichier d'import, libellé période, code apporteur, n° de contrat
3. La barre récapitulative affiche le **nombre de commissions** et le **montant total** du périmètre, ainsi que la plage de dates
4. **Exporter en CSV**

Le bouton **Exporter** de la page Commissions arrive ici avec les filtres déjà posés.

### Contenu du fichier

Une ligne par commission, séparateur point-virgule : Date, Date modification, N° Contrat, Alias N° Contrat, Client, Conseiller, Partenaire, Détail partenaire, Type, Nature, Produit, Type de produit, Activité, Code ISIN, Facture, Période, Code apporteur, Montant, Assiette, Taux.

Le CSV s'ouvre dans Excel, Google Sheets ou LibreOffice. Si les accents s'affichent mal dans Excel, passez par *Données → À partir d'un fichier texte/CSV* et choisissez l'encodage UTF-8.

## Tableau croisé dynamique

Le mode **Tableau** agrège les commissions selon trois axes que vous choisissez :

| Sélecteur | Options |
|-----------|---------|
| Lignes | Partenaire, Facture / Partenaire, Activité / Nature, Activité, Nature, Conseiller, Période, Type de produit, N° Facture |
| Colonnes | Les mêmes |
| Valeur | Montant cumulé, Nombre de commissions |

Le tableau se calcule dès les trois axes choisis, avec une ligne et une colonne **TOTAL**. Les filtres de commissions s'appliquent aussi.

Un clic sur une **cellule** ouvre le détail des commissions qui la composent (facture, contrat, partenaire, activité, nature, montant, date), avec le montant total copiable.

::: tip Rapprochement de facturation
Lignes = *Facture / Partenaire*, colonnes = *Nature*, valeur = *Montant cumulé* : vous obtenez, par bordereau, la ventilation à comparer au relevé du partenaire.
:::

## Export comptable

Le mode **Comptable** produit les **écritures comptables** de vos commissions : une écriture par commission datée dans la période (date du bordereau), le compte tiers du partenaire contre le compte de produit de sa nature. Le fichier se remet à votre expert-comptable ou s'importe dans Pennylane.

1. Choisissez l'**Année**, puis la **Période** : *Mois* (avec le mois), *Trimestre* (T1 à T4) ou *Année*. Par défaut : le mois précédent, celui qu'on clôture.
2. Choisissez le **Format** :
   - **FEC** — le format légal, importable dans Pennylane et dans tout logiciel comptable ;
   - **CSV** — les mêmes écritures, lisibles dans Excel, avec la nature, le partenaire, le contrat et le client.
3. Vérifiez l'**aperçu** : total des commissions, nombre de commissions, nombre de lignes d'écriture, et la ventilation par compte (compte, libellé, montant).
4. **Exporter**

Une nature d'opération sans compte dédié est imputée sur le **compte de produit par défaut** : l'aperçu le signale, avec un lien vers le plan de comptes.

### Plan de comptes

Le bouton **Plan de comptes** (permission de modifier les natures d'opération) règle :

| Réglage | Rôle |
|---------|------|
| **Code journal**, **Libellé du journal** | Journal des écritures |
| **Compte tiers (partenaires)** | Compte de contrepartie des commissions |
| **Un auxiliaire par partenaire** | Renseigne le compte auxiliaire (CompAuxNum / CompAuxLib) avec le code et le nom du partenaire qui verse la commission |
| **Compte de TVA collectée** | Utilisé quand une nature a un taux de TVA |
| **Compte de produit par défaut** | Pour les natures sans compte dédié |
| **SIREN** | Nom réglementaire du fichier FEC (SIRENFECAAAAMMJJ.txt) ; facultatif |
| Compte par nature | Compte, libellé et TVA de chaque nature ; un taux de TVA supérieur à 0 lit le montant comme TTC et ventile HT / TVA |

::: tip Faites valider le plan de comptes
Les comptes proposés au départ sont un point de départ courant pour un cabinet, pas une règle : faites-les valider par votre expert-comptable avant le premier envoi.
:::

## Historique des exports

L'onglet **Historique** liste les exports réalisés : date, utilisateur, nombre d'enregistrements, filtres appliqués. Chaque export se **re-télécharge** ; le fichier est aussi visible dans [Fichiers](/features/storage), catégorie *Exports*.

**Gérer l'historique** nettoie les exports antérieurs à une période choisie.

## Permission

L'export requiert la permission `commissions:export` (les rôles en lecture seule peuvent en être privés).
