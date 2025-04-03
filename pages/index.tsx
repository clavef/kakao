import Head from 'next/head'
import GameFrame from '../components/GameFrame'

export default function Home() {
  return (
    <>
      <Head>
        <title>kakao.games</title>
        <meta name="description" content="작고 엉뚱한 웹게임 컬렉션" />
      </Head>
      <GameFrame title="🎮 kakao.games">
        <p className="text-base whitespace-pre-line text-left leading-relaxed mb-6">
          어서오세요,  
          여기는 『kakao.games 이름은 복수형이지만  
          정작 게임은 지금은 딱 하나뿐입니다. 😅

          뭐든 처음은 하나에서 시작하죠.  
          앞으로 작고 엉뚱한 게임들이  
          하나둘 모여들 예정입니다.

          지금 플레이할 수 있는 유일한 게임은  
          『도메인 전쟁 - 마춤법장인의 모험』.

          ⚔️ 실화를 바탕으로 한  
          도메인 분쟁 서사형 텍스트 RPG!  
          선택에 따라 분기가 갈리고,  
          엔딩이 바뀌고, 마음도 좀 움직입니다.

          이 모든 걸 만든 사람은  
          바로 저, 마춤법장인입니다.  
          마춤법은 가끔 틀리지만,  
          진심은 정확하게 꽂습니다.
        </p>
        <div className="flex flex-col space-y-3">
          <a
            href="/games/domain-ch1"
            className="px-6 py-2 bg-black text-white rounded-xl text-center hover:bg-gray-800 transition"
          >
            👉 도메인 전쟁 플레이하기
          </a>
        </div>
      </GameFrame>
    </>
  )
}
