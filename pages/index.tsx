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
          작고 엉뚱한 웹게임들을 만날 수 있는 공간입니다. 
          <br />by 마춤법장인
        </p>
        <div className="flex flex-col space-y-3">
          <a
            href="/games/domain-ch1"
            className="px-6 py-2 bg-black text-white rounded-xl text-center"
          >
            게임 플레이하기
          </a>
        </div>
      </GameFrame>
    </>
  )
}
