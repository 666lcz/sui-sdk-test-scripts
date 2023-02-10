const { JsonRpcProvider, Ed25519Keypair, Network, RawSigner, LocalTxnDataSerializer } = require("@mysten/sui.js");

const SEED = [
  180, 107, 26, 32, 169, 88, 248, 46, 88, 100, 108, 243, 255, 87, 146, 92, 42,
  147, 104, 2, 39, 200, 114, 145, 37, 122, 8, 37, 170, 238, 164, 236,
];

const keypair = Ed25519Keypair.fromSeed(new Uint8Array(SEED));
const address = keypair.getPublicKey().toSuiAddress();
const provider = new JsonRpcProvider(Network.DEVNET);


async function main() {
  //await provider.requestSuiFromFaucet(address);
  const signer = new RawSigner(
    keypair,
    provider,
    new LocalTxnDataSerializer(provider)
  );

  const tx = {
    kind: 'moveCall',
    data: {
      packageObjectId: '0x2',
      module: 'devnet_nft',
      function: 'mint',
      typeArguments: [],
      arguments: [
        'Example NFT',
        'An NFT created by the wallet Command Line Tool',
        'ipfs://bafkreibngqhl3gaa7daob4i2vccziay2jjlp435cf66vhono7nrvww53ty',
      ],
      gasBudget: 1000,
    },
  };

  console.log("txn", JSON.stringify(tx, null, 2));

  const transactionKind =  await new LocalTxnDataSerializer(provider).constructTransactionKindAndPayment(address, tx);

  console.log("transaction kind", JSON.stringify(transactionKind, null, 2));

  const devInspectTxBytes = 
    await new LocalTxnDataSerializer(provider).serializeToBytesWithoutGasInfo(
      address,
      tx,
    );

  console.log("bcs bytes", JSON.stringify(devInspectTxBytes.getData()));

  console.log("base64 bytes", devInspectTxBytes.toString());

  const result = await signer.devInspectTransaction(tx);
  console.log("DevInspect result", JSON.stringify(result, null, 2));
}

main().catch(console.error);
