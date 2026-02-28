# React + TypeScript + Ant Design 应用

基于 Vite 搭建的 React 应用，使用 TypeScript 和 Ant Design 组件库。

## 功能特性

- 🔐 **登录页面** - 任意用户名和密码即可登录（演示用）
- 📋 **菜单布局** - 支持顶部菜单和左侧菜单两种布局，可随时切换
- 🌓 **主题切换** - 支持黑夜模式和白天模式切换，偏好会保存到本地

## 技术栈

- React 19
- TypeScript
- Ant Design 6
- React Router 7
- Vite 7

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 项目结构

```
src/
├── context/          # 全局 Context
│   ├── AuthContext.tsx    # 登录状态
│   └── ThemeContext.tsx   # 主题模式（黑夜/白天）
├── layouts/
│   └── MainLayout.tsx     # 主布局（菜单 + 内容区）
├── pages/
│   ├── Login.tsx          # 登录页
│   └── Dashboard.tsx     # 工作台首页
├── App.tsx
└── main.tsx
```
