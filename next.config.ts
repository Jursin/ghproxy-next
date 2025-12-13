import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 启用静态导出
  output: 'export',
  
  // 图片优化配置（静态导出时需要）
  images: {
    unoptimized: true,
  },
  
  // 生产环境优化：移除 console.log
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'], // 保留 error 和 warn，移除其他 console
    } : false,
  },
  
  // 可选：自定义输出目录（默认是 'out'）
  // distDir: 'dist',
};

export default nextConfig;
