// const ethers = require("ethers")
// require('dotenv').config()


// // ie: -> Flash(address,address,uint256,uint256,uint256,uint256)
// // const getEventSignature = (eventName, abi) => {
// //     const eventAbi = abi.find((entry) => entry.name === eventName);
// //     const types = eventAbi.inputs.map((input) => input.type);
// //     return `${eventName}(${types.join(',')})`;
// // }

// const main = async () => {
//     // const provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_URL)
//     const main = async () => {
// const provider = new ethers.providers.JsonRpcProvider("https://polygon-mumbai.infura.io/v3/96821ac4b63e4f349f5b25d47e91f571")
//     // const provider = new ethers.providers.JsonRpcProvider("https://polygon-mumbai.infura.io/v3/96821ac4b63e4f349f5b25d47e91f571")  


//     const eventSignature= 'Transfer(address,address,uint256)';
//     const eventTopic   = ethers.utils.id(eventSignature);

//     // const filter = {
//     //     address: "0xd19397dc74793EfC319610c9deD95030Cd5A3020",
//     //     // address: process.env.CONTRACT_ADDRESS,
//     //     topics: [ethers.utils.id(eventTopic),],
//     //     fromBlock: 44864744 ,
//     //     toBlock: 44894181	,
//     // };

//     const filter = {
//       address: "0xd19397dc74793EfC319610c9deD95030Cd5A3020",
//       // address: process.env.CONTRACT_ADDRESS,
//       topics: [eventTopic],
//       fromBlock: 44864744 ,
//       toBlock: 44894181	,
//     };

//     const listenToEvents =()=>{

//     }

//     console.log(filter);
//     const logs =  provider.getLogs(filter);
//     console.log(logs);

// }
// }





// // const logs =  provider.getLogs(filter);
// // console.log(logs);


// main()
//     .then(() => process.exit(0))
//     .catch((error) => {
//         console.error(error);
//         process.exit(1);
//     });


  
const ethers = require("ethers");
// const usdtAbi = require("../USDT.json")
require('dotenv').config()

async function main(){
  // const usdtAddress = process.env.USDT_ADDRESS;
  const provider = new ethers.providers.InfuraProvider("homestead",process.env.PROJECT_ID)
  await provider.getTransactionReceipt("0x5c2f1e48853d70702f199ff08fbefb229589ecc0c7ab5904d0e1583cd9feb98a")
  

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

}

main()
