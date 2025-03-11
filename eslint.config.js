/*
 * @Author: chenr 526963089@qq.com
 * @Date: 2025-02-22 09:45:33
 * @LastEditors: chenr 526963089@qq.com
 * @LastEditTime: 2025-03-11 11:31:50
 * @FilePath: /base-big-screen/eslint.config.js
 * @Description:
 */
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';
import vueTsEslintConfig from '@vue/eslint-config-typescript';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import pluginVue from 'eslint-plugin-vue';

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  // Vue 插件配置
  {
    files: ['**/*.vue'],
    plugins: {
      vue: pluginVue,
    },
    rules: {
      ...pluginVue.configs['flat/essential'].rules,
    },
  },

  ...vueTsEslintConfig(),
  skipFormatting,

  // 添加 simple-import-sort 插件
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      // 自动排序 import 语句
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // 组件（以 @/components 开头的路径）
            ['^@/components', '^.+\\.vue$'],

            // 通用
            ['^@?\\w', '^vue', '^@/'],

            // 相对路径引入 样式文件
            ['^\\.', '^.+\\.s?css$'],
          ],
        },
      ],

      // 自动排序 export 语句
      'simple-import-sort/exports': 'error',
    },
  },

  // 规则
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'error', // 检查未使用的变量
      '@typescript-eslint/explicit-function-return-type': 'off', // 关闭显式函数返回类型
      '@typescript-eslint/no-explicit-any': 'off', // 警告使用 any 类型
      '@typescript-eslint/no-unused-expressions': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/attribute-hyphenation': ['error', 'always'],
      'vue/prop-name-casing': ['error', 'camelCase'],
      'lines-around-comment': [
        'error',
        {
          beforeBlockComment: true, // 在块注释前添加空行
          beforeLineComment: true, // 在行注释前添加空行
          allowBlockStart: true, // 允许注释出现在块的开头
          allowObjectStart: true, // 允许注释出现在对象的开头
          allowArrayStart: true, // 允许注释出现在数组的开头
          allowClassStart: true, // 允许注释出现在类的开头
        },
      ],
      'padding-line-between-statements': [
        'error',

        // 在 import 语句和代码之间添加空行
        { blankLine: 'always', prev: 'import', next: '*' },

        // 在 import 语句之间不添加空行
        { blankLine: 'any', prev: 'import', next: 'import' },
      ],
    },
  },
];
