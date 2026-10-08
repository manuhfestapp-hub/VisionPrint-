'use client';

import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { WorkflowOrchestrator } from '@/lib/agents/orchestrator';

    // SIMULATED: Agent definitions, session data, and metrics are mock data for demonstration.
    // Inter-agent communication is REAL — agents send messages to each other through an event bus
    // (lib/agents/eventBus.ts) and coordinate via the WorkflowOrchestrator (lib/agents/orchestrator.ts).
    // Agent processing logic is deterministic (no AI/LLM backend). No database or external API calls.
    // Per AGENTS.md rule #8.

    // Zero-dependency SVG Icon Components for bulletproof rendering in all environments
    const Icon = ({ path, className = "w-4 h-4", fill = "none" }) => (
      <svg className={className} fill={fill} stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {path}
      </svg>
    );

    const Icons = {
      Activity: (p) => <Icon {...p} path={<><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></>} />,
      Layers: (p) => <Icon {...p} path={<><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></>} />,
      Clock: (p) => <Icon {...p} path={<><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></>} />,
      Server: (p) => <Icon {...p} path={<><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></>} />,
      Code: (p) => <Icon {...p} path={<><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></>} />,
      CheckCircle: (p) => <Icon {...p} path={<><path d="22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></>} />,
      RefreshCw: (p) => <Icon {...p} path={<><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></>} />,
      Play: (p) => <Icon {...p} path={<><polygon points="5 3 19 12 5 21 5 3"></polygon></>} />,
      Search: (p) => <Icon {...p} path={<><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></>} />,
      Terminal: (p) => <Icon {...p} path={<><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></>} />,
      Copy: (p) => <Icon {...p} path={<><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></>} />,
      Check: (p) => <Icon {...p} path={<><polyline points="20 6 9 17 4 12"></polyline></>} />,
      Radio: (p) => <Icon {...p} path={<><circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.83a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path></>} />,
      Cpu: (p) => <Icon {...p} path={<><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="15" x2="23" y2="15"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="15" x2="4" y2="15"></line></>} />,
      Database: (p) => <Icon {...p} path={<><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></>} />,
      BarChart2: (p) => <Icon {...p} path={<><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></>} />,
      ShieldCheck: (p) => <Icon {...p} path={<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></>} />,
      Zap: (p) => <Icon {...p} path={<><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></>} />,
      FileText: (p) => <Icon {...p} path={<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></>} />,
      AlertTriangle: (p) => <Icon {...p} path={<><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></>} />,
      CheckCircle2: (p) => <Icon {...p} path={<><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></>} />,
      XCircle: (p) => <Icon {...p} path={<><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></>} />,
      CornerDownRight: (p) => <Icon {...p} path={<><polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path></>} />
    };

    const AGENT_DEFINITIONS = [
      { 
        id: 'agent_1', 
        name: 'Orchestrator Hub', 
        role: 'Orchestrator Hub & Synthesizer', 
        type: 'HUB',
        iconName: 'Cpu', 
        status: 'idle', 
        avgLatency: 1120, 
        totalRuns: 214, 
        retries: 2, 
        failures: 0, 
        currentTask: 'Listening on Base44 Event Bus',
        description: 'Deconstructs incoming prompts into subtask plans, dispatches to Agents 2-5, and synthesizes partial/full outputs.'
      },
      { 
        id: 'agent_2', 
        name: 'Data Aggregator', 
        role: 'Data Aggregator & Ingestion', 
        type: 'SPOKE',
        iconName: 'Database', 
        status: 'idle', 
        avgLatency: 3850, 
        totalRuns: 208, 
        retries: 16, 
        failures: 3, 
        currentTask: 'Awaiting subtask query',
        description: 'Fetches structured/unstructured dataset inputs from attached database connectors and API feeds.'
      },
      { 
        id: 'agent_3', 
        name: 'Analytics Engine', 
        role: 'Analytics & Compute Engine', 
        type: 'SPOKE',
        iconName: 'BarChart2', 
        status: 'idle', 
        avgLatency: 2900, 
        totalRuns: 210, 
        retries: 5, 
        failures: 1, 
        currentTask: 'Awaiting subtask calculation',
        description: 'Performs statistical computations, variance calculations, pattern extraction, and metric synthesis.'
      },
      { 
        id: 'agent_4', 
        name: 'Validation & Compliance', 
        role: 'Validation & Compliance', 
        type: 'SPOKE',
        iconName: 'ShieldCheck', 
        status: 'idle', 
        avgLatency: 1800, 
        totalRuns: 212, 
        retries: 1, 
        failures: 0, 
        currentTask: 'Awaiting validation payload',
        description: 'Checks output formatting against business constraints, security policies, and schemas.'
      },
      { 
        id: 'agent_5', 
        name: 'Visualizer & Matrix', 
        role: 'Visualizer & Matrix Generator', 
        type: 'SPOKE',
        iconName: 'Zap', 
        status: 'idle', 
        avgLatency: 4200, 
        totalRuns: 205, 
        retries: 9, 
        failures: 2, 
        currentTask: 'Awaiting render request',
        description: 'Generates SVG charts, trend matrices, summary graphics, and layout structures.'
      },
      { 
        id: 'agent_6', 
        name: 'Finalizer & Deliverable', 
        role: 'Finalizer & Deliverable Format', 
        type: 'FINALIZER',
        iconName: 'FileText', 
        status: 'idle', 
        avgLatency: 950, 
        totalRuns: 213, 
        retries: 0, 
        failures: 0, 
        currentTask: 'Awaiting draft payload',
        description: 'Polishes, formats, and packages the synthesized response into human-readable markdown and exports.'
      }
    ];

    const INITIAL_SESSIONS = [
      {
        correlation_id: 'job_b44_99812',
        user_prompt: 'Analyze Q3 regional sales metrics, highlight top product categories, and format summary.',
        status: 'COMPLETED',
        created_at: '2026-10-03T22:15:00Z',
        duration_ms: 11450,
        total_subtasks: 4,
        failed_subtasks: 0,
        logs: [
          { id: 'l1', agent_id: 'agent_1', action: 'DECONSTRUCT_TASK', attempt: 1, status: 'SUCCESS', duration: 980, message: 'Split user prompt into 4 parallel spoke execution steps.' },
          { id: 'l2', agent_id: 'agent_2', action: 'FETCH_SALES_DB', attempt: 1, status: 'SUCCESS', duration: 3200, message: 'Fetched 14,200 rows from PostgreSQL sales table.' },
          { id: 'l3', agent_id: 'agent_3', action: 'COMPUTE_METRICS', attempt: 1, status: 'SUCCESS', duration: 2800, message: 'Calculated quarter-over-quarter growth variance (+14.2%).' },
          { id: 'l4', agent_id: 'agent_4', action: 'VERIFY_COMPLIANCE', attempt: 1, status: 'SUCCESS', duration: 1400, message: 'SOX audit check and schema verification passed.' },
          { id: 'l5', agent_id: 'agent_5', action: 'GENERATE_CHARTS', attempt: 1, status: 'SUCCESS', duration: 3900, message: 'Generated regional revenue breakdown SVG matrix.' },
          { id: 'l6', agent_id: 'agent_1', action: 'SYNTHESIZE_RESULTS', attempt: 1, status: 'SUCCESS', duration: 950, message: 'Merged 4 successful subtask responses into unified draft.' },
          { id: 'l7', agent_id: 'agent_6', action: 'FORMAT_FINAL_OUTPUT', attempt: 1, status: 'SUCCESS', duration: 800, message: 'Final executive report formatted and ready.' }
        ]
      },
      {
        correlation_id: 'job_b44_99811',
        user_prompt: 'Process high-frequency network API logs and flag security anomalies.',
        status: 'DEGRADED',
        created_at: '2026-10-03T21:40:00Z',
        duration_ms: 18900,
        total_subtasks: 4,
        failed_subtasks: 1,
        logs: [
          { id: 'l10', agent_id: 'agent_1', action: 'DECONSTRUCT_TASK', attempt: 1, status: 'SUCCESS', duration: 1050, message: 'Dispatched tasks to Agents 2-5.' },
          { id: 'l11', agent_id: 'agent_2', action: 'STREAM_LOGS', attempt: 1, status: 'TIMEOUT', duration: 15000, message: 'Timeout: Agent 2 exceeded 15,000ms threshold.' },
          { id: 'l12', agent_id: 'agent_2', action: 'STREAM_LOGS', attempt: 2, status: 'FAILED', duration: 2100, message: 'Connection reset by remote log gateway.' },
          { id: 'l13', agent_id: 'agent_2', action: 'FALLBACK_TRIGGERED', attempt: 3, status: 'DEGRADED', duration: 50, message: 'Triggered ambient log cache fallback mode.' },
          { id: 'l14', agent_id: 'agent_3', action: 'DETECT_ANOMALIES', attempt: 1, status: 'SUCCESS', duration: 2100, message: 'K-Means anomaly clustering finished.' },
          { id: 'l15', agent_id: 'agent_1', action: 'SYNTHESIZE_PARTIAL', attempt: 1, status: 'SUCCESS', duration: 1200, message: 'Synthesized report using 3/4 spoke outputs + 1 ambient fallback.' },
          { id: 'l16', agent_id: 'agent_6', action: 'FORMAT_FINAL_OUTPUT', attempt: 1, status: 'SUCCESS', duration: 900, message: 'Output compiled with data disclaimer header.' }
        ]
      }
    ];

    const BACKEND_CODE_EXPORT = `/**
 * BASE44 BACKEND AGENT WORKFLOW ROUTER & RESILIENCE ENGINE
 * File: /backend/workflows/agent_orchestrator.js
 */

import { agentRegistry } from './agent_registry';
import { db } from './base44_store';

export async function runHubSpokeWorkflow(correlationId, userPrompt) {
  const context = {
    correlation_id: correlationId,
    status: 'PLANNING',
    user_prompt: userPrompt,
    created_at: new Date().toISOString()
  };
  await db.sessionContext.set(correlationId, context);

  // STEP 1: Agent 1 Plans
  const agent1 = agentRegistry.get('agent_1');
  const plan = await agent1.process({ action: 'DECONSTRUCT_TASK', prompt: userPrompt });

  // STEP 2: Parallel Spoke Dispatch (Agents 2-5)
  const spokeResults = await Promise.all(
    plan.subtasks.map(async (st) => {
      const targetAgent = agentRegistry.get(st.assigned_to);
      try {
        const res = await targetAgent.process({ action: 'EXECUTE_SUBTASK', payload: st.payload });
        return { id: st.id, status: 'COMPLETED', result: res };
      } catch (err) {
        return { id: st.id, status: 'DEGRADED', error: err.message, result: 'Fallback context used.' };
      }
    })
  );

  // STEP 3: Agent 1 Synthesizes
  const synthesis = await agent1.process({ action: 'SYNTHESIZE', spokeResults });

  // STEP 4: Agent 6 Formats
  const agent6 = agentRegistry.get('agent_6');
  const output = await agent6.process({ action: 'FORMAT_FINAL', draft: synthesis });

  return output;
}`;

    function App() {
      const [activeTab, setActiveTab] = useState('monitor'); // 'monitor' | 'sessions' | 'agents' | 'deploy'
      const [agents, setAgents] = useState(AGENT_DEFINITIONS);
      const [sessions, setSessions] = useState(INITIAL_SESSIONS);
      const [selectedSessionId, setSelectedSessionId] = useState('job_b44_99812');
      const [selectedAgentId, setSelectedAgentId] = useState('agent_1');
      
      // Search & Filter state
      const [searchTerm, setSearchTerm] = useState('');
      const [statusFilter, setStatusFilter] = useState('ALL');
      const [logFilter, setLogFilter] = useState('ALL');

      // Simulation execution state
      const [isSimulating, setIsSimulating] = useState(false);
      const [simStep, setSimStep] = useState(0);
      const [customPrompt, setCustomPrompt] = useState('Compile security audit report for Base44 backend services');
      const [simulateRetry, setSimulateRetry] = useState(true);
      const [copiedCode, setCopiedCode] = useState(false);

      // Real inter-agent communication orchestrator (SIMULATED processing — no AI backend)
      const orchestratorRef = useRef<WorkflowOrchestrator | null>(null);
      const currentRunIdRef = useRef<string>('');

      // Summary Metrics
      const stats = useMemo(() => {
        const totalSessions = sessions.length;
        const completed = sessions.filter(s => s.status === 'COMPLETED').length;
        const degraded = sessions.filter(s => s.status === 'DEGRADED').length;
        const failed = sessions.filter(s => s.status === 'FAILED').length;
        const successRate = totalSessions ? Math.round(((completed + degraded) / totalSessions) * 100) : 100;
        const totalRetries = agents.reduce((acc, curr) => acc + curr.retries, 0);

        return { totalSessions, completed, degraded, failed, successRate, totalRetries };
      }, [sessions, agents]);

      // Filtered Sessions
      const filteredSessions = useMemo(() => {
        return sessions.filter(session => {
          const matchesSearch = session.correlation_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                session.user_prompt.toLowerCase().includes(searchTerm.toLowerCase());
          const matchesFilter = statusFilter === 'ALL' || session.status === statusFilter;
          return matchesSearch && matchesFilter;
        });
      }, [sessions, searchTerm, statusFilter]);

      // Selected Active Session
      const activeSession = useMemo(() => {
        return sessions.find(s => s.correlation_id === selectedSessionId) || sessions[0] || { logs: [] };
      }, [sessions, selectedSessionId]);

      // Filtered Audit Logs
      const filteredAuditLogs = useMemo(() => {
        if (!activeSession.logs) return [];
        if (logFilter === 'ALL') return activeSession.logs;
        return activeSession.logs.filter(l => l.status === logFilter);
      }, [activeSession, logFilter]);

      // Set up the real orchestrator and subscribe to inter-agent events
      useEffect(() => {
        const orchestrator = new WorkflowOrchestrator(AGENT_DEFINITIONS);
        orchestratorRef.current = orchestrator;
        const unsubs: (() => void)[] = [];

        unsubs.push(orchestrator.on('agent:status', ({ agentId, status, currentTask, retries }) => {
          setAgents(prev => prev.map(a => a.id === agentId ? { ...a, status, currentTask, ...(retries !== undefined ? { retries } : {}) } : a));
        }));

        unsubs.push(orchestrator.on('log:new', (log) => {
          setSessions(prev => prev.map(s => s.correlation_id === currentRunIdRef.current ? { ...s, logs: [...s.logs, log] } : s));
        }));

        unsubs.push(orchestrator.on('session:created', (session) => {
          currentRunIdRef.current = session.correlation_id;
          setSessions(prev => [session, ...prev]);
          setSelectedSessionId(session.correlation_id);
        }));

        unsubs.push(orchestrator.on('session:complete', ({ sessionId, status, durationMs, failedSubtasks }) => {
          setSessions(prev => prev.map(s => s.correlation_id === sessionId ? { ...s, status, duration_ms: durationMs, failed_subtasks: failedSubtasks } : s));
          setIsSimulating(false);
        }));

        unsubs.push(orchestrator.on('workflow:step', ({ step }) => {
          setSimStep(step);
        }));

        return () => unsubs.forEach(fn => fn());
      }, []);

      const runWorkflowSimulation = useCallback(() => {
        if (isSimulating) return;
        setIsSimulating(true);
        setSimStep(1);
        orchestratorRef.current?.run(
          customPrompt || 'Automated multi-agent Hub & Spoke run.',
          { simulateRetry }
        );
      }, [isSimulating, customPrompt, simulateRetry]);

      // Copy code using execCommand fallback for iFrame compatibility
      const copyCodeToClipboard = () => {
        const textarea = document.createElement('textarea');
        textarea.value = BACKEND_CODE_EXPORT;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        setCopiedCode(true);
        setTimeout(() => setCopiedCode(false), 2000);
      };

      return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto space-y-6">

            {/* TOP NAVIGATION BAR */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 border-b border-slate-800 pb-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-xl text-cyan-400 shadow-lg shadow-cyan-500/10">
                  <Icons.Layers className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                      Base44 Workflow Monitor
                    </h1>
                    <span className="bg-cyan-500/10 text-cyan-400 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                      6-Agent Hub &amp; Spoke
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                    Intra-platform orchestration, real-time metrics, retry monitoring &amp; audit trail
                  </p>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="flex flex-wrap items-center gap-1.5 bg-slate-900/90 p-1.5 rounded-xl border border-slate-800 text-xs font-medium">
                <button
                  onClick={() => setActiveTab('monitor')}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg transition-all ${
                    activeTab === 'monitor' ? 'bg-cyan-500 text-slate-950 font-bold shadow-md' : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Icons.Activity className="w-4 h-4" />
                  <span>Live Monitor</span>
                </button>

                <button
                  onClick={() => setActiveTab('sessions')}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg transition-all ${
                    activeTab === 'sessions' ? 'bg-cyan-500 text-slate-950 font-bold shadow-md' : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Icons.Clock className="w-4 h-4" />
                  <span>Session Audit</span>
                </button>

                <button
                  onClick={() => setActiveTab('agents')}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg transition-all ${
                    activeTab === 'agents' ? 'bg-cyan-500 text-slate-950 font-bold shadow-md' : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Icons.Server className="w-4 h-4" />
                  <span>Agents (6)</span>
                </button>

                <button
                  onClick={() => setActiveTab('deploy')}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg transition-all ${
                    activeTab === 'deploy' ? 'bg-cyan-500 text-slate-950 font-bold shadow-md' : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Icons.Code className="w-4 h-4" />
                  <span>Deploy Code</span>
                </button>
              </div>
            </div>

            {/* TAB 1: LIVE MONITOR & SIMULATOR */}
            {activeTab === 'monitor' && (
              <div className="space-y-6">

                {/* STATS OVERVIEW CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 relative overflow-hidden">
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-xs font-semibold uppercase tracking-wider">Total Workflow Jobs</span>
                      <Icons.Activity className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div className="text-3xl font-bold mt-2 text-white">{stats.totalSessions}</div>
                    <p className="text-xs text-slate-500 mt-1">Logged in Base44 session DB</p>
                  </div>

                  <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 relative overflow-hidden">
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-xs font-semibold uppercase tracking-wider">Active Orchestrations</span>
                      <Icons.Radio className={`w-4 h-4 ${isSimulating ? 'text-cyan-400 animate-pulse' : 'text-slate-500'}`} />
                    </div>
                    <div className="text-3xl font-bold mt-2 text-cyan-400">
                      {isSimulating ? '1 Executing' : '0 Idle'}
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      {isSimulating ? `Hub & Spoke Step ${simStep}/4` : 'Event bus ready'}
                    </p>
                  </div>

                  <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 relative overflow-hidden">
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-xs font-semibold uppercase tracking-wider">Overall Success Rate</span>
                      <Icons.CheckCircle className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="text-3xl font-bold mt-2 text-emerald-400">{stats.successRate}%</div>
                    <p className="text-xs text-slate-500 mt-1">
                      {stats.completed} clean • <span className="text-amber-400">{stats.degraded} degraded</span>
                    </p>
                  </div>

                  <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 relative overflow-hidden">
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-xs font-semibold uppercase tracking-wider">Total Retries Handled</span>
                      <Icons.RefreshCw className="w-4 h-4 text-amber-400" />
                    </div>
                    <div className="text-3xl font-bold mt-2 text-amber-400">{stats.totalRetries}</div>
                    <p className="text-xs text-slate-500 mt-1">Automatic backoff recovery</p>
                  </div>
                </div>

                {/* INTERACTIVE WORKFLOW SIMULATOR CONTROLLER */}
                <div className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 rounded-2xl p-6 shadow-xl">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                    <div>
                      <h2 className="text-lg font-bold text-white flex items-center gap-2">
                        <Icons.Play className="w-5 h-5 text-cyan-400 fill-cyan-400/20" />
                        <span>Run Base44 Multi-Agent Test Workflow</span>
                      </h2>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Triggers Agent 1 (Hub) &rarr; Agents 2-5 (Parallel Spokes) &rarr; Agent 1 (Synthesis) &rarr; Agent 6 (Finalizer)
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                        <input 
                          type="checkbox"
                          checked={simulateRetry}
                          onChange={(e) => setSimulateRetry(e.target.checked)}
                          className="rounded border-slate-700 bg-slate-950 text-cyan-500 focus:ring-cyan-500"
                        />
                        <span>Inject Agent 2 Timeout &amp; Retry</span>
                      </label>

                      <button
                        onClick={runWorkflowSimulation}
                        disabled={isSimulating}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs transition-all shadow-lg ${
                          isSimulating
                            ? 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed'
                            : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-cyan-500/20 active:scale-95'
                        }`}
                      >
                        {isSimulating ? (
                          <>
                            <Icons.RefreshCw className="w-4 h-4 animate-spin text-slate-400" />
                            <span>Running Multi-Agent Flow...</span>
                          </>
                        ) : (
                          <>
                            <Icons.Play className="w-4 h-4 fill-slate-950" />
                            <span>Trigger Workflow</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="mt-3">
                    <input
                      type="text"
                      value={customPrompt}
                      onChange={(e) => setCustomPrompt(e.target.value)}
                      disabled={isSimulating}
                      placeholder="Enter custom prompt for agent orchestration test..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-mono"
                    />
                  </div>

                  {/* SIMULATION VISUAL PIPELINE STAGES */}
                  {isSimulating && (
                    <div className="mt-5 border-t border-slate-800/80 pt-4 animate-fadeIn">
                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                        <div className={`p-3 rounded-xl border text-xs transition-all ${
                          simStep >= 1 ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-300' : 'bg-slate-950 border-slate-800 text-slate-600'
                        }`}>
                          <div className="font-bold flex items-center justify-between mb-1">
                            <span>1. Hub Planning</span>
                            {simStep === 1 && <Icons.RefreshCw className="w-3 h-3 animate-spin text-cyan-400" />}
                          </div>
                          <p className="text-[11px] text-slate-400">Agent 1 parses prompt into subtasks</p>
                        </div>

                        <div className={`p-3 rounded-xl border text-xs transition-all ${
                          simStep >= 2 ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-300' : 'bg-slate-950 border-slate-800 text-slate-600'
                        }`}>
                          <div className="font-bold flex items-center justify-between mb-1">
                            <span>2. Spoke Exec (2-5)</span>
                            {simStep === 2 && <Icons.RefreshCw className="w-3 h-3 animate-spin text-cyan-400" />}
                          </div>
                          <p className="text-[11px] text-slate-400">Parallel execution with retry checks</p>
                        </div>

                        <div className={`p-3 rounded-xl border text-xs transition-all ${
                          simStep >= 3 ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-300' : 'bg-slate-950 border-slate-800 text-slate-600'
                        }`}>
                          <div className="font-bold flex items-center justify-between mb-1">
                            <span>3. Hub Synthesis</span>
                            {simStep === 3 && <Icons.RefreshCw className="w-3 h-3 animate-spin text-cyan-400" />}
                          </div>
                          <p className="text-[11px] text-slate-400">Agent 1 aggregates spoke results</p>
                        </div>

                        <div className={`p-3 rounded-xl border text-xs transition-all ${
                          simStep >= 4 ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-300' : 'bg-slate-950 border-slate-800 text-slate-600'
                        }`}>
                          <div className="font-bold flex items-center justify-between mb-1">
                            <span>4. Deliverable Format</span>
                            {simStep === 4 && <Icons.RefreshCw className="w-3 h-3 animate-spin text-cyan-400" />}
                          </div>
                          <p className="text-[11px] text-slate-400">Agent 6 builds final markdown</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* 6 AGENT LIVE CARDS GRID */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold text-slate-200 flex items-center gap-2">
                      <Icons.Server className="w-4 h-4 text-cyan-400" />
                      <span>Base44 Registered Agents (6)</span>
                    </h3>
                    <span className="text-xs text-slate-500">Click any agent to inspect definition</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {agents.map((agent) => {
                      const IconComp = Icons[agent.iconName] || Icons.Server;
                      const isHub = agent.type === 'HUB';

                      let statusBadge = 'bg-slate-500/10 text-slate-400 border-slate-500/30';
                      if (agent.status === 'running') statusBadge = 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30 animate-pulse';
                      if (agent.status === 'warning') statusBadge = 'bg-amber-500/10 text-amber-400 border-amber-500/30';

                      return (
                        <div 
                          key={agent.id}
                          onClick={() => {
                            setSelectedAgentId(agent.id);
                            setActiveTab('agents');
                          }}
                          className={`bg-slate-900/80 border rounded-xl p-5 cursor-pointer transition-all hover:border-cyan-500/50 relative ${
                            isHub ? 'border-cyan-500/40 ring-1 ring-cyan-500/20' : 'border-slate-800'
                          }`}
                        >
                          {isHub && (
                            <span className="absolute -top-2.5 right-4 bg-cyan-500 text-slate-950 font-extrabold text-[9px] uppercase px-2 py-0.5 rounded-full tracking-wider">
                              Hub Manager
                            </span>
                          )}

                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                              <div className={`p-2 rounded-lg ${isHub ? 'bg-cyan-500/10 text-cyan-400' : 'bg-slate-800 text-slate-300'}`}>
                                <IconComp className="w-5 h-5" />
                              </div>
                              <div>
                                <h4 className="font-bold text-white text-sm">{agent.name}</h4>
                                <p className="text-[11px] text-slate-400">{agent.role}</p>
                              </div>
                            </div>

                            <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${statusBadge}`}>
                              {agent.status}
                            </span>
                          </div>

                          <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-2 text-xs">
                            <div className="flex justify-between text-slate-400">
                              <span>Avg Latency:</span>
                              <span className="font-mono text-slate-200">{agent.avgLatency}ms</span>
                            </div>

                            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                              <div 
                                className={`h-full rounded-full ${agent.avgLatency > 3500 ? 'bg-amber-400' : 'bg-cyan-400'}`}
                                style={{ width: `${Math.min((agent.avgLatency / 5000) * 100, 100)}%` }}
                              ></div>
                            </div>

                            <div className="flex justify-between text-slate-400 text-[11px] pt-1">
                              <span>Runs: <strong className="text-slate-200">{agent.totalRuns}</strong></span>
                              <span>Retries: <strong className="text-amber-400">{agent.retries}</strong></span>
                            </div>

                            <div className="bg-slate-950 rounded-lg p-2 mt-2 border border-slate-800/80 text-[11px] text-slate-400 truncate">
                              <span className="text-slate-500 mr-1">Current:</span>
                              <span className="text-slate-300 font-mono">{agent.currentTask}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            )}

            {/* TAB 2: SESSION AUDIT TRAIL */}
            {activeTab === 'sessions' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* Left Column: Filterable Job Sessions */}
                <div className="lg:col-span-5 bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-200 text-sm flex items-center gap-2">
                      <Icons.Clock className="w-4 h-4 text-cyan-400" />
                      <span>Execution Sessions</span>
                    </h3>
                    <span className="text-xs text-slate-500 font-mono">{filteredSessions.length} jobs</span>
                  </div>

                  {/* Filters */}
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Icons.Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-500" />
                      <input
                        type="text"
                        placeholder="Search Job ID or prompt..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                      />
                    </div>

                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="bg-slate-950 border border-slate-800 rounded-lg px-2 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-cyan-500"
                    >
                      <option value="ALL">All Status</option>
                      <option value="COMPLETED">Completed</option>
                      <option value="DEGRADED">Degraded</option>
                      <option value="FAILED">Failed</option>
                    </select>
                  </div>

                  {/* List */}
                  <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
                    {filteredSessions.map((session) => {
                      const isSelected = session.correlation_id === selectedSessionId;
                      let badge = 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
                      if (session.status === 'DEGRADED') badge = 'bg-amber-500/10 text-amber-400 border-amber-500/30';

                      return (
                        <div
                          key={session.correlation_id}
                          onClick={() => setSelectedSessionId(session.correlation_id)}
                          className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                            isSelected 
                              ? 'bg-slate-800/90 border-cyan-500/60 ring-1 ring-cyan-500/30' 
                              : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-mono font-bold text-xs text-slate-200">
                              {session.correlation_id}
                            </span>
                            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${badge}`}>
                              {session.status}
                            </span>
                          </div>

                          <p className="text-xs text-slate-400 line-clamp-2 mt-1.5">
                            {session.user_prompt}
                          </p>

                          <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-800/60 text-[10px] text-slate-500">
                            <span>Duration: {session.duration_ms ? `${(session.duration_ms / 1000).toFixed(2)}s` : 'Active'}</span>
                            <span>{new Date(session.created_at).toLocaleTimeString()}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right Column: Execution Log Audit Trail */}
                <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div>
                      <h3 className="font-bold text-slate-200 text-sm flex items-center gap-2">
                        <Icons.Terminal className="w-4 h-4 text-cyan-400" />
                        <span>Audit Trail: <strong className="font-mono text-cyan-300">{activeSession.correlation_id}</strong></span>
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">{activeSession.user_prompt}</p>
                    </div>

                    <select
                      value={logFilter}
                      onChange={(e) => setLogFilter(e.target.value)}
                      className="bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-slate-300 focus:outline-none focus:border-cyan-500"
                    >
                      <option value="ALL">All Events</option>
                      <option value="SUCCESS">Success Only</option>
                      <option value="TIMEOUT">Timeouts</option>
                      <option value="FAILED">Failures</option>
                      <option value="DEGRADED">Fallbacks</option>
                    </select>
                  </div>

                  {/* Logs Timeline */}
                  <div className="space-y-2.5 max-h-[480px] overflow-y-auto pr-1">
                    {filteredAuditLogs.length === 0 ? (
                      <div className="text-center py-12 text-slate-500 text-xs">
                        No matching audit log entries found for this session filter.
                      </div>
                    ) : (
                      filteredAuditLogs.map((log, idx) => {
                        let statusIcon = <Icons.CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />;
                        let border = 'border-slate-800';

                        if (log.status === 'TIMEOUT' || log.status === 'FAILED') {
                          statusIcon = <Icons.XCircle className="w-4 h-4 text-rose-400 shrink-0" />;
                          border = 'border-rose-500/30 bg-rose-500/5';
                        } else if (log.status === 'DEGRADED') {
                          statusIcon = <Icons.AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />;
                          border = 'border-amber-500/30 bg-amber-500/5';
                        }

                        const agent = agents.find(a => a.id === log.agent_id) || { name: log.agent_id, role: 'Agent' };

                        return (
                          <div 
                            key={log.id || idx}
                            className={`p-3 rounded-xl border bg-slate-950/80 text-xs space-y-1.5 ${border}`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                {statusIcon}
                                <span className="font-bold text-slate-200">{agent.name}</span>
                                <span className="text-slate-500">({agent.role})</span>
                              </div>

                              <span className="font-mono text-[11px] text-slate-400">
                                {log.duration}ms
                              </span>
                            </div>

                            <div className="flex items-center gap-2 pl-6 font-mono text-slate-300">
                              <Icons.CornerDownRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                              <span className="text-cyan-400">{log.action}</span>
                              {log.attempt > 1 && (
                                <span className="text-amber-400 text-[10px] bg-amber-400/10 border border-amber-400/20 px-1.5 py-0.2 rounded">
                                  Attempt #{log.attempt}
                                </span>
                              )}
                            </div>

                            <p className="pl-6 text-slate-400 text-[11px]">
                              {log.message}
                            </p>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>

              </div>
            )}

            {/* TAB 3: AGENTS DIRECTORY */}
            {activeTab === 'agents' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-4 space-y-3">
                  <h3 className="text-sm font-bold text-slate-300">Registered Agents</h3>
                  <div className="space-y-2">
                    {agents.map(a => {
                      const IconComp = Icons[a.iconName] || Icons.Server;
                      const isSelected = a.id === selectedAgentId;
                      return (
                        <div
                          key={a.id}
                          onClick={() => setSelectedAgentId(a.id)}
                          className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                            isSelected ? 'bg-cyan-500/10 border-cyan-500 text-cyan-200' : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <IconComp className="w-4 h-4 text-cyan-400" />
                            <div>
                              <div className="font-bold text-xs text-slate-200">{a.name}</div>
                              <div className="text-[10px] text-slate-400">{a.role}</div>
                            </div>
                          </div>
                          <span className="text-[10px] font-mono bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                            {a.type}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="lg:col-span-8 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
                  {(() => {
                    const agent = agents.find(a => a.id === selectedAgentId) || agents[0];
                    const IconComp = Icons[agent.iconName] || Icons.Server;
                    return (
                      <div>
                        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                          <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-cyan-400">
                            <IconComp className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">{agent.name}</h3>
                            <p className="text-xs text-slate-400">{agent.role}</p>
                          </div>
                        </div>

                        <div className="mt-4 space-y-4 text-xs">
                          <div>
                            <h4 className="font-semibold text-slate-300 mb-1">Functional Responsibility</h4>
                            <p className="text-slate-400 leading-relaxed bg-slate-950 p-3 rounded-xl border border-slate-800">
                              {agent.description}
                            </p>
                          </div>

                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                              <span className="text-slate-500 text-[10px]">Avg Latency</span>
                              <div className="font-mono text-base font-bold text-slate-200 mt-1">{agent.avgLatency}ms</div>
                            </div>

                            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                              <span className="text-slate-500 text-[10px]">Total Invocations</span>
                              <div className="font-mono text-base font-bold text-slate-200 mt-1">{agent.totalRuns}</div>
                            </div>

                            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                              <span className="text-slate-500 text-[10px]">Total Retries</span>
                              <div className="font-mono text-base font-bold text-amber-400 mt-1">{agent.retries}</div>
                            </div>

                            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                              <span className="text-slate-500 text-[10px]">Unrecoverable Failures</span>
                              <div className="font-mono text-base font-bold text-rose-400 mt-1">{agent.failures}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            )}

            {/* TAB 4: BASE44 DEPLOYMENT EXPORT CODE */}
            {activeTab === 'deploy' && (
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                  <div>
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <Icons.Code className="w-5 h-5 text-cyan-400" />
                      <span>Base44 Backend Implementation Module</span>
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Paste this workflow controller directly into your Base44 backend editor.
                    </p>
                  </div>

                  <button
                    onClick={copyCodeToClipboard}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all self-start sm:self-auto"
                  >
                    {copiedCode ? <Icons.Check className="w-4 h-4" /> : <Icons.Copy className="w-4 h-4" />}
                    <span>{copiedCode ? 'Code Copied!' : 'Copy Code Export'}</span>
                  </button>
                </div>

                <div className="relative">
                  <pre className="bg-slate-950 border border-slate-800/80 rounded-xl p-4 text-xs font-mono text-cyan-300 overflow-x-auto custom-scrollbar max-h-[450px]">
                    {BACKEND_CODE_EXPORT}
                  </pre>
                </div>
              </div>
            )}

          </div>
        </div>
      );
    }

export default App;
