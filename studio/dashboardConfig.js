export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '607da0eecc29ab009bc7ecad',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-zxwroqhq',
                  apiId: 'ef2d73b5-8bb8-457c-9348-bf010dd1d97b'
                },
                {
                  buildHookId: '607da0ee893765009a567cda',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-8t9nzcps',
                  apiId: 'ff570e7a-2b39-46e7-91ee-e4cd0fb95a21'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/LukeStorry/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-8t9nzcps.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
