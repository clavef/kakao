import { useState } from 'react';

type Scene = {
  text: string;
  choices?: { text: string; next: number }[];
};

const scenes: Scene[] = [
  {
    text: `🧥 어느 날,  
낯익은 듯 낯선 사이트 하나가 공유된다.  
  
> https://kakagames.io  
  
클릭해보니…  
디자인도 비슷하고, 소개 문구도 어딘가 익숙하다.  
  
“작고 엉뚱한 웹게임 모음.”  
  
무심코 떠오른 생각.  
‘어… 이거 내 거 아니냐?’`,
    choices: [
      { text: "🧠 그냥 웃고 넘긴다", next: 1 },
      { text: "🕵️ 누가 만들었는지 알아본다", next: 2 },
      { text: "💣 사이트에 정식 항의 메일을 보낸다", next: 3 },
    ],
  },
  {
    text: `🧠 당신은 그냥 웃는다.  
“뭐, 재밌으면 됐지.”  
  
그리고 하루를 마무리한다.  
그날 밤, 당신은 이상한 꿈을 꾼다.  
  
모든 도메인이 ‘kakao.something’으로 바뀌는 꿈.  
  
눈을 뜬 당신은 생각한다.  
‘내가 뭘 만들어낸 거지…’`,
    choices: [
      { text: "🌌 계속하기 (8장으로)", next: 4 },
    ],
  },
  {
    text: `🕵️ 당신은 도메인 등록 정보를 추적하고,  
Github 소스를 들여다본다.  
  
오…  
커밋 로그에 이런 닉네임이 보인다.  
  
> "matchumbot"  
  
그리고 README에 적힌 한 줄.  
  
> “이 사이트는 kakao.games에 영감을 받아 제작되었습니다.”`,
    choices: [
      { text: "💬 메일을 보낸다", next: 3 },
      { text: "🙆 그냥 두고 본다", next: 1 },
    ],
  },
  {
    text: `💣 당신은 정중하지만 단호한 어조로 메일을 보낸다.  
  
"해당 사이트가 kakao.games의 정체성과  
너무 유사하여 혼란을 야기하고 있습니다.  
  
감사하지만, 변형 혹은 크레딧 표기가 필요합니다."  
  
몇 시간 뒤, 이런 답장이 온다.  
  
> “선생님의 세계관이 너무 좋아서 따라해봤어요…  
죄송해요. 바꿀게요.”`,
    choices: [
      { text: "🌌 계속하기 (8장으로)", next: 4 },
    ],
  },
  {
    text: `🌌 당신은 kakao.games를 열고  
타이틀을 바라본다.  
  
누군가는 흉내내고,  
누군가는 감동하고,  
누군가는 그걸 그대로 옮겨온다.  
  
이건 단순한 웹사이트가 아니다.  
이건 문화다.  
  
(8장으로 계속)`,
  },
];

export default function DomainChapter7() {
  const [scene, setScene] = useState(0);
  const current = scenes[scene];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 text-center">
      <h1 className="text-2xl font-bold mb-4">🧥 도메인 전쟁 - 마춤법장인의 모험: 제7장</h1>
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
