import { createSharedComposable } from '@vueuse/core';

const _useNavigation = () => {
  const headerLinks = computed(() => {
    const route = useRoute();

    return [{
      label: 'Home',
      description: 'The home page',
      to: '/',
      isActive: route.path === '/',
    }, {
      label: 'About',
      description: 'Learn more about us',
      to: '/about',
      isActive: route.path === '/about',
    }, {
      label: 'Contact',
      description: 'Get in touch',
      to: '/contact',
      isActive: route.path === '/contact',
    }];
  });

  const footerLinks = computed(() => {
    return [{
      label: 'Privacy',
      description: 'Our privacy policy',
      to: '/privacy',
    }, {
      label: 'Terms',
      description: 'Our terms of service',
      to: '/terms',
    }];
  });

  const searchLinks = computed(() => [...headerLinks.value.map(link => {
    if (['/'].includes(link.to)) {
      return {
        label: link.label,
        // icon: link.icon,
        // children: link.children
      }
    }
    return link
  }).filter(Boolean), {
    label: 'Search',
    // icon: 'i-ri-search-line',
    to: '/search'
  },
  {
    label: 'About',
    // icon: 'i-ri-information-line',
    to: '/about'
  }
  ])

  const searchGroups = [{
    key: 'article-search',
    label: 'Articles',
    search: async (query: string) => {
      if (!query) {
        return []
      }

      function searchTextRegExp(query: string): RegExp {
        return new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i')
      }

      const { articles, fetchList } = useBlog()
      if (!articles.value.length) {
        await fetchList()
      }

      return articles.value
        .filter(article => article.title && article.title.search(searchTextRegExp(query)) !== -1)
        .map(article => ({
          id: `article-${article._path}`,
          label: article.title || '',
          suffix: article.description,
          icon: 'i-ri-newspaper-line',
          to: article._path
        }))
    }
  }];

  return {
    headerLinks,
    footerLinks,
    searchLinks,
    searchGroups
  };
};

export const useNavigation = createSharedComposable(_useNavigation);
