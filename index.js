const { JsonRpcProvider, Network } = require("@mysten/sui.js");
const provider = new JsonRpcProvider(Network.DEVNET);


async function main() {
  await getAllBalances();
}


async function getAllBalances() {
  const result = await provider.getAllBalances('0xe58c532315dced9d08fcb9c3aab16eac0d7fbc5f');
  console.log(result);
}

main().catch(console.error);
