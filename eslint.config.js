import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),
  skipFormatting,
  {
    rules: {
      'prettier/prettier': ['warn'], // Включение предупреждений Prettier
      'vue/html-indent': ['error', 2], // Отступы в шаблонах
      'vue/max-attributes-per-line': ['error', { singleline: 3 }], // Не более 3 атрибутов на строку
      'vue/multi-word-component-names': 'off', // Выключение требования многословных имен компонентов
      'vue/singleline-html-element-content-newline': 'off', // Отключение новой строки для однострочных элементов
    },
  },
]
