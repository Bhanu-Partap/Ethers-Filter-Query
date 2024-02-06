const ethers = require("ethers")
require('dotenv').config()
// import abi from "../USDT.json"
const abi = require("../USDT.json")


// ie: -> Flash(address,address,uint256,uint256,uint256,uint256)
// const getEventSignature = (eventName, abi) => {
//     const eventAbi = abi.find((entry) => entry.name === eventName);
//     const types = eventAbi.inputs.map((input) => input.type);
//     return `${eventName}(${types.join(',')})`;
// }


    // const provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_URL)
    const main = async () => {
    const provider = new ethers.providers.JsonRpcProvider("https://polygon-mumbai.infura.io/v3/96821ac4b63e4f349f5b25d47e91f571")
    // const provider = new ethers.providers.JsonRpcProvider("https://polygon-mumbai.infura.io/v3/96821ac4b63e4f349f5b25d47e91f571")  

    
    // const latestBlock = await provider.getBlock("latest")
    // console.log(latestBlock.transactions[0]);
    // console.log(latestBlock.number);

    // const eventSignature='PairCreated(address, address, address, uint256)';
    // const eventTopic   = ethers.utils.id(eventSignature);

    const contract_address = "0xc35DADB65012eC5796536bD9864eD8773aBc74C4";
    const block = await provider.getBlockWithTransactions(contract_address.block);

    console.log("Block Number :",block.transactions[0].blockNumber);
    console.log("From:",block.transactions[0].from);
    console.log("To :",block.transactions[0].to);
    console.log("Nonce :",block.transactions[0].nonce);
    console.log("Transaction Hash :",block.transactions[0].hash);
    const valueData = await (await block.transactions[0].wait()).gasUsed
    console.log("Gas Used :", valueData.toString());
    const GasPRice = block.transactions[0].gasPrice;
    const ReadableGasPrice = GasPRice.toString()
    const GasConsumed = valueData * ReadableGasPrice
    const totalGasConsumed = GasConsumed / 10**18
    console.log("Total Gas Consumed :",totalGasConsumed.toString());
    }

main()
    



    // const filter = {
    //     address: "0xd19397dc74793EfC319610c9deD95030Cd5A3020",
    //     // address: process.env.CONTRACT_ADDRESS,
    //     topics: [ethers.utils.id(eventTopic),],
    //     fromBlock: 44864744 ,
    //     toBlock: 44894181	,
    // };

    // const filter = {
    //   // address: "0xd19397dc74793EfC319610c9deD95030Cd5A3020",
      
    //   topics: [eventTopic],
    //   fromBlock: 44864744 ,
    //   toBlock: 44894181	,
    // };






// // const logs =  provider.getLogs(filter);
// // console.log(logs);


// main()
//     .then(() => process.exit(0))
//     .catch((error) => {
//         console.error(error);
//         process.exit(1);
//     });


  
// ==================================================================================================================================================================================================

// async function main(){
//   // const provider = new ethers.providers.InfuraProvider("homestead",process.env.PROJECT_ID)
//       const provider = new ethers.providers.JsonRpcProvider("https://polygon-mumbai.infura.io/v3/96821ac4b63e4f349f5b25d47e91f571")

//   // const receipt = await provider.getTransactionReceipt("0x5c2f1e48853d70702f199ff08fbefb229589ecc0c7ab5904d0e1583cd9feb98a")
//   // console.log(receipt);

//   // const getBlock = await provider.getBlock(19132084)  // For block tx
//       // const network = await provider.getNetwork();
//       // console.log(network);
//   const getBlockTrx = await provider.getBlockWithTransactions(19132084)
//   // console.log(getBlock.hash);
//   console.log(getBlockTrx);



//   // const signedTransaction = "0x5c2f1e48853d70702f199ff08fbefb229589ecc0c7ab5904d0e1583cd9feb98a"
//   // await provider.sendTransaction(signedTransaction)
//   // console.log(signedTransaction);





// }

// main()



// const usdtAbi = require("../USDT.json")

  
  // const usdtAddress = process.env.USDT_ADDRESS;

  // const contract = new ethers.Contract(usdtAddress,usdtAbi, provider);
  // contract.on("Transfer",(from, to , value, event)=>{
  //   let info ={
  //     from : from,
  //     to : to,
  //     value : ethers.utils.formatUnits(value, 6),
  //     data : event,
  //   }
  //   // console.log(JSON.stringify(info,null , 4));
  //   console.log(info);
  // })



//   const getTxn = async () => {
//         const a =  await provider.getTransactionReceipt('0xba770b460f5e52565daf1ec3cd189d8c2d07c45fd7a5cd822d885cf4c1f2d031');
//     console.log(a.logs[0]);
//     const sig = 'Transfer(address,address,uint256)'
    
//     const utils = ethers.utils;
//     const array = keccak256(utils.toUtf8Bytes(sig));
//     console.log(array);
//     const bihno = utils.defaultAbiCoder.decode(['uint256'],'0x0000000000000000000000000000000000000000000000008ac7230489e80000')[0].toString();
//     console.log(bihno);  
//     }





  //   async function getPastEvents(fromBlock,toBlock) {
  //   const events = [];
  //   const provider = new ethers.providers.JsonRpcProvider("https://polygon-mumbai.infura.io/v3/96821ac4b63e4f349f5b25d47e91f571")
  //    for (let blockNumber = fromBlock; blockNumber <= toBlock; blockNumber++) {
  //         const block = await provider.getBlock(blockNumber);
  //         const getBlockTrx = await provider.getBlockWithTransactions(blockNumber)
  //         if(getBlockTrx.transactions.length) {
  //            getBlockTrx.transactions.forEach(async(txn)=> {
  //             const hash = txn.hash;
  //             provider.waitForTransaction(hash);
               
  //             const AllLog = await provider.getTransactionReceipt(hash);
              
  //             // const sig = 'Transfer(address,address,uint256)'
  //             const sig = 'PairCreated (index_topic_1 address , index_topic_2 address , address , uint256)'
  //             if(AllLog.logs.length) {
  //               AllLog.logs.forEach(async(log)=> {
  //                 const utils = ethers.utils;
  //                 const sigByte = utils.keccak256(utils.toUtf8Bytes(sig));
  //                 // console.log(sigByte);
  //                 // console.log(log.topics[0]);
  //                 if(sigByte ==log.topics[0]){
  //                   // const bihno = utils.defaultAbiCoder.decode(['uint256'],'0x0000000000000000000000000000000000000000000000008ac7230489e80000')[0].toString();
                    
  //                   console.log(txn);
  //                 }
  //               })}
  
  //           });
  //         }
  //     }
  //   }
  

  // getPastEvents(45413270,45413271);
