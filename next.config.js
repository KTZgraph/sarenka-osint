const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    //gdy jesteśmy w developerskim serwerze
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: "sarenka-app-demo",
        mongodb_password: "Rm2CyQ0NxW296oxu",
        mongodb_clustername: "cluster0",
        mongodb_database: "sarenka-osint-demo",
      },
    };
  }

  // gdy jestesmy w produckji - testowe haskio
  return {
    reactStrictMode: true,
    env: {
      mongodb_username: "sarenka-app",
      mongodb_password: "Rm2CyQ0NxW296oxu",
      mongodb_clustername: "cluster0",
      mongodb_database: "sarenka-osint",
    },
  };
};
