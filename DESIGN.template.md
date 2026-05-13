# DESIGN.md 模板规范

> **[主题与定位]** 描述你的设计风格，例如：Midnight Command Center: A dark, layered interface lit by precise accents.

**Theme:** [light / dark]

[一段关于整体设计质感、情绪、交互特点的总结性描述]

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| [色彩名称] | `[HEX或RGB]` | `--color-[name]` | [用途说明，如：Page background] |

## Tokens — Typography

### [字体名称] — [字体定位说明] · `--font-[name]`
- **Substitute:** [后备字体]
- **Weights:** [如: 400, 500, 700]
- **Sizes:** [如: 12px, 14px, 16px]
- **Line height:** [如: 1.4, 1.5]
- **Role:** [说明该字体的适用场景]

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 10px | 1.4 | -0.1px | `--text-caption` |
| body | 14px | 1.4 | -0.13px | `--text-body` |

## Tokens — Spacing & Shapes

**Base unit:** [如: 4px]

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |

### Border Radius

| Element | Value |
|---------|-------|
| pill | 9999px |
| cards | 6px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| sm | `rgba(0, 0, 0, 0.4) 0px 2px 4px 0px` | `--shadow-sm` |

## Components

### [组件名称，如：Primary Action Button]
**Role:** [用途说明]

[一段关于该组件UI表现的描述，如：Filled button with 'Neon Lime' background...]

## Do's and Don'ts

### Do
- [最佳实践推荐 1]
- [最佳实践推荐 2]

### Don't
- [避免的做法 1]
- [避免的做法 2]

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-[name]: [value];
  /* Typography, Spacing, Shadows... */
}
```
