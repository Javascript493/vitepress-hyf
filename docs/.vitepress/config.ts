import { defineConfig } from 'vitepress'
import getDocSidebar from '../utils/getDocSidebar.js'
import getDocNav from '../utils/getDocNav.js'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "写代码的巴斯克",
  description: "皇族永不言弃（never give up）",
  srcDir: './src', // 源目录
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: getDocNav(),
    sidebar: getDocSidebar(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Javascript493' }
    ],
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lastUpdatedText: '最后更新',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          }
        },
      }
    },
  }
})
