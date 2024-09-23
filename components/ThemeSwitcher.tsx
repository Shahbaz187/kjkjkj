"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsMoon, BsSun } from "react-icons/bs";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      className="w-fit absolute right-5 top-5 p-2 rounded-md hover:scale-110 active:scale-100 transition-transform duration-200 bg-slate-200 dark:bg-[#212933]"
      aria-label="Toggle Theme"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <BsMoon aria-label="Switch to dark mode" />
      ) : (
        <BsSun aria-label="Switch to light mode" />
      )}
    </button>
  );
};
