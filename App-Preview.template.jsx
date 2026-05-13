import React from 'react';
// ⚠️ AI 提示: 这里假设你已经有了相应的 styles.css（包含原有 HTML 的所有样式）
import './css/styles.css'; 

export default function App() {
  return (
    <>
      {/* 顶部导航 */}
      <header className="topbar">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <a className="logo-link" href="#" aria-label="Styles">
            {/* AI 提示: 可替换为提取的 Logo，或文字 */}
            <span style={{ fontWeight: 'bold' }}>Logo</span>
          </a>
          <span className="slash">/</span>
          <a href="#">Styles</a>
          <span className="slash">/</span>
          {/* AI 提示: 替换为提取的设计系统名称 */}
          <span className="current">Dimension</span>
        </nav>
      </header>

      {/* 主体内容 */}
      <main className="page-shell">
        <section className="showcase" aria-label="Style overview">
          <div className="showcase-inner">
            
            {/* 介绍区域 */}
            <div className="intro-block">
              <div>
                {/* AI 提示: 替换为实际的设计系统标题和描述 */}
                <h1>Dimension 维度</h1>
                <p className="subtitle">Deep-space command center</p>
                <p className="description">
                  [此处填入设计系统的整体描述，例如：Dimension employs a dark, immersive interface...]
                </p>
              </div>
            </div>

            {/* 色彩面板 */}
            <section className="section-block">
              <h2>Color Palette 色彩面板</h2>
              
              {/* AI 提示: 根据提取的颜色分组动态渲染，例如 Accent 强调色 */}
              <p className="eyebrow">Accent 强调色</p>
              <div className="color-grid accent-grid">
                {/* AI 提示: 循环渲染提取出的强调色卡片 */}
                <button className="swatch-card" data-copy="[Hex/Gradient]">
                  <span className="copy-chip">Copy</span>
                  {/* 使用 inline style 注入动态颜色或 CSS 变量 */}
                  <span className="swatch" style={{ background: 'var(--color-primary, #123456)' }}></span>
                  <strong>Color Name</strong>
                  <span>[Hex/Gradient]</span>
                  <p>Usage description...</p>
                </button>
              </div>

              {/* AI 提示: 循环渲染中性色或基础色卡片 */}
              <p className="eyebrow">Neutrals 中性色</p>
              <div className="color-grid neutrals-grid">
                <button className="swatch-card compact" data-copy="#0a0a0a">
                  <span className="copy-chip">Copy</span>
                  <span className="swatch" style={{ background: '#0a0a0a' }}></span>
                  <strong>Midnight Base</strong>
                  <code>#0a0a0a</code>
                  <p>Page canvas, primary dark background</p>
                </button>
              </div>
            </section>

            {/* 字体排印 */}
            <section className="section-block">
              <h2>Typography 字体排印</h2>
              <p className="eyebrow">Type Scale 字阶</p>
              <div className="type-scale">
                {/* AI 提示: 循环生成字阶行 (Heading, Body 等) */}
                <button className="type-row">
                  <span>72px</span>
                  <b className="display" style={{ fontSize: '72px', fontWeight: 500, lineHeight: 1 }}>The quick brown fox jumps</b>
                  <small>72px · 500 · 1</small>
                </button>
              </div>

              <p className="eyebrow">Fonts 字体</p>
              <div className="font-list">
                {/* AI 提示: 循环生成字体族卡片 */}
                <article className="font-card">
                  <span>Body</span>
                  <h3>DM Sans</h3>
                  <dl>
                    <dt>Weight</dt><dd>400, 500, 700</dd>
                    <dt>Sizes</dt><dd>14-72px</dd>
                  </dl>
                  <p>Description of the font usage.</p>
                </article>
              </div>
            </section>

            {/* 间距与形状 */}
            <section className="section-block">
              <h2>Spacing &amp; Shape 间距与形状</h2>
              <div className="tables">
                <article>
                  <h3>Spacing 间距</h3>
                  <table>
                    <tbody>
                      {/* AI 提示: 循环生成间距阶梯 */}
                      <tr><th>Base unit</th><td>4px</td><td><span className="preview-bars" style={{ width: '4px' }}></span></td></tr>
                    </tbody>
                  </table>
                </article>
                <article>
                  <h3>Border Radius 圆角</h3>
                  <table>
                    <tbody>
                      {/* AI 提示: 循环生成圆角大小 */}
                      <tr><th>Cards</th><td>24px</td><td><span className="radius" style={{ borderRadius: '24px' }}></span></td></tr>
                    </tbody>
                  </table>
                </article>
              </div>
              
              <h3>Elevation 层级阴影</h3>
              {/* AI 提示: 展示典型的阴影层级 */}
              <div className="elevation-card" style={{ boxShadow: 'var(--shadow-md)' }}>Card</div>
            </section>

            {/* 组件画廊 (新增，用于展示提取的真实 React 组件) */}
            <section className="section-block">
              <h2>Components Showcase 组件画廊</h2>
              <div className="components-grid" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                {/* AI 提示: 实例化你提取到的 React 组件 */}
                {/* <Button variant="primary">Primary Button</Button> */}
                <div style={{ padding: '16px', border: '1px solid #333', borderRadius: '8px' }}>
                  [此处由 AI 实例化所提取的具体组件，如 Button, Input 等]
                </div>
              </div>
            </section>

            {/* 使用规范 */}
            <section className="section-block guidelines">
              <h2>Guidelines 使用规范</h2>
              <div className="guideline-grid">
                <article>
                  <h3>Do 推荐</h3>
                  <ul>
                    {/* AI 提示: 动态生成建议 */}
                    <li>Use Midnight Base as the default background.</li>
                  </ul>
                </article>
                <article>
                  <h3>Don't 避免</h3>
                  <ul>
                    {/* AI 提示: 动态生成禁忌 */}
                    <li>Do not use strong, opaque background colors.</li>
                  </ul>
                </article>
              </div>
            </section>

          </div>
        </section>

        {/* 侧边栏代码预览区域 */}
        <aside className="code-panel" aria-label="Style code reference">
          <div className="tabs primary-tabs" role="tablist">
            <button className="tab is-active">DESIGN.md</button>
            <button className="tab">Tailwind v4</button>
            <button className="tab">CSS Variables</button>
          </div>
          <pre className="code-window">
            <code id="code-output">{`/* AI 提示: 在此处可展示生成的 CSS Variables 或 Tailwind 配置 */`}</code>
          </pre>
        </aside>
      </main>
    </>
  );
}
