import MarkdownViewer from '@/components/MarkdownViewer';
import { readFileSync } from 'fs';
import { join } from 'path';

export default async function ToolsPage() {
  const fullPath = join(process.cwd(), 'public', 'best-automating-tools.md');
  const content = readFileSync(fullPath, 'utf-8');
  
  return (
    <div className="kanji-tech-bg" style={{ minHeight: '100vh' }}>
      <MarkdownViewer initialContent={content} title="Best Automating Tools" />
    </div>
  );
}
