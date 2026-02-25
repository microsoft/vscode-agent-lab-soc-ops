import { useState, useMemo, useRef, useEffect } from 'react';
import { questions } from '../data/questions';

interface QuizWizardScreenProps {
  onReset: () => void;
}

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function QuizWizardScreen({ onReset }: QuizWizardScreenProps) {
  const shuffled = useMemo(() => shuffleArray(questions), []);
  const total = shuffled.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [foundCount, setFoundCount] = useState(0);
  const [done, setDone] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  // Animate card in on each question change
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.animation = 'none';
    void el.offsetHeight; // reflow
    el.style.animation = 'wiz-slide-in 0.28s ease-out both';
  }, [animKey]);

  const advance = (found: boolean) => {
    if (found) setFoundCount((c) => c + 1);
    if (currentIndex + 1 >= total) {
      setDone(true);
    } else {
      setCurrentIndex((i) => i + 1);
      setAnimKey((k) => k + 1);
    }
  };

  const progressPct = Math.round((currentIndex / total) * 100);
  const stepLabel = String(currentIndex + 1).padStart(2, '0');
  const totalLabel = String(total).padStart(2, '0');

  if (done) {
    return (
      <div
        className="flex flex-col items-center justify-center min-h-full p-6"
        style={{ background: 'var(--color-wiz-bg)' }}
      >
        <div
          className="w-full max-w-sm text-center p-8"
          style={{
            border: '4px solid var(--color-wiz-ink)',
            background: 'var(--color-wiz-card)',
            animation: 'wiz-pop 0.4s ease-out both',
          }}
        >
          <p
            className="text-xs tracking-[0.25em] uppercase mb-3"
            style={{ fontFamily: 'var(--font-wiz-display)', color: 'var(--color-wiz-red)' }}
          >
            Finished!
          </p>
          <p
            className="text-7xl font-black leading-none mb-1"
            style={{ fontFamily: 'var(--font-wiz-display)', color: 'var(--color-wiz-ink)' }}
          >
            {foundCount}
          </p>
          <p
            className="text-base mb-6"
            style={{ fontFamily: 'var(--font-wiz-body)', color: 'var(--color-wiz-ink)' }}
          >
            out of {total} people found
          </p>
          <button
            onClick={onReset}
            className="w-full py-4 text-sm tracking-[0.2em] uppercase transition-opacity active:opacity-70"
            style={{
              fontFamily: 'var(--font-wiz-display)',
              background: 'var(--color-wiz-ink)',
              color: 'var(--color-wiz-bg)',
              border: 'none',
            }}
          >
            Back to Start
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col min-h-full"
      style={{ background: 'var(--color-wiz-bg)' }}
    >
      {/* Header */}
      <header
        className="flex items-center justify-between px-4 py-3"
        style={{ background: 'var(--color-wiz-ink)' }}
      >
        <button
          onClick={onReset}
          className="text-xs tracking-widest uppercase py-1 px-2 transition-opacity active:opacity-60"
          style={{
            fontFamily: 'var(--font-wiz-display)',
            color: 'var(--color-wiz-bg)',
            border: '1px solid rgba(240,235,224,0.3)',
          }}
        >
          ← Back
        </button>

        <span
          className="text-xs tracking-[0.3em] uppercase"
          style={{ fontFamily: 'var(--font-wiz-display)', color: 'var(--color-wiz-bg)' }}
        >
          Quiz Wizard
        </span>

        <span
          className="text-sm"
          style={{ fontFamily: 'var(--font-wiz-display)', color: 'var(--color-wiz-red)' }}
        >
          {stepLabel}/{totalLabel}
        </span>
      </header>

      {/* Progress bar */}
      <div
        className="w-full h-1"
        style={{ background: 'rgba(13,13,13,0.15)' }}
      >
        <div
          className="h-full transition-all duration-300"
          style={{ width: `${progressPct}%`, background: 'var(--color-wiz-red)' }}
        />
      </div>

      {/* Body */}
      <div className="flex-1 flex flex-col justify-between p-5 gap-4">

        {/* Step counter */}
        <div className="flex items-baseline gap-2">
          <span
            className="text-5xl font-black leading-none"
            style={{ fontFamily: 'var(--font-wiz-display)', color: 'var(--color-wiz-red)' }}
          >
            {stepLabel}
          </span>
          <span
            className="text-xs tracking-[0.2em] uppercase"
            style={{ fontFamily: 'var(--font-wiz-display)', color: 'rgba(13,13,13,0.4)' }}
          >
            of {totalLabel}
          </span>
        </div>

        {/* Question card */}
        <div
          ref={cardRef}
          className="flex-1 flex items-center justify-center p-6"
          style={{
            border: '3px solid var(--color-wiz-ink)',
            background: 'var(--color-wiz-card)',
            animation: 'wiz-slide-in 0.28s ease-out both',
          }}
        >
          <p
            className="text-center text-xl leading-snug"
            style={{ fontFamily: 'var(--font-wiz-body)', color: 'var(--color-wiz-ink)' }}
          >
            {shuffled[currentIndex]}
          </p>
        </div>

        {/* Instruction */}
        <p
          className="text-center text-xs tracking-widest uppercase"
          style={{ fontFamily: 'var(--font-wiz-display)', color: 'rgba(13,13,13,0.4)' }}
        >
          Find someone who…
        </p>

        {/* Action buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => advance(true)}
            className="py-4 text-xs tracking-[0.15em] uppercase transition-opacity active:opacity-70"
            style={{
              fontFamily: 'var(--font-wiz-display)',
              background: 'var(--color-wiz-red)',
              color: '#fff',
              border: '3px solid var(--color-wiz-red)',
            }}
          >
            ✓ Found!
          </button>
          <button
            onClick={() => advance(false)}
            className="py-4 text-xs tracking-[0.15em] uppercase transition-opacity active:opacity-70"
            style={{
              fontFamily: 'var(--font-wiz-display)',
              background: 'transparent',
              color: 'var(--color-wiz-ink)',
              border: '3px solid var(--color-wiz-ink)',
            }}
          >
            Skip →
          </button>
        </div>

        {/* Found counter */}
        <p
          className="text-center text-xs tracking-widest"
          style={{ fontFamily: 'var(--font-wiz-body)', color: 'rgba(13,13,13,0.5)' }}
        >
          {foundCount} found so far
        </p>
      </div>
    </div>
  );
}
