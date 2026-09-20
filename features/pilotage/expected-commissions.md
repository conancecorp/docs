# Commissions attendues

Le bloc **Commissions attendues** de la page [Pilotage](/features/pilotage/) rassemble en une seule liste tout ce qui aurait dû arriver et n'est pas arrivé. Il a deux origines, signalées par une étiquette sur chaque ligne.

| Origine | Comment elle apparaît | Montant |
|---------|----------------------|---------|
| **Observé** | Déduit de l'historique du contrat — personne n'a rien saisi | Estimé (~), dernier montant réellement encaissé |
| **Déclaré** | Enregistré à l'avance depuis la fiche du contrat ou depuis un bulletin, puis confronté aux bordereaux | Annoncé |

Le badge en tête de bloc donne le nombre de contrats concernés ; le montant à côté donne le manque à gagner estimé — c'est lui qui dit si le sujet vaut d'être traité aujourd'hui.

## Contrats observés (« dormants »)

Un contrat est signalé quand une commission de **nature récurrente** (Encours par défaut) ne revient plus au rythme qu'il avait montré jusque-là.

- Le **rythme** est observé sur l'historique du contrat : intervalle médian entre deux commissions récurrentes. Il n'est jamais saisi.
- Le **retard** est mesuré depuis la dernière commission reçue, par rapport à ce rythme.
- Le **manque** est estimé au dernier montant réellement encaissé — jamais reconstitué depuis assiette × taux.

Les colonnes : contrat et client, partenaire, origine, « depuis / attendue », manque estimé.

### Contrats sans rythme

Un contrat vu une seule fois, muet depuis plus de 12 mois, n'a pas de rythme : rien à chiffrer. Ces contrats sont **comptés dans le badge** mais **repliés** sous la liste, en une ligne dépliable, pour ne pas noyer les contrats sur lesquels agir. Dépliez-les pour les juger un par un.

### Actions sur un contrat observé

- **Marquer résilié** : le contrat passe au statut *Résilié*, sort de l'encours retenu et n'est plus signalé. L'action est réversible depuis la [fiche du contrat](/features/contracts/).

::: tip Pourquoi aucune exclusion automatique ?
Un contrat peut légitimement n'être commissionné qu'une fois par an. Conance signale, vous tranchez.
:::

## Attentes déclarées

Une attente déclarée dit à Conance : « sur ce contrat, je dois recevoir une commission de cette nature ». Elle se solde toute seule quand la commission arrive dans un bordereau.

### Déclarer depuis la fiche du contrat

1. Ouvrez la fiche d'un [contrat](/features/contracts/) (bouton **Voir**)
2. Cliquez sur **Attendre une commission**
3. Renseignez :
   - **Nature** (obligatoire) — celle de la commission qui arrivera dans le bordereau, c'est sur elle que le rapprochement se fait
   - **Montant attendu** (facultatif) — permet de détecter un écart
   - **Vers quand** (facultatif) — le mois approximatif suffit
4. **Enregistrer l'attente**

Client, partenaire et conseiller sont repris du contrat.

::: info Pas de saisie en lot
Le montant, qui diffère par contrat, est ce qui rend la détection d'écart possible. Pour déclarer beaucoup d'attentes d'un coup, passez par le dépôt d'un bulletin (ci-dessous).
:::

### Déclarer depuis un bulletin de souscription

Le bouton **Depuis un document** (en tête du bloc) lit un bulletin de souscription PDF et propose une attente pré-remplie.

1. Déposez le PDF
2. Conance lit le document (quelques secondes) et propose : contrat, nature, montant, mois approximatif
3. Vérifiez et corrigez, puis **Enregistrer l'attente**

Règles de cette lecture :

- **Un seul versement proposé** (le droit d'entrée). La commission récurrente est déjà couverte par le chemin observé.
- **Le contrat ne se devine pas** : rattachement par numéro (alias compris). Sans correspondance, vous choisissez le contrat — rattacher au mauvais dossier ferait réclamer sur le compte d'un autre client.
- **Le montant est une hypothèse** : un bulletin chiffre les frais payés par le *client*, pas votre rétrocession. Corrigez-le si vous la connaissez.

::: warning Lecture facturée
Cette lecture est une fonctionnalité IA facturée en [crédits](/company/ai-credits) dès le premier appel : contrairement à l'extraction de tableaux, elle n'a pas de version locale gratuite. Elle nécessite que les [fonctionnalités IA](/settings/ai-features) soient activées pour le cabinet. Un échec de lecture n'est pas débité.
:::

## Comment une attente se solde

Le **rapprochement** tourne à chaque import et à la création de l'attente. Il cherche une commission :

| Critère | Règle |
|---------|-------|
| Contrat | Le même contrat, obligatoirement |
| Nature | La même nature, obligatoirement |
| Date | Si une date a été annoncée : ± 90 jours. Sinon, n'importe quand |
| Montant | Si un montant a été annoncé : tolérance de 5 % ou 1 €. Au-delà, l'attente est soldée **avec écart** |

Une commission ne solde qu'une attente. Si plusieurs commissions sont candidates, **l'attente reste ouverte** : la fermer au hasard reviendrait à cesser de réclamer sans que personne ne s'en aperçoive.

À la création, le message vous dit lequel des trois cas s'est produit : attente enregistrée, attente déjà soldée (la commission était déjà là), ou écart constaté.

## Actions sur une attente déclarée

| Action | Effet |
|--------|-------|
| **Corriger** (crayon) | Modifie nature, montant ou date, puis **rejoue immédiatement le rapprochement**. Indispensable : l'import ne réexamine que les contrats touchés par le fichier du jour |
| **Annuler l'attente** | Retire l'attente sans rien changer aux commissions |

::: tip Une nature mal choisie
Une attente enregistrée sur la mauvaise nature réclame dans le vide : le bordereau arrive, mais sous une autre nature. Corrigez la nature plutôt que d'annuler et recréer — le rapprochement est rejoué sur-le-champ.
:::

## Ce que l'état vide signifie

« Rien ne manque : tous les contrats suivent leur rythme, et les attentes sont soldées » — c'est le résultat recherché.
