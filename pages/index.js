import Head from 'next/head';
import { Navbar } from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>CryptoKon</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <main className='flex flex-col items-center justify-center min-h-screen py-2'>
        <div className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
          <h1 className='text-6xl font-bold text-white'>
            Welcome to{' '}
            <a className='text-blue-600' href='https://nextjs.org'>
              Next.js!
            </a>
          </h1>
        </div>
      </main>
    </div>
  );
}
