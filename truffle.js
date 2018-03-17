require('babel-register');
require('babel-polyfill');

module.exports = {
  migrations_directory: "./migrations",
  networks: {
    development: {
      host: "localhost",
      port: 9545,
      gas: 6500000,
      network_id: "*" // Match any network id
    },
    ropsten: {
      host: "localhost",
      port: 8545,
      gas: 4500000,
      network_id: "3" // Match any network id
    }
  }
};
