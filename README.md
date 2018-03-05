# Solidity Project


Code created using [Open Zeppelin (zeppelin-solidity)](https://github.com/OpenZeppelin/zeppelin-solidity) and [Truffle Framework](https://github.com/trufflesuite/truffle).

 
 
## Installation


Install truffle, compiler and linter.

```bash
npm install -g truffle     // Version 4.1.0+ required.
npm install -g solc        // Version 0.4.19+ required
npm install -g solium
```



## Install dependencies


```bash
npm install
```



## Linter


Use Solium

```bash
solium -d contracts
```



## Compile, migrate and test the contracts.
 

Open the Truffle console

```bash
truffle develop
```

Compile 

```bash
compile 
```

Migrate

```bash
migrate
```

Test

```bash
test
```



## Run server


Run the `liteserver` development server for front-end hot reloading. For now, smart contract changes must be manually recompiled and migrated.

```bash
npm run dev
```



## Security Tool


Install [Mythril](https://github.com/ConsenSys/mythril)

```bash
pip3 install mythril
```


Usage 

```bash
truffle compile
myth --truffle
```



## Optional


Install the [truffle-flattener](https://github.com/alcuadrado/truffle-flattener)

```bash
npm install -g truffle-flattener
```
 
 
Usage 

```bash
truffle-flattener contracts/Migrations.sol >> dist/Migrations.sol
```
 
 
 
## Links

Solidity [Doc](https://solidity.readthedocs.io) [Github](https://solidity.readthedocs.io)

OpenZeppelin [Doc](http://zeppelin-solidity.readthedocs.io) [Github](https://github.com/OpenZeppelin)

Truffle [Doc](http://truffleframework.com/docs) [Github](https://github.com/trufflesuite/truffle)

Web3.js [Doc 0.20.4](https://github.com/ethereum/wiki/wiki/JavaScript-API) [Doc 1.0](http://web3js.readthedocs.io/en/1.0) [Github](https://github.com/ethereum/web3.js)
 