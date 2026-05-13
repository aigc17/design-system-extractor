# 🎨 Design System Extractor (组件提取与设计系统生成 Skill)

这是一个专为大语言模型（LLM）和 AI 编程助手（如 Factory Droid, Claude, Cursor 等）设计的 Prompt 技能包。通过这套提示词和模板，可以引导 AI 从设计稿、截图或现有代码中，稳定且高质量地提取出**设计令牌（Design Tokens）**和**业务组件（Business Components）**，并自动生成结构化的代码包与预览页。

## 📦 包含的文件

- `design-system-extractor.prompt.md`: **核心提示词**。包含了 AI 的角色设定、执行步骤、强制模板约束和输出目录结构。
- `DESIGN.template.md`: **规范文档模板**。约束 AI 输出 `DESIGN.md` 时的文本骨架、排版层级和表格格式。
- `App-Preview.template.jsx`: **组件预览页模板**。为 AI 生成 `App.jsx` 提供 UI 布局和视觉展示的参考骨架。

## 🚀 如何使用 (How to use)

### 方式一：直接在 AI 对话中使用
1. 将 `design-system-extractor.prompt.md` 的内容复制。
2. 将你想要提取的设计源文件（Figma 链接、UI 截图、或混乱的原始代码）一起发送给 AI。
3. 确保 AI 能够读取到同目录下的 `DESIGN.template.md` 和 `App-Preview.template.jsx`（可以直接把这三个文件一起喂给 AI）。

### 方式二：作为定制化 Skill/Agent 配置
如果你使用的是支持自定义 System Prompt 的工具，可以将 `design-system-extractor.prompt.md` 的内容设置为系统提示词，并将两个模板文件作为知识库（Knowledge Base）或系统上下文（Context）挂载。

## 💡 核心特性
- **动态能力与受控输出的完美平衡**：提示词明确要求 AI 在生成底层核心代码（组件逻辑、CSS Token）时发挥动态解析能力，但在生成文档和预览页时必须严格参照模板结构。
- **开箱即用**：生成的目录结构（`src/design-system`）是一个自包含的模块，可以直接粘贴到任何现代 React/Vite/Next.js 项目中使用。
- **自动归档规范**：每次提取不仅产生代码，还会自动配套生成专业的 `DESIGN.md`，避免代码与设计脱节。
