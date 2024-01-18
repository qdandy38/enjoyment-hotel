'use client';

import Image from 'next/image';
import Dot_pc from '@/assets/images/pc/dot.png';
import Dot_mobile from '@/assets/images/mobile/dot.png';
import Food1_pc from '@/assets/images/pc/food1.png';
import Food1_mobile from '@/assets/images/mobile/food1.png';
import { useCommonCtx } from '@/providers/common-provider';
import HomeFoodCard from './home-food-card';

export default function HomeFood() {
  const { isMobile } = useCommonCtx();

  return (
    <section className="home-food">
      <Image
        src={!isMobile ? Dot_pc : Dot_mobile}
        alt="dot"
        className="home-food-dot"
      />
      <div className="home-food-heading">
        <h1 className="home-food-heading-title">
          <span>佳餚</span>
          <span>美饌</span>
        </h1>
        <div className="home-food-heading-line" />
      </div>
      <HomeFoodCard
        title="海霸"
        date="SUN-MON"
        time="11:00 - 20:30"
        description="以新鮮海產料理聞名，我們的專業廚師選用高雄當地的海鮮，每一道菜都充滿海洋的鮮美與清甜。無論是烤魚、蒸蝦還是煮蛤蜊，都能讓您品嚐到最新鮮的海洋風味。"
        bgImage={Food1_pc}
      />
    </section>
  );
}
