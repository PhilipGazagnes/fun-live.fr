module.exports = {
  target: 'static',
  env: {
    baseUrl: process.env.BASE_URL
      ? process.env.BASE_URL
      : 'http://localhost:3000/',
  },
  head: {
    htmlAttrs: {
      lang: 'fr-FR',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1,maximum-scale=1.0, user-scalable=no',
      },
    ],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap"',
      },
    ],
  },
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    '@nuxtjs/svg',
    [
      '@nuxtjs/robots',
      {
        UserAgent: '*',
        Disallow:
          process.env.BASE_URL === 'https://www.fun-live.fr/' ? '' : '/',
        Sitemap:
          process.env.BASE_URL === 'https://www.fun-live.fr/'
            ? `${process.env.BASE_URL}sitemap.xml`
            : undefined,
      },
    ],
    '@nuxtjs/sitemap',
    ['nuxt-canonical', { baseUrl: process.env.BASE_URL }],
  ],
  plugins: [
    { src: '~/plugins/lazyload.js', mode: 'client' },
    { src: '~/plugins/in-view.js', mode: 'client' },
  ],
  css: ['~/assets/css/main.css'],
  build: {
    postcss: {
      plugins: {
        // 'postcss-custom-properties': {
        //   importFrom: [
        //     {
        //       customProperties: {
        //         '--primaryColor': '#010223',
        //       },
        //     },
        //   ],
        // },
        'postcss-nested': {},
        'postcss-custom-media': {
          importFrom: [
            {
              customMedia: {
                '--phone': '(min-width: 480px)',
                '--tablet': '(min-width: 768px)',
                '--desktop': '(min-width: 992px)',
                '--largeDesktop': '(min-width: 1200px)',
              },
            },
          ],
        },
      },
      preset: {
        autoprefixer: {
          grid: true,
        },
      },
    },
  },
  sitemap: {
    hostname: 'https://www.fun-live.fr',
  },
  generate: {
    fallback: true,
    routes: [
      '/',
      '/agenda',
      '/contact',
      '/groupe',
      '/photos-videos',
      '/prestations',
      '/repertoire',
    ],
  },
};
