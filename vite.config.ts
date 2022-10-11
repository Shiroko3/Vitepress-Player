import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

import postcssImport from 'postcss-import'
import postcssAdvancedVariables from 'postcss-advanced-variables'
import postcssNested from 'postcss-nested'
import postcssEasings from 'postcss-easings'

export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        postcssImport,
        postcssAdvancedVariables,
        postcssNested,
        postcssEasings,
      ]
    }
  },
  build: {
    cssCodeSplit: true,
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'), // 打包入口
      name: 'vitepressPluginMusic',
      formats: ['es', 'umd'],
      // fileName: () => 'index.js',
    },
    rollupOptions: {
      external: ['vue'],
      // output: {
      //   // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
      //   globals: {
      //     react: "React",
      //   },
      // },
    },
    outDir: "lib", // 打包后存放的目录文件
  }
})