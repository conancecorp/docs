# Conservation des imports

Combien de temps le cabinet garde ses brouillons d'import, les fichiers d'origine de ses imports, et la possibilité d'annuler entièrement un import. Les durées s'appliquent **chaque nuit**.

*Paramètres → Conservation des imports* (ou le menu ⋯ de l'[historique des imports](/features/import/history))

Réservé aux personnes qui ont la permission `import:retention` : l'administrateur de l'entreprise l'a d'office, et elle peut être ajoutée à un [rôle](/company/roles).

## Les trois durées

| Réglage | Choix | Par défaut | Ce qui se passe au-delà |
|---------|-------|------------|-------------------------|
| **Brouillons non repris** | 7, 30 ou 90 jours | 30 jours | Le fichier déposé dont l'import n'a jamais été lancé est supprimé, avec ses lignes. Rien n'avait été importé |
| **Fichiers d'origine des imports terminés** | 1 an, 3 ans, 5 ans ou toujours | Toujours | Seul le fichier est retiré du stockage. L'import reste dans l'historique **et reste annulable** : l'annulation n'a pas besoin du fichier |
| **Annulation complète possible pendant** | 3 mois, 6 mois ou 1 an | 1 an | L'annulation d'un import ne retire plus que ses **commissions** ; contrats, clients et conseillers qu'il a créés ou modifiés restent en place |

Un import terminé ne quitte **jamais** l'historique : sa ligne dit d'où viennent ses commissions.

::: tip Raccourcir l'annulation complète
Une fois une période clôturée en comptabilité, un délai plus court évite qu'un import de cette période soit défait entièrement par erreur.
:::

## Aperçu avant d'enregistrer

Sous les réglages, **Cette nuit** dit ce que la prochaine nuit fera avec les durées choisies : brouillons supprimés, fichiers retirés du stockage (et la place qu'ils occupent), imports qui passeront en annulation partielle. Rien n'est appliqué avant **Enregistrer**, et rien avant la nuit suivante.

Les fichiers retirés comptent encore dans le [quota de stockage](/company/subscription#quotas-et-retention) pendant 30 jours, comme toute suppression.
