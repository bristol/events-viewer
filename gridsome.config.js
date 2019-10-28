// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Bristol Meetups',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Event',
        path: './events/**/*.json',
        refs: {
          org: 'Org',

          // Auto create a collection for all orgs
          orgs: {
            typeName: 'Org',
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Org',
        path: './orgs/*.json',
      }
    }
  ],
  templates: {
    Org: '/:id',
    Event: '/:org/:title',
  }
}
