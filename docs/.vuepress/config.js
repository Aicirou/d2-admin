module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'D2 Admin',
      description: 'Elegant management system front-end integration'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'D2 Admin',
      description: '优雅的管理系统前端集成方案'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo@2x.png` }],
    ['script', {}, 'var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?be9d34853430c136b5d62c3081d556a5";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm, s);})();']
  ],
  themeConfig: {
    // 项目仓库地址
    repo: 'https://github.com/d2-projects/d2-admin',
    // 自定义仓库链接文字
    repoLabel: '查看源码',
    // 文档不是放在仓库的根目录下
    docsDir: 'docs',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 多国语言
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last update',
        nav: [
          { text: 'preview', link: 'https://fairyever.gitee.io/d2-admin-preview/#/index' }
        ]
      },
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '最后更新',
        nav: [
          {
            text: '学习',
            items: [
              { text: '教程', link: '/zh/learn-guide/' },
              { text: '相关知识', link: '/zh/learn-knowledge/' }
            ]
          },
          {
            text: '系统模块',
            items: [
              { text: '组件', link: '/zh/sys-components/' },
              { text: '插件', link: '/zh/sys-plugins/' },
              { text: 'vuex', link: '/zh/sys-vuex/' },
              { text: '菜单', link: '/zh/sys-menu/' },
              { text: '路由', link: '/zh/sys-route/' },
              { text: '多页面', link: '/zh/sys-multi-page/' },
              { text: '主题系统', link: '/zh/sys-theme/' },
              { text: '数据持久化', link: '/zh/sys-db/' },
              { text: 'CSS 实用类', link: '/zh/sys-css/' },
              { text: 'JS Util', link: '/zh/sys-util/' }
            ]
          },
          {
            text: '生态',
            items: [
              { text: 'D2 Admin start kit', link: '/zh/ecosystem-d2-admin-start-kit/' },
              { text: 'D2 Admin ICE', link: '/zh/ecosystem-d2-admin-ice/' },
              { text: 'D2 CRUD', link: '/zh/ecosystem-d2-crud/' },
              { text: 'D2 Ribbons', link: '/zh/ecosystem-d2-ribbons/' }
            ]
          },
          {
            text: '其它',
            items: [
              { text: '文章归档', link: '/zh/article/' },
              { text: '更新日志', link: '/zh/change-log/' },
              { text: '参与者名单', link: '/zh/collaborator/' },
              {
                text: '交流',
                items: [
                  { text: '微信公众号', link: '' },
                  { text: '交流群', link: '' }
                ]
              },
              {
                text: '关注我们',
                items: [
                  { text: '掘金', link: '' },
                  { text: 'CSDN', link: '' },
                  { text: 'segmentfault', link: '' },
                  { text: '知乎', link: '' }
                ]
              }
            ]
          },
          { text: '常见问题', link: '/zh/question/' }
        ],
        sidebar: {
          '/zh/learn-guide/': sideBarLearnGuide(),
          '/zh/sys-components/': sideBarSysComponents(),
          '/zh/sys-plugins/': sideBarSysPlugins(),
          '/zh/article/': sideBarArticle('版本发布')
        }
      }
    }
  }
}

function sideBarLearnGuide () {
  return [
    {
      collapsable: false,
      children: [
        '',
        'getting-started'
      ]
    }
  ]
}

function sideBarSysComponents () {
  return [
    {
      collapsable: false,
      children: [
        'container',
        'icon',
        'icon-svg',
        'icon-select',
        'charts-new',
        'markdown',
        'highlight',
        'count-up'
      ]
    }
  ]
}

function sideBarSysPlugins () {
  return [
    {
      collapsable: false,
      children: [
        'data-export',
        'data-import',
        'i18n',
        'mock.md'
      ]
    }
  ]
}

function sideBarArticle (titleUpdate) {
  return [
    {
      title: titleUpdate,
      collapsable: false,
      children: [
        'update/ice-1.1.2',
        'update/1.1.5',
        'update/1.1.4',
        'update/0.0.0'
      ]
    }
  ]
}