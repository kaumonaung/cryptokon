import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import HeroGallery from '../components/HeroGallery';
import WelcomeSection from '../components/WelcomeSection';

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

        <WelcomeSection />
      </main>
    </div>
  );
}
