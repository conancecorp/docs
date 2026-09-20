# Gestion des commissions

La page **Commissions** liste toutes les lignes de commission du cabinet, importées ou saisies, avec les outils de [recherche, filtre et sélection](/features/tables) communs.

## Colonnes disponibles

| Colonne | Description |
|---------|-------------|
| Date | Date de la commission |
| Date modif. | Dernière modification |
| N° Contrat | Numéro du contrat rattaché |
| Client | Titulaire du contrat |
| Conseiller | Conseiller du contrat |
| Partenaire | Compagnie ou société de gestion |
| Détail part. | [Détail partenaire](/settings/partner-details) |
| Entité | [Entité](/settings/entities) du contrat |
| Type d'opération | Libellé du partenaire |
| Nature | Nature Conance (Encours, Droit d'entrée…) |
| Produit, Type produit, Activité | Depuis le produit du contrat |
| Code ISIN | Code du support |
| Facture | Numéro de facture du bordereau |
| Période | Libellé du bordereau |
| Code apport. | Code apporteur |
| Montant | Montant de la commission |
| Assiette | Base de calcul (encours ou versement) |
| Taux | Taux appliqué |

Masquez les colonnes inutiles avec le bouton **Colonnes** ; le choix est mémorisé.

## Natures

Cinq natures sont livrées avec Conance ; le cabinet peut en ajouter dans [Natures d'opération](/settings/operation-natures).

| Nature | Description | Récurrente par défaut |
|--------|-------------|-----------------------|
| Encours | Commission récurrente sur l'encours | Oui |
| Droit d'entrée | Commission à la souscription ou au versement | Non |
| Structurés | Commission sur produits structurés | Non |
| Avances/Reprises | Avances, reprises, régularisations | Non |
| Honoraires | Rémunération facturée au client | Non |

## Filtres

| Filtre | Description |
|--------|-------------|
| Période | Plage de dates (date de la commission) |
| Conseiller, Partenaire, Détail partenaire, Entité | Par référentiel |
| Type d'opération, Nature d'opération | Libellé du partenaire ou nature Conance |
| Activité, Type de produit | Depuis le produit |
| N° Facture, N° Contrat, Code apporteur | Valeurs exactes proposées en liste |
| Fichier d'import | Toutes les commissions issues d'un fichier |
| Libellé période | Le libellé du bordereau (ex. `T1 2026`) |

Les listes de valeurs s'ajustent aux autres filtres actifs. Les filtres sont mémorisés d'une visite à l'autre.

## Actions sur une commission

| Action | Détail |
|--------|--------|
| **Voir** | Toutes les informations : contrat, client, conseiller, source d'import, dates |
| **Modifier** | Montant, date, contrat, type d'opération (qui détermine la nature), taux, base de calcul, ISIN, code apporteur, n° de facture, période |
| **Supprimer** | Confirmation requise. La ligne compte encore dans le quota pendant 30 jours ([rétention](/company/subscription#quotas-et-retention)) |

## Créer une commission manuellement

**Nouvelle Commission** : choisissez le contrat, puis renseignez montant, date, type d'opération et les champs optionnels. Utile pour les honoraires facturés au client, qui ne viennent d'aucun bordereau — la [FRA](/features/reglementaire) en a besoin.

## Actions groupées

Sélectionnez des lignes (ou tout ce qui correspond au filtre) puis :

- **Modifier** : type d'opération, code ISIN, n° de facture, code apporteur, période — un champ laissé sur *Ne pas modifier* est conservé. Si la sélection couvre plusieurs partenaires, le dialogue l'indique et présente la répartition
- **Supprimer**

→ [Actions en masse](/features/bulk-actions)

## Exporter

Le bouton **Exporter** envoie les filtres courants vers la page [Export](/features/export).

## Traçabilité

Chaque commission conserve son fichier d'import, sa date de création et de modification. Pour retirer proprement un import entier, préférez l'[annulation d'import](/features/import/undo) à une suppression en masse : elle rétablit aussi ce que l'import avait modifié ailleurs.
