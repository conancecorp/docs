# Sécurité

*Paramètres → Sécurité* gère l'**authentification à deux facteurs (2FA)** de votre compte et, pour les administrateurs, la politique du cabinet.

## Pourquoi

Avec la 2FA, se connecter demande votre mot de passe **et** une preuve de possession d'un appareil : un code temporaire ou une clé d'accès. Un mot de passe volé ne suffit plus.

## Application d'authentification (TOTP)

Fonctionne avec Google Authenticator, Microsoft Authenticator, Authy, 1Password, Bitwarden…

1. **Configurer**
2. Scannez le **QR code** avec l'application (ou saisissez la clé secrète à la main)
3. Entrez le **code à 6 chiffres** généré
4. **Activer**

Pour désactiver : **Désactiver**, puis confirmez avec votre mot de passe.

## Clés d'accès (passkeys)

Une clé d'accès s'appuie sur l'authentification de votre appareil : Touch ID, Face ID, Windows Hello, clé physique (YubiKey…). Elle remplace le code à saisir.

1. **Ajouter une clé d'accès**
2. Donnez un **nom** à l'appareil (« PC bureau », « iPhone »…)
3. **Continuer**, puis validez avec votre appareil

La liste indique la dernière utilisation de chaque clé. Une clé se supprime individuellement (irréversible — recréez-en une si besoin).

## Code par email

Si vous n'avez ni application ni clé sous la main au moment de vous connecter, l'écran de vérification propose **Envoyer un code par email**. C'est une solution de secours, moins robuste : préférez une application ou une clé au quotidien.

## Appareils de confiance

À la connexion, cochez **Faire confiance à cet appareil pendant 30 jours** pour ne pas ressaisir de code sur cet appareil durant cette période.

La liste des appareils de confiance apparaît dans la page Sécurité : révoquez-en un, ou **Révoquer tous les appareils** si vous avez un doute.

## Politique d'entreprise

Réservé aux administrateurs : **Exiger l'authentification à deux facteurs pour tous les membres**.

- Une fois activée, chaque membre sans 2FA est invité à la configurer **à sa prochaine connexion**, et ne peut pas accéder au cabinet avant.
- Désactiver la politique ne désactive pas la 2FA des membres qui l'ont déjà configurée.

::: tip Recommandation
Activez la politique d'entreprise dès que le cabinet manipule des données clients — c'est-à-dire dès le premier import.
:::

## Se connecter avec la 2FA

1. Email et mot de passe
2. Écran **Vérification en deux étapes** : code de l'application, clé d'accès, ou code par email
3. Optionnel : faire confiance à l'appareil pendant 30 jours

::: warning Perte de l'appareil
Si vous perdez votre téléphone et n'avez ni clé d'accès ni accès à votre email, contactez le support à [support@conance.io](mailto:support@conance.io). Gardez toujours deux méthodes (par exemple application + clé d'accès).
:::
