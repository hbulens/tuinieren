import type { ReactNode } from 'react';

export type VegKind = 'tomato' | 'pumpkin' | 'leaf' | 'potato' | 'garlic' | 'lettuce' | 'basil' | 'herb';

/** Small hand-drawn-style vegetable illustrations. Decorative only. */
export function Veg({ kind, size = 64, className }: { kind: VegKind; size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} className={className} aria-hidden="true" focusable="false">
      {SHAPES[kind]}
    </svg>
  );
}

const SHAPES: Record<VegKind, ReactNode> = {
  tomato: (
    <>
      <circle cx="32" cy="36" r="22" fill="#d9573b" />
      <ellipse cx="23" cy="29" rx="6" ry="4" fill="#fff" opacity=".25" />
      <path d="M32 14 l4 6 7-2-4 6 6 4-8 0-5 5-1-7-7-1 6-4-3-6 6 3z" fill="#5f8a2e" />
    </>
  ),
  pumpkin: (
    <>
      <path d="M30 8 q4 2 3 10" stroke="#6b5232" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M33 16 c-14 0-14 14-12 24 c2 12 6 18 11 18 s10-6 11-18 c2-10 2-24-10-24z" fill="#e8a23a" />
      <path d="M32 18 c-3 8-3 30 0 40" stroke="#c9822a" strokeWidth="2" fill="none" />
    </>
  ),
  leaf: (
    <>
      <path d="M12 52 C12 24 30 10 54 10 C54 36 40 52 12 52z" fill="#7da33e" />
      <path d="M14 50 L46 18" stroke="#5f8a2e" strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  potato: (
    <>
      <ellipse cx="32" cy="34" rx="24" ry="17" transform="rotate(-12 32 34)" fill="#c9a26b" />
      <circle cx="22" cy="30" r="2" fill="#8d6b3e" />
      <circle cx="38" cy="40" r="2" fill="#8d6b3e" />
      <circle cx="42" cy="27" r="1.6" fill="#8d6b3e" />
    </>
  ),
  garlic: (
    <>
      <path d="M32 6 v12" stroke="#a8b07a" strokeWidth="4" strokeLinecap="round" />
      <path d="M32 16 c-16 6-20 20-14 30 c4 6 10 8 14 8 s10-2 14-8 c6-10 2-24-14-30z" fill="#f4efe2" stroke="#d8cfb8" strokeWidth="2" />
      <path d="M32 18 c-4 10-4 26 0 36 M32 18 c4 10 4 26 0 36" stroke="#d8cfb8" strokeWidth="2" fill="none" />
    </>
  ),
  lettuce: (
    <>
      <circle cx="32" cy="38" r="20" fill="#9cc25a" />
      <path d="M14 36 q6-14 18-14 q12 0 18 14" fill="#b6d77a" />
      <path d="M22 40 q10-12 20 0" fill="none" stroke="#7da33e" strokeWidth="3" strokeLinecap="round" />
      <path d="M32 26 v26" stroke="#7da33e" strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),
  basil: (
    <>
      <path d="M32 58 V24" stroke="#5f8a2e" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="22" cy="30" rx="11" ry="7" transform="rotate(-25 22 30)" fill="#7da33e" />
      <ellipse cx="42" cy="30" rx="11" ry="7" transform="rotate(25 42 30)" fill="#8fb04a" />
      <ellipse cx="24" cy="46" rx="10" ry="6" transform="rotate(-20 24 46)" fill="#8fb04a" />
      <ellipse cx="40" cy="46" rx="10" ry="6" transform="rotate(20 40 46)" fill="#7da33e" />
      <ellipse cx="32" cy="16" rx="6" ry="9" fill="#9cc25a" />
    </>
  ),
  herb: (
    <>
      <path d="M32 60 C32 40 30 22 34 6" stroke="#6b5232" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {[14, 22, 30, 38, 46].map((y, i) => (
        <g key={y}>
          <ellipse cx={26 + i * 0.3} cy={y} rx="7" ry="2.4" transform={`rotate(-30 ${26 + i * 0.3} ${y})`} fill="#6f8f6a" />
          <ellipse cx={39 - i * 0.3} cy={y + 3} rx="7" ry="2.4" transform={`rotate(30 ${39 - i * 0.3} ${y + 3})`} fill="#5f7d5a" />
        </g>
      ))}
    </>
  ),
};
