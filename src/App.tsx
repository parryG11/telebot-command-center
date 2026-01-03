import metadata from "../metadata.json";
import type { Command } from "../types";
import { sendCommand } from "../services/telegram";
import GlassCard from "./components/GlassCard.d";
import "./App.css";

const commands: Command[] = [
  { name: "start", description: "Start the bot" },
  { name: "help", description: "Show help information" },
  { name: "status", description: "Show current status" },
  { name: "restart", description: "Restart the bot" },
  { name: "stop", description: "Stop the bot" },
  { name: "info", description: "Get bot info" },
  { name: "logs", description: "Show logs" },
  { name: "uptime", description: "Show uptime" },
  { name: "settings", description: "Show settings" },
  { name: "version", description: "Show bot version" },
];

export default function App() {
  return (
    <GlassCard
      title={metadata.name}
      version={`Version: ${metadata.version}`}
    >
      <div className="command-list">
        {commands.map((cmd) => (
          <div className="command" key={cmd.name}>
            <span>
              <strong>{cmd.name}</strong>: {cmd.description}
            </span>
            <button
              className="glass-btn"
              onClick={() => sendCommand(cmd.name)}
            >
              Send
            </button>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
