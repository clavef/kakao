import { useState } from 'react';

type Scene = {
  text: string;
  choices?: { text: string; next: number }[];
};

const scenes: Scene[] = [
  {
    text: `📈 첫 게임이 공개된 뒤,  
kakao.games는 점점 소문을 타기 시작했다.  
  
레딧, 트위터, 디스코드에서  
“이상한데 재밌다”는 평이 오가고  
  
어느 날부터인가,  
누군가 당신에게 DM을 보내기 시작한다.  

> “저도 여기에 게임을 올릴 수 있을까요?”`,
    choices: [
      { text: "🙌 모두에게 열어준다", next: 1 },
      { text: "🧵 셀렉션 기반, 초대제로 운영한다", next: 2 },
      { text: "🧙‍♂️ 아니, 여긴 내 실험실이다", next: 3 },
    ],
  },
  {
    text: `🙌 당신은 "올려보세요"라는 한 마디와 함께  
깃허브 커밋 가이드, 스토리 규칙, 배포 방법을 정리한  
멋진 README를 만들었다.  
  
조용한 골목 같은 공간이  
자연스레 인디들의 놀이터로 바뀌기 시작한다.`,
    choices: [
      { text: "📮 팬레터와 피드백이 쏟아진다", next: 4 },
    ],
  },
  {
    text: `🧵 당신은 이렇게 말한다.  
“여긴 이상한 게임들만 모이는 곳입니다.”  
  
그리고 ‘수상한 감성’을 갖춘 게임만 초대한다.  
  
드물고, 낯설고, 기묘한 게임들만  
이상하게 잘 어울린다.  
그리고 사람들은 그걸 좋아한다.`,
    choices: [
      { text: "📮 팬레터와 피드백이 쏟아진다", next: 4 },
    ],
  },
  {
    text: `🧙‍♂️ 당신은 단호하게 말한다.  
“여긴 나 혼자 쓰려고 만든 거예요.”  
  
그리고  
매주 한 편씩,  
아주 작은 아이디어를 담은 게임들을 직접 만든다.  
  
사람들은 매주 kakao.games를 확인하러 들어온다.  
그것만으로도 충분하다.`,
    choices: [
      { text: "📮 팬레터와 피드백이 쏟아진다", next: 4 },
    ],
  },
  {
    text: `📮 어느 날은 이런 메일이 온다.  
“마춤법장인님,  
제가 만든 게임이 kakao.games에 어울릴까요?”  
  
또 어떤 날은 이런 트윗이 뜬다.  
“여기 진짜 너무 좋아요.  
게임이 아니라, 일기 같아요.”  
  
당신은 창을 닫고,  
다시 텍스트 에디터를 연다.`,
    choices: [
      { text: "🌌 계속하기 (7장으로)", next: 5 },
    ],
  },
  {
    text: `🌌 kakao.games는 이제 ‘도메인 전쟁’이 아니라  
‘마춤법장인의 작은 우주’로 남았다.  
  
이곳에서 사람들은  
누구보다 진지하게,  
누구보다 엉뚱하게,  
  
자신만의 방식으로 놀고 있다.  
  
(7장으로 계속)`,
  },
];

export default function DomainChapter6() {
  const [scene, setScene] = useState(0);
  const current = scenes[scene];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-sky-50 px-6 text-center">
      <h1 className="text-2xl font-bold mb-4">🌌 도메인 전쟁 - 마춤법장인의 모험: 제6장</h1>
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
