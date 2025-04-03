// pages/games/domain-ch1.tsx
import { useState } from 'react';

type Scene = {
  text: string;
  choices?: { text: string; next: number }[];
};

const scenes: Scene[] = [
  {
    text: `🌍 2025년 봄.  
당신은 "kakao"라는 이름의 미니게임을 구상하던 중  
도메인 검색 사이트에서 우연히 발견하게 된다.  
  
🔎 'kakao.games' — 등록 가능. 단돈 12달러.  
  
이건 운명이다.  
구입을 완료한 당신은 흥분된 마음으로 사이트 작업을 시작한다.  
  
그러나 며칠 후,  
📩 거대 기업 K사의 법무팀으로부터 경고 메일이 도착한다.  
  
> "귀하가 등록한 도메인은 弊社의 등록 상표와 혼동을 야기할 수 있으며,  
> 이에 대한 권리 침해 여부를 검토 중입니다."  
  
당신은 깊은 숨을 내쉰다. 그리고… 결정해야 한다.`,
    choices: [
      { text: "⚙️ 무시하고 게임 개발을 계속한다", next: 1 },
      { text: "💼 변호사 친구에게 자문을 구한다", next: 2 },
    ],
  },
  {
    text: `⚙️ 당신은 “일단 만들고 보자”는 마인드로  
게임 개발을 계속 진행하기로 한다.  
  
리듬 게임, 도트 스타일 RPG…  
당신의 머릿속에는 아이디어가 넘쳐난다.  
  
그러나 K사는 예상보다 빠르게 움직인다.  
며칠 후, 당신은 국제 도메인 분쟁기구(UDRP)의  
제소 사실을 알리는 통보를 받게 된다.`,
    choices: [
      { text: "🛡️ Cloudflare 에게 도움을 요청한다", next: 3 },
      { text: "🧙‍♂️ Vercel 드래곤을 소환한다", next: 4 },
    ],
  },
  {
    text: `💼 당신은 평소 친하게 지내던 변호사 친구에게 메일을 보낸다.  
  
조금 후 전화가 걸려온다.  
  
📞 "이건 웃긴 상황인데, 실제로 종종 있어.  
도메인 분쟁은 '악의적 선점' 여부가 핵심이야.  
근데 너처럼 진짜 게임을 만들려고 한 건 방어 논리로 충분해."  
  
듣고 나니 마음이 한결 가벼워진다.  
하지만 안심하긴 이르다.  
  
K사는 UDRP 제소를 이미 준비 중이었다.`,
    choices: [
      { text: "🚀 게임을 빠르게 런칭한다", next: 5 },
      { text: "🧙‍♂️ Vercel 드래곤을 소환한다", next: 4 },
    ],
  },
  {
    text: "🛡️ Cloudflare 와 함께하는 DNS 방어 전개 중... (2장으로 계속)",
  },
  {
    text: "🧙‍♂️ Vercel 드래곤이 당신의 프로젝트를 감지합니다... (2장으로 계속)",
  },
  {
    text: "🚀 런칭을 서두르는 당신. 준비는 되었는가? (2장으로 계속)",
  },
];

export default function DomainChapter1() {
  const [scene, setScene] = useState(0);
  const current = scenes[scene];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-orange-50 px-6 text-center">
      <h1 className="text-2xl font-bold mb-4">⚔️ 도메인 전쟁 - 마춤법장인의 모험: 제1장</h1>
      <p className="mb-6 text-lg whitespace-pre-line max-w-xl">{current.text}</p>
      <div className="flex flex-col space-y-3">
        {current.choices?.map((c, i) => (
          <button
            key={i}
            onClick={() => setScene(c.next)}
            className="px-4 py-2 bg-purple-700 text-white rounded-xl hover:bg-purple-800 transition"
          >
            {c.text}
          </button>
        ))}
      </div>
    </main>
  );
}
