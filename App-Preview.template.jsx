import React from 'react';
import './design-system/styles/globals.css';
import { Button, Badge, Card, Input } from './design-system';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-pitch-black)] text-[var(--color-porcelain)] p-8 font-sans">
      <header className="mb-12 border-b border-[var(--color-charcoal-grey)] pb-6">
        <h1 className="text-4xl font-bold mb-2">Design System Preview</h1>
        <p className="text-[var(--color-storm-cloud)]">Extracted Tokens and Components Showcase</p>
      </header>

      <main className="space-y-16 max-w-5xl mx-auto">
        {/* Color Palette Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Example Color Swatch */}
            <div className="p-4 rounded-[var(--radius-cards)] border border-[var(--color-charcoal-grey)] bg-[var(--color-graphite)]">
              <div className="h-16 rounded mb-3 bg-[var(--color-neon-lime)]"></div>
              <p className="font-semibold text-sm">Neon Lime</p>
              <code className="text-xs text-[var(--color-storm-cloud)]">--color-neon-lime</code>
            </div>
            {/* ... 动态生成更多提取的色块 ... */}
          </div>
        </section>

        {/* Typography Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Typography</h2>
          <div className="space-y-4 bg-[var(--color-graphite)] p-6 rounded-[var(--radius-cards)]">
            <div className="flex items-center gap-8 border-b border-[var(--color-charcoal-grey)] pb-4">
              <span className="w-24 text-[var(--color-storm-cloud)] text-sm">Display</span>
              <span className="text-[72px] font-bold leading-none">The quick brown fox</span>
            </div>
            {/* ... 动态生成更多字阶 ... */}
          </div>
        </section>

        {/* Components Showcase */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Components Showcase</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <Card className="p-6">
              <h3 className="text-lg font-medium mb-4">Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary Action</Button>
                <Button variant="ghost">Ghost Button</Button>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-medium mb-4">Inputs & Badges</h3>
              <div className="space-y-4">
                <Input placeholder="Enter your email..." />
                <div className="flex gap-2">
                  <Badge>Active</Badge>
                  <Badge variant="secondary">Archived</Badge>
                </div>
              </div>
            </Card>

          </div>
        </section>
      </main>
    </div>
  );
}
