// components/widget/compo.jsx
"use client";

import { useEffect } from "react";

export default function WebWidgetLoader({ botId }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = //"https://app.ecodrix.com/api/widget";
      process.env.NODE_ENV === "production"
        ? "https://app.ecodrix.com/api/widget"
        : "http://localhost:3000/api/widget";
    script.setAttribute("data-bot-id", botId);
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [botId]);

  return null;
}
