"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageSquare } from "lucide-react";

/**
 * 联系我们页面组件
 * 用于用户反馈建议和报告问题
 */
export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* 页面标题 */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-purple-100 dark:bg-purple-900">
              <MessageSquare className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              联系我们
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              反馈建议 · 报告问题
            </p>
          </div>

          {/* 内容区域 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 sm:p-12">
            <div className="text-center space-y-6">
              {/* 欢迎文本 */}
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                感谢您使用 GitHub Proxy！
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                如果您有任何建议、问题或需要帮助，欢迎在 GitHub 仓库提交 Issue。
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                我们会尽快回复您。为了更好地帮助您，请在 Issue 中详细描述您遇到的问题或建议。
              </p>
            </div>
          </div>

          {/* 返回首页链接 */}
          <div className="text-center mt-8">
            <a
              href="/"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              返回首页
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
