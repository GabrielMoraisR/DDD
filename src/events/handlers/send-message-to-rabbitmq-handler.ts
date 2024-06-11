import eventHandlerInterface from "../../event-handler.interface";
import EventInterface from "../../event.interface";
import OrderPlacedEvent from "../order-placed";

export default class SendMessageToRabbitMQEventHandler
  implements eventHandlerInterface<EventInterface>
{
  handle(event: OrderPlacedEvent): void {
    console.log("Send message to RabbitMQ:", event);
  }
}
