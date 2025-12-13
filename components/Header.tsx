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
            <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center">
              <svg
                viewBox="0 0 16 16"
                className="w-5 h-5 fill-white dark:fill-black"
                aria-hidden="true"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </div>
            <a href="/" className="text-xl font-semibold hover:opacity-80 transition-opacity">
              Github Proxy
            </a>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex space-x-8">
              <a
                href="https://gh.llkk.cc/https://raw.githubusercontent.com/521xueweihan/GitHub520/refs/heads/main/hosts"
                className="text-gray-600 dark:text-gray-100 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
              >
                GitHub Host
              </a>
              <a
                href="https://akams.cn/sponsor.html"
                className="text-gray-600 dark:text-gray-100 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
              >
                捐赠
              </a>
            </nav>

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

            {/* 捐赠 Button */}
            {/* <button className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors font-medium">
              捐赠
            </button> */}
          </div>
        </div>
      </div>
    </header>
  );
}
