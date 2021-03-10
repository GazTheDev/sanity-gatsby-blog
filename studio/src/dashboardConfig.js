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
                  buildHookId: '604933a25273d400d0922d2b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-fwnasih1',
                  apiId: 'e181218c-0a18-4603-ac84-4ead10ea9c55'
                },
                {
                  buildHookId: '604933a279eba0009970853a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-4c3ksqs4',
                  apiId: 'cc0eefc0-cf28-426b-9dce-41fde369cd85'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/GazTheDev/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-4c3ksqs4.netlify.app', category: 'apps' }
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
