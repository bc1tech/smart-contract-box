const { assertRevert } = require('./helpers/assertRevert');

const BigNumber = web3.BigNumber;

require('chai')
  .use(require('chai-as-promised'))
  .use(require('chai-bignumber')(BigNumber))
  .should();

const SampleContract = artifacts.require('SampleContract');

contract('SampleContract', function ([creator, owner, anotherAccount]) {
  const value = new BigNumber(1000);

  beforeEach(async function () {
    this.contract = await SampleContract.new({ from: creator });
  });

  it('message sender should be contract creator', async function () {
    const contractCreator = await this.contract.creator();
    creator.should.equal(contractCreator);
  });

  it('message sender should be contract owner', async function () {
    const contractOwner = await this.contract.owner();
    creator.should.equal(contractOwner);
  });

  describe('calling the creatorDoesWork function', function () {
    describe('if creator is calling', function () {
      it('emits a WorkDone event', async function () {
        const { logs } = await this.contract.creatorDoesWork(value, { from: creator });
        assert.equal(logs.length, 1);
        assert.equal(logs[0].event, 'WorkDone');
        logs[0].args.value.should.be.bignumber.equal(value);
      });
    });

    describe('if another account is calling', function () {
      it('reverts', async function () {
        await assertRevert(this.contract.creatorDoesWork(value, { from: anotherAccount }));
      });
    });
  });

  describe('calling the ownerDoesWork function', function () {
    beforeEach(async function () {
      await this.contract.transferOwnership(owner, { from: creator });
    });

    describe('if owner is calling', function () {
      it('emits a WorkDone event', async function () {
        const { logs } = await this.contract.ownerDoesWork(value, { from: owner });
        assert.equal(logs.length, 1);
        assert.equal(logs[0].event, 'WorkDone');
        logs[0].args.value.should.be.bignumber.equal(value);
      });
    });

    describe('if another account is calling', function () {
      it('reverts', async function () {
        await assertRevert(this.contract.ownerDoesWork(value, { from: anotherAccount }));
      });
    });
  });
});
