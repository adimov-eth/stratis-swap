async function main() {
    const UniswapV3Factory = await ethers.getContractFactory('UniswapV3Factory')
  
    // Start deployment, returning a promise that resolves to a contract object
    const uniswapV3Factory = await UniswapV3Factory.deploy()
    console.log('Contract deployed to address:', uniswapV3Factory.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })