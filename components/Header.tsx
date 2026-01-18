// ============================================================
// Imports
// ============================================================
"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { THEME_STORAGE_KEY, THEME_DARK, THEME_LIGHT } from './constants';

// ============================================================
// Component
// ============================================================
export default function Header() {
  // ============================================================
  // State Declarations
  // ============================================================
  const [isDark, setIsDark] = useState(false);

  // ============================================================
  // 主题管理相关
  // ============================================================
  /**
   * 初始化主题设置
   * 优先使用 localStorage 中保存的主题，否则使用系统偏好
   */
  useEffect(() => {
    // 检查 localStorage 中的主题设置
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    
    if (savedTheme) {
      // 如果有保存的主题，使用保存的主题
      const isDarkTheme = savedTheme === THEME_DARK;
      setIsDark(isDarkTheme);
      if (isDarkTheme) {
        document.documentElement.classList.add(THEME_DARK);
      } else {
        document.documentElement.classList.remove(THEME_DARK);
      }
    } else {
      // 如果没有保存的主题，检查系统偏好
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add(THEME_DARK);
        localStorage.setItem(THEME_STORAGE_KEY, THEME_DARK);
      } else {
        document.documentElement.classList.remove(THEME_DARK);
        localStorage.setItem(THEME_STORAGE_KEY, THEME_LIGHT);
      }
    }
  }, []);

  /**
   * 切换主题
   */
  function toggleTheme() {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add(THEME_DARK);
      localStorage.setItem(THEME_STORAGE_KEY, THEME_DARK);
    } else {
      document.documentElement.classList.remove(THEME_DARK);
      localStorage.setItem(THEME_STORAGE_KEY, THEME_LIGHT);
    }
  }

  // ============================================================
  // JSX 渲染
  // ============================================================
  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/>
              </svg>
            </div>
            <a href="/" className="text-xl font-semibold hover:opacity-80 transition-opacity">
              Github Proxy
            </a>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-8">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="切换主题"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
