import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import HeroGallery from '../components/HeroGallery';
import WelcomeSection from '../components/WelcomeSection';
import CTABanner from '../components/CTABanner';
import RaritySection from '../components/RaritySection';
import Roadmap from '../components/Roadmap';
import TeamSection from '../components/TeamSection';
import FAQSection from '../components/FAQSection';

export default function Home() {
  return (
    <>
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
        <Roadmap />
        <TeamSection />

        <div className='flex justify-center py-0 md:py-20 mb-20 md:mb-5'>
          <div className='max-w-xl w-screen mx-10 bg-gradient-to-tl from-rose-500 to-pink-500 rounded-lg py-14'>
            <h2 className='text-white text-4xl text-center font-bold uppercase tracking-wider mb-8'>
              FAQ
            </h2>

            <div className='max-w-lg mx-auto px-5'>
              <div className='py-2'>
                <p className='text-slate-200 font-medium text-xl'>
                  What is your refund policy?
                </p>
                <p className='text-slate-200 opacity-80 py-2'>
                  If you're unhappy with your purchase for any reason, email us
                  within 90 days and we'll refund you in full, no questions
                  asked.
                </p>
              </div>

              <div className='py-2 mt-3'>
                <p className='text-slate-200 font-medium text-xl'>
                  What is an NFT?
                </p>
                <p className='text-slate-200 opacity-80 py-2'>
                  If you're unhappy with your purchase for any reason, email us
                  within 90 days and we'll refund you in full, no questions
                  asked.
                </p>
              </div>

              <div className='py-2 mt-3'>
                <p className='text-slate-200 font-medium text-xl'>
                  How many NFTs?
                </p>
                <p className='text-slate-200 opacity-80 py-2'>
                  If you're unhappy with your purchase for any reason, email us
                  within 90 days and we'll refund you in full, no questions
                  asked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
