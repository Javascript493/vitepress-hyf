import { defineConfig } from 'vitepress'
import getDocSidebar from '../utils/getDocSidebar.js'

console.log(getDocSidebar())
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "写代码的巴斯克",
  description: "皇族永不言弃（never give up）",
  srcDir: './src', // 源目录
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: '🐶 javascript', link: '/js/基本数据类型' }
    ],
    sidebar: getDocSidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
