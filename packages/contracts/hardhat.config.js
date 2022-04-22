require("dotenv").config();

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.4",
      },
      {
        version: "0.8.3",
      },
      {
        version: "0.8.13",
      },
    ],
  },
  networks: {
    hardhat: {
      // initialBaseFeePerGas: 0, // workaround from https://github.com/sc-forks/solidity-coverage/issues/652#issuecomment-896330136 . Remove when that issue is closed.
      allowUnlimitedContractSize: true,
    },
    ropsten: {
      url: process.env.ROPSTEN_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    goerli: {
      url: "https://eth-goerli.alchemyapi.io/v2/xvWNZCtF0QsihW1izifdIOqZrP66u_AJ",
      gas: 8000000,
      gasPrice: 30000000000,
      accounts: [process.env.KEY],
    },
    testnetArbitrum: {
      url: "https://rinkeby.arbitrum.io/rpc",
      gas: 210000,
      accounts: [process.env.KEY],
    },
    mainnetArbitrum: {
      url: "https://arb-mainnet.g.alchemy.com/v2/knQIgFAnRabuP2QSmrK4uF7SzgShIL3c",
      accounts: [process.env.KEYPROD],
    },
    polygon: {
      url: "https://polygon-mainnet.g.alchemy.com/v2/T5feScSf_Edl3Rwxel0ygxWceNyDV8kV",
      accounts: [process.env.KEYPROD],
      // gas: 800000,
      // gasPrice: 100000000000,
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
