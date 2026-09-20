# Questions fréquentes

## Général

### Qu'est-ce que Conance ?

Une plateforme SaaS de pilotage des commissions pour les cabinets de gestion de patrimoine : import des bordereaux partenaires, fiabilisation, analyse (encours, prévisionnel, commissions attendues) et préparation de la FRA CIF.

### Mes données sont-elles sécurisées ?

Hébergement en France (Scaleway et OVHcloud), échanges chiffrés en HTTPS, mots de passe hachés, secrets 2FA chiffrés, sauvegardes quotidiennes externalisées, limitation des tentatives de connexion, double authentification disponible et imposable au cabinet, sessions révocables. Les fonctionnalités IA sont désactivées par défaut et nécessitent le consentement explicite d'un administrateur. Contact sécurité : [security@conance.io](mailto:security@conance.io).

### Où sont les tarifs ?

Sur [conance.io](https://conance.io/#tarifs). Les limites de chaque plan sont détaillées dans [Abonnement](/company/subscription).

## Compte et connexion

### Je ne reçois pas le code de vérification

Vérifiez vos indésirables, attendez une minute, puis **Renvoyer le code**. Si rien n'arrive, écrivez à [support@conance.io](mailto:support@conance.io) depuis l'adresse concernée.

### Mon lien d'invitation ne fonctionne plus

Une invitation est valable une heure. Demandez à un administrateur de la **renvoyer** (*Gestion entreprise → Membres → Invitations en attente*).

### J'ai perdu mon téléphone (2FA)

Utilisez une autre méthode configurée (clé d'accès, code par email). Sinon, contactez le support. Gardez toujours deux méthodes → [Sécurité](/settings/security).

### Puis-je changer mon adresse email ?

Pas depuis l'interface : l'email est l'identifiant du compte. Contactez le support.

## Import

### Quels fichiers puis-je importer ?

`.csv`, `.xlsx`, `.xlsm`, `.xls`, `.xlsb`, `.ods` et `.pdf`, jusqu'à 100 Mo. Les PDF passent par l'[extraction PDF](/features/import/pdf).

### « Un import est déjà en cours pour votre entreprise »

Un seul import tourne à la fois par cabinet. Attendez la fin (suivez-la dans *Import → Historique*) ou vérifiez qu'un collègue n'en a pas lancé un.

### Le fichier a déjà été importé, pourtant c'est un nouveau relevé

Le partenaire a peut-être renvoyé un fichier identique. Si vous êtes sûr de vous, **Continuer quand même**. Pour ne plus voir l'alerte, désactivez-la dans les [paramètres généraux](/settings/general).

### Les dates sont mal lues

Choisissez explicitement le **format de date** dans la section Commissions du mapping (`JJ/MM/AAAA`, `MM/AAAA`…). Pour un fichier qui ne donne que le mois, indiquez l'année.

### Le relevé a des sous-totaux, des lignes de section…

Utilisez les **filtres de lignes** (exclure les lignes contenant « Total ») et les **colonnes calculées** (valeur de section propagée) du [mapping](/features/import/mapping#options-avancees), et sauvegardez la configuration.

### L'encours de Pilotage est « Non disponible » ou la couverture est basse

La colonne **Base de calcul** (assiette) n'a pas été mappée pour ce partenaire. Rechargez la configuration, mappez-la, réimportez — ou attendez le prochain bordereau. Voir [Couverture](/features/pilotage/#couverture).

### Qu'est-ce que la fenêtre « Résolution des correspondances approximatives » ?

Un numéro de contrat du fichier ressemble à un contrat existant sans lui être identique. Choisissez d'associer (le numéro devient un alias) ou de créer un nouveau contrat → [Correspondances de contrats](/features/import/smart-matching).

### J'ai importé le mauvais fichier

*Import → Historique → Annuler l'import*. Tout ce que l'import a écrit est retiré, y compris les contrats, clients et conseillers créés → [Annuler un import](/features/import/undo).

### L'extraction PDF demande des crédits, c'est normal ?

Seulement quand la lecture gratuite a échoué (PDF scanné de mauvaise qualité, mise en page inhabituelle) ou quand vous relancez avec des précisions. Le devis s'affiche avant tout débit → [Import depuis un PDF](/features/import/pdf).

## Commissions et données

### Comment corriger la nature de commissions déjà importées ?

Deux façons : changer la nature du **type d'opération** concerné (*Paramètres → Types d'opération*) — toutes ses commissions suivent — ou une **modification en masse** du type d'opération sur les commissions filtrées.

### Comment retirer les commissions d'un import ?

Préférez l'[annulation d'import](/features/import/undo). Sinon : Commissions, filtre *Fichier d'import*, sélectionner tout, Supprimer.

### Comment fusionner deux contrats en doublon ?

Contrats → **Fusionner** : choisissez le contrat conservé puis ceux à fusionner ; leurs numéros deviennent des alias → [Fusion de contrats](/features/contracts/merge).

### Pourquoi mes suppressions ne libèrent-elles pas de quota ?

Les lignes supprimées comptent encore **30 jours** dans les quotas → [Quotas et rétention](/company/subscription#quotas-et-retention).

### Différence entre partenaire, détail partenaire et entité ?

- **Partenaire** : la compagnie ou société de gestion qui vous paie
- **Détail partenaire** : une déclinaison de ce partenaire (Eres Assurances / Eres Gestion)
- **Entité** : une subdivision de **votre** cabinet (agence, bureau)

## Pilotage

### Encours retenu ≠ encours sous gestion ?

L'encours retenu est la **base sur laquelle chaque partenaire calcule sa commission**, telle qu'elle figure dans ses relevés. Ce n'est pas une valorisation de portefeuille à une date donnée → [Pilotage](/features/pilotage/).

### Un contrat est signalé « attendu » alors qu'il est normal qu'il ne paie qu'une fois par an

Conance signale, il n'exclut pas : un contrat annuel réapparaît quand son échéance passe. S'il est réellement clos, **Marquer résilié**. Voir [Commissions attendues](/features/pilotage/expected-commissions).

### Pourquoi le prévisionnel ne projette-t-il pas tel contrat ?

Un contrat vu une seule fois n'a pas de rythme observable : il est compté dans la réserve « vus une seule fois, non projetés », pas inventé. Déclarez une attente sur ce contrat pour le faire apparaître → [Prévisionnel](/features/pilotage/forecast).

### Faut-il renseigner la périodicité des contrats ?

Non, et il n'y a pas de champ pour cela : le rythme est **observé** sur l'historique de chaque contrat. La *période* d'une commission est le libellé du bordereau, sans rapport avec ce rythme.

## Réglementaire

### La FRA préparée par Conance est-elle la déclaration ?

Non. Conance prépare les chiffres à recopier sur le portail de votre association et signale ce qu'ils ne contiennent pas. Vous déclarez → [Réglementaire](/features/reglementaire).

### Les rubriques ne correspondent pas à celles de mon association

Renommez, ajoutez, supprimez : bouton **Rubriques** de la page Réglementaire.

## Entreprise et équipe

### Comment inviter un collaborateur ?

*Gestion entreprise → Membres → Inviter un membre* : email, puis Administrateur ou rôle personnalisé → [Membres](/company/members).

### Comment donner un accès en lecture seule ?

Créez un rôle sans permission `create`/`edit`/`delete` et attribuez-le → [Rôles et permissions](/company/roles).

### Je gère plusieurs cabinets

Les plans **Groupe** créent un espace parent et des cabinets isolés, avec un sélecteur pour basculer → [Multi-cabinets](/company/multi-cabinets).

## IA

### Que fait exactement l'IA dans Conance ?

Trois choses, toutes optionnelles : proposer un mapping d'import (gratuit), lire un PDF quand l'extraction locale échoue (crédits), lire un bulletin de souscription pour déclarer une commission attendue (crédits). Rien n'est envoyé au prestataire IA sans le consentement d'un administrateur et, pour les documents, sans confirmation explicite → [Fonctionnalités IA](/settings/ai-features).

### Combien coûte un crédit ?

0,10 €. Les crédits n'expirent pas et ne sont débités qu'en cas de succès → [Crédits IA](/company/ai-credits).

## Support

- Support : [support@conance.io](mailto:support@conance.io)
- Facturation : [billing@conance.io](mailto:billing@conance.io)
- Données personnelles : [privacy@conance.io](mailto:privacy@conance.io)
- Sécurité : [security@conance.io](mailto:security@conance.io)

Pour signaler un bug : décrivez le problème, les étapes pour le reproduire, et joignez une capture d'écran. Pour un problème d'import, indiquez le nom du fichier et l'heure : l'historique nous permet de retrouver le compte rendu.
