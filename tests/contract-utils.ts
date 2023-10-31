import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AddressExcludedFromFees,
  AddressIncludedInFees,
  Approval,
  BuyFeeUpdated,
  LeetPairAdded,
  LeetPairRemoved,
  OwnershipTransferred,
  SellFeeUpdated,
  Transfer,
  WhitelistedFactoryAdded,
  WhitelistedFactoryRemoved
} from "../generated/Contract/Contract"

export function createAddressExcludedFromFeesEvent(
  _address: Address
): AddressExcludedFromFees {
  let addressExcludedFromFeesEvent = changetype<AddressExcludedFromFees>(
    newMockEvent()
  )

  addressExcludedFromFeesEvent.parameters = new Array()

  addressExcludedFromFeesEvent.parameters.push(
    new ethereum.EventParam("_address", ethereum.Value.fromAddress(_address))
  )

  return addressExcludedFromFeesEvent
}

export function createAddressIncludedInFeesEvent(
  _address: Address
): AddressIncludedInFees {
  let addressIncludedInFeesEvent = changetype<AddressIncludedInFees>(
    newMockEvent()
  )

  addressIncludedInFeesEvent.parameters = new Array()

  addressIncludedInFeesEvent.parameters.push(
    new ethereum.EventParam("_address", ethereum.Value.fromAddress(_address))
  )

  return addressIncludedInFeesEvent
}

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createBuyFeeUpdatedEvent(
  _fee: BigInt,
  _previousFee: BigInt
): BuyFeeUpdated {
  let buyFeeUpdatedEvent = changetype<BuyFeeUpdated>(newMockEvent())

  buyFeeUpdatedEvent.parameters = new Array()

  buyFeeUpdatedEvent.parameters.push(
    new ethereum.EventParam("_fee", ethereum.Value.fromUnsignedBigInt(_fee))
  )
  buyFeeUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_previousFee",
      ethereum.Value.fromUnsignedBigInt(_previousFee)
    )
  )

  return buyFeeUpdatedEvent
}

export function createLeetPairAddedEvent(_pair: Address): LeetPairAdded {
  let leetPairAddedEvent = changetype<LeetPairAdded>(newMockEvent())

  leetPairAddedEvent.parameters = new Array()

  leetPairAddedEvent.parameters.push(
    new ethereum.EventParam("_pair", ethereum.Value.fromAddress(_pair))
  )

  return leetPairAddedEvent
}

export function createLeetPairRemovedEvent(_pair: Address): LeetPairRemoved {
  let leetPairRemovedEvent = changetype<LeetPairRemoved>(newMockEvent())

  leetPairRemovedEvent.parameters = new Array()

  leetPairRemovedEvent.parameters.push(
    new ethereum.EventParam("_pair", ethereum.Value.fromAddress(_pair))
  )

  return leetPairRemovedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createSellFeeUpdatedEvent(
  _fee: BigInt,
  _previousFee: BigInt
): SellFeeUpdated {
  let sellFeeUpdatedEvent = changetype<SellFeeUpdated>(newMockEvent())

  sellFeeUpdatedEvent.parameters = new Array()

  sellFeeUpdatedEvent.parameters.push(
    new ethereum.EventParam("_fee", ethereum.Value.fromUnsignedBigInt(_fee))
  )
  sellFeeUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_previousFee",
      ethereum.Value.fromUnsignedBigInt(_previousFee)
    )
  )

  return sellFeeUpdatedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}

export function createWhitelistedFactoryAddedEvent(
  _factory: Address
): WhitelistedFactoryAdded {
  let whitelistedFactoryAddedEvent = changetype<WhitelistedFactoryAdded>(
    newMockEvent()
  )

  whitelistedFactoryAddedEvent.parameters = new Array()

  whitelistedFactoryAddedEvent.parameters.push(
    new ethereum.EventParam("_factory", ethereum.Value.fromAddress(_factory))
  )

  return whitelistedFactoryAddedEvent
}

export function createWhitelistedFactoryRemovedEvent(
  _factory: Address
): WhitelistedFactoryRemoved {
  let whitelistedFactoryRemovedEvent = changetype<WhitelistedFactoryRemoved>(
    newMockEvent()
  )

  whitelistedFactoryRemovedEvent.parameters = new Array()

  whitelistedFactoryRemovedEvent.parameters.push(
    new ethereum.EventParam("_factory", ethereum.Value.fromAddress(_factory))
  )

  return whitelistedFactoryRemovedEvent
}
