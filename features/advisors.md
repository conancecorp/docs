# Gestion des conseillers

Les conseillers sont les membres de l'équipe commerciale à qui les contrats — et donc les commissions — sont rattachés. Ils sont distincts des [membres](/company/members) de l'entreprise (les utilisateurs de Conance) : un conseiller n'a pas forcément de compte, un utilisateur n'est pas forcément conseiller.

## Colonnes

Code, prénom, nom, email, téléphone, statut (actif / inactif).

## Créer un conseiller

**Nouveau conseiller** :

| Champ | Description |
|-------|-------------|
| Code | Optionnel — **généré automatiquement** si vide. C'est lui qui rattache les commissions au bon conseiller d'un import à l'autre : utilisez celui de vos fichiers partenaires |
| Prénom, Nom | Obligatoires |
| Email, Téléphone | Optionnels |
| Actif | Interrupteur dans le formulaire |

Un conseiller se crée aussi **à la volée** depuis le formulaire de contrat.

## Actif / inactif

Un conseiller qui quitte le cabinet passe en **inactif** (interrupteur dans le formulaire de modification) : il disparaît des listes de sélection, mais ses contrats et commissions restent. Le filtre *Statut* permet de retrouver les inactifs et de les réactiver.

Préférez la désactivation à la suppression pour conserver l'historique.

## Supprimer

Un conseiller ne peut être supprimé que si **aucune commission** n'est rattachée à ses contrats — sinon, désactivez-le. Confirmation requise ; la ligne compte encore dans le quota pendant 30 jours. Sélection multiple possible.

## Fiche du conseiller

**Voir** : informations, contrats, clients et commissions du conseiller.

## Import

La section **Conseillers** du [mapping](/features/import/mapping#conseillers) crée les conseillers à partir du code et du nom (une colonne « Prénom Nom » ou deux colonnes).

::: tip Un contrat = un conseiller
Dans Conance, un contrat est suivi par un seul conseiller. Pour réaffecter un portefeuille (départ, réorganisation), utilisez la [modification en masse](/features/bulk-actions) des contrats : filtrez par conseiller, sélectionnez tout, changez le conseiller.
:::

## Analyse

La répartition de l'encours et de la production par conseiller se lit dans [Pilotage](/features/pilotage/) (bloc *Répartition de l'encours*) ; le classement des commissions dans le [tableau de bord](/features/dashboard) (*Top 5 conseillers*).
