require("dotenv").config(); //zmienne z pliku .env

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    //gdy jesteśmy w developerskim serwerze
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: process.env.MONGODB_USERNAME_DEV,
        mongodb_password: process.env.MONGODB_PASSWORD_DEV,
        mongodb_clustername: process.env.MONGODB_CLUSTERNAME_DEV,
        mongodb_database: process.env.MONGODB_DATABASE_DEV,
      },
    };
  }

  // gdy jestesmy w produckji - testowe haskio
  return {
    reactStrictMode: true,
    env: {
      mongodb_username: process.env.MONGODB_USERNAME_PROD,
      mongodb_password: process.env.MONGODB_PASSWORD_PROD,
      mongodb_clustername: process.env.MONGODB_CLUSTERNAME_PROD,
      mongodb_database: process.env.MONGODB_DATABASE_PROD,
    },
  };
};
