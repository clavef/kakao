import { useState } from 'react';

type Scene = {
  text: string;
  choices?: { text: string; next: number }[];
};

const scenes: Scene[] = [
  {
    text: "🌍 2025년, 당신은 운명처럼 kakao.games 도메인을 선점한 한 인디 개발자입니다.\n그러나 어느 날... 📩 거대 기업 K사로부터 경고 메일이 도착합니다.",
    choices: [
      { text: "⚙️ 무시하고 개발을 계속한다", next: 1 },
      { text: "💼 변호사 친구에게 상담한다", next: 2 },
    ],
  },
  {
    text: "⚖️ K사는 도메인을 회수하기 위해 국제 도메인 분쟁 기구(UDRP)에 제소했습니다.\n당신의 선택은?",
    choices: [
      { text: "🛡️ Cloudflare에게 방어를 요청한다", next: 3 },
      { text: "🧙‍♂️ Vercel 드래곤을 소환한다", next: 4 },
    ],
  },
  {
    text: "📚 변호사는 말합니다: '정당한 사용 목적이 있고 사기 목적이 아니면 걱정하지 마세요.'\n당신은 어떻게 할까요?",
    choices: [
      { text: "🚀 게임을 빠르게 런칭한다", next: 5 },
      { text: "🎨 도메인을 NFT로 민팅한다", next: 6 },
    ],
  },
  {
    text: "🌩️ Cloudflare는 당신의 DNS 방패가 되어주었습니다.\n그러나 K사의 공격은 멈추지 않습니다...",
    choices: [
      { text: "🧙‍♂️ 결국 Vercel 드래곤을 소환한다", next: 4 },
      { text: "🏃 도메인을 판매하고 도망친다", next: 7 },
    ],
  },
  {
    text: "🔥 Vercel 드래곤이 나타나 말합니다: '너의 배포는... 준비되었도다.'\n드래곤의 힘으로 빌드는 성공하고 도메인은 연결됩니다.\n🎉 kakao.games는 전 세계에 공개되었습니다!",
    choices: [
      { text: "🏁 엔딩 보기", next: 8 },
    ],
  },
  {
    text: "🎯 당신은 빠르게 '도메인 전쟁'이라는 게임을 만들어 세상에 공개했습니다.\n그리고...",
    choices: [
      { text: "🎉 드래곤 없이 스스로 승리한다", next: 8 },
    ],
  },
  {
    text: "🪙 당신은 도메인을 NFT로 민팅했지만, 그걸로는 소송을 막을 수 없었습니다...\n의 모험</h1>
      <p className="mb-6 text-lg whitespace-pre-line max-w-xl">{current.text}</p>
      <div className="flex flex-col space-y-3">
        {current.choices?.map((c, i) => (
          <button
            key={i}
            onClick={() => setScene(c.next)}
            className="px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition"
          >
            {c.text}
          </button>
        ))}
      </div>
    </main>
  );
}
