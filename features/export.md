# Export de données

La page **Export** produit des fichiers à partir de vos commissions filtrées, et un tableau croisé dynamique pour l'analyse. Chaque export est historisé et re-téléchargeable.

## Modes d'export

| Mode | Contenu | État |
|------|---------|------|
| **Commissions** | Export CSV des commissions filtrées | Disponible |
| **Tableau** | Tableau croisé dynamique, avec détail par cellule | Disponible |
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

## Historique des exports

L'onglet **Historique** liste les exports réalisés : date, utilisateur, nombre d'enregistrements, filtres appliqués. Chaque export se **re-télécharge** ; le fichier est aussi visible dans le [Stockage](/features/storage), catégorie *Exports*.

**Gérer l'historique** nettoie les exports antérieurs à une période choisie.

## Permission

L'export requiert la permission `commissions:export` (les rôles en lecture seule peuvent en être privés).
