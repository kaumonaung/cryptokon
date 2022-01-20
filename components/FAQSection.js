import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import Link from 'next/link';

const FAQSection = () => {
  return (
    <div className='flex justify-center py-0 md:py-20 mb-20 md:mb-5'>
      <div className='max-w-xl w-screen mx-10 bg-slate-800  rounded-lg py-14'>
        <h2 className='text-white text-4xl text-center font-bold uppercase tracking-wider mb-8'>
          FAQ
        </h2>

        <div className='w-full px-5 md:px-10'>
          <div className='w-full max-w-lg p-2 mx-auto bg-gradient-to-tl from-rose-500 to-pink-500 rounded-2xl'>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className='flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-white tracking-wide bg-none rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-slate-100'>
                    <span>What is CryptoKon?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-slate-100`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className='px-4 pt-4 pb-2 text-base text-white opacity-90'>
                    CryptoKon is not only a collection of generated images. It
                    will be a digital game-like convention about blockchain and
                    crypto, hence CryptoKon.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>

        <div className='w-full px-5 md:px-10 mt-10'>
          <div className='w-full max-w-lg p-2 mx-auto bg-gradient-to-tl from-rose-500 to-pink-500 rounded-2xl'>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className='flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-white tracking-wide bg-none rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-slate-100'>
                    <span>What&apos;s a NFT?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-slate-100`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className='px-4 pt-4 pb-2 text-base text-white opacity-90'>
                    A NFT stands for “Non-fungible token”. It&apos;s a fancy way
                    of saying it&apos;s a unique, one of a kind digital item
                    that users can buy, own, and trade. Some NFTs main function
                    are to be digital art and look cool. Some offer exclusive
                    access to websites or participation in an event, like
                    CryptoKon. Think of it like a rare piece of art that can
                    also act as a “members” card.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>

        <div className='w-full px-5 md:px-10 mt-10'>
          <div className='w-full max-w-lg p-2 mx-auto bg-gradient-to-tl from-rose-500 to-pink-500 rounded-2xl'>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className='flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-white tracking-wide bg-none rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-slate-100'>
                    <span>What is Metamask?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-slate-100`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className='px-4 pt-4 pb-2 text-base text-white opacity-90'>
                    Metamask is a crypto wallet that can store your Ethereum,
                    and is needed to purchase and mint a CryptoKon. Having a
                    wallet gives you an Ethereum address (i.e. 0xABCD….1234),
                    this is where your NFT will be stored. Learn more about
                    Metamask and how easy it is to use over here! <br />
                    <Link href='https://metamask.io/'>
                      <a>https://metamask.io/</a>
                    </Link>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>

        <div className='w-full px-5 md:px-10 mt-10'>
          <div className='w-full max-w-lg p-2 mx-auto bg-gradient-to-tl from-rose-500 to-pink-500 rounded-2xl'>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className='flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-white tracking-wide bg-none rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-slate-100'>
                    <span>How were the CryptoKon&apos;s generated?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-slate-100`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className='px-4 pt-4 pb-2 text-base text-white opacity-90'>
                    Each of the 330+ traits was designed and hand-drawn by us.
                    But each CryptoKon was procedurally generated from a
                    collection of our hand-drawn items.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>

        <div className='w-full px-5 md:px-10 mt-10'>
          <div className='w-full max-w-lg p-2 mx-auto bg-gradient-to-tl from-rose-500 to-pink-500 rounded-2xl'>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className='flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-white tracking-wide bg-none rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-slate-100'>
                    <span>What is your mint price?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-slate-100`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className='px-4 pt-4 pb-2 text-base text-white opacity-90'>
                    The price of a single CryptoKon is 0.05 ETH. This does not
                    include gas fees.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>

        <div className='w-full px-5 md:px-10 mt-10'>
          <div className='w-full max-w-lg p-2 mx-auto bg-gradient-to-tl from-rose-500 to-pink-500 rounded-2xl'>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className='flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-white tracking-wide bg-none rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-slate-100'>
                    <span>What is your collection size?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-slate-100`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className='px-4 pt-4 pb-2 text-base text-white opacity-90'>
                    10,000 CryptoKon&apos;s, but 100 of them will be reserved
                    for airdrops and giveaways.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>

        <div className='w-full px-5 md:px-10 mt-10'>
          <div className='w-full max-w-lg p-2 mx-auto bg-gradient-to-tl from-rose-500 to-pink-500 rounded-2xl'>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className='flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-white tracking-wide bg-none rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-slate-100'>
                    <span>When will the sale of the collection start?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-slate-100`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className='px-4 pt-4 pb-2 text-base text-white opacity-90'>
                    The sale of the collection will be announced soon. We will
                    announce the date depending on the blockchain conditions and
                    on Discord. Join us so you don&apos;t miss your chance!
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>

        <div className='w-full px-5 md:px-10 mt-10'>
          <div className='w-full max-w-lg p-2 mx-auto bg-gradient-to-tl from-rose-500 to-pink-500 rounded-2xl'>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className='flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-white tracking-wide bg-none rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-slate-100'>
                    <span>Are CryptoKons a good investment?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-slate-100`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className='px-4 pt-4 pb-2 text-base text-white opacity-90'>
                    This decision is ultimately up to you. CryptoKon will be the
                    first RPG-like digital convention. It will be an ever
                    growing and evolving project. But the success of CryptoKon
                    relies on so many factors and variables that no one can
                    predict it! Like anything in life, don&apos;t spend money on
                    something you can&apos;t afford.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
