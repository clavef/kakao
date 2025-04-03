import { useState } from 'react';
import { useRouter } from 'next/router';

type Scene = {
  text: string;
  choices?: { text: string; next: number }[];
};

const scenes: Scene[] = [
  {
    text: `🌒 어느 날, 한 평범한 개발자가  
도메인 검색창에 단어 하나를 입력한다.  
  
“dokkaebi.games”  
  
🔎 사용 가능  
  
그는 생각한다.  
‘이건 운명일지도 모르겠다…’  
  
그 순간, 아주 멀리서  
누군가 웃는다.  
그 미소는 어딘가 익숙하다.`,
    choices: [
      { text: "👉 다음 이야기로", next: 1 },
    ],
  },
  {
    text: `🎮 kakao.games는 지금도 열려 있다.  
  
마춤법장인은 여전히 어딘가에서  
텍스트 파일을 열고,  
버튼 하나짜리 게임을 만들고,  
새로운 감정을 담아둔다.  
  
그리고 누군가는 그걸 보고 웃는다.  
또 누군가는, 자신의 도메인을 검색해본다.`,
    choices: [
      { text: "🔁 다시 시작하기", next: 2 },
    ],
  },
  {
    text: `🔁 당신은 다시 처음으로 돌아간다.  
  
어쩌면 이번엔 다른 선택을,  
다른 분위기를,  
혹은…  
  
진짜 전쟁이 시작될지도 모른다.`,
  },
];

export default function DomainChapter9() {
  const [scene, setScene] = useState(0);
  const router = useRouter();
  const current = scenes[scene];

  const handleChoice = (next: number) => {
    if (next === 2) {
      router.push('/games/domain-ch1');
    } else {
      setScene(next);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white px-6 text-center">
      <h1 className="text-2xl font-bold mb-4">🌀 도메인 전쟁 - 마춤법장인의 모험: 제9장</h1>
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
