import MarkdownViewer from '@/components/MarkdownViewer';
import { readFileSync } from 'fs';
import { join } from 'path';

export default async function IdeasPage() {
  const fullPath = join(process.cwd(), 'public', 'video-ideas.md');
  const content = readFileSync(fullPath, 'utf-8');
  return <MarkdownViewer initialContent={content} title="Video Ideas Database" />;
}
