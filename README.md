# 管理后台

基于 React + TypeScript + Ant Design 的轻量管理后台模板。

## 功能特性

- 登录/登出
- 侧边导航 / 顶部导航 布局切换
- 暗黑模式 / 明亮模式 主题切换
- 仪表盘、用户管理、系统设置 等示例页面
- 响应式设计

## 技术栈

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Ant Design 5](https://ant.design/)
- [React Router 7](https://reactrouter.com/)
- [Vite](https://vite.dev/)

## 快速开始

```bash
npm install
npm run dev
```

浏览器打开 http://localhost:5173

## 登录凭据

| 用户名 | 密码 |
|-------|------|
| admin | admin |

## 项目结构

```
src/
├── layouts/         # 页面布局
│   └── MainLayout.tsx
├── pages/           # 页面组件
│   ├── Dashboard.tsx
│   ├── Login.tsx
│   ├── Settings.tsx
│   └── UserManage.tsx
├── store/           # 状态管理
│   ├── AppContext.tsx
│   ├── useAuthStore.ts
│   └── useSettingsStore.ts
├── App.tsx          # 路由 & 主题配置
├── main.tsx         # 入口文件
└── index.css        # 全局样式
```

## 构建

```bash
npm run build
```

构建产物输出至 `dist/` 目录。
