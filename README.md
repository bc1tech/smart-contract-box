# Solidity Project

[![Build Status](https://travis-ci.org/paneedesign/smart-contract-box.svg?branch=master)](https://travis-ci.org/paneedesign/smart-contract-box) 
[![Coverage Status](https://coveralls.io/repos/github/paneedesign/smart-contract-box/badge.svg)](https://coveralls.io/github/paneedesign/smart-contract-box)


A ready to go boilerplate for Smart Contracts creation.
 

Code created using [Open Zeppelin (openzeppelin-solidity)](https://github.com/OpenZeppelin/openzeppelin-solidity) and [Truffle Framework](https://github.com/trufflesuite/truffle).

 
 
## Installation


Install truffle, compiler and linter.

```bash
npm install -g truffle      // Version 4.1.13+ required.
npm install -g solium       // Version 1.1.8+ required
```

Solidity version used: 0.4.24



## Install dependencies


```bash
npm install
```



## Linter


Use Solium

```bash
solium -d contracts
```



## Compile, migrate and test the contracts
 

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
truffle-flattener contracts/SampleContract.sol >> dist/SampleContract.sol
```
 
 
 
## Links

Solidity [Doc](https://solidity.readthedocs.io) [Github](https://solidity.readthedocs.io)

OpenZeppelin [Doc](https://openzeppelin.org/api/docs/open-zeppelin.html) [Github](https://github.com/OpenZeppelin)

Truffle [Doc](http://truffleframework.com/docs) [Github](https://github.com/trufflesuite/truffle)

Web3.js [Doc 0.20.4](https://github.com/ethereum/wiki/wiki/JavaScript-API) [Doc 1.0](http://web3js.readthedocs.io/en/1.0) [Github](https://github.com/ethereum/web3.js)
