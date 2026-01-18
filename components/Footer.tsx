import { Github, Mail, MessageCircle, Scale } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Brand Section - 左侧区域 */}
          <div>
            {/* Logo */}
            <div >
              <h3 className="font-bold text-2xl">GitHub Proxy</h3>
            </div>
            
            {/* Description */}
            <p className="max-w-xs mt-4 text-base leading-5 text-gray-500 dark:text-gray-400">
              支持 API、Git Clone、Releases、Archive、Gist、Raw 等资源下载加速，提升 GitHub 文件下载体验。
            </p>

            {/* Social Links */}
            <ul className="flex gap-6 mt-8 list-none">
              <li>
                <a
                  href="https://github.com/Jursin/ghproxy-next"
                  rel="noopener"
                  target="_blank"
                  className="transition text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <span className="sr-only">Github</span>
                  <Github className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:jursin@126.com"
                  rel="noopener"
                  target="_blank"
                  className="transition text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <span className="sr-only">Email</span>
                  <Mail className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>

          {/* License */}
          <div>
            <p className="flex items-center gap-2 font-semibold leading-5 text-gray-900 dark:text-gray-100">
              <Scale className="w-4 h-4" />
              GPL-3.0 License
            </p>
            <p className="mt-4 text-sm leading-5 text-gray-500 dark:text-gray-400">
              本站所有内容均基于{" "}
              <a
                href="https://opensource.org/license/gpl-3-0"
                target="_blank"
                className="underline underline-offset-2 hover:text-blue-600 dark:hover:text-blue-400"
                rel="noreferrer"
              >
                GPL-3.0 开源协议
              </a>
              {" "}发布。
            </p>
          </div>

          {/* Links Section - 右侧多列 */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-2">
            {/* 相关资源 */}
            <div>
              <p className="font-semibold dark:text-white">相关资源</p>
              <nav aria-label="Footer Navigation - Resources" className="mt-6">
                <ul className="space-y-4 text-sm list-none">
                  <li>
                    <a
                      href="https://github.akams.cn/"
                      target="_blank"
                      rel="noreferrer"
                      className="transition text-gray-500 dark:text-gray-400 hover:opacity-75"
                    >
                      GitHub Proxy 原站
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com"
                      target="_blank"
                      className="transition text-gray-500 dark:text-gray-400 hover:opacity-75"
                      rel="noreferrer"
                    >
                      GitHub.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.github.com"
                      target="_blank"
                      className="transition text-gray-500 dark:text-gray-400 hover:opacity-75"
                      rel="noreferrer"
                    >
                      GitHub Docs
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* 关于我们 */}
            <div>
              <p className="font-semibold dark:text-white">关于我们</p>
              <nav aria-label="Footer Navigation - Information" className="mt-6">
                <ul className="space-y-4 text-sm list-none">
                  <li>
                    <a
                      className="transition text-gray-500 dark:text-gray-400 hover:opacity-75"
                      href="/about"
                    >
                      关于项目
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition text-gray-500 dark:text-gray-400 hover:opacity-75"
                      href="/contact"
                    >
                      联系我们
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* 法律信息 */}
            <div>
              <p className="font-semibold dark:text-white">法律信息</p>
              <nav aria-label="Footer Navigation - Legal" className="mt-6">
                <ul className="space-y-4 text-sm list-none">
                  <li>
                    <a
                      href="/terms"
                      className="transition text-gray-500 dark:text-gray-400 hover:opacity-75"
                    >
                      服务条款
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy"
                      className="transition text-gray-500 dark:text-gray-400 hover:opacity-75"
                    >
                      隐私政策
                    </a>
                  </li>
                  <li>
                    <a
                      href="/disclaimer"
                      className="transition text-gray-500 dark:text-gray-400 hover:opacity-75"
                    >
                      免责声明
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <p>© 2025 - {new Date().getFullYear()} • {" "}
              <a href="https://blog.jursin.top/" target="_blank" className="hover:text-gray-900 dark:hover:text-white transition-colors">Jursin</a>
              {" "} All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <a href="https://beian.miit.gov.cn/" target="_blank" className="hover:text-gray-900 dark:hover:text-white transition-colors">鄂ICP备2025157296号-1号</a>
              <span className="hidden sm:inline">|</span>
              <a href="https://beian.mps.gov.cn/#/query/webSearch" target="_blank" className="hover:text-gray-900 dark:hover:text-white transition-colors">鄂公网安备42100302000228号</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
