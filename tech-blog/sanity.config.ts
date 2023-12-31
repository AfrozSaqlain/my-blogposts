import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { latexInput } from 'sanity-plugin-latex-input'

export default defineConfig({
  name: 'default',
  title: 'tech-blog',

  projectId: '6fn8gsa4',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), latexInput()],

  schema: {
    types: schemaTypes,
  },
})
