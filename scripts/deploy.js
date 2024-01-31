require('dotenv').config()
const ethers = require("ethers")


// ie: -> Flash(address,address,uint256,uint256,uint256,uint256)
// const getEventSignature = (eventName, abi) => {
//     const eventAbi = abi.find((entry) => entry.name === eventName);
//     const types = eventAbi.inputs.map((input) => input.type);
//     return `${eventName}(${types.join(',')})`;
// }

const main = async () => {
    const provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_URL)
    // const USDC_MATIC_V3 = '0x603b86075A510c31e3749058F9c1d97AD57646E3';

    // const contractAbi = [
    //     {
    //         "anonymous": false,
    //         "inputs": [
    //             {"indexed": true, "internalType": "address", "name": "sender", "type": "address"},
    //             {"indexed": true, "internalType": "address", "name": "recipient", "type": "address"},
    //             {"indexed": false, "internalType": "int256", "name": "amount0", "type": "int256"},
    //             {"indexed": false, "internalType": "int256", "name": "amount1", "type": "int256"},
    //             {"indexed": false, "internalType": "uint160", "name": "sqrtPriceX96", "type": "uint160"},
    //             {"indexed": false, "internalType": "uint128", "name": "liquidity", "type": "uint128"},
    //             {"indexed": false, "internalType": "int24", "name": "tick", "type": "int24"}
    //         ],
    //         "name": "Swap",
    //         "type": "event"
    //     },
    // ]

    // const eventSignature = getEventSignature('Swap', contractAbi)
    // console.log('-------------')
    // console.log(eventSignature)
    // console.log('-------------')

    const eventSignature= '"Transfer(address,address,uint256)"';
    const eventTopic   = ethers.utils.id(eventSignature);

    const filter = {
        address: process.env.CONTRACT_ADDRESS,
        topics: [ethers.utils.id(eventTopic),],
        fromBlock: 44864744 ,
        toBlock: 44894181	,
    };

    const logs = await provider.getLogs(filter);
    console.log(logs);

    // const result = await provider.getLogs(filter)

    // // const contractInterface = new ethers.utils.Interface(contractAbi);

    // result.forEach((log, idx) => {
    //     const decodedLog = contractInterface.decodeEventLog('Swap', log.data, log.topics);

    //     console.log('--------------', idx)
    //     console.log('sender:      ', decodedLog.sender)
    //     console.log('recipient:   ', decodedLog.recipient)
    //     console.log('amount0:     ', decodedLog.amount0.toString())
    //     console.log('amount1:     ', decodedLog.amount1.toString())
    //     console.log('sqrtPriceX96:', decodedLog.sqrtPriceX96.toString())
    //     console.log('liquidity:   ', decodedLog.liquidity.toString())
    //     console.log('tick:        ', decodedLog.tick)
    //     console.log('--------------')
    // });
}

/*
    node scripts/04_getLogsAndDecode.js
*/

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });



// const ethers = require("ethers");
// const usdtAbi = require("../USDT.json")
// require('dotenv').config()

// async function main(){
//   const usdtAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
//   const provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_URL)

//   const contract = new ethers.Contract(usdtAddress,usdtAbi, provider);
//   contract.on("Transfer",(from, to , value, event)=>{
//     let info ={
//       from : from,
//       to : to,
//       value : ethers.utils.formatUnits(value, 6),
//       data : event,
//     }
//     console.log(JSON.stringify(info,null , 4));
//   })

// }

// main()
