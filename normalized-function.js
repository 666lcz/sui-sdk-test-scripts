const { JsonRpcProvider, Connection} = require("@mysten/sui.js");

const connection = new Connection({
  fullnode: 'https://fullnode.testnet.sui.io'
});
const provider = new JsonRpcProvider(connection);


async function main() {
  const result = await provider.getNormalizedMoveFunction({
    package: "0x4b362de791a1b4090fb98f21cd05a271d5cf5e11d7bbec7f91a5d0b3e6a9aef",
    module: "curves",
    function: "is_uncorrelated",
  });
  console.log(result);
}

main().catch(console.error);
