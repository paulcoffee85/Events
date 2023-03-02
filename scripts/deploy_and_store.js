// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat")

async function main() {
	await hre.run("compile")

	// we are going to deploy this

	const SimpleStorage = await hre.ethers.getContractFactory("SimpleStorage")
	const simpleStorage = await SimpleStorage.deploy()
	await simpleStorage.deployed()
	console.log(simpleStorage.address)
	// Call the store()
	const transactoinResponse = await simpleStorage.store(1)
	const transactionReceipt = await transactoinResponse.wait(1)
	// console.log(transactionReceipt)
	console.log(transactionReceipt.events[0].args.oldNumber.toString())
	console.log(transactionReceipt.events[0].args.newNumber.toString())
	console.log(transactionReceipt.events[0].args.addedNumber.toString())

	console.log(transactionReceipt.events[0].args.sender)
	// console.log(transactionReceipt.events)
}

// and properly handle errors.

main().catch((error) => {
	console.error(error)
	process.exitCode = 1
})
