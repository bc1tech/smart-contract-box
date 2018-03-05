const BigNumber = web3.BigNumber;

require('chai')
    .use(require('chai-as-promised'))
    .use(require('chai-bignumber')(BigNumber))
    .should();

const Migrations = artifacts.require('Migrations');


contract('Migrations', function ([_, owner]) {

    beforeEach(async function () {
        this.contract = await Migrations.new({ from: owner })
    });

    it('message sender should be contract owner', async function () {
        const contractOwner = await this.contract.owner();
        owner.should.equal(contractOwner);
    });

});