import React, { useState } from 'react';
// ⚠️ AI 提示: 必须引入两个 CSS 文件
// 1. preview-layout.css (基础布局骨架，由 AI 原样拷贝模板)
// 2. globals.css (设计系统令牌 CSS Variables，由 AI 动态生成)
import './design-system/styles/preview-layout.css'; 
import './design-system/styles/globals.css'; 

export default function App() {
  const [activeTab, setActiveTab] = useState('design');
  const [copiedStates, setCopiedStates] = useState({});

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedStates({ ...copiedStates, [id]: true });
    setTimeout(() => {
      setCopiedStates({ ...copiedStates, [id]: false });
    }, 1200);
  };

  return (
    <>
      {/* 顶部导航 */}
      <header className="topbar">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <a className="logo-link" href="#" aria-label="Styles">
            {/* AI 提示: 可替换为提取的设计系统 Logo 或简写 */}
            <span style={{ fontWeight: 'bold' }}>Logo</span>
          </a>
          <span className="slash">/</span>
          <a href="#">Styles</a>
          <span className="slash">/</span>
          {/* AI 提示: 替换为提取的设计系统名称 */}
          <span className="current">System Name</span>
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
                <h1>System Title</h1>
                <p className="subtitle">System Subtitle / Tagline</p>
                <p className="description">
                  [此处填入设计系统的整体描述，例如：A dark, immersive interface...]
                </p>
              </div>
            </div>

            {/* 色彩面板 */}
            <section className="section-block">
              <h2>Color Palette 色彩面板</h2>
              
              {/* AI 提示: 根据提取的颜色分组动态渲染，例如 Accent 强调色 */}
              <p className="eyebrow">Accent 强调色</p>
              <div className="color-grid accent-grid">
                {/* AI 提示: 循环渲染提取出的色彩卡片。务必保留 swatch-card 结构 */}
                <button 
                  className="swatch-card" 
                  onClick={() => handleCopy('color-1', 'var(--color-primary)')}
                >
                  <span className="copy-chip">{copiedStates['color-1'] ? 'Copied' : 'Copy'}</span>
                  {/* 使用 inline style 注入动态颜色或引用 globals.css 中的 CSS 变量 */}
                  <span className="swatch" style={{ background: 'var(--color-primary, #123456)' }}></span>
                  <strong>Primary</strong>
                  <span>var(--color-primary)</span>
                  <p>Usage description...</p>
                </button>
              </div>

              {/* AI 提示: 循环渲染中性色或基础色卡片 */}
              <p className="eyebrow">Neutrals 中性色</p>
              <div className="color-grid neutrals-grid">
                <button 
                  className="swatch-card compact" 
                  onClick={() => handleCopy('color-base', '#0a0a0a')}
                >
                  <span className="copy-chip">{copiedStates['color-base'] ? 'Copied' : 'Copy'}</span>
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
                {/* AI 提示: 循环生成字阶行 (Heading, Body 等)。保留 type-row 结构 */}
                <button className="type-row">
                  <span>72px</span>
                  <b className="display" style={{ fontSize: '72px', fontWeight: 500, lineHeight: 1 }}>The quick brown fox jumps</b>
                  <small>72px · 500 · 1</small>
                </button>
              </div>

              <p className="eyebrow">Fonts 字体</p>
              <div className="font-list">
                {/* AI 提示: 循环生成字体族卡片。保留 font-card 结构 */}
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
              <div className="elevation-card" style={{ boxShadow: 'var(--shadow-md, 0 10px 15px -3px rgba(0,0,0,0.1))' }}>Card</div>
            </section>

            {/* 组件画廊 (展示提取的真实 React 组件) */}
            <section className="section-block">
              <h2>Components Showcase 组件画廊</h2>
              <div className="components-grid">
                {/* AI 提示: 在此处实例化你提取到的真实 React 组件 (Button, Input, Badge 等) */}
                <div style={{ padding: '16px', border: '1px solid var(--color-border, #333)', borderRadius: '8px' }}>
                  [此处由 AI 实例化所提取的具体组件，并展示不同状态]
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
                    {/* AI 提示: 动态生成设计建议 */}
                    <li>Use primary colors carefully.</li>
                  </ul>
                </article>
                <article>
                  <h3>Don't 避免</h3>
                  <ul>
                    {/* AI 提示: 动态生成设计禁忌 */}
                    <li>Do not use generic typography.</li>
                  </ul>
                </article>
              </div>
            </section>

          </div>
        </section>

        {/* 侧边栏代码预览区域 */}
        <aside className="code-panel" aria-label="Style code reference">
          <div className="tabs primary-tabs" role="tablist">
            <button 
              className={`tab ${activeTab === 'design' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('design')}
            >
              DESIGN.md
            </button>
            <button 
              className={`tab ${activeTab === 'cssvars' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('cssvars')}
            >
              CSS Variables
            </button>
          </div>
          
          <div className="tabs sub-tabs">
            <span className="tab-actions">
              <button 
                className="tool-button" 
                onClick={() => handleCopy('code-panel', 'Copied Content...')}
              >
                {copiedStates['code-panel'] ? 'Copied' : 'Copy'}
              </button>
            </span>
          </div>

          <pre className="code-window">
            <code id="code-output">
              {/* AI 提示: 根据 activeTab 动态展示提取出的 markdown 文本或 CSS Variables 文本 */}
              {activeTab === 'design' && `/* 注入提取出的 DESIGN.md 纯文本 */`}
              {activeTab === 'cssvars' && `/* 注入提取出的 globals.css 变量文本 */`}
            </code>
          </pre>
        </aside>
      </main>
    </>
  );
}
