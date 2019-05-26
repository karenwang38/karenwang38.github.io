const HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "only tail aunt faculty agree front client luggage planet rabbit future cave";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    // @ Infura
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "ropsten.infura.io/v3/ac0769dcaa914b29b8bc78a26baf8842", 0);
      },
      network_id: '*',
      //gas: 4712388,
      gas: 4712388,
      gasPrice: 80000000000 // 80 Gwei
      //from: "0xfbf1096746a7ba38674cb224ae96b72136f492ac"
      //gasePrice: 100000000000,
      //from: "<0xfbf1096746a7ba38674cb224ae96b72136f492ac>".toLowerCase()
    }
  }
};
