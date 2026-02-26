# Personal Portfolio

一个现代化的个人主页网站，使用 Next.js 和 Tailwind CSS 构建，可免费部署到 GitHub Pages。

## 🚀 快速开始

### 本地开发

```bash
cd frontend
npm install
npm run dev
```

访问 http://localhost:3000 查看网站。

### 构建静态网站

```bash
cd frontend
npm run build
```

静态文件会生成在 `frontend/out/` 目录。

## 📦 部署到 GitHub Pages

### 步骤 1: 创建 GitHub 仓库

1. 在 GitHub 上创建一个新仓库（例如：`personal-portfolio`）
2. 将代码推送到仓库：

```bash
cd ~/personal-portfolio
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的用户名/personal-portfolio.git
git push -u origin main
```

### 步骤 2: 配置 Formspree 表单

1. 访问 [Formspree.io](https://formspree.io/) 并注册账号（免费）
2. 创建一个新表单，输入你的邮箱地址
3. 复制你的 Form ID（格式类似：`mqrblrzg`）
4. 编辑 `frontend/src/app/page.tsx`，将 `YOUR_FORM_ID` 替换为你的实际 Form ID：

```typescript
const response = await fetch("https://formspree.io/f/你的实际FORM_ID", {
```

### 步骤 3: 启用 GitHub Pages

1. 进入仓库的 **Settings** > **Pages**
2. 在 **Build and deployment** > **Source** 中选择 **GitHub Actions**
3. GitHub Actions 会自动检测并运行 `.github/workflows/deploy.yml`

### 步骤 4: 更新 basePath（如果需要）

如果你的仓库名不是 `personal-portfolio`，需要修改 `frontend/next.config.ts`：

```typescript
basePath: process.env.NODE_ENV === 'production' ? '/你的仓库名' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/你的仓库名' : '',
```

### 步骤 5: 推送代码自动部署

每次推送代码到 `main` 分支时，GitHub Actions 会自动构建并部署到 GitHub Pages。

```bash
git add .
git commit -m "Update content"
git push
```

你的网站将在：`https://你的用户名.github.io/personal-portfolio/`

## 📝 自定义内容

### 个人信息

编辑以下文件来更新你的个人信息：

- `frontend/src/app/page.tsx` - 主页内容（姓名、职位、技能、项目等）
- `frontend/src/app/about/page.tsx` - 关于页面
- `frontend/src/app/layout.tsx` - 页面标题和元数据

### 技能和项目

在 `page.tsx` 中修改 `skills` 和 `projects` 数组：

```typescript
const skills = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  backend: ["Go", "Node.js", "Python", "PostgreSQL"],
  devops: ["Docker", "Kubernetes", "CI/CD", "AWS"],
  tools: ["Git", "VS Code", "Linux", "Figma"],
};

const projects = [
  {
    id: 1,
    title: "项目名称",
    description: "项目描述",
    tags: ["React", "TypeScript", "Go"],
    link: "https://github.com/你的用户名/项目",
  },
  // 添加更多项目...
];
```

### 联系信息

修改页面底部的联系信息：

```typescript
<p className="text-slate-800 dark:text-slate-200">your.email@example.com</p>
<p className="text-slate-800 dark:text-slate-200">+86 123 4567 8900</p>
<p className="text-slate-800 dark:text-slate-200">China</p>
```

## 🎨 功能特性

- ✅ 响应式设计（完美支持移动端）
- ✅ 深色模式切换
- ✅ 平滑滚动动画
- ✅ 联系表单（通过 Formspree 免费服务）
- ✅ 关于页面
- ✅ 简历下载按钮
- ✅ GitHub Pages 静态部署（完全免费）

## 🛠️ 技术栈

- **前端框架**: Next.js 16 (App Router)
- **样式**: Tailwind CSS 4
- **组件**: shadcn/ui
- **图标**: Lucide React
- **表单**: Formspree（免费）
- **部署**: GitHub Pages（免费）

## 📁 项目结构

```
personal-portfolio/
├── frontend/              # Next.js 前端
│   ├── src/
│   │   ├── app/          # 页面
│   │   ├── components/   # UI 组件
│   │   └── hooks/        # 自定义 Hook
│   ├── out/              # 构建输出（部署此目录）
│   └── package.json
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions 部署配置
└── README.md
```

## 🌐 在线演示示例

部署后你的网站将类似于：

```
https://你的用户名.github.io/personal-portfolio/
```

## 📄 许可证

MIT License - 自由使用和修改
