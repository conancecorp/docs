# Fonctionnalités IA

Certaines fonctionnalités de Conance reposent sur de l'intelligence artificielle et impliquent la transmission de données à un prestataire d'inférence. Elles sont **désactivées par défaut** ; un administrateur de l'entreprise les active pour tout le cabinet, en connaissance de cause.

*Paramètres → Fonctionnalités IA*

## Ce que couvre le consentement

| Fonctionnalité | Données transmises | Coût |
|----------------|--------------------|------|
| [Complétion IA du mapping d'import](/features/import/mapping#commencer-vite) | Les en-têtes de colonnes et au plus trois lignes d'exemple (valeurs tronquées) | Gratuit |
| [Extraction PDF avec IA](/features/import/pdf) | Le contenu du document — texte ou pages en image — **uniquement après confirmation explicite** de l'utilisateur, quand l'extraction locale gratuite a échoué ou pour une relance avec précisions | Crédits IA |
| [Lecture d'un bulletin de souscription](/features/pilotage/expected-commissions#declarer-depuis-un-bulletin-de-souscription) | Le contenu du document | Crédits IA |

Ces données servent uniquement au traitement : elles sont supprimées de la plateforme du prestataire au bout d'une heure et ne sont pas utilisées pour entraîner des modèles. Le détail figure dans la [politique de confidentialité](https://conance.io/politique-confidentialite).

## Activer

1. Lisez les conditions de partage affichées sur la page
2. **Activer les fonctionnalités IA**
3. Cochez la case de consentement, puis **Activer**

L'acceptation est **horodatée et journalisée** : la page affiche qui a activé, quand, et la version des conditions acceptées.

## Désactiver

**Désactiver les fonctionnalités IA** bloque immédiatement les fonctionnalités IA pour tous les membres. Les [crédits](/company/ai-credits) restants sont **conservés** et réutilisables en cas de réactivation.

## Ce qui reste disponible sans IA

- L'extraction PDF **locale** (tableaux réglés, reconnaissance de structure) — elle ne quitte pas les serveurs de Conance
- La **complétion basique** du mapping (reconnaissance par noms de colonnes)
- Tout le reste de Conance

Les boutons IA restent visibles et expliquent comment activer la fonctionnalité, au lieu d'échouer.

## Multi-cabinets

Le consentement se donne **par cabinet**. Les crédits, eux, sont mutualisés au niveau du groupe — voir [Crédits IA](/company/ai-credits).
