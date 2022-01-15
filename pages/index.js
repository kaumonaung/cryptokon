import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import HeroGallery from '../components/HeroGallery';
import WelcomeSection from '../components/WelcomeSection';
import CTABanner from '../components/CTABanner';
import RaritySection from '../components/RaritySection';

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
        <CTABanner />
        <RaritySection />
      </main>
    </div>
  );
}
