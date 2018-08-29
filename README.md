# Solidity Project

[![Build Status](https://travis-ci.org/paneedesign/smart-contract-box.svg?branch=master)](https://travis-ci.org/paneedesign/smart-contract-box) 
[![Coverage Status](https://coveralls.io/repos/github/paneedesign/smart-contract-box/badge.svg)](https://coveralls.io/github/paneedesign/smart-contract-box)


A ready to go boilerplate for Smart Contracts creation.
 

Code created using [Open Zeppelin (openzeppelin-solidity)](https://github.com/OpenZeppelin/openzeppelin-solidity) and [Truffle Framework](https://github.com/trufflesuite/truffle).

 
 
## Installation


Install truffle.

```bash
npm install -g truffle      // Version 4.1.13+ required.
```

Solidity version used: 0.4.24



## Install dependencies


```bash
npm install
```



## Linter


Use Solium

```bash
npm run lint:sol
```

Lint and fix all

```bash
npm run lint:all:fix
```



## Compile and test the contracts.
 

Open the Truffle console

```bash
truffle develop
```

Compile 

```bash
compile 
```

Test

```bash
test
```



## Run server


Run the `liteserver` development server.

```bash
npm run dev
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

Web3.js [Doc 0.20.6](https://github.com/ethereum/wiki/wiki/JavaScript-API) [Doc 1.0.*](http://web3js.readthedocs.io/en/1.0) [Github](https://github.com/ethereum/web3.js)
