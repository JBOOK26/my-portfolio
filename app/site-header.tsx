"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Braces, Menu, Moon, Sun, X } from "lucide-react";

type Theme = "dark" | "light";

const themeStorageKey = "portfolio-theme";
const themeChangeEvent = "portfolio-theme-change";
const navigation = ["About", "Skills", "Activity", "Projects", "Contact"];

function subscribeToTheme(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(themeChangeEvent, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(themeChangeEvent, onStoreChange);
  };
}

function getThemeSnapshot(): Theme {
  return window.localStorage.getItem(themeStorageKey) === "light" ? "light" : "dark";
}

function getServerThemeSnapshot(): Theme {
  return "dark";
}

export default function SiteHeader() {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function closeMenu() {
    setMenuOpen(false);
  }

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    window.localStorage.setItem(themeStorageKey, nextTheme);
    window.dispatchEvent(new Event(themeChangeEvent));
  }

  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          closeMenu();
          menuButtonRef.current?.focus();
        }
      }}
    >
      <a className="brand" href="#home" onClick={closeMenu} aria-label="justin's portfolio home">
        <span className="brand-mark" aria-hidden="true"><Braces size={23} /></span>
        <span>justin<span className="brand-dot">'s</span> portfolio</span>
      </a>

      <button
        ref={menuButtonRef}
        type="button"
        className="icon-button menu-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-controls="primary-navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>

      <nav
        id="primary-navigation"
        className={menuOpen ? "nav-links nav-open" : "nav-links"}
        aria-label="Main navigation"
      >
        {navigation.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
            {item}
          </a>
        ))}

        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-pressed={theme === "light"}
        >
          {theme === "dark" ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          {theme === "dark" ? "Light mode" : "Dark mode"}
        </button>
      </nav>
    </header>
  );
}
