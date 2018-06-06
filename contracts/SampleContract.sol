pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/ownership/Ownable.sol";


contract SampleContract is Ownable {
  event WorkDone(uint256 value);

  address public creator;

  modifier onlyCreator() {
    require(msg.sender == creator, "Should be contract creator");
    _;
  }

  constructor() public {
    creator = owner;
  }

  function creatorDoesWork(uint256 _value) public onlyCreator {
    emit WorkDone(_value);
  }

  function ownerDoesWork(uint256 _value) public onlyOwner {
    emit WorkDone(_value);
  }
}
