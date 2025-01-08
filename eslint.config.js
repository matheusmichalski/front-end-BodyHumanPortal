import js from '@eslint/js'
import pluginVue, { rules } from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },
  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },
  {
    'filenames/match-regex': ['error', '^([a-zA-Z0-9]+)$'],
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  skipFormatting,
]
