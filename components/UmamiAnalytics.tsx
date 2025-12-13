'use client';

import Script from 'next/script';
import { UMAMI_WEBSITE_ID, UMAMI_URL } from './constants';

/**
 * Umami 访问统计组件
 * 配置位于 constants.ts 中的 UMAMI_WEBSITE_ID 和 UMAMI_URL
 */
export default function UmamiAnalytics() {
  // 如果未配置 Website ID，则不渲染统计脚本
  if (!UMAMI_WEBSITE_ID) {
    return null;
  }

  return (
    <Script
      async
      src={`${UMAMI_URL}/script.js`}
      data-website-id={UMAMI_WEBSITE_ID}
      strategy="afterInteractive"
    />
  );
}
