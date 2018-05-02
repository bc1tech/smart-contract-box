import assertRevert from './helpers/assertRevert';

//const BigNumber = web3.BigNumber;
//
// require('chai')
//     .use(require('chai-as-promised'))
//     .use(require('chai-bignumber')(BigNumber))
//     .should();

const SampleContract = artifacts.require('SampleContract');

contract('SampleContract', function ([owner, anotherAccount]) {

    const value = 1000;

    beforeEach(async function () {
        this.contract = await SampleContract.new({ from: owner })
    });

    it('message sender should be contract owner', async function () {
        const contractOwner = await this.contract.owner();
        owner.should.equal(contractOwner);
    });

    describe('calling the doWork function', function () {
        describe('if owner is calling', function () {
            it('emits a WorkDone event', async function () {
                const {logs} = await this.contract.doWork(value, {from: owner});
                assert.equal(logs.length, 1);
                assert.equal(logs[0].event, 'WorkDone');
                assert.equal(logs[0].args.value, value);
            });
        });

        describe('if another account is calling', function () {
            it('reverts', async function () {
                await assertRevert(this.contract.doWork(value, {from: anotherAccount}));
            });
        });
    })

});