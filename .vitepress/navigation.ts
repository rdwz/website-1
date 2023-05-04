import type { DefaultTheme } from 'vitepress'
import { NewsSidebar } from './news-navigation'

const DocumentationNav: DefaultTheme.NavItemWithLink[] = [
  { text: 'Iconify documentation', link: '/docs/' },
  { text: 'Icons', link: '/docs/icons/', activeMatch: '^/docs/icons/' },
  { text: 'How to use icons', link: '/docs/usage/', activeMatch: '^/docs/usage/' },
  { text: 'Iconify API', link: '/docs/api/' },
  { text: 'Articles', link: '/docs/articles/' },
  { text: 'Icons on demand', link: '/docs/icon-components/' },
  { text: 'Iconify Icon Web Component', link: '/docs/iconify-icon/' },
  { text: 'Tools for Developers', link: '/docs/tools/' },
  { text: 'Iconify Types', link: '/docs/types/' },
]

const DocumentationSidebar: DefaultTheme.SidebarItem[] = [
  { text: 'Getting Started', link: '/getting-started/' },
  { text: 'Iconify documentation', link: '/docs/' },
  { text: 'Icons', link: '/docs/icons/' },
  { text: 'How to use icons', link: '/docs/usage/' },
  { text: 'Iconify API', link: '/docs/api/' },
  { text: 'Articles', link: '/docs/articles/' },
  { text: 'Icons on demand', link: '/docs/icon-components/' },
  { text: 'Iconify Icon Web Component', link: '/docs/iconify-icon/' },
  { text: 'Tools for Developers', link: '/docs/tools/' },
  { text: 'Iconify Types', link: '/docs/types/' },
]

// TODO: add each sidebar item to the sidebar for that section
const DocumentationSidebars: Record<string, DefaultTheme.SidebarItem[]> = {
  '/docs/': DocumentationSidebar,
  '/docs/api/': [],
  '/docs/articles/': [],
  '/docs/icon-components/': [],
  '/docs/iconify-icon/': [],
  '/docs/icons/': [{
    text: 'Icon Basics',
    link: '/docs/icons/icon-basics',
  }, {
    text: 'Icon Set Basics',
    link: '/docs/icons/icon-set-basics',
  }, {
    text: 'Icon Data',
    link: '/docs/icons/icon-data',
  }, {
    text: 'Custom Icon Sets',
    link: '/docs/icons/custom',
  }],
  '/docs/tools/': [],
  '/docs/types/': [],
  '/docs/usage/': [{
    text: 'SVG in CSS',
    link: '/docs/usage/css/',
  }, {
    text: 'SVG in HTML',
    link: '/docs/usage/svg/',
  }, {
    text: 'Icons on Demand',
    link: '/docs/icon-components/',
  }, {
    text: 'UI Design',
    link: '/docs/design/',
  }],
}

function sideBarForDocumentation(link: string) {
  return DocumentationSidebar.map((item) => {
    const newItem = { ...item }
    if (item.link === link) {
      delete newItem.link
      newItem.items = DocumentationSidebars[link]!
    }

    return newItem
  })
}

const AboutNav: DefaultTheme.NavItemWithLink[] = [
  { text: 'About Iconify', link: '/about/' },
  { text: 'Support', link: '/support/' },
  { text: 'History', link: '/about/history.md' },
]

const DefaultSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: 'Getting Started',
    link: '/getting-started/',
  },
  {
    text: 'News',
    link: '/news/',
  },
  {
    text: 'Documentation',
    link: '/docs/',
  },
  {
    text: 'Sponsor Iconify',
    link: '/sponsors/',
  },
  {
    text: 'About Iconify',
    link: '/about/',
  },
  {
    text: 'Iconify Support',
    link: '/support/',
  },
  {
    text: 'History',
    link: '/about/history',
  },
  {
    text: 'Privacy',
    link: '/privacy/',
  },
]

export const Nav: DefaultTheme.NavItem[] = [
  {
    text: 'News',
    link: '/news/',
    activeMatch: '^/news/',
  },
  {
    text: 'Icons',
    link: 'https://icon-sets.iconify.design/',
  },
  {
    text: 'Docs',
    items: DocumentationNav,
    activeMatch: '^/docs/',
  },
  {
    text: 'Sponsor',
    link: '/sponsors/',
  },
  {
    text: 'About',
    items: AboutNav,
    activeMatch: '^/(about|support)/',
  },
]

export const GlobalSidebar: DefaultTheme.Sidebar = {
  '/getting-started/': DefaultSidebar,
  '/news/': NewsSidebar,
  '/icon-sets/': DefaultSidebar,
  '/docs/': DocumentationSidebars['/docs/']!,
  '/docs/api/': sideBarForDocumentation('/docs/api/'),
  '/docs/articles/': sideBarForDocumentation('/docs/articles/'),
  '/docs/icon-components/': sideBarForDocumentation('/docs/icon-components/'),
  '/docs/iconify-icon/': sideBarForDocumentation('/docs/iconify-icon/'),
  '/docs/icons/': sideBarForDocumentation('/docs/icons/'),
  '/docs/tools/': sideBarForDocumentation('/docs/tools/'),
  '/docs/types/': sideBarForDocumentation('/docs/types/'),
  '/docs/usage/': sideBarForDocumentation('/docs/usage/'),
  '/sponsors': DefaultSidebar,
  '/support/': DefaultSidebar,
  '/about/': DefaultSidebar,
  '/privacy': DefaultSidebar,
}
