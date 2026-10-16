# Export de données

La page **Export** produit des fichiers à partir de vos commissions filtrées, un tableau croisé dynamique pour l'analyse, l'état de votre portefeuille de contrats, la synthèse et les relevés de vos conseillers, et les écritures comptables pour votre expert-comptable. Chaque export est historisé et re-téléchargeable.

## Modes d'export

| Mode | Contenu | Formats |
|------|---------|---------|
| **Commissions** | Une ligne par commission filtrée | CSV, Excel, PDF |
| **Tableau** | Tableau croisé dynamique, avec détail par cellule | CSV, Excel, PDF |
| **Comptable** | Écritures comptables | FEC, CSV |
| **Contrats** | Le portefeuille, une ligne par contrat | CSV, Excel, PDF |
| **Conseillers** | Synthèse par conseiller et relevé de chaque conseiller | CSV, Excel, PDF |

## Formats

| Format | Pour quoi faire |
|--------|-----------------|
| **CSV** | Les données brutes, séparateur point-virgule, pour un autre logiciel. Les montants gardent toutes leurs décimales. |
| **Excel** | Un classeur prêt à filtrer et à additionner : vrais nombres, vraies dates, en-tête figé, filtres posés sur les colonnes. Les montants s'affichent au centime mais gardent toute leur précision. |
| **PDF** | Un document à transmettre ou imprimer, **au nom et au logo de votre cabinet** (le logo se règle dans [Gestion entreprise › Informations](/company/#logo-du-cabinet)). Une mention discrète « Généré avec Conance » figure en pied de page. |

Le PDF garde l'essentiel des colonnes pour tenir sur une page en largeur ; le détail complet est dans le CSV et l'Excel. Au-delà de **10 000 lignes**, le PDF n'est pas proposé : choisissez Excel ou affinez les filtres.

## Export des commissions

1. Choisissez le mode **Commissions**
2. Appliquez les [filtres](/features/commissions#filtres) — les mêmes que sur la page Commissions : période, conseiller, entité, type et nature d'opération, activité, type de produit, partenaire, détail partenaire, n° de facture, fichier d'import, libellé période, code apporteur, n° de contrat
3. La barre récapitulative affiche le **nombre de commissions** et le **montant total** du périmètre, ainsi que la plage de dates
4. Choisissez le **Format** (CSV, Excel ou PDF), puis **Exporter**

Le bouton **Exporter** de la page Commissions arrive ici avec les filtres déjà posés.

### Contenu du fichier

Une ligne par commission : Date, Date modification, N° Contrat, Alias N° Contrat, Client, Conseiller, Partenaire, Détail partenaire, Type, Nature, Produit, Type de produit, Activité, Code ISIN, Facture, Période, Code apporteur, Montant, Assiette, Taux. Le PDF garde la date, le contrat, le client, le conseiller, le partenaire, la nature, le produit, la période et le montant, avec le total.

Le CSV s'ouvre dans Excel, Google Sheets ou LibreOffice. Si les accents s'affichent mal dans Excel, passez par *Données → À partir d'un fichier texte/CSV* et choisissez l'encodage UTF-8 — ou exportez directement en **Excel**.

## Tableau croisé dynamique

Le mode **Tableau** agrège les commissions selon trois axes que vous choisissez :

| Sélecteur | Options |
|-----------|---------|
| Lignes | Contrat, Client, Partenaire, Facture / Partenaire, Activité / Nature, Activité, Nature, Conseiller, Période, Type de produit, N° Facture |
| Colonnes | Les mêmes, sauf Contrat et Client |
| Valeur | Montant cumulé, Nombre de commissions |

Le tableau se calcule dès les trois axes choisis, avec une ligne et une colonne **TOTAL**. Les filtres de commissions s'appliquent aussi.

En lignes, **Contrat** affiche le numéro suivi du client (« AV-102938 · Jean Durand ») ; **Client** regroupe tous les contrats d'un même client. Contrat et Client ne se placent pas en colonnes : il y en aurait des centaines.

Un clic sur une **cellule** ouvre le détail des commissions qui la composent (facture, contrat, partenaire, activité, nature, montant, date), avec le montant total copiable.

**Copier** place la page affichée dans le presse-papier. **Exporter** propose CSV, Excel ou PDF : le fichier contient le tableau **entier** (toutes les lignes, pas seulement la page affichée), dans l'ordre de colonnes choisi à l'écran, et rejoint l'historique des exports.

::: tip Repérer un contrat qui ne paie plus
Lignes = *Contrat*, colonnes = *Période*, valeur = *Montant cumulé* : une case vide au milieu d'une ligne signale une échéance qui n'est pas arrivée.
:::

::: tip Rapprochement de facturation
Lignes = *Facture / Partenaire*, colonnes = *Nature*, valeur = *Montant cumulé* : vous obtenez, par bordereau, la ventilation à comparer au relevé du partenaire.
:::

## Export des contrats

Le mode **Contrats** produit l'état du portefeuille : **une ligne par contrat**, y compris ceux qui n'ont reçu aucune commission sur la période — les repérer fait partie de l'intérêt de l'export.

1. Choisissez la **Période** : *Mois*, *Trimestre*, *Année* (avec l'année) ou *Tout* (tout l'historique). Par défaut : l'année en cours.
2. Restreignez si besoin par **Partenaires**, **Conseillers**, **Entités** et **Statuts** (« Sans conseiller », « Sans entité » désignent les contrats qui n'en ont pas).
3. Vérifiez l'**aperçu** : nombre de contrats, commissions de la période, contrats sans commission sur la période.
4. Choisissez le **Format**, puis **Exporter**.

La période est celle du **bordereau** (à défaut, la date de la commission), comme au [tableau de bord](/features/dashboard) : les totaux concordent.

| Colonne | Contenu |
|---------|---------|
| N° contrat, Alias, Client, Conseiller, Partenaire, Détail partenaire, Produit, Type de produit, Entité, Statut, Date d'ajout | La fiche du contrat |
| Commissions, Nombre de commissions | Sur la période |
| *dont* (une colonne par nature) | Les commissions de la période, nature par nature |
| Encours retenu | L'encours retenu par le partenaire en **fin de période** : l'assiette du dernier relevé connu, jamais la somme des relevés |
| Production | L'assiette des droits d'entrée de la période |
| Dernière commission | Le mois de la dernière commission reçue, toutes périodes confondues |
| Rythme, Prévisionnel, Prochain versement attendu | Repris du [prévisionnel](/features/pilotage/forecast) : rythme observé (ou corrigé), état (observé, fragile, corrigé, en retard…) et mois du prochain versement attendu |

Le PDF, en paysage, garde le numéro, le client, le conseiller, le partenaire, le statut, les commissions, l'encours retenu, la production, la dernière commission et le prochain versement.

## Export des conseillers

Le mode **Conseillers** produit, pour la période choisie, une **synthèse** qui compare les conseillers et un **relevé** par conseiller, à lui transmettre. Mêmes choix de période et de filtres que l'export des contrats ; par défaut, le **mois écoulé**.

**La synthèse** — une ligne par conseiller : contrats et clients en portefeuille, contrats commissionnés, encours retenu en fin de période, production, commissions de la période (au total et par nature), commissions de la **période précédente** de même durée et **évolution**. Les contrats sans conseiller ont leur ligne, *Sans conseiller* : la somme des lignes est le total du cabinet.

**Le relevé d'un conseiller** — ses chiffres clés (commissions, nombre de commissions, contrats commissionnés, encours retenu, production), le total **par partenaire** et **par nature**, puis le **détail des commissions** de ses contrats (période, date, contrat, client, partenaire, produit, nature, montant). Seuls les conseillers qui ont des commissions sur la période ont un relevé.

| Format | Contenu |
|--------|---------|
| CSV | La synthèse |
| Excel | La synthèse, puis un onglet par conseiller avec son relevé |
| PDF | Une archive **zip** : la synthèse et un PDF par conseiller (« Relevé Jean Martin 2026-09.pdf »), prêts à envoyer |

::: info Montants bruts
Les montants sont les commissions reçues par le cabinet, sans application d'un taux de rétrocession.
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

Les exports lancés depuis le [Pilotage](/features/pilotage/) (échéancier du prévisionnel, commissions attendues, répartition de l'encours) utilisent les mêmes formats et rejoignent aussi l'historique ; l'export de la [FRA CIF](/features/reglementaire#exporter) se télécharge directement, en Excel ou en PDF.

L'[export complet des données](/settings/data-management#export-et-portabilite), préparé en tâche de fond, y figure aussi une fois prêt (type *Export complet*).

L'onglet **Historique** liste les exports réalisés : date, type, utilisateur, nombre d'enregistrements, format (CSV, Excel, PDF, ZIP pour les relevés des conseillers), filtres appliqués et période. Chaque export se **re-télécharge** ; le fichier est aussi visible dans [Fichiers](/features/storage), catégorie *Exports*.

**Gérer l'historique** nettoie les exports antérieurs à une période choisie.

## Permission

L'export requiert la permission `commissions:export` (les rôles en lecture seule peuvent en être privés).
