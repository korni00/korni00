"use client";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Button
      variant="link"
      size="icon"
      className="active flex w-full gap-2"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <>
          <MoonIcon className="h-[1.2rem] w-[1.2rem] transition-all" />
          <span>Light</span>
        </>
      ) : (
        <>
          <SunIcon className="h-[1.2rem] w-[1.2rem] transition-all" />
          <span>Dark</span>
        </>
      )}
    </Button>
  );
}
