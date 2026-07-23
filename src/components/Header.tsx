"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Works", href: "#works" },
  { label: "Links", href: "#links" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-background/80 backdrop-blur dark:border-white/10">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#about" className="text-lg font-bold tracking-tight">
          {profile.name}
        </a>

        {/* PC ナビ */}
        <nav className="hidden gap-8 text-sm font-medium sm:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-foreground/70 transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* モバイル: 開閉ボタン */}
        <button
          type="button"
          aria-label="メニューを開閉"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground/70 hover:text-accent sm:hidden"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* モバイルメニュー */}
      {open && (
        <nav className="border-t border-black/5 px-6 py-3 sm:hidden dark:border-white/10">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2 text-sm font-medium text-foreground/80 hover:bg-foreground/5 hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
