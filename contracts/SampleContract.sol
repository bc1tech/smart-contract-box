pragma solidity ^0.4.23;


contract SampleContract {
    event WorkDone(uint256 value);

    address public owner;

    modifier restricted() {
        require(msg.sender == owner, "Should be contract owner");
        _;
    }

    constructor() public {
        owner = msg.sender;
    }

    function doWork(uint256 _value) public restricted {
        emit WorkDone(_value);
    }
}
