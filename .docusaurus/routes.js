import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'cd9'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', 'ec3'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'b14'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '5c7'),
    exact: true
  },
  {
    path: '/blog/greetings',
    component: ComponentCreator('/blog/greetings', 'bcc'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '4f6'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '096'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '394'),
    exact: true
  },
  {
    path: '/blog/tags/greetings',
    component: ComponentCreator('/blog/tags/greetings', '32a'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '731'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '4fa'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'dfe'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '53a'),
    exact: true
  },
  {
    path: '/test-md',
    component: ComponentCreator('/test-md', '298'),
    exact: true
  },
  {
    path: '/test-react',
    component: ComponentCreator('/test-react', 'b54'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'cc8'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '05d'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '312'),
            routes: [
              {
                path: '/docs/category/tutorial---basics',
                component: ComponentCreator('/docs/category/tutorial---basics', '20e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorial---extras',
                component: ComponentCreator('/docs/category/tutorial---extras', '9ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '89a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RAG Project/conclusions',
                component: ComponentCreator('/docs/RAG Project/conclusions', '15f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RAG Project/Evaluation/design',
                component: ComponentCreator('/docs/RAG Project/Evaluation/design', '2d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RAG Project/Evaluation/discussion',
                component: ComponentCreator('/docs/RAG Project/Evaluation/discussion', '75a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RAG Project/Evaluation/output-data',
                component: ComponentCreator('/docs/RAG Project/Evaluation/output-data', '2e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RAG Project/rag-intro',
                component: ComponentCreator('/docs/RAG Project/rag-intro', '88c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RAG Project/Solution Development/chatbot-code',
                component: ComponentCreator('/docs/RAG Project/Solution Development/chatbot-code', '20d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RAG Project/Solution Development/create-chatbot',
                component: ComponentCreator('/docs/RAG Project/Solution Development/create-chatbot', '17e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RAG Project/Solution Development/how-rag-works',
                component: ComponentCreator('/docs/RAG Project/Solution Development/how-rag-works', '6d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RAG Project/Solution Development/rag-source-formats',
                component: ComponentCreator('/docs/RAG Project/Solution Development/rag-source-formats', 'af2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RAG Project/Solution Development/source-data',
                component: ComponentCreator('/docs/RAG Project/Solution Development/source-data', '5c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/tutorial-basics/congratulations', '93d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', 'c2a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/tutorial-basics/create-a-document', '920'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/tutorial-basics/create-a-page', '539'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', 'feb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/tutorial-basics/markdown-features', 'b05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', '5a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site', 'd21'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
