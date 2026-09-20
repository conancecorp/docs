# Configurations sauvegardées

Une configuration mémorise tout le [mapping](/features/import/mapping) d'un format de fichier. Sauvegardez-la une fois par partenaire et par type de relevé ; les bordereaux suivants s'importent sans refaire le travail.

## Ce qui est sauvegardé

- Les associations colonnes → champs, pour les quatre sections
- Les modes **Manuel / Colonne** et les valeurs fixes (partenaire, produit, entité, détail partenaire, type d'opération)
- Le format de date, l'option *commissions sans numéro de contrat*, la période
- Les **colonnes calculées** et **filtres de lignes**
- Les réglages Excel (onglet, ligne et colonne de départ, en-têtes) ou CSV
- Le lien vers un [profil d'extraction PDF](/features/import/pdf#profils-d-extraction), si l'import venait d'un PDF

## Sauvegarder

À la fin de l'étape Mapping, **Sauvegarder la configuration** :

1. Donnez un nom explicite (ex. « Generali — Relevé mensuel encours »)
2. Vérifiez le **résumé** (colonnes mappées, sections activées, partenaire, fichier Excel…)
3. **Sauvegarder**

Si vous lancez l'import sans avoir sauvegardé, l'assistant vous le propose une dernière fois.

## Charger

À l'étape Mapping, **Charger une configuration** :

- Conance vérifie la **compatibilité** de chaque configuration avec les colonnes du fichier et ne propose que celles qui correspondent
- Les **modèles Conance** — configurations fournies pour des formats de partenaires connus — apparaissent avec une étiquette dédiée
- **Commencer sans configuration** revient au mapping vide

Quand un modèle est chargé, le détail du mapping est replié : ouvrez-le seulement pour vérifier ou ajuster.

::: warning Vérifiez malgré tout
Un partenaire peut changer son format sans prévenir. Après chargement, jetez un œil à l'aperçu des colonnes avant de continuer.
:::

## Gérer

**Import → Configurations** regroupe :

| Bloc | Actions |
|------|---------|
| Configurations d'import sauvegardées | Rechercher, **renommer**, **supprimer** |
| Profils d'extraction PDF | Voir [Import depuis un PDF](/features/import/pdf#gerer-les-profils) |
| Associations de contrats mémorisées | Voir [Correspondances de contrats](/features/import/smart-matching#associations-memorisees) |

Pour **modifier** une configuration : chargez-la, ajustez le mapping, sauvegardez sous le même nom.

## Partage

Les configurations sont partagées au niveau du cabinet : tout membre autorisé à importer peut utiliser et modifier celles de ses collègues. Convenez d'une convention de nommage (partenaire — type de relevé — variante).

## Bonnes pratiques

1. **Une configuration par format**, pas par fichier
2. **Testez** sur un premier import avant de sauvegarder
3. **Supprimez** les configurations obsolètes quand un partenaire change de format
