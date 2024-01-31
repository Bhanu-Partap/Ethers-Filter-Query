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

    const filter = {
        address: process.env.ADDRESS_MY,
        topics: [
            ethers.utils.id(0x4fba4607),

        ],
        type :"Transfer",
        fromBlock: 44864444,
        toBlock: 44864744	,
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

