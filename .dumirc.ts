import { defineConfig } from 'dumi';

export default defineConfig({
  favicons: ['https://graphql.org/favicon.ico'],
  autoAlias: false,
  themeConfig: {
    name: 'GraphQL',
    logo: 'https://graphql.org/favicon.ico',
    prefersColor: { default: 'auto' },
    socialLinks: {
      github: 'https://github.com/zizhuspot/graphql-cn',
      twitter: 'https://twitter.com/luozhu2021'
    },
    hd: { rules: [] },
    footer: '<a href="/sitemap.xml" target="_blank">站点地图</a> | <a href="https://t.zsxq.com/0fDyODCQs" target="_blank">紫竹赚美刀</a><br/>Made with ❤️ by <a href="https://github.com/zizhuspot" target="_blank">紫竹光点计划</a>'
  },
  theme: {
    '@c-primary': '#e10098',
  },
  publicPath: '/',
  // analytics: {
    // ga_v2: '',
  // },
  // sitemap: {
    // hostname: 'https://graphql-cn.js.org',
  // },
  hash: true,
  exportStatic: {},
  headScripts: [
    {src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7029815294762181', async: true, crossorigin: 'anonymous'},
  ]
});
