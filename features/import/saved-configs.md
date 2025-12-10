# Configurations sauvegardées

Sauvegardez vos configurations de mapping pour réutiliser les mêmes paramètres lors de vos prochains imports.

## Pourquoi sauvegarder une configuration ?

Chaque partenaire envoie ses relevés dans un format spécifique. Une fois le mapping configuré, vous pouvez le sauvegarder pour :

- **Gagner du temps** : Ne plus refaire le mapping à chaque import
- **Éviter les erreurs** : Réutiliser une configuration validée
- **Standardiser** : Assurer la cohérence des imports dans votre équipe

## Sauvegarder une configuration

### Quand sauvegarder

Après avoir configuré votre mapping (étape 2 de l'import), avant de lancer la pré-analyse :

1. Cliquez sur **Sauvegarder la configuration**
2. Donnez un nom explicite à la configuration
3. Confirmez la sauvegarde

::: tip Nommage recommandé
Utilisez un nom qui identifie clairement le partenaire et le type de fichier.

**Exemples :**
- "Generali - Relevé mensuel"
- "Amundi - Commissions trimestrielles"
- "Swiss Life - Format 2024"
:::

### Ce qui est sauvegardé

La configuration mémorise :

- Les associations colonnes → champs
- Le partenaire sélectionné (si mode fixe)
- Les paramètres Excel (feuille, ligne de départ, etc.)
- Les options de mapping avancées

## Charger une configuration

### Lors d'un nouvel import

1. Uploadez votre fichier
2. Cliquez sur **Charger une configuration**
3. Sélectionnez la configuration dans la liste
4. Le mapping est automatiquement appliqué

### Vérification après chargement

::: warning Important
Même après avoir chargé une configuration, vérifiez que le mapping correspond bien à votre fichier. Les formats peuvent évoluer.
:::

## Gérer vos configurations

### Modifier une configuration

1. Chargez la configuration
2. Modifiez le mapping selon vos besoins
3. Sauvegardez avec le même nom pour la mettre à jour

### Supprimer une configuration

1. Accédez à la gestion des configurations
2. Sélectionnez la configuration à supprimer
3. Confirmez la suppression

## Configurations par partenaire

Nous recommandons de créer une configuration par :

- **Partenaire** : Chaque compagnie a son format
- **Type de relevé** : Un partenaire peut avoir différents formats
- **Version** : Si le format évolue, créez une nouvelle configuration

## Partage des configurations

Les configurations sont partagées au niveau de l'entreprise :

- Tous les membres de votre entreprise voient les mêmes configurations
- Un utilisateur peut utiliser une configuration créée par un collègue
- Les modifications sont visibles par tous

::: tip Travail en équipe
Convenez d'une convention de nommage avec votre équipe pour retrouver facilement les configurations.
:::

## Bonnes pratiques

1. **Testez avant de sauvegarder** : Faites un import test pour valider le mapping
2. **Documentez les spécificités** : Ajoutez des notes dans le nom si nécessaire
3. **Mettez à jour régulièrement** : Adaptez les configurations quand les formats évoluent
4. **Supprimez les obsolètes** : Gardez la liste de configurations propre
