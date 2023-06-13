import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import {dashboardTool} from '@sanity/dashboard'
import {netlifyWidget} from 'sanity-plugin-dashboard-widget-netlify'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'astrowill',

  projectId: '6n7ix93k',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    dashboardTool({
      widgets: [
        netlifyWidget({
          title: 'My Netlify Deploys',
          sites: [
            {
              title: 'Sanity Studio',
              apiId: '6n7ix93k',
              buildHookId: 'https://api.netlify.com/build_hooks/64889e0d26f15b25b0f8cb5f',
              name: 'astrowill-netlify-app-studio',
            },
            {
              title: 'AstrowillBlog',
              apiId: '6n7ix93k',
              buildHookId: 'https://api.netlify.com/build_hooks/64889e0d26f15b25b0f8cb5f',
              name: 'astrowill-netlify-app-web',
              url: 'https://astrowill.netlify.app/',
            },
          ],
        }),
      ],
    }),
    ...(isDev ? devOnlyPlugins : []),
  ],

  schema: {
    types: schemaTypes,
  },
})
