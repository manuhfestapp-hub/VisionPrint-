// SIMULATED: This orchestrator implements real inter-agent communication through an event bus.
// Agents send messages to each other and process VisionPrint tasks based on their roles.
// Agent processing logic is deterministic (no AI/LLM backend). Per AGENTS.md rule #8.

import { AgentEventBus } from './eventBus';

export interface AgentState {
  id: string;
  name: string;
  role: string;
  type: 'HUB' | 'SPOKE' | 'FINALIZER';
  iconName: string;
  status: 'idle' | 'running' | 'warning' | 'error';
  avgLatency: number;
  totalRuns: number;
  retries: number;
  failures: number;
  currentTask: string;
  description: string;
}

export interface LogEntry {
  id: string;
  agent_id: string;
  action: string;
  attempt: number;
  status: string;
  duration: number;
  message: string;
}

export interface Session {
  correlation_id: string;
  user_prompt: string;
  status: string;
  created_at: string;
  duration_ms: number;
  total_subtasks: number;
  failed_subtasks: number;
  logs: LogEntry[];
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

let logCounter = 0;
function makeLogId(): string {
  logCounter++;
  return `orch_${Date.now()}_${logCounter}`;
}

/**
 * Agent processing functions — each agent has role-specific logic for
 * VisionPrint tasks. Agents communicate results back through the orchestrator.
 */
const AgentProcessors = {
  // Agent 1 — Orchestrator Hub: decomposes prompts and synthesizes results
  agent_1: {
    async deconstruct(prompt: string) {
      await delay(1000);
      const subtasks = [
        { id: 'st_1', assigned_to: 'agent_2', action: 'GATHER_INPUT', payload: { prompt } },
        { id: 'st_2', assigned_to: 'agent_3', action: 'ANALYZE_CONTENT', payload: { prompt } },
        { id: 'st_3', assigned_to: 'agent_4', action: 'VALIDATE_SPEC', payload: { prompt } },
        { id: 'st_4', assigned_to: 'agent_5', action: 'GENERATE_LAYOUT', payload: { prompt } },
      ];
      return {
        subtasks,
        message: `Deconstructed prompt into ${subtasks.length} subtask payloads for spoke agents.`,
      };
    },
    async synthesize(results: { id: string; data: string }[]) {
      await delay(1200);
      const draft = results.map((r) => r.data).join('\n\n---\n\n');
      return {
        draft,
        message: `Synthesized ${results.length} spoke outputs into unified draft.`,
      };
    },
  },

  // Agent 2 — Data Aggregator: gathers customer input data
  agent_2: {
    async gatherInput(prompt: string, attempt: number) {
      if (attempt === 1) {
        await delay(1500);
        throw new Error('Ingestion gateway timeout: exceeded 15,000ms threshold.');
      }
      await delay(1100);
      const truncated = prompt.length > 80 ? prompt.substring(0, 80) + '...' : prompt;
      const data = `[Data Aggregator] Customer input gathered:\n- Dream description: "${truncated}"\n- Theme: Personal Growth\n- Style: Modern Vision Board\n- Print format: 18x24 matte fine art`;
      return { data, message: 'Customer input data loaded and structured.' };
    },
  },

  // Agent 3 — Analytics Engine: analyzes content for visual elements
  agent_3: {
    async analyzeContent(prompt: string) {
      await delay(2300);
      const data = `[Analytics Engine] Content analysis complete:\n- Key themes: manifestation, goals, visualization\n- Emotional tone: aspirational\n- Visual elements: 5 identified (landscape, portrait, text, color, texture)\n- Color palette: warm gradients suggested`;
      return { data, message: 'Content analysis metrics calculated.' };
    },
  },

  // Agent 4 — Validation & Compliance: checks against print specs and policies
  agent_4: {
    async validateSpec(prompt: string) {
      await delay(1200);
      const data = `[Validation & Compliance] Specification validated:\n- Content policy: PASSED\n- Print spec (18x24): VALID\n- Resolution: 300 DPI confirmed\n- Copyright check: CLEAR`;
      return { data, message: 'Compliance and print specification verified.' };
    },
  },

  // Agent 5 — Visualizer & Matrix: generates vision board layout
  agent_5: {
    async generateLayout(prompt: string) {
      await delay(3100);
      const data = `[Visualizer & Matrix] Layout generated:\n- Grid: 3x2 vision matrix\n- Primary image zone: center\n- Affirmation zones: 4 corners\n- Color scheme: gradient overlay\n- Export format: SVG + PNG`;
      return { data, message: 'Vision board layout matrix rendered.' };
    },
  },

  // Agent 6 — Finalizer & Deliverable: formats the final output
  agent_6: {
    async formatFinal(draft: string) {
      await delay(900);
      const finalOutput = `=== VISIONPRINT DELIVERABLE ===\n\n${draft}\n\n=== END DELIVERABLE ===`;
      return { data: finalOutput, message: 'Final deliverable formatted and ready for production.' };
    },
  },
};

/**
 * WorkflowOrchestrator — coordinates the 6-agent hub-and-spoke workflow.
 * Agents communicate through the AgentEventBus: the Hub dispatches tasks to
 * spoke agents, spoke agents report results back, and the Finalizer packages
 * the output. All communication flows through the bus as real messages.
 */
export class WorkflowOrchestrator {
  private bus: AgentEventBus;
  private agentStates: Map<string, AgentState>;

  constructor(agents: AgentState[]) {
    this.bus = new AgentEventBus();
    this.agentStates = new Map(agents.map((a) => [a.id, { ...a }]));
  }

  /** Subscribe to orchestrator events for UI updates. */
  on(event: string, handler: (payload: any) => void): () => void {
    return this.bus.on(event, handler);
  }

  private setAgentStatus(
    agentId: string,
    status: AgentState['status'],
    currentTask: string,
    extra?: { retries?: number }
  ) {
    const agent = this.agentStates.get(agentId);
    if (agent) {
      agent.status = status;
      agent.currentTask = currentTask;
      if (extra?.retries !== undefined) agent.retries = extra.retries;
    }
    this.bus.emit('agent:status', { agentId, status, currentTask, ...extra });
  }

  private addLog(log: Omit<LogEntry, 'id'>): LogEntry {
    const entry: LogEntry = { ...log, id: makeLogId() };
    this.bus.emit('log:new', entry);
    return entry;
  }

  /**
   * Run the full hub-and-spoke workflow on a VisionPrint task prompt.
   * Agents communicate through the event bus at each step.
   */
  async run(prompt: string, options: { simulateRetry: boolean }): Promise<void> {
    const sessionId = `job_b44_${Math.floor(10000 + Math.random() * 90000)}`;
    const startTime = Date.now();

    // --- Create session ---
    const session: Session = {
      correlation_id: sessionId,
      user_prompt: prompt,
      status: 'RUNNING',
      created_at: new Date().toISOString(),
      duration_ms: 0,
      total_subtasks: 4,
      failed_subtasks: 0,
      logs: [],
    };
    this.bus.emit('session:created', session);
    this.bus.emit('workflow:step', { step: 1 });

    // --- STEP 1: Hub decomposes the task ---
    this.setAgentStatus('agent_1', 'running', 'Deconstructing user task into subtask payloads');
    const plan = await AgentProcessors.agent_1.deconstruct(prompt);
    this.addLog({
      agent_id: 'agent_1',
      action: 'DECONSTRUCT_TASK',
      attempt: 1,
      status: 'SUCCESS',
      duration: 1000,
      message: plan.message,
    });
    this.setAgentStatus('agent_1', 'idle', 'Listening on Base44 Event Bus');
    this.bus.emit('workflow:step', { step: 2 });

    // --- STEP 2: Hub dispatches subtasks to spoke agents via the bus ---
    //    Each spoke agent receives its task, processes it, and reports back.
    const taskLabels: Record<string, string> = {
      agent_2: 'Ingesting customer input data...',
      agent_3: 'Analyzing content metrics...',
      agent_4: 'Validating compliance schema...',
      agent_5: 'Rendering visual layout matrix...',
    };
    const idleLabels: Record<string, string> = {
      agent_2: 'Awaiting subtask query',
      agent_3: 'Awaiting subtask calculation',
      agent_4: 'Awaiting validation payload',
      agent_5: 'Awaiting render request',
    };

    const spokePromises = plan.subtasks.map(async (subtask) => {
      const agentId = subtask.assigned_to;

      // Hub sends the task message to the spoke agent through the bus
      this.bus.send('agent_1', agentId, {
        action: subtask.action,
        payload: subtask.payload,
      });

      this.setAgentStatus(agentId, 'running', taskLabels[agentId] || 'Processing subtask...');

      try {
        let result: { data: string; message: string };

        if (agentId === 'agent_2') {
          if (options.simulateRetry) {
            // Agent 2: first attempt times out, retry succeeds
            try {
              await AgentProcessors.agent_2.gatherInput(prompt, 1);
            } catch {
              const currentRetries = this.agentStates.get('agent_2')?.retries || 0;
              this.setAgentStatus('agent_2', 'warning', 'Timeout: 15,000ms exceeded. Attempting Retry #2...', {
                retries: currentRetries + 1,
              });
              this.addLog({
                agent_id: 'agent_2',
                action: 'GATHER_INPUT',
                attempt: 1,
                status: 'TIMEOUT',
                duration: 15000,
                message: 'Timeout: Ingestion gateway took >15,000ms. Retrying...',
              });
              await delay(1600);
            }
            result = await AgentProcessors.agent_2.gatherInput(prompt, 2);
            this.addLog({
              agent_id: 'agent_2',
              action: 'GATHER_INPUT',
              attempt: 2,
              status: 'SUCCESS',
              duration: 1100,
              message: result.message,
            });
          } else {
            result = await AgentProcessors.agent_2.gatherInput(prompt, 2);
            this.addLog({
              agent_id: 'agent_2',
              action: 'GATHER_INPUT',
              attempt: 1,
              status: 'SUCCESS',
              duration: 1100,
              message: result.message,
            });
          }
        } else if (agentId === 'agent_3') {
          result = await AgentProcessors.agent_3.analyzeContent(prompt);
          this.addLog({
            agent_id: 'agent_3',
            action: 'ANALYZE_CONTENT',
            attempt: 1,
            status: 'SUCCESS',
            duration: 2300,
            message: result.message,
          });
        } else if (agentId === 'agent_4') {
          result = await AgentProcessors.agent_4.validateSpec(prompt);
          this.addLog({
            agent_id: 'agent_4',
            action: 'VALIDATE_SPEC',
            attempt: 1,
            status: 'SUCCESS',
            duration: 1200,
            message: result.message,
          });
        } else {
          result = await AgentProcessors.agent_5.generateLayout(prompt);
          this.addLog({
            agent_id: 'agent_5',
            action: 'GENERATE_LAYOUT',
            attempt: 1,
            status: 'SUCCESS',
            duration: 3100,
            message: result.message,
          });
        }

        // Spoke agent sends its result back to the Hub through the bus
        this.bus.send(agentId, 'agent_1', { status: 'SUCCESS', result });
        this.setAgentStatus(agentId, 'idle', idleLabels[agentId] || 'Awaiting subtask');

        return { id: subtask.id, status: 'SUCCESS', data: result.data };
      } catch {
        this.setAgentStatus(agentId, 'idle', idleLabels[agentId] || 'Awaiting subtask');
        return { id: subtask.id, status: 'FAILED', data: '' };
      }
    });

    const spokeResults = await Promise.all(spokePromises);
    const successCount = spokeResults.filter((r) => r.status === 'SUCCESS').length;
    this.bus.emit('workflow:step', { step: 3 });

    // --- STEP 3: Hub synthesizes the spoke results ---
    this.setAgentStatus('agent_1', 'running', 'Synthesizing spoke payloads into draft');
    const synthesis = await AgentProcessors.agent_1.synthesize(
      spokeResults.filter((r) => r.status === 'SUCCESS')
    );
    this.addLog({
      agent_id: 'agent_1',
      action: 'SYNTHESIZE_RESULTS',
      attempt: 1,
      status: 'SUCCESS',
      duration: 1200,
      message: synthesis.message,
    });
    this.setAgentStatus('agent_1', 'idle', 'Listening on Base44 Event Bus');
    this.bus.emit('workflow:step', { step: 4 });

    // --- STEP 4: Hub sends the draft to the Finalizer through the bus ---
    this.bus.send('agent_1', 'agent_6', { action: 'FORMAT_FINAL', payload: { draft: synthesis.draft } });
    this.setAgentStatus('agent_6', 'running', 'Formatting final deliverable...');
    const finalOutput = await AgentProcessors.agent_6.formatFinal(synthesis.draft);
    this.addLog({
      agent_id: 'agent_6',
      action: 'FORMAT_FINAL_OUTPUT',
      attempt: 1,
      status: 'SUCCESS',
      duration: 900,
      message: finalOutput.message,
    });
    this.setAgentStatus('agent_6', 'idle', 'Awaiting draft payload');

    // --- Complete the session ---
    const duration = Date.now() - startTime;
    const finalStatus = successCount === spokeResults.length ? 'COMPLETED' : 'DEGRADED';
    this.bus.emit('session:complete', {
      sessionId,
      status: finalStatus,
      durationMs: duration,
      failedSubtasks: spokeResults.length - successCount,
    });
    this.bus.emit('workflow:step', { step: 0 });
  }
}
