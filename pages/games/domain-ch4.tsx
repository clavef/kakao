import { useState } from 'react';
import { useRouter } from 'next/router';

type Scene = {
  text: string;
  choices?: { text: string; next: number }[];
};

const scenes: Scene[] = [
  {
    text: `📩 UDRP 패널에게 당신의 반박 문서가 제출되었다.  
모든 증거, 자료, 설명은 준비되었고  
이제 결과를 기다리는 일만 남았다.  
  
며칠 뒤, 도착한 메일.  
제목은 단 한 줄.  
  
📥 "Decision regarding kakao.games"  
  
손끝이 떨리는 채로 메일을 연다.  
  
> 신청인의 주장: 도메인이 상표권과 혼동을 야기함  
> 피신청인의 주장: 실제 콘텐츠를 위한 정당한 사용  
  
UDRP 패널은 곧 결정을 발표할 것이다.`,
    choices: [
      { text: "💼 결과를 바로 확인한다", next: 1 },
      { text: "🕯️ 차분히 커피를 내리며 기다린다", next: 2 },
    ],
  },
  {
    text: `💼 판결 결과:  
  
"도메인 ‘kakao.games’는 혼동을 야기할 수 있으나  
피신청인은 이를 정당하게 사용 중이며,  
악의적 선점의 근거는 불충분하다."  
  
따라서  
✅ 도메인 유지 결정.  
  
당신은 이겼다.  
당당하게 kakao.games는 당신의 이름으로 남는다.`,
    choices: [
      { text: "🌱 다음 이야기로", next: 3 },
      { text: "🔁 처음부터 다시 해보기", next: 4 },
    ],
  },
  {
    text: `🕯️ 따뜻한 드립커피 한 잔을 내려 마시며  
메시지를 다시 읽는다.  
  
"도메인은 회수 대상이 아니다."  
  
당신은 입꼬리를 살짝 올리며  
Vercel 드래곤을 떠올린다.  
  
"이제 진짜 시작이다."`,
    choices: [
      { text: "🌱 다음 이야기로", next: 3 },
      { text: "🔁 처음부터 다시 해보기", next: 4 },
    ],
  },
  {
    text: `🎮 당신은 마침내  
도메인 전쟁의 첫 승리를 이뤄냈다.  
  
그러나 이건 끝이 아니라  
진짜 이야기가 시작되는 출발점이었다.  
  
kakao.games를 이제  
어떻게 채워나갈 것인가.  
그게 다음 이야기의 전부가 된다.`,
    choices: [
      { text: "👉 이어서 계속한다", next: 999 },
    ],
  },
  {
    text: `🔁 당신은 다시 처음으로 돌아가  
다른 선택지를 통해  
또 다른 엔딩을 찾아 나선다…`,
    choices: [
      { text: "🔙 1장부터 다시 해보기", next: 0 },
    ],
  },
];

export default function DomainChapter4() {
  const [scene, setScene] = useState(0);
  const router = useRouter();
  const current = scenes[scene];

  const handleChoice = (next: number) => {
    if (next === 999) {
      router.push('/games/domain-ch5');
    } else {
      setScene(next);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white px-6 text-center">
      <h1 className="text-2xl font-bold mb-4">⚖️ 도메인 전쟁 - 마춤법장인의 모험: 제4장</h1>
      <p className="mb-6 text-lg whitespace-pre-line max-w-xl">{current.text}</p>
      <div className="flex flex-col space-y-3">
        {current.choices?.map((c, i) => (
          <button
            key={i}
            onClick={() => handleChoice(c.next)}
            className="px-4 py-2 bg-purple-700 text-white rounded-xl hover:bg-purple-800 transition"
          >
            {c.text}
          </button>
        ))}
      </div>
    </main>
  );
}
