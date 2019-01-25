# Smart Contract Box

[![Build Status](https://travis-ci.org/bc1tech/smart-contract-box.svg?branch=master)](https://travis-ci.org/bc1tech/smart-contract-box) 
[![Coverage Status](https://coveralls.io/repos/github/bc1tech/smart-contract-box/badge.svg)](https://coveralls.io/github/bc1tech/smart-contract-box)


A ready to go boilerplate for Smart Contracts creation.

Code created using [Open Zeppelin (openzeppelin-solidity)](https://github.com/OpenZeppelin/openzeppelin-solidity) and [Truffle Framework](https://github.com/trufflesuite/truffle).

## Development

Install Truffle if you want to run your own node

Version 4.1.15 required

```bash
npm install -g truffle
```

### Install dependencies

```bash
npm install
```

### Linter

Use Ethlint

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

## Usage
 
### Compile

```bash
npm run compile
```

### Test 

```bash
npm run test 
```

### Code Coverage

```bash
npm run coverage
```

### Profiling

```bash
npm run profile
```

## Optional

### Flattener

Install the [truffle-flattener](https://github.com/alcuadrado/truffle-flattener)

```bash
npm install -g truffle-flattener
```

Usage 

```bash
truffle-flattener contracts/SampleContract.sol > dist/SampleContract.sol
```

## License

Code released under the [MIT License](https://github.com/bc1tech/solidity-starter-kit/blob/master/LICENSE).
