# Smart Contract Box

[![Build Status](https://travis-ci.org/paneedesign/smart-contract-box.svg?branch=master)](https://travis-ci.org/paneedesign/smart-contract-box) 
[![Coverage Status](https://coveralls.io/repos/github/paneedesign/smart-contract-box/badge.svg)](https://coveralls.io/github/paneedesign/smart-contract-box)


A ready to go boilerplate for Smart Contracts creation.

Code created using [Open Zeppelin (openzeppelin-solidity)](https://github.com/OpenZeppelin/openzeppelin-solidity) and [Truffle Framework](https://github.com/trufflesuite/truffle).

## Development

Install Truffle

```bash
npm install -g truffle      // Version 4.1.14+ required.
```

### Install dependencies

```bash
npm install
```

### Linter

Use Solium

```bash
npm run lint:sol
```

Use ESLint

```bash
npm run lint:js
```

Use both and fix

```bash
npm run lint:fix
```

### Compile and test the contracts
 
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

## Optional

Install the [truffle-flattener](https://github.com/alcuadrado/truffle-flattener)

```bash
npm install -g truffle-flattener
```

Usage 

```bash
truffle-flattener contracts/SampleContract.sol >> dist/SampleContract.sol
```

## License

Code released under the [MIT License](https://github.com/paneedesign/smart-contract-box/blob/master/LICENSE).
