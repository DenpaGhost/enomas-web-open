require('dotenv').config();
const {NODE_ENV} = process.env;

export default {
    env: {
        NODE_ENV
    },
    css:[
      'assets/style/app.scss'
    ],
    buildModules: [
        ['@nuxt/typescript-build', {
            typeCheck: true
        }],
        ['@nuxtjs/dotenv', {}]
    ]
}