require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remind concert harvest credit foster seek'; 
let testAccounts = [
"0xb8c8205aecf282a3c67bbe8625c79e5d5edfbfb131114ea758e847f89f69878c",
"0xc6f475c48150b060b1c712b941d48f53c5b57b860d855e8de86a3588962c9393",
"0x666964d0af58e805e87cb4eddc7b429d4ce77f2b6e21e6d8772bee0267c2f38e",
"0xfdd7dd65a899ffa0a7cd932f88befbdb8336d6aae00bbefcdb95f7d5347696db",
"0x5200f098d98fd7b06d8f8ccb7d37a5846623c7a4e27b24e5d6d72abecc454e6f",
"0x24a3aeda4af8407ca7b37b73ea7bc5c052cab49f7112860b37e533d9d3c07858",
"0x0f2ab7731c2e0bd5be21035251abf3212ab05ab739c0e577a665f0660af2ddc4",
"0xfce167ce3fb94e21592fad2d2321ed7c1e63d9aeffd95c212efbca0e463a3fac",
"0x5a79fe997c9b0902728371e8bb2f3f30cb156dd18a9a61dade0f8c17648e4ace",
"0x4b1ae91129532beeb586e888a96e415387a83a75a71a5eaf8f9b85be347b2f14"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
