// import { BackgroundBeams } from './ui/background-beams';
import { linearGradient } from 'framer-motion/client';
import { BackgroundBeams } from './ui/background-beams';
import { FlipWords } from './ui/flip-words';
import FeatureIcon from './utils/FeaturesIcon';
import Image from 'next/image';
import {
  RiAwardLine,
  RiShieldCheckLine,
  RiLayout2Line,
  RiStarLine,
  RiArrowUpLine,
  RiBrainLine,
  RiCloudLine,
  RiCodeLine,
} from 'react-icons/ri';

const Hero = () => {
  return (
    <section
      className=' w-full bg-slate-900 flex flex-col items-center justify-center relative z-9 py-16 lg:py-50 '
      // style={{
      //   clipPath:
      //     'polygon(50% 0%, 100% 0, 100% 60%, 48% 100%, 47% 100%, 0% 60%, 0 0)',
      // }}
    >
      <div className='container mx-auto px-4  text-slate-100 flex flex-col lg:flex-row items-center justify-center relative z-9 '>
        <div className='w-full lg:w-1/2 order-2 lg:order-1 mt-10 lg:mt-0'>
          <div className='flex flex-col items-center text-center'>
            <h1 className='text-4xl lg:text-5xl my-2'>
              Tamer<span className='text-orange-500'>DIGITAL</span>
            </h1>
            <h2 className='text-3xl lg:text-4xl mb-4 text-center'>
              Seriously focus on growing <br />
              the Business of your dreams
            </h2>
            <div className='text-slate-100 text-center text-lg mb-4'>
              Strategies such as
              <FlipWords
                words={[
                  'Digital Marketing',
                  'SEO Positioning',
                  'Website Design',
                  'Digital Strategies',
                ]}
                className='text-slate-100 text-center text-lg'
              />
              <br />
              that will help you surpass your goals at every step.
            </div>
            <div className='flex flex-wrap justify-center gap-4 mb-8'>
              <button className='bg-orange-500 text-slate-100 rounded-md px-4 py-2 text-lg'>
                Get Started
              </button>
              <button className='bg-transparent border-2 border-slate-200 text-slate-200 rounded-md px-4 py-2 text-lg'>
                See Free Tools
              </button>
            </div>
            <div className='grid grid-cols-4 lg:grid-cols-8 gap-1'>
              <FeatureIcon icon={RiAwardLine} text='Certified Team' />
              <FeatureIcon icon={RiLayout2Line} text='Modern UI/UX' />
              <FeatureIcon icon={RiShieldCheckLine} text='Reliability' />
              <FeatureIcon icon={RiBrainLine} text='Expertise' />
              <FeatureIcon icon={RiStarLine} text='Top Quality' />
              <FeatureIcon icon={RiArrowUpLine} text='Assured Growth' />
              <FeatureIcon icon={RiCodeLine} text='Code Support' />
              <FeatureIcon icon={RiCloudLine} text='Cloud Services' />
            </div>
          </div>
        </div>
        <div className='w-full lg:w-1/2 order-1 lg:order-2 flex justify-center'>
          <Image
            src='/tobbi.webp'
            alt='Hero Image'
            width={500}
            height={500}
            className='max-w-full h-auto'
            style={{
              objectFit: 'cover',
              maskImage: 'linearGradient(black 80%, transparent)',
            }}
          />
        </div>
      </div>

      <BackgroundBeams className='z-0' />
    </section>
  );
};

export default Hero;
