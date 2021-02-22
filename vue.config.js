// NOTE: Should change public path for production when you upload resources to a certain sever.
// It would run locally at the moment.
// Refs: https://github.com/vuejs/vue-cli/issues/1955#issuecomment-408237701
//       https://cli.vuejs.org/guide/deployment.html#general-guidelines
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
};
