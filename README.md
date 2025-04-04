# MinDAO MBTI App

MinDAO MBTI 是一个基于 Web3 的 MBTI 性格测试应用，它不仅提供准确的 MBTI 性格分析，还允许用户将其测试结果铸造为独特的 SBT（灵魂绑定代币）。

## 功能特点

- 完整的 MBTI 性格测试
- 详细的测试结果分析，包括：
  - 性格特点描述
  - 职业建议
  - 互动建议
  - 个人发展建议
- Web3 集成功能：
  - Petra 钱包连接
  - MBTI 结果 SBT 铸造
  - 分享功能（包含 QR 码）

## 技术栈

- React + TypeScript
- Next.js
- Chakra UI
- Aptos 区块链
- Petra 钱包

## 开始使用

### 前置要求

- Node.js 16.x 或更高版本
- npm 或 yarn
- Petra 钱包浏览器插件

### 安装

1. 克隆仓库：
```bash
git clone <repository-url>
cd mindao-app
```

2. 安装依赖：
```bash
npm install
```

3. 启动开发服务器：
```bash
npm run dev
```

4. 在浏览器中访问 `http://localhost:3000`

## 使用指南

1. 开始测试
   - 点击首页的"开始测试"按钮
   - 依次回答所有 MBTI 问题
   - 查看详细的测试结果

2. 铸造 SBT
   - 确保已安装 Petra 钱包
   - 点击右上角的"Connect Wallet"连接钱包
   - 在结果页面点击"Mint your MinDAO SBT"
   - 确认交易以铸造你的 MBTI SBT

3. 分享结果
   - 铸造成功后，点击"Share"按钮
   - 生成包含 QR 码的分享图片
   - 下载并分享给好友

## 开发说明

### 项目结构

```
src/
  ├── components/        # React 组件
  ├── hooks/            # 自定义 Hooks
  ├── data/            # MBTI 相关数据
  ├── types/           # TypeScript 类型定义
  └── pages/           # 页面组件
```

### 主要组件

- `App.tsx`: 应用程序主组件
- `Welcome.tsx`: 欢迎页面
- `Question.tsx`: MBTI 问题页面
- `Results.tsx`: 结果展示页面
- `Header.tsx`: 页面头部（包含钱包连接）

### 自定义 Hooks

- `useMBTI`: MBTI 测试逻辑
- `useWalletIntegration`: 钱包集成逻辑

## 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 许可证

[MIT License](LICENSE)

## 致谢

- [Aptos Labs](https://aptoslabs.com/) - 区块链基础设施
- [Petra Wallet](https://petra.app/) - 钱包支持
- [Chakra UI](https://chakra-ui.com/) - UI 组件库 