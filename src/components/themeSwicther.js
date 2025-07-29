"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

export default function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex items-center gap-2">
      <Switch
        isTheme={true}
        checked={isDark}
        onCheckedChange={(val) => setTheme(val ? "dark" : "light")}
        thumbIcon={
          isDark ? (
            <Moon className="h-4 w-4 text-gray-50" />
          ) : (
            <Sun className="h-4 w-4 text-yellow-500" />
          )
        }
        aria-label="Toggle theme"
      />
    </div>
  );
}
