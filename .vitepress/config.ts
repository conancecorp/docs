import { defineConfig } from 'vitepress'

const currentYear = new Date().getFullYear()

export default defineConfig({
  title: 'Conance Documentation',
  description: 'Documentation officielle de Conance - Pilotage des commissions pour cabinets de gestion de patrimoine',
  lang: 'fr-FR',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    ['meta', { name: 'theme-color', content: '#23b086' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:site_name', content: 'Conance Documentation' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Conance',

    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Fonctionnalités', link: '/features/' },
      { text: 'Paramètres', link: '/settings/' },
      { text: 'Entreprise', link: '/company/' },
      { text: 'FAQ', link: '/faq/' },
      { text: 'Accéder à Conance', link: 'https://app.conance.io' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Démarrage',
          items: [
            { text: 'Introduction', link: '/guide/' },
            { text: 'Premiers pas', link: '/guide/getting-started' },
            { text: 'Créer un compte', link: '/guide/create-account' },
            { text: 'Créer ou rejoindre une entreprise', link: '/guide/create-company' }
          ]
        }
      ],
      '/features/': [
        {
          text: 'Fonctionnalités',
          items: [
            { text: 'Vue d\'ensemble', link: '/features/' },
            { text: 'Tableaux, filtres et colonnes', link: '/features/tables' }
          ]
        },
        {
          text: 'Analyse',
          items: [
            { text: 'Tableau de bord', link: '/features/dashboard' },
            { text: 'Pilotage', link: '/features/pilotage/' },
            { text: 'Commissions attendues', link: '/features/pilotage/expected-commissions' },
            { text: 'Prévisionnel', link: '/features/pilotage/forecast' },
            { text: 'Réglementaire (FRA CIF)', link: '/features/reglementaire' }
          ]
        },
        {
          text: 'Import de données',
          collapsed: false,
          items: [
            { text: 'Vue d\'ensemble', link: '/features/import/' },
            { text: 'Upload de fichier', link: '/features/import/upload' },
            { text: 'Mapping des données', link: '/features/import/mapping' },
            { text: 'Configuration produits et types', link: '/features/import/pre-analysis' },
            { text: 'Correspondances de contrats', link: '/features/import/smart-matching' },
            { text: 'Import depuis un PDF', link: '/features/import/pdf' },
            { text: 'Configurations sauvegardées', link: '/features/import/saved-configs' },
            { text: 'Historique des imports', link: '/features/import/history' },
            { text: 'Annuler un import', link: '/features/import/undo' }
          ]
        },
        {
          text: 'Gestion des données',
          items: [
            { text: 'Commissions', link: '/features/commissions' },
            { text: 'Contrats', link: '/features/contracts/' },
            { text: 'Fusion de contrats', link: '/features/contracts/merge' },
            { text: 'Clients', link: '/features/clients' },
            { text: 'Conseillers', link: '/features/advisors' },
            { text: 'Partenaires', link: '/features/partners' },
            { text: 'Produits', link: '/features/products' }
          ]
        },
        {
          text: 'Actions avancées',
          items: [
            { text: 'Actions en masse', link: '/features/bulk-actions' },
            { text: 'Export de données', link: '/features/export' },
            { text: 'Stockage', link: '/features/storage' }
          ]
        }
      ],
      '/settings/': [
        {
          text: 'Mon compte',
          items: [
            { text: 'Vue d\'ensemble', link: '/settings/' },
            { text: 'Profil utilisateur', link: '/settings/profile' },
            { text: 'Sécurité (2FA)', link: '/settings/security' },
            { text: 'Sessions actives', link: '/settings/sessions' },
            { text: 'Paramètres généraux', link: '/settings/general' },
            { text: 'Personnalisation du tableau de bord', link: '/settings/dashboard' }
          ]
        },
        {
          text: 'Données métier',
          items: [
            { text: 'Types d\'opération', link: '/settings/operation-types' },
            { text: 'Natures d\'opération', link: '/settings/operation-natures' },
            { text: 'Détails partenaire', link: '/settings/partner-details' },
            { text: 'Types de produits personnalisés', link: '/settings/custom-products' },
            { text: 'Activités personnalisées', link: '/settings/custom-activities' },
            { text: 'Entités (agences, cabinets)', link: '/settings/entities' }
          ]
        },
        {
          text: 'Administration du cabinet',
          items: [
            { text: 'Fonctionnalités IA', link: '/settings/ai-features' },
            { text: 'Gestion des données', link: '/settings/data-management' }
          ]
        }
      ],
      '/company/': [
        {
          text: 'Gestion d\'entreprise',
          items: [
            { text: 'Vue d\'ensemble', link: '/company/' },
            { text: 'Membres', link: '/company/members' },
            { text: 'Rôles et permissions', link: '/company/roles' },
            { text: 'Abonnement et facturation', link: '/company/subscription' },
            { text: 'Crédits IA', link: '/company/ai-credits' },
            { text: 'Multi-cabinets', link: '/company/multi-cabinets' }
          ]
        }
      ],
      '/faq/': [
        {
          text: 'Aide',
          items: [
            { text: 'Questions fréquentes', link: '/faq/' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/conance-fr' }
    ],

    footer: {
      message: 'Documentation officielle de Conance',
      copyright: `Copyright © ${currentYear} Conance. Tous droits réservés.`
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Rechercher',
            buttonAriaLabel: 'Rechercher'
          },
          modal: {
            noResultsText: 'Aucun résultat pour',
            resetButtonTitle: 'Effacer la recherche',
            footer: {
              selectText: 'pour sélectionner',
              navigateText: 'pour naviguer',
              closeText: 'pour fermer'
            }
          }
        }
      }
    },

    docFooter: {
      prev: 'Page précédente',
      next: 'Page suivante'
    },

    outline: {
      label: 'Sur cette page',
      level: [2, 3]
    },

    lastUpdated: {
      text: 'Dernière mise à jour',
      formatOptions: {
        dateStyle: 'long'
      }
    },

    returnToTopLabel: 'Retour en haut',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Thème',
    lightModeSwitchTitle: 'Passer au thème clair',
    darkModeSwitchTitle: 'Passer au thème sombre'
  }
})
