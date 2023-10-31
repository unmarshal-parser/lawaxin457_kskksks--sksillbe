import {
  AddressExcludedFromFees as AddressExcludedFromFeesEvent,
  AddressIncludedInFees as AddressIncludedInFeesEvent,
  Approval as ApprovalEvent,
  BuyFeeUpdated as BuyFeeUpdatedEvent,
  LeetPairAdded as LeetPairAddedEvent,
  LeetPairRemoved as LeetPairRemovedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  SellFeeUpdated as SellFeeUpdatedEvent,
  Transfer as TransferEvent,
  WhitelistedFactoryAdded as WhitelistedFactoryAddedEvent,
  WhitelistedFactoryRemoved as WhitelistedFactoryRemovedEvent
} from "../generated/Contract/Contract"
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
} from "../generated/schema"

export function handleAddressExcludedFromFees(
  event: AddressExcludedFromFeesEvent
): void {
  let entity = new AddressExcludedFromFees(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._address = event.params._address

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAddressIncludedInFees(
  event: AddressIncludedInFeesEvent
): void {
  let entity = new AddressIncludedInFees(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._address = event.params._address

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBuyFeeUpdated(event: BuyFeeUpdatedEvent): void {
  let entity = new BuyFeeUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._fee = event.params._fee
  entity._previousFee = event.params._previousFee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLeetPairAdded(event: LeetPairAddedEvent): void {
  let entity = new LeetPairAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._pair = event.params._pair

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLeetPairRemoved(event: LeetPairRemovedEvent): void {
  let entity = new LeetPairRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._pair = event.params._pair

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSellFeeUpdated(event: SellFeeUpdatedEvent): void {
  let entity = new SellFeeUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._fee = event.params._fee
  entity._previousFee = event.params._previousFee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWhitelistedFactoryAdded(
  event: WhitelistedFactoryAddedEvent
): void {
  let entity = new WhitelistedFactoryAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._factory = event.params._factory

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWhitelistedFactoryRemoved(
  event: WhitelistedFactoryRemovedEvent
): void {
  let entity = new WhitelistedFactoryRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._factory = event.params._factory

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
