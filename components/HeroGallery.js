import React from 'react';
import Image from 'next/image';
import Gallery from '../public/assets/CryptoKon_Gallery.png';

const HeroGallery = () => {
  return (
    <div className='relative overflow-x-hidden'>
      <div className='animate-marquee whitespace-nowrap'>
        <Image src={Gallery} alt='CryptoKon NFT Gallery' quality={100} />
        <Image src={Gallery} alt='CryptoKon NFT Gallery' quality={100} />
        <Image src={Gallery} alt='CryptoKon NFT Gallery' quality={100} />
      </div>
    </div>
  );
};

export default HeroGallery;
