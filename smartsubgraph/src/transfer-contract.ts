import {
  changeIdEvent as changeIdEventEvent,
  changeNameEvent as changeNameEventEvent,
  tranferEvent as tranferEventEvent
} from "../generated/TransferContract/TransferContract"
import {
  changeIdEvent,
  changeNameEvent,
  tranferEvent
} from "../generated/schema"

export function handlechangeIdEvent(event: changeIdEventEvent): void {
  let entity = new changeIdEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.TransferContract_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlechangeNameEvent(event: changeNameEventEvent): void {
  let entity = new changeNameEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.name = event.params.name

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handletranferEvent(event: tranferEventEvent): void {
  let entity = new tranferEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
