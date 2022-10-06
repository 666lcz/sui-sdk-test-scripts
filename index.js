const { JsonRpcProvider } = require("@mysten/sui.js");

const endpoint = "https://fullnode.devnet.sui.io:443";
const provider = new JsonRpcProvider(endpoint, true);

async function main() {
  const result = await provider.getRecentTransactions(10);
  console.log(result);
}

main().catch(console.error);
