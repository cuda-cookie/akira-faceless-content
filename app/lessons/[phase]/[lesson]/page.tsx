import { notFound } from 'next/navigation';
import LessonViewer from '@/components/LessonViewer';
import { PHASES } from '@/data/phases';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function generateStaticParams() {
  const params = [];
  for (const phase of PHASES) {
    for (const lesson of phase.lessons) {
      if (lesson.path) {
        const parts = lesson.path.split('/');
        if (parts.length === 3) {
          params.push({
            phase: parts[1],
            lesson: parts[2],
          });
        }
      }
    }
  }
  return params;
}

async function getContent(path: string): Promise<string> {
  try {
    const fullPath = join(process.cwd(), 'public', path);
    const content = readFileSync(fullPath, 'utf-8');
    return content;
  } catch (error) {
    return '';
  }
}

export default async function LessonPage({ params }: { params: Promise<{ phase: string; lesson: string }> }) {
  const { phase, lesson } = await params;
  const phaseData = PHASES.find(p => p.lessons.some(l => l.path === `phases/${phase}/${lesson}`));
  const lessonData = phaseData?.lessons.find(l => l.path === `phases/${phase}/${lesson}`);

  if (!phaseData || !lessonData) {
    notFound();
  }

  const content = await getContent(lessonData.path!);

  return <LessonViewer phaseSlug={phase} lessonSlug={lesson} initialContent={content} />;
}
