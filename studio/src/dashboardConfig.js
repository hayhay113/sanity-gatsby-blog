export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '603aa4b48ed4f68bdecfdf2e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-1y61qt1t',
                  apiId: 'dc0e12fa-8b8e-4f7b-b251-29608bd06862'
                },
                {
                  buildHookId: '603aa4b5d6820557c7888264',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-wj5v6os6',
                  apiId: '516e7926-f5b0-4f91-86eb-ee92ed40bc5b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hayhay113/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-wj5v6os6.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
