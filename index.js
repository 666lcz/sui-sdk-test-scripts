const { JsonRpcProvider, Ed25519Keypair, devnetConnection } = require("@mysten/sui.js");

const USELESS_MNEMOINCS = "runway arrest offer ecology erase castle stone exile point depart vintage mechanic";
const keypair = Ed25519Keypair.deriveKeypair(USELESS_MNEMOINCS);
const address = keypair.getPublicKey().toSuiAddress();
const provider = new JsonRpcProvider(devnetConnection);


async function main() {
  console.log(address);
}

main().catch(console.error);
