import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "前端学习",
  description: "VitePress生成的文档，学习记录-知识总结",
  // base: '/base/', // 设置根路径
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'Guide', link: '/typescript/questionAndSolve' }
    ],

    sidebar: [
      {
        text: 'TypeScript',
        items: [
          { text: '问题提出&解决', link: '/typescript/questionAndSolve' },
        ]
      },
      {
        text: 'VitePress',
        items: [
          { text: '快速上手', link: '/vitepress/getting-started' },
        ]
      },
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
