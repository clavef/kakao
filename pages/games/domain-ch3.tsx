import { useState } from 'react';

type Scene = {
  text: string;
  choices?: { text: string; next: number }[];
};

const scenes: Scene[] = [
  {
    text: `🐉 드래곤은 말한다.  
  
> "배포는 단지 시작일 뿐…  
> 실체가 없는 창작물은 정의를 가질 수 없다."  
  
그는 당신에게 세 가지 조건을 내걸었다.  
이 조건들을 모두 충족해야만 kakao.games를 지킬 수 있다.  

1️⃣ 메타 정보 및 favicon 구성  
2️⃣ 실사용 콘텐츠 존재  
3️⃣ 커뮤니티 반응 확보  

> “조건을 충족시키기 전까지는 너의 싸움은 설득력을 잃는다…”  
  
당신은 어떤 조건부터 해결하겠는가?`,
    choices: [
      { text: "🧠 메타태그와 favicon부터 설정한다", next: 1 },
      { text: "🎮 실사용 콘텐츠를 먼저 만든다", next: 2 },
      { text: "🌐 커뮤니티의 주목을 끌어본다", next: 3 },
    ],
  },
  {
    text: `🧠 당신은 즉시 프로젝트에  
- ` + "`<meta name=\"description\" content=\"작고 엉뚱한 웹게임 컬렉션\" />`" + `  
- ` + "`favicon.ico`" + `  
- ` + "`og:image`" + ` 등  
  
기본적인 SEO 메타 구성을 완료한다.  
  
드래곤은 고개를 끄덕인다.  
> “기본부터 지키는 자에게 신뢰가 따르지.”`,
    choices: [
      { text: "🎮 실사용 콘텐츠를 만든다", next: 2 },
      { text: "🌐 커뮤니티의 주목을 끈다", next: 3 },
    ],
  },
  {
    text: `🎮 당신은 kakao.games/games/kakao-adventure 경로에  
‘도메인 전쟁’의 데모를 정식으로 배포한다.  
  
사용자들이 플레이할 수 있고,  
실제 상호작용이 가능한 웹게임으로 인증된다.  
  
Vercel 드래곤은 중얼거린다.  
> “그것이 창작의 증표다…”`,
    choices: [
      { text: "🧠 메타태그를 설정한다", next: 1 },
      { text: "🌐 커뮤니티 반응을 이끈다", next: 3 },
    ],
  },
  {
    text: `🌐 당신은 X(Twitter)에 해시태그를 단다.  
#kakaogames #인디게임 #이게진짜도메인전쟁  
  
Reddit과 HN에도 글을 올린다.  
  
🔥 커뮤니티는 반응하기 시작한다.  
- "진짜 K사한테 맞짱 뜬 건가요?"  
- "이거 진짜 감성 미쳤네ㅋㅋㅋ"  
  
이제 모든 조건이 충족되었다.  
  
드래곤은 이렇게 말한다.  
> "너는 kakao.games의 진짜 주인이다."`,
    choices: [
      { text: "🏛️ UDRP 패널에게 반박문을 제출한다 (4장으로)", next: 4 },
    ],
  },
  {
    text: `📩 UDRP 패널에게 당신의 자료가 전달된다.  
당신은 이제 정당한 창작자로서 평가를 받게 된다.  
  
이제 진짜 전쟁은 시작이다.  
  
🗂️ (4장: 분쟁의 심판으로 계속)`,
  },
];

export default function DomainChapter3() {
  const [scene, setScene] = useState(0);
  const current = scenes[scene];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-purple-50 px-6 text-center">
      <h1 className="text-2xl font-bold mb-4">🐉 도메인 전쟁 - 마춤법장인의 모험: 제3장</h1>
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
