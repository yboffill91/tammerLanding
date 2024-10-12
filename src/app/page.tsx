import BentoGrid from '@/components/BentoGrid';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import LineTime from '@/components/LineTime';
import { BENTO_GRID } from '@/constants';

export default function Home() {
  return (
    <>
      <div className='bg-slate-900 h-[100dvh] w-full relative'>
        <Hero />
        <BentoGrid events={BENTO_GRID} className='z-10 relative' />
        <Features />
        <LineTime />
      </div>
    </>
  );
}
