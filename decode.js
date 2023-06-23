const { bcs } = require("@mysten/sui.js");

async function main() {
  const [wrongInput, correctInput] = [BigInt('154386538175093611946334810'), BigInt('15438653817509361194633481')];
  console.log("wrong number input ", wrongInput, " correct number input ", correctInput);
  const wrongNum = bcs.ser('u256', wrongInput).toString('hex');
  const correctNum = bcs.ser('u256', correctInput).toString('hex');
  console.log("wrong number serialized = ", wrongNum, " correct number serialized = ", correctNum);
  const deWrongNum = bcs.de('u256', wrongNum, 'hex');
  const deCorrectNum = bcs.de('u256', correctNum, 'hex');
  console.log("wrong number decoded = ", deWrongNum, " correct number decoded = ", deCorrectNum);
}

main().catch(console.error);
