import { defineConfig } from 'vitepress'

const currentYear = new Date().getFullYear()

export default defineConfig({
  title: 'Conance Documentation',
  description: 'Documentation officielle de Conance - Gestion de commissions pour cabinets de gestion de patrimoine',
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
            { text: 'Vue d\'ensemble', link: '/features/' }
          ]
        },
        {
          text: 'Tableau de bord',
          items: [
            { text: 'Dashboard', link: '/features/dashboard' }
          ]
        },
        {
          text: 'Import de données',
          collapsed: false,
          items: [
            { text: 'Vue d\'ensemble', link: '/features/import/' },
            { text: 'Upload de fichier', link: '/features/import/upload' },
            { text: 'Mapping des colonnes', link: '/features/import/mapping' },
            { text: 'Pré-analyse', link: '/features/import/pre-analysis' },
            { text: 'Détection des doublons', link: '/features/import/smart-matching' },
            { text: 'Configurations sauvegardées', link: '/features/import/saved-configs' },
            { text: 'Historique des imports', link: '/features/import/history' }
          ]
        },
        {
          text: 'Gestion des données',
          items: [
            { text: 'Commissions', link: '/features/commissions' },
            { text: 'Conseillers', link: '/features/advisors' },
            { text: 'Clients', link: '/features/clients' },
            { text: 'Partenaires', link: '/features/partners' },
            { text: 'Produits', link: '/features/products' },
            { text: 'Contrats', link: '/features/contracts/' },
            { text: 'Fusion de contrats', link: '/features/contracts/merge' }
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
          text: 'Paramètres',
          items: [
            { text: 'Vue d\'ensemble', link: '/settings/' },
            { text: 'Types d\'opération', link: '/settings/operation-types' },
            { text: 'Produits personnalisés', link: '/settings/custom-products' },
            { text: 'Profil utilisateur', link: '/settings/profile' }
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
            { text: 'Abonnement', link: '/company/subscription' }
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
