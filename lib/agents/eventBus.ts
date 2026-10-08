// SIMULATED: This event bus enables real inter-agent message passing within the browser.
// No external API, backend, or network calls are involved. Per AGENTS.md rule #8.

type EventHandler = (payload: any) => void;

/**
 * AgentEventBus — a lightweight pub/sub message broker that agents use to
 * communicate with each other. Each agent can emit events and subscribe to
 * events from other agents, enabling real inter-agent coordination.
 */
export class AgentEventBus {
  private handlers: Map<string, Set<EventHandler>> = new Map();

  /** Subscribe to an event. Returns an unsubscribe function. */
  on(event: string, handler: EventHandler): () => void {
    if (!this.handlers.has(event)) {
      this.handlers.set(event, new Set());
    }
    this.handlers.get(event)!.add(handler);
    return () => {
      this.handlers.get(event)?.delete(handler);
    };
  }

  /** Emit an event to all subscribers. */
  emit(event: string, payload: any): void {
    this.handlers.get(event)?.forEach((h) => h(payload));
  }

  /** Send a directed message from one agent to another through the bus. */
  send(from: string, to: string, message: any): void {
    this.emit('agent:message', { from, to, message, timestamp: Date.now() });
    this.emit(`agent:${to}:inbox`, { from, message, timestamp: Date.now() });
  }
}
