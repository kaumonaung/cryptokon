import Head from 'next/head';
import HeroGallery from '../components/HeroGallery';
import { Navbar } from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>CryptoKon</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <main>
        <HeroGallery />

        <p className='text-white py-20'>Hmm</p>
      </main>
    </div>
  );
}
