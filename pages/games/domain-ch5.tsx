import { useState } from 'react';

type Scene = {
  text: string;
  choices?: { text: string; next: number }[];
};

const scenes: Scene[] = [
  {
    text: `🏆 당신은 이겼다.  
법적으로도, 기술적으로도, 심리적으로도.  
  
이제 kakao.games는  
누가 뭐래도 당신의 이름 아래 존재하는 도메인이다.  
  
그러나 진짜 고민은 지금부터다.  
  
이 도메인을 어떤 게임으로 채울 것인가.  
어떤 감성으로, 어떤 방식으로, 어떤 사람들과 함께.`,
    choices: [
      { text: "🎨 진짜 감성 게임을 만든다", next: 1 },
      { text: "👾 이상한 실험작들을 모아보기로 한다", next: 2 },
      { text: "🧩 도메인 전쟁 자체를 게임으로 정식 발매한다", next: 3 },
    ],
  },
  {
    text: `🎨 당신은 커다란 스케치북을 꺼내 들고  
옛날에 만들다 만 음악 게임,  
픽셀풍 점프 액션,  
해커톤에서 구상만 했던 퍼즐들…  
  
그 모든 아이디어를 kakao.games에 담기로 결심한다.  
  
이건 그냥 도메인이 아니라  
당신의 세계를 보여줄 무대다.`,
    choices: [
      { text: "🌱 첫 번째 프로젝트 시작", next: 4 },
    ],
  },
  {
    text: `👾 당신은 ‘버튼 하나 누르면 끝나는 게임’  
‘문자열 1줄로 플레이하는 RPG’  
‘배경 없는 대화 시뮬레이터’  
  
이상하고 쓸데없는 실험작들을 수집하기 시작한다.  
  
어느새 kakao.games는  
개발자들의 성지, 이상한 아이디어들의 고향이 되어간다.`,
    choices: [
      { text: "🌱 첫 번째 프로젝트 시작", next: 4 },
    ],
  },
  {
    text: `🧩 당신은 도메인 전쟁의 기록을  
정식 게임으로 발매하기로 결심한다.  
  
스토리 분기, 선택지, 드래곤, Cloudflare…  
당신의 실제 경험이 하나의 서사가 된다.  
  
kakao.games는 이제  
실제 현실을 기반으로 한 서사형 인터랙티브 게임의 대표작이 된다.`,
    choices: [
      { text: "🌱 첫 번째 프로젝트 시작", next: 4 },
    ],
  },
  {
    text: `🌱 당신은 프로젝트 폴더를 열고  
` + "`games/001-first-game.tsx`" + ` 라는 파일을 만든다.  
  
그리고 첫 문장을 적는다.  
  
> “이건 아주 작고 엉뚱한 게임입니다.”  
  
그 순간,  
  
💡 kakao.games의 진짜 이야기가 시작된다.`,
    choices: [
      { text: "🚀 다음 챕터로", next: 5 },
    ],
  },
  {
    text: `🚀 당신은 새로운 첫 게임을 세상에 공개한다.  
이제 kakao.games는 더 이상 싸움의 도메인이 아니다.  
  
이건 창작의 근거지다.  
이건 마춤법장인의 우주다.  
  
(6장으로 계속)`,
  },
];

export default function DomainChapter5() {
  const [scene, setScene] = useState(0);
  const current = scenes[scene];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-green-50 px-6 text-center">
      <h1 className="text-2xl font-bold mb-4">🎮 도메인 전쟁 - 마춤법장인의 모험: 제5장</h1>
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
