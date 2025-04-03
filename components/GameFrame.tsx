// components/GameFrame.tsx
import { ReactNode } from 'react';

export default function GameFrame({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white px-6 text-center">
      <div className="w-full max-w-sm aspect-[9/16] bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between">
        <h1 className="text-lg font-bold mb-4">{title}</h1>
        <div className="flex flex-col justify-between h-full">{children}</div>
      </div>
    </main>
  );
}
