module.exports = {
  head: {
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
          'https://fonts.googleapis.com/css?family=Open+Sans:300,400|Permanent+Marker&display=swap',
      },
    ],
  },
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/svg',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-164135179-1',
        dev: false,
      },
    ],
  ],
  plugins: [
    '~/plugins/lazyload.client.js',
    './plugins/in-view.client.js',
    '~/plugins/doc-cookies.client.js',
  ],
  css: ['~/assets/scss/main.scss'],
  styleResources: {
    scss: ['./assets/scss/vars.scss'],
  },
};
