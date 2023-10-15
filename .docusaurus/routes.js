import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docusaurus-lunr-search-demo/blog',
    component: ComponentCreator('/docusaurus-lunr-search-demo/blog', '922'),
    exact: true
  },
  {
    path: '/docusaurus-lunr-search-demo/blog/archive',
    component: ComponentCreator('/docusaurus-lunr-search-demo/blog/archive', 'a4f'),
    exact: true
  },
  {
    path: '/docusaurus-lunr-search-demo/blog/first-blog-post',
    component: ComponentCreator('/docusaurus-lunr-search-demo/blog/first-blog-post', 'd49'),
    exact: true
  },
  {
    path: '/docusaurus-lunr-search-demo/blog/greetings',
    component: ComponentCreator('/docusaurus-lunr-search-demo/blog/greetings', '775'),
    exact: true
  },
  {
    path: '/docusaurus-lunr-search-demo/blog/long-blog-post',
    component: ComponentCreator('/docusaurus-lunr-search-demo/blog/long-blog-post', 'ae4'),
    exact: true
  },
  {
    path: '/docusaurus-lunr-search-demo/blog/mdx-blog-post',
    component: ComponentCreator('/docusaurus-lunr-search-demo/blog/mdx-blog-post', '819'),
    exact: true
  },
  {
    path: '/docusaurus-lunr-search-demo/blog/tags',
    component: ComponentCreator('/docusaurus-lunr-search-demo/blog/tags', '005'),
    exact: true
  },
  {
    path: '/docusaurus-lunr-search-demo/blog/tags/docusaurus',
    component: ComponentCreator('/docusaurus-lunr-search-demo/blog/tags/docusaurus', 'd7f'),
    exact: true
  },
  {
    path: '/docusaurus-lunr-search-demo/blog/tags/facebook',
    component: ComponentCreator('/docusaurus-lunr-search-demo/blog/tags/facebook', 'd60'),
    exact: true
  },
  {
    path: '/docusaurus-lunr-search-demo/blog/tags/greetings',
    component: ComponentCreator('/docusaurus-lunr-search-demo/blog/tags/greetings', '68a'),
    exact: true
  },
  {
    path: '/docusaurus-lunr-search-demo/blog/tags/hello',
    component: ComponentCreator('/docusaurus-lunr-search-demo/blog/tags/hello', '7f4'),
    exact: true
  },
  {
    path: '/docusaurus-lunr-search-demo/blog/tags/hola',
    component: ComponentCreator('/docusaurus-lunr-search-demo/blog/tags/hola', 'd2d'),
    exact: true
  },
  {
    path: '/docusaurus-lunr-search-demo/blog/welcome',
    component: ComponentCreator('/docusaurus-lunr-search-demo/blog/welcome', 'dc4'),
    exact: true
  },
  {
    path: '/docusaurus-lunr-search-demo/markdown-page',
    component: ComponentCreator('/docusaurus-lunr-search-demo/markdown-page', 'c26'),
    exact: true
  },
  {
    path: '/docusaurus-lunr-search-demo/docs',
    component: ComponentCreator('/docusaurus-lunr-search-demo/docs', '4a4'),
    routes: [
      {
        path: '/docusaurus-lunr-search-demo/docs/category/tutorial---basics',
        component: ComponentCreator('/docusaurus-lunr-search-demo/docs/category/tutorial---basics', 'b5c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-lunr-search-demo/docs/category/tutorial---extras',
        component: ComponentCreator('/docusaurus-lunr-search-demo/docs/category/tutorial---extras', '9a0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-lunr-search-demo/docs/intro',
        component: ComponentCreator('/docusaurus-lunr-search-demo/docs/intro', 'c20'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-lunr-search-demo/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docusaurus-lunr-search-demo/docs/tutorial-basics/congratulations', '87f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-lunr-search-demo/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docusaurus-lunr-search-demo/docs/tutorial-basics/create-a-blog-post', 'bbe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-lunr-search-demo/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docusaurus-lunr-search-demo/docs/tutorial-basics/create-a-document', 'dee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-lunr-search-demo/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docusaurus-lunr-search-demo/docs/tutorial-basics/create-a-page', '37d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-lunr-search-demo/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docusaurus-lunr-search-demo/docs/tutorial-basics/deploy-your-site', '742'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-lunr-search-demo/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docusaurus-lunr-search-demo/docs/tutorial-basics/markdown-features', 'c5d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-lunr-search-demo/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docusaurus-lunr-search-demo/docs/tutorial-extras/manage-docs-versions', 'd16'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-lunr-search-demo/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docusaurus-lunr-search-demo/docs/tutorial-extras/translate-your-site', '761'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/docusaurus-lunr-search-demo/',
    component: ComponentCreator('/docusaurus-lunr-search-demo/', '948'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
