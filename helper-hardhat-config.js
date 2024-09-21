const { ethers } = require("hardhat")

const networkConfig = {
    default: {
        name: "hardhat",
        keepersUpdateInterval: "30",
    },
    31337: {
        name: "localhost",
        subscriptionId: "588",
        gasLane: "0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c", // 30 gwei/ not really needed on a mock network
        keepersUpdateInterval: "30",
        raffleEntranceFee: ethers.utils.parseEther("0.005"), // 0.01 ETH
        callbackGasLimit: "500000", // 500,000 gas
    },
    11155111: {
        name: "sepolia",
        subscriptionId: "9039",
        gasLane: "0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c", // 150 gwei
        keepersUpdateInterval: "30",
        raffleEntranceFee: ethers.utils.parseEther("0.01"), // 0.01 ETH
        callbackGasLimit: "1500000000", // 150,000 gas
        vrfCoordinatorV2: "0x8103B0A8A00be2DDC778e6e7eaa21791Cd364625",
    },
    1: {
        name: "mainnet",
        keepersUpdateInterval: "30",
    },
    421614: {
        name: "arbitrum",
        subscriptionId: "19529697787396016022304153771070556532529546324323864260908154321412790138379",
        gasLane: "0x1770bdc7eec7771f7ba4ffd640f34260d7f095b79c92d34a5b2551d6f6cfd2be", // 150 gwei
        keepersUpdateInterval: "30",
        raffleEntranceFee: ethers.utils.parseEther("0.01"), // 0.01 ETH
        callbackGasLimit: "1500000000", // 150,000 gas
        vrfCoordinatorV2: "0x5ce8d5a2bc84beb22a398cca51996f7930313d61",

    }
}

const developmentChains = ["hardhat", "localhost"]
const VERIFICATION_BLOCK_CONFIRMATIONS = 6
const frontEndContractsFile = "./front-end-alx/constants/contractAddresses.json"
const frontEndAbiFile = "./front-end-alx/constants/abi.json"

module.exports = {
    networkConfig,
    developmentChains,
    VERIFICATION_BLOCK_CONFIRMATIONS,
    frontEndContractsFile,
    frontEndAbiFile,
}
