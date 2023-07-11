import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  changeIdEvent,
  changeNameEvent,
  tranferEvent
} from "../generated/TransferContract/TransferContract"

export function createchangeIdEventEvent(id: BigInt): changeIdEvent {
  let changeIdEventEvent = changetype<changeIdEvent>(newMockEvent())

  changeIdEventEvent.parameters = new Array()

  changeIdEventEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return changeIdEventEvent
}

export function createchangeNameEventEvent(name: string): changeNameEvent {
  let changeNameEventEvent = changetype<changeNameEvent>(newMockEvent())

  changeNameEventEvent.parameters = new Array()

  changeNameEventEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )

  return changeNameEventEvent
}

export function createtranferEventEvent(
  from: Address,
  to: Address,
  amount: BigInt
): tranferEvent {
  let tranferEventEvent = changetype<tranferEvent>(newMockEvent())

  tranferEventEvent.parameters = new Array()

  tranferEventEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  tranferEventEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  tranferEventEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return tranferEventEvent
}
