import Head from 'next/head'
import GameFrame from '../components/GameFrame'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>kakao.games</title>
        <meta name="description" content="작고 엉뚱한 웹게임 컬렉션" />
      </Head>
      <GameFrame title="🎮 kakao.games">
        {/* 로고 애니메이션 */}
        <div className="flex justify-center mb-6">
          <Image
            src="/logo.PNG"
            alt="kakao.games 로고"
            width={128}
            height={128}
            className="pop-in"
          />
        </div>

        {/* 소개 텍스트 애니메이션 */}
        <div className="text-base text-left leading-relaxed whitespace-pre-line mb-6 slide-up">
          어서오세요,  
          여기는 바로 kakao.games 입니다.  
          아직 게임은 하나뿐이지만요. 😅

          뭐든 처음은 하나에서 시작하죠.  
          앞으로 작고 엉뚱한 게임들이  
          하나둘 모여들 예정입니다.

          지금 플레이할 수 있는 게임은  
          『도메인 전쟁』 입니다.  
          '마춤법장인의 모험'이라고도 불리죠.

          ⚔️ 실화를 바탕으로 한  
          도메인 분쟁 서사형 텍스트 RPG!  
          선택에 따라 분기가 갈리고,  
          엔딩이 바뀌고, 마음도 좀 움직입니다.

          이 모든 걸 만든 사람은  
          바로 저, 마춤법장인입니다.  
          마춤법은 가끔 틀리지만,  
          진심은 정확하게 꽂습니다.
        </div>

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
