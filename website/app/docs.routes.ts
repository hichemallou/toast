import type { SVGProps } from 'react';
import X, { Astro, Github, Nextjs, Remix } from './components/icons';

interface iDocsRoutes {
  category: string;
  routes: {
    title: string;
    path: string;
    icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  }[];
}

export const FrameworkGuides: iDocsRoutes[] = [
  {
    category: 'Framework Guides',
    routes: [
      {
        title: 'Next.js',
        path: '/nextjs',
        icon: Nextjs,
      },
      {
        title: 'Remix',
        path: '/remix',
        icon: Remix,
      },
      {
        title: 'Astro',
        path: '/astro',
        icon: Astro,
      },
    ],
  },
];

export const SocialLinks: iDocsRoutes[] = [
  {
    category: 'Social Links',
    routes: [
      {
        title: 'Twitter',
        path: 'https://twitter.com/pheralb_',
        icon: X,
      },
      {
        title: 'GitHub',
        path: 'https://github.com/pheralb/toast',
        icon: Github,
      },
    ],
  },
];

export const SidebarRoutes: iDocsRoutes[] = [
  {
    category: 'Introduction',
    routes: [
      {
        title: 'Getting Started',
        path: '/',
      },
      {
        title: 'Usage with Next.js',
        path: '/nextjs',
      },
    ],
  },
  {
    category: 'Settings',
    routes: [
      {
        title: 'Toast Provider',
        path: '/provider',
      },
      {
        title: 'Toast Props',
        path: '/props',
      },
    ],
  },
  {
    category: 'Customization',
    routes: [
      {
        title: 'Variants',
        path: '/variants',
      },
      {
        title: 'Dark Mode',
        path: '/docs/dark-mode',
      },
      {
        title: 'Tailwind CSS',
        path: '/docs/tailwind-css',
      },
    ],
  },
];