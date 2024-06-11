import EventDispatcher from "./event-dispatcher";
import SendMessageToRabbitMQEventHandler from "./events/handlers/send-message-to-rabbitmq-handler";
import OrderPlacedEvent from "./events/order-placed";

describe("Domain event test", () => {
  it("should register and event", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendMessageToRabbitMQEventHandler();

    eventDispatcher.register("OrderPlaced", eventHandler);

    expect(eventDispatcher.getEventHandlers["OrderPlaced"]).toBeDefined();
    expect(eventDispatcher.getEventHandlers["OrderPlaced"].length).toBe(1);
  });

  it("shouold notify when an event is dispatched", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendMessageToRabbitMQEventHandler();
    const spyEventHandler = jest.spyOn(eventHandler, "handle");
    eventDispatcher.register("OrderPlacedEvent", eventHandler);
    const event = new OrderPlacedEvent({
      orderId: "123",
      customerId: "456",
      productId: "789",
      quantity: 1,
      total: 100,
    });

    eventDispatcher.notify(event);

    expect(spyEventHandler).toHaveBeenCalled();
  });
});
