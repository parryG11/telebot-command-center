const BOT_TOKEN = "7874617302:AAE8U5QZdtH0gub0bAcDkUEtYyl1lcGehX0"; // your bot token
const CHAT_ID = "1244449932"; // your chat ID

export async function sendCommand(command: string) {
  try {
    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: `Command sent: ${command}`,
        }),
      }
    );

    const data = await response.json();
    console.log("Telegram response:", data);
  } catch (error) {
    console.error("Failed to send command:", error);
  }
}
