import { useState } from 'react';
import { useRouter } from 'next/router';

type Scene = {
  text: string;
  choices?: { text: string; next: number }[];
};

const scenes: Scene[] = [
  {
    text: `📰 "이상한 게임들만 올라오는 웹사이트,  
그 이름은 kakao.games"  
  
한 커뮤니티 블로그에서 시작된 글이  
기사를 타고, 트위터를 타고, 뉴스레터를 타고  
하루 만에 수십만 명에게 퍼진다.  
  
그날 이후, 메일함이 폭주한다.  
  
> "콘퍼런스에서 이 이야기 해주실 수 있나요?"  
> "kakao.games 스타일로 브랜드를 리뉴얼하고 싶어요"  
> "함께 작은 전시를 열 수 있을까요?"`,
    choices: [
      { text: "🎤 콘퍼런스 발표 수락", next: 1 },
      { text: "🖼️ 오프라인 전시 기획", next: 2 },
      { text: "📫 아무것도 안 하고 조용히 지켜본다", next: 3 },
    ],
  },
  {
    text: `🎤 당신은 콘퍼런스 무대에 선다.  
소개자는 이렇게 말한다.  
  
"오늘 우리는  
도메인을 통해 세상을 바꾼 한 사람을 소개합니다."  
  
당신은 마이크를 들고 말한다.  
“저는 그냥… 12달러 주고 산 도메인 하나 지켰을 뿐입니다.”`,
    choices: [
      { text: "🌱 다음 이야기로", next: 4 },
    ],
  },
  {
    text: `🖼️ 당신은 한 구석의 갤러리를 빌려  
웹페이지의 스크린샷, 소스코드 일부,  
팬레터와 플레이 후기를 전시한다.  
  
가장 마지막엔  
“게임은 너무 작아서  
글자로밖에 표현할 수 없었습니다.”  
  
라는 문장이 적힌 액자가 걸려 있다.`,
    choices: [
      { text: "🌱 다음 이야기로", next: 4 },
    ],
  },
  {
    text: `📫 당신은 아무 대답도 하지 않는다.  
  
그냥 평소처럼  
작은 게임 하나를 더 만들고,  
kakao.games에 올린다.  
  
제목은 ‘소음 속의 정적’.  
  
그리고 아무 말도 하지 않는다.`,
    choices: [
      { text: "🌱 다음 이야기로", next: 4 },
    ],
  },
  {
    text: `🌌 kakao.games는 이제 도메인이 아니라  
하나의 신화처럼 남는다.  
  
그걸 만든 사람은 지금도,  
그저 작은 페이지 하나를 조용히 열고 있다.  
  
그리고 그 다음 페이지가,  
바로 당신 앞에 놓여 있다.`,
    choices: [
      { text: "👉 마지막 장으로", next: 999 },
    ],
  },
];

export default function DomainChapter8() {
  const [scene, setScene] = useState(0);
  const router = useRouter();
  const current = scenes[scene];

  const handleChoice = (next: number) => {
    if (next === 999) {
      router.push('/games/domain-ch9');
    } else {
      setScene(next);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 px-6 text-center">
      <h1 className="text-2xl font-bold mb-4">👑 도메인 전쟁 - 마춤법장인의 모험: 제8장</h1>
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
