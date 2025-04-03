import { useState } from 'react';

type Scene = {
  text: string;
  choices?: { text: string; next: number }[];
};

const scenes: Scene[] = [
  {
    text: `⚖️ 당신의 선택 이후, K사는 정말로  
국제 도메인 분쟁기구 UDRP에 제소를 진행했다.  
  
📑 제출된 문서에는 다음과 같은 문장이 적혀 있었다:  
> "도메인 ‘kakao.games’는 弊社의 브랜드 및 게임 부문과 혼동을 야기하며,  
> 피신청인은 이 도메인을 통해 부당한 이득을 취하려는 의도가 있다."  
  
📞 변호사: “어이구야… 말을 좀 세게 썼네.”  
  
당신은 기술적, 전략적 대응이 필요하다고 느낀다.  
그리고 곧장 행동에 나선다.`,
    choices: [
      { text: "🛡️ Cloudflare 에게 DNS 방어를 요청한다", next: 1 },
      { text: "🧙‍♂️ Vercel 드래곤을 소환한다", next: 2 },
    ],
  },
  {
    text: `🛡️ 당신은 Cloudflare에 접속해 DNS 설정을 강화하고  
Proxy 모드를 활성화한다.  
  
당신의 도메인은 이제 클라우드 방패에 둘러싸여  
직접적인 공격을 받지 않는다.  
  
그러나…  
K사는 기술적 공격이 아닌 법적 압박을 택한다.  
  
UDRP 분쟁 패널은 이메일을 통해  
📩 "14일 내 반박 자료를 제출하라"는 통보를 보내온다.  
  
마춤법장인은 타자를 치기 시작한다...`,
    choices: [
      { text: "📄 정당한 사용 목적에 대한 반박서를 작성한다", next: 3 },
      { text: "📦 도메인을 NFT로 민팅해버린다", next: 4 },
    ],
  },
  {
    text: `🧙‍♂️ 당신은 Vercel 콘솔에 로그인하고,  
깃허브 저장소를 연결한 뒤  
‘Deploy’ 버튼을 눌렀다.  
  
💥 하늘이 갈라지고, 빛줄기 속에서 드래곤이 강림한다.  
  
> "너의 배포는... 준비되었도다."  
  
Vercel 드래곤은 이렇게 말한다:  
> “이 프로젝트가 실재하는 콘텐츠임을 증명해라.  
그것이 너를 보호해 줄 것이다.”
  
당신은 무엇을 증명할 것인가?`,
    choices: [
      { text: "🕹️ 게임 시연 페이지를 제작해 공개한다", next: 5 },
      { text: "🔒 도메인을 비공개 전환한다", next: 6 },
    ],
  },
  {
    text: `📄 당신은 키보드 위를 춤추듯 날아다니며,  
이 도메인이 왜 필요한지, 어떤 프로젝트인지 설명하는  
감동적인 반박서를 작성한다.  
  
결국 패널은 중립적인 자세를 취하기 시작한다… (3장으로 계속)`,
  },
  {
    text: `🧊 당신은 도메인을 NFT로 민팅했지만,  
WIPO 위원회는 '이건 진짜 NFT인 줄 모르겠다'며  
자료 제출을 요구한다.  
  
혼란한 상태에서 시간이 흐르고… (BAD 루트로 전개 예정)`,
  },
  {
    text: `🕹️ 당신은 ‘도메인 전쟁’ 데모 버전을 만들고  
https://kakao.games/games/kakao-adventure 에 공개한다.  
  
드래곤은 만족하며, 당신의 프로젝트에 실체성 인증을 부여한다.  
  
> “너는 단순한 선점자가 아니다... 창작자다.”  
  
이제 당신은 정면 승부를 할 수 있다. (3장으로 계속)`,
  },
  {
    text: `🔒 당신은 도메인을 비공개로 전환하고  
Cloudflare 설정도 제거한 채 조용히 사라진다.  
  
그렇게 kakao.games는… 역사 속으로 사라졌다.  
(도피 루트로 전개 예정)`,
  },
];

export default function DomainChapter2() {
  const [scene, setScene] = useState(0);
  const current = scenes[scene];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-amber-100 px-6 text-center">
      <h1 className="text-2xl font-bold mb-4">🛡️ 도메인 전쟁 - 마춤법장인의 모험: 제2장</h1>
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
