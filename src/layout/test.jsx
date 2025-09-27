"use client";

import { ECODrIx } from "ecodrix-sdk";
import { useEffect } from "react";

export const BotWidget = () => {
  const url = "http://localhost:3000" || "https://app.ecodrix.com";
  useEffect(() => {
    const bot = new ECODrIx({
      autoOpne: 10,
      bubbleSize: 40,
      botId: "12345",
      botUrl: `${url}/widget-frame`,
      userId: "ecodrix-6ho5d4ea4d",
      bubbleIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-icon lucide-message-circle"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/></svg>`,
    });
    bot.init();
  }, []);
  return null;
};
