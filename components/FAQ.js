import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';

const FAQ = () => {
  return (
    <div className='flex justify-center py-0 md:py-20 mb-20 md:mb-5'>
      <div className='max-w-xl w-screen mx-10 bg-gradient-to-tl from-rose-500 to-pink-500 rounded-lg py-14'>
        <h2 className='text-white text-4xl text-center font-bold uppercase tracking-wider mb-8'>
          FAQ
        </h2>

        <div className='max-w-lg mx-auto px-5'>
          <Disclosure as='div'>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex justify-between w-full px-4 py-2 text-base font-bold text-left text-rose-600 bg-slate-100 rounded-lg hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-700'>
                  <span>What is your refund policy?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'transform rotate-180' : ''
                    } w-6 h-6 text-rose-700`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className='px-4 pt-4 pb-2 text-base text-white'>
                  If you're unhappy with your purchase for any reason, email us
                  within 90 days and we'll refund you in full, no questions
                  asked.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure as='div' className='mt-5'>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex justify-between w-full px-4 py-2 text-base font-bold text-left text-rose-600 bg-slate-100 rounded-lg hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-700'>
                  <span>What is your refund policy?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'transform rotate-180' : ''
                    } w-6 h-6 text-rose-700`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className='px-4 pt-4 pb-2 text-base text-white'>
                  If you're unhappy with your purchase for any reason, email us
                  within 90 days and we'll refund you in full, no questions
                  asked.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure as='div' className='mt-5'>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex justify-between w-full px-4 py-2 text-base font-bold text-left text-rose-600 bg-slate-100 rounded-lg hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-700'>
                  <span>What is your refund policy?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'transform rotate-180' : ''
                    } w-6 h-6 text-rose-700`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className='px-4 pt-4 pb-2 text-base text-white'>
                  If you're unhappy with your purchase for any reason, email us
                  within 90 days and we'll refund you in full, no questions
                  asked.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure as='div' className='mt-5'>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex justify-between w-full px-4 py-2 text-base font-bold text-left text-rose-600 bg-slate-100 rounded-lg hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-700'>
                  <span>What is your refund policy?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'transform rotate-180' : ''
                    } w-6 h-6 text-rose-700`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className='px-4 pt-4 pb-2 text-base text-white'>
                  If you're unhappy with your purchase for any reason, email us
                  within 90 days and we'll refund you in full, no questions
                  asked.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure as='div' className='mt-5'>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex justify-between w-full px-4 py-2 text-base font-bold text-left text-rose-600 bg-slate-100 rounded-lg hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-700'>
                  <span>What is your refund policy?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'transform rotate-180' : ''
                    } w-6 h-6 text-rose-700`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className='px-4 pt-4 pb-2 text-base text-white'>
                  If you're unhappy with your purchase for any reason, email us
                  within 90 days and we'll refund you in full, no questions
                  asked.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
