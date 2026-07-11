import { Moon, Sun } from "@phosphor-icons/react";

import { Button } from "#/components/ui/button";
import { useTheme } from "#/components/theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <Sun
        size={18}
        className="hidden dark:block"
      />
      <Moon
        size={18}
        className="block dark:hidden"
      />
    </Button>
  );
}
