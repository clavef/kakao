// pages/index.tsx
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>kakao.games</title>
        <meta name="description" content="작고 엉뚱한 웹게임 컬렉션" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-4xl font-bold mt-10">🎮 kakao.games</h1>
        <p className="mt-4 text-lg text-gray-600">
          작고 엉뚱한 웹게임들을 만날 수 있는 공간<br />
          by 마춤법장인
        </p>
        <div className="mt-6 space-x-4">
          <a href="/games/kakao-adventure.tsx" className="px-6 py-2 bg-black text-white rounded-xl">게임 플레이하기</a>
        </div>
      </main>
    </>
  );
}
