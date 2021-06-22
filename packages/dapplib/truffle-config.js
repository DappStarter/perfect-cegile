require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth mirror provide harvest glimpse equal gate'; 
let testAccounts = [
"0xfa6d1c47dcdcdfd0a611407910a0649e828d785d47a8a212a00a08a1ad8fbd11",
"0xa21d2d85c940795dfaa899c6f18df7b476568956b3e19572085537a4ec006d2c",
"0x3e3557d043b960e3a7b4b2ee1c015db435e0d200ec51a804e32c1678f7d7b639",
"0x31fd35d72412befbaeb8f781216e583eb0c11e63a487f9a969a387bd6689d99e",
"0x22016741bba10a0083fad876c0bd894733339989a5d18764886358291108ad05",
"0xbef6144bfd8d23d4fe9f1fc2dfd316610d92fcf19ef199fe1e01c68147723298",
"0xf43a3494b0cb79649cb2ee9a76181a8e770272c29d28c2e1d713bf7e7c4eb4bb",
"0x93a813cf63c44a5f2c2403e537e975e4fca688bb23d9fee6b4ea3aae361da9d8",
"0x91e0001740f5e8d3b7eee6e394d5a1a029fad4163c909580d73311abad763e11",
"0x23e300326b4185017f77929beda2632d472c97c1986e7025b3bbb278663b0eef"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

