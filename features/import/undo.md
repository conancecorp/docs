# Annuler un import

Un mauvais fichier, une mauvaise configuration, un bordereau importé deux fois : **Annuler l'import** retire — ou rétablit — **tout** ce que cet import a écrit. Pas seulement les commissions : les contrats, clients, conseillers, produits, natures et attentes qu'il a créés ou modifiés.

Accès : **Import → Historique**, action **Annuler l'import** sur la ligne concernée.

## Ce que l'annulation fait

Chaque import tient un **journal** de ses écritures. L'annulation le rejoue à l'envers :

| L'import avait… | L'annulation… |
|-----------------|---------------|
| créé une ligne (contrat, client, commission…) | la supprime |
| modifié une valeur (nom de client, produit d'un contrat…) | rétablit la valeur d'avant |
| déclenché des imports « en attente » rejoués ensuite | les annule avec |

Avant d'agir, le dialogue calcule et affiche **exactement** ce qui sera retiré ou rétabli, catégorie par catégorie. Vous confirmez ensuite. Si l'import n'a rien écrit, le dialogue le dit.

Un import **encore en cours** peut aussi être annulé : il est d'abord arrêté, puis tout ce qu'il a commencé à écrire est retiré.

## Conflits : l'annulation ne détruit jamais du travail postérieur

Si, depuis l'import, d'autres imports ou des saisies manuelles ont **repris** ce qu'il avait créé, ces éléments sont **conservés** et listés comme *conflits* :

- une ligne créée par cet import mais **utilisée depuis** (un contrat sur lequel un import ultérieur a posé des commissions) est conservée ;
- une valeur **retouchée après coup** garde sa retouche.

Le dialogue indique quels imports plus récents sont concernés.

::: tip Le bon ordre
Pour tout défaire, annulez les imports **du plus récent au plus ancien**. Pour corriger une base fausse déjà complétée par un fichier correctif : annulez la base fausse, **puis réimportez la base corrigée** — elle mettra à jour les éléments conservés.
:::

## Cas particuliers

| Cas | Comportement |
|-----|--------------|
| Import antérieur au journal | Seules ses **commissions** peuvent être retirées. Contrats, clients, conseillers qu'il a créés ou modifiés ne sont pas touchés. Le dialogue vous en avertit |
| Import archivé via *Gérer l'historique* | Plus annulable : le journal a été purgé |
| Journal expiré | Le journal est conservé une durée limitée (un an par défaut). Au-delà, l'import redevient annulable en « commissions seules » |

## Ce que l'annulation ne fait pas

- Elle ne touche pas au **fichier source** dans le [Stockage](/features/storage).
- Elle ne recrée pas ce qu'un import annulé plus tôt avait supprimé.
- Elle n'est pas une suppression utilisateur : les lignes retirées ne passent pas par la rétention de 30 jours des [quotas](/company/subscription#quotas-et-retention).

## Vérifier

Après annulation, l'import passe au statut **Annulé** dans l'historique. Sur la page Commissions, le filtre *Fichier d'import* ne doit plus rien renvoyer pour ce fichier.
