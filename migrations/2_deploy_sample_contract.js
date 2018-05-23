const SampleContract = artifacts.require('SampleContract');

module.exports = function (deployer, network, accounts) {
  deployer.deploy(SampleContract);
};
