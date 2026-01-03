import React from "react";

export default function TelebotCommandCenter() {
  return (
    <div className="app">
      <div className="glass-card">
        <h1 className="glass-title">Telebot Command Center</h1>
        <div className="glass-version">Version: 1.0.0</div>

        <div className="command-list">
          <div className="command">
            <span><strong>start:</strong> Start the bot</span>
            <button className="glass-btn">Send</button>
          </div>

          <div className="command">
            <span><strong>help:</strong> Show help information</span>
            <button className="glass-btn">Send</button>
          </div>

          <div className="command">
            <span><strong>status:</strong> Show current status</span>
            <button className="glass-btn">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
