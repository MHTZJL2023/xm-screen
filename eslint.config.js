/*
 * @Author: chenr 526963089@qq.com
 * @Date: 2024-10-30 10:48:43
 * @LastEditors: chenr 526963089@qq.com
 * @LastEditTime: 2024-10-30 17:04:19
 * @FilePath: /vite-project/eslint.config.js
 * @Description:
 */
import pluginVue from 'eslint-plugin-vue';
import vueTsEslintConfig from '@vue/eslint-config-typescript';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';

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
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'vue/multi-word-component-names': 'off',
      // eqeqeq: ['error', 'always', { null: 'ignore' }],
    },
  },
];
