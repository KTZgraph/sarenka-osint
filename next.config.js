//https://nextjs.org/docs/advanced-features/i18n-routing
//https://www.npmjs.com/package/next-translate działa ze stronami statycznie generowanymi
const nextTranslate = require('next-translate')


module.exports = {
  reactStrictMode: true,
  // i18n: {
  //   locales: ['en-US', 'pl'],
  //   defaultLocale: 'en-US',
  // },
  ...nextTranslate(), //bezpośredni import camiast teo u góry
}
