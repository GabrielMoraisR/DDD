import eventHandlerInterface from "./event-handler.interface";
import EventInterface from "./event.interface";

export default interface EventDispatcherInterface {
  register(eventName: string, handler: eventHandlerInterface): void;
  notify(event: EventInterface): void;
}
