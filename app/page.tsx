import Image from 'next/image';
import HomeBanner from '@/components/home/home-banner';
import HomeIntro from '@/components/home/home-intro';
import HomeAbout from '@/components/home/home-about';
import HomeRoom from '@/components/home/home-room';
import Header from '@/components/layout/header';
import '@/styles/home/index.css';

export default function Home() {
  return (
    <>
      <HomeBanner />
      <HomeIntro />
      <HomeAbout />
      <HomeRoom />
    </>
  );
}
