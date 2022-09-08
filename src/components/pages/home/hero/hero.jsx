import Image from 'next/future/image';
import React from 'react';

import CtaButton from 'components/shared/cta-button';

import bg from './images/bg.jpg';
import leftGlitch from './images/left-glitch.png';
import logoBg from './images/logo-bg.png';
import rightGlitch from './images/right-glitch.png';
import Sponsors from './sponsors';

const title = 'Hacksquad';
const description =
  'Complimentary event to win more swag, contribute code, meet community members, and participate in workshops.';

const Hero = () => (
  <section className="hero safe-paddings relative overflow-hidden pt-[244px] pb-[100px]">
    <div className="container relative z-10 flex flex-col items-center">
      <div className="relative">
        <h1
          className="font-['Bugfast'] text-[138px] leading-none md:text-[105px] sm:text-[14vw]"
          style={{
            textShadow: '-2px -2px 0px #00FFFF, 2px 2px 0px #AA00FF',
          }}
        >
          {title}
        </h1>
        <span
          className="text-highlighting-colorful-gradient absolute right-0 flex text-right font-['Flood_Std'] text-[46px] leading-none"
          aria-hidden
        >
          2022
        </span>
        <p className="mx-auto mt-[58px] max-w-[716px] text-center text-lg">{description}</p>
        <CtaButton className="mx-auto mt-10" />

        <Image
          className="absolute left-1/2 top-1/2 -z-10 mt-[-25px] -translate-x-1/2 -translate-y-1/2 transform"
          src={logoBg}
          width={743}
          height={665}
          loading="eager"
          alt=""
          priority
          aria-hidden
        />
      </div>

      <Sponsors />
    </div>

    <Image
      className="absolute top-0 left-1/2 min-w-[1920px] -translate-x-1/2"
      src={bg}
      width={1920}
      height={972}
      loading="eager"
      alt=""
      priority
      aria-hidden
    />

    <Image
      className="absolute left-0 top-[16.4%]"
      src={leftGlitch}
      width={779}
      height={343}
      loading="eager"
      alt=""
      priority
      aria-hidden
    />

    <Image
      className="absolute right-0 top-[22.8%]"
      src={rightGlitch}
      width={892}
      height={364}
      loading="eager"
      alt=""
      priority
      aria-hidden
    />
  </section>
);

export default Hero;
