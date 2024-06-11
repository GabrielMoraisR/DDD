import EventInterface from "./event.interface";

export default interface eventHandlerInterface<
  T extends EventInterface = EventInterface
> {
  handle(event: T): void;
}
