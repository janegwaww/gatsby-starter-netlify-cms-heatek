var proxy = require("http-proxy-middleware");

const baiduAnalyticsConditionalConfig = () => {
  // 生产环境下加载百度统计
  if (process.env.NODE_ENV === "production") {
    return {
      resolve: `gatsby-plugin-baidu-analytics`,
      options: {
        siteId: "55635412905eb8d0d22476d497a731c0",
        head: false,
      },
    };
  }
  return {resolve: `gatsby-plugin-baidu-analytics`};
};

module.exports = {
  pathPrefix: `/gatsby-starter-netlify-cms`,
  siteMetadata: {
    title: "Haetek 黑顿科技",
    description:
      "深圳前海黑顿科技有限公司(简称“黑顿科技”)，团队于2019年8月1日 入驻深圳前海区，注册资本3000万元，致力于搭建面向信息化、智能化、万物互联的智能操作生态，涉及领域包括物流、金融、教育、智慧城市、语言、销售、体育、大健康等等。创始团队来自多伦多大学(深度学习发源地)、卡耐基梅隆大学(人工智能专业世界第一)、北大、浙大、哈工大等国际名校。曾在国际智能语法检测大赛(CGED)中以绝对优势从社科院、阿里巴巴 、北大等团队中夺冠，并曾在华为、IBM、科大讯飞等国际知名企业担任高级技术或研发岗位。公司研究团队在自然语言处理、机器学习、知识图谱、路径规划等热门领域均有成果，拥有多项国际或国家专利、著作权、顶会论文，并与VectorInstitute、中科院计算所等学术机构拥有学术合作关系。公司致力于将人工智能算法结合实际应用场景进行落地，消除学术界与实业界之间的代沟，为众多有智能化需求的企业提供技术支持，为广大致力于智能化建设的企业及开发者提供稳健灵活简约的平台型算法生态，让智能塑造生活。",
    keywords:
      "黑顿怎么样,黑顿科技,haetek,haetek.com,黑顿公司,前海黑顿,深圳黑顿,黑顿招聘,黑顿公司,黑顿签约,变量引擎,数据协议,算法平台,匹配规划,信息智能,变量挖掘,了解黑顿,黑顿评价,关于黑顿,深圳前海黑顿科技有限公司",
    author: "haetek_20190801,peizhengqi@kc-group.com.cn",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ["/all.sass"], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    baiduAnalyticsConditionalConfig(),
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-150406661-1",
      },
    },
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      proxy({
        target: "http://localhost:9000",
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      }),
    );
  },
};
