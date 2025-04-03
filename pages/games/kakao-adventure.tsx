// pages/games/kakao-adventure.tsx
import { useState } from 'react';

export default function KakaoAdventure() {
  const [scene, setScene] = useState(0);

  const scenes = [
    {
      text: "2025년, 당신은 kakao.games라는 도메인을 선점한 한 인디 개발자입니다. 그런데 어느 날, 거대 기업 K사로부터 경고 메일이 날아옵니다.",
      choices: [
        { text: "📩 무시하고 개발을 계속한다", next: 1 },
        { text: "🧑‍⚖️ 변호사 친구에게 상담한다", next: 2 }
      ]
    },
    {
      text: "K사는 당신의 도메인을 빼앗기 위해 국제 도메인 분쟁 기구에 제소했습니다.",
      choices: [
        { text: "📝 Vercel에 도움을 요청한다", next: 3 },
        { text: "⚔️ Cloudflare에게 방패를 부탁한다", next: 4 }
      ]
    },
    {
      text: "변호사는 말합니다. '도메인 목적이 정당하면 문제 없습니다.'",
      choices: [
        { text: "💻 게임을 빠르게 완성해서 공개한다!", next: 5 },
        { text: "🏃 도메인을 NFT로 민팅한다", next: 6 }
      ]
    },
    // ...계속
  ];

  const current = scenes[scene];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 px-6">
      <h1 className="text-2xl font-bold mb-4">🔥 도메인 전쟁 - kakao의 모험</h1>
      <p className="mb-6 text-lg text-center max-w-xl">{current.text}</p>
      <div className="flex flex-col space-y-3">
        {current.choices.map((c, i) => (
          <button
            key={i}
            onClick={() => setScene(c.next)}
            className="px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700"
          >
            {c.text}
          </button>
        ))}
      </div>
    </main>
  );
}
