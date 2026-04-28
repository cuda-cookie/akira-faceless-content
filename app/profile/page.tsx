'use client';

import { useProgress } from '@/components/ProgressProvider';
import { PHASES, getTotalLessons } from '@/data/phases';
import { Trophy, Star, CheckCircle2, User, Target, Flame, BookOpen, Wrench, Video } from 'lucide-react';

export default function ProfilePage() {
  const { completedLessons, isComplete } = useProgress();
  
  // Progress Calculations
  const lessonTotal = getTotalLessons();
  const lessonsDone = Array.from(completedLessons).filter(id => id.includes('/')).filter(id => !id.startsWith('guides/')).length;
  
  const guideSlugs = [
    'ulog-workflow', 'multi-channel', 'youtube-guide', 
    'top-paying-niches', 'complete-guide'
  ];
  const guidesDone = guideSlugs.filter(slug => 
    Array.from(completedLessons).some(path => path.includes(slug))
  ).length;

  const totalPossible = lessonTotal + guideSlugs.length;
  const totalDone = lessonsDone + guidesDone;
  const progress = Math.round((totalDone / totalPossible) * 100);

  // Gamification stats
  const level = Math.floor(totalDone / 5) + 1;
  const rank = progress >= 100 ? 'SHOGUN' : progress >= 75 ? 'SAMURAI' : progress >= 50 ? 'RONIN' : progress >= 25 ? 'ASHIGARU' : 'RECRUIT';
  
  const achievements = [
    { name: 'First Blood', desc: 'Complete your first lesson', achieved: totalDone >= 1 },
    { name: 'Consistent Warrior', desc: 'Complete 10 units', achieved: totalDone >= 10 },
    { name: 'Guide Master', desc: 'Complete your first guide', achieved: guidesDone >= 1 },
    { name: 'Halfway Hero', desc: 'Reach 50% system completion', achieved: progress >= 50 },
    { name: 'Empire Architect', desc: 'Complete all 66 core lessons', achieved: lessonsDone >= 66 },
  ];

  return (
    <div className="kanji-tech-bg" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="scanline" />
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        
        {/* Header Profile Section */}
        <div className="glass-card" style={{ padding: '48px', display: 'flex', gap: '48px', alignItems: 'center', marginBottom: '40px', borderLeft: '8px solid #ff2c2c' }}>
          <div style={{ position: 'relative' }}>
            <div className="tech-border" style={{ width: '120px', height: '120px', overflow: 'hidden' }}>
              <img src="/logo.jpeg" alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'absolute', bottom: '-10px', right: '-10px', background: '#ff2c2c', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 900 }}>LVL {level}</div>
          </div>
          
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '12px', fontWeight: 900, color: '#ff2c2c', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Operator Profile // {rank}</div>
            <h1 style={{ fontSize: '36px', fontWeight: 900, margin: '0 0 16px 0', fontFamily: '"Yu Mincho", serif' }}>Akira User</h1>
            <div style={{ display: 'flex', gap: '48px' }}>
              <div>
                <div style={{ fontSize: '11px', color: '#999', fontWeight: 800, textTransform: 'uppercase' }}>System Completion</div>
                <div style={{ fontSize: '24px', fontWeight: 900 }}>{progress}%</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', color: '#999', fontWeight: 800, textTransform: 'uppercase' }}>Units Decrypted</div>
                <div style={{ fontSize: '24px', fontWeight: 900 }}>{totalDone} <span style={{ fontSize: '14px', color: '#ccc' }}>/ {totalPossible}</span></div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '80px' }}>
          {/* Progress Breakdown */}
          <div className="glass-card" style={{ padding: '32px' }}>
             <h2 style={{ fontSize: '20px', fontWeight: 900, marginBottom: '24px' }}>CORE_PROGRESS.dat</h2>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                   <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '12px', fontWeight: 700 }}>
                      <span>CURRICULUM_PHASES</span>
                      <span>{lessonsDone}/{lessonTotal}</span>
                   </div>
                   <div style={{ height: '6px', background: 'rgba(0,0,0,0.05)', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', background: '#ff2c2c', width: `${(lessonsDone/lessonTotal)*100}%`, transition: 'width 1s ease' }} />
                   </div>
                </div>
                <div>
                   <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '12px', fontWeight: 700 }}>
                      <span>STRATEGY_GUIDES</span>
                      <span>{guidesDone}/{guideSlugs.length}</span>
                   </div>
                   <div style={{ height: '6px', background: 'rgba(0,0,0,0.05)', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', background: '#22b14c', width: `${(guidesDone/guideSlugs.length)*100}%`, transition: 'width 1s ease' }} />
                   </div>
                </div>
             </div>
          </div>

          {/* Activity Log */}
          <div className="glass-card" style={{ padding: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 900, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Flame size={20} color="#ff2c2c" /> SYSTEM_LOGS.log
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {Array.from(completedLessons).slice(-5).reverse().map((id, i) => {
                let name = id.split('/').pop()?.replace(/-/g, ' ') || 'Unit';
                if (id.includes(':')) {
                   const [pId, lIdx] = id.split(':');
                   const phase = PHASES.find(p => p.id === parseInt(pId));
                   name = phase?.lessons[parseInt(lIdx)]?.name || name;
                }
                return (
                  <div key={i} style={{ padding: '12px', background: 'rgba(0,0,0,0.02)', borderRadius: '8px', borderLeft: '2px solid #ff2c2c', fontSize: '13px' }}>
                    <span style={{ color: '#999', fontSize: '10px' }}>[EVENT]</span> {name.toUpperCase()} <span style={{ color: '#22b14c', fontWeight: 800 }}>COMPLETE</span>
                  </div>
                );
              })}
              {completedLessons.size === 0 && (
                <div style={{ textAlign: 'center', color: '#999', padding: '20px' }}>No logs found. Initialize the system.</div>
              )}
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="glass-card" style={{ padding: '40px', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '32px', textAlign: 'center' }}>SYSTEM_ACHIEVEMENTS.pkg</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px' }}>
             {achievements.map((a, i) => (
                <div key={i} className="tech-border" style={{ padding: '20px', textAlign: 'center', opacity: a.achieved ? 1 : 0.2, background: a.achieved ? 'rgba(255,44,44,0.02)' : 'transparent', filter: a.achieved ? 'none' : 'grayscale(1)' }}>
                   <div style={{ marginBottom: '12px', color: '#ff2c2c' }}>{a.achieved ? <Trophy size={32} /> : <Target size={32} />}</div>
                   <div style={{ fontSize: '14px', fontWeight: 900, marginBottom: '4px' }}>{a.name}</div>
                   <div style={{ fontSize: '10px', color: '#666' }}>{a.desc}</div>
                </div>
             ))}
          </div>
        </div>

      </div>
    </div>
  );
}
