import React from 'react';
import Image from 'next/image';
import Ticket from '../public/assets/Golden_Tickets.png';

const milestones = [
  {
    percentage: 10,
    description:
      'Tell you that CryptoKon is just a fictional site for a portfolio project.',
  },
  {
    percentage: 30,
    description:
      'CryptoKons, held back from initial sale, will be airdropped to CryptoKon holders randomly.',
  },
  {
    percentage: 50,
    description: "Team will be expanded to realize CryptoKon's future.",
  },
  {
    percentage: 80,
    description:
      'An online store exclusive for CryptoKon holders. Gain access to premium merch and collectibles.',
  },
  {
    percentage: 100,
    description:
      'Participation and voting on the CryptoKon app development will be enabled for all CryptoKon holders. Get first access!',
  },
];

const Roadmap = () => {
  return (
    <div className="max-w-5xl mx-auto py-10">
      <div>
        <h2 className="text-slate-100 italic font-bold text-4xl uppercase tracking-wider py-5 px-10">
          CryptoKon Roadmap
        </h2>
        <p className="text-slate-400 max-w-2xl px-10">
          CryptoKon is not just an NFT art collection, it&apos;ll be the first
          game-like digital convention about crypto and blockchain.
        </p>
        <p className="text-slate-400 max-w-2xl px-10 mt-2">
          We&apos;ve set up some milestones for ourselves. Once we hit a target
          sell through percentage, we will start expanding and working on them.
        </p>
      </div>

      <div className="md:flex flex-row items-center">
        <div className="grid grid-cols-2 max-w-5xl mx-auto py-16">
          <div className="grid grid-cols-8 gap-10 items-center col-span-2 px-10 pb-5">
            {milestones.map((milestone) => (
              <>
                <div className="col-span-3 sm:col-span-2">
                  <p className="bg-gradient-to-tl from-rose-500 to-pink-500 font-medium text-transparent bg-clip-text text-xl">
                    {milestone.percentage}%
                  </p>
                </div>
                <div className="col-span-5 sm:col-span-6 text-slate-300">
                  {milestone.description}
                </div>
              </>
            ))}
          </div>
        </div>

        <div className="px-10 max-w-xs mx-auto">
          <Image
            src={Ticket}
            alt="CryptoKon Rarity Specs"
            quality={100}
            className="text-white rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
