'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { type StaticImageData } from 'next/image';
import Line from '@/assets/images/pc/line.png';
import Dot_pc from '@/assets/images/pc/dot.png';
import Dot_mobile from '@/assets/images/mobile/dot.png';
import Food1_pc from '@/assets/images/pc/food1.png';
import Food1_mobile from '@/assets/images/mobile/food1.png';
import Food2_pc from '@/assets/images/pc/food2.png';
import Food2_mobile from '@/assets/images/mobile/food2.png';
import Food3_pc from '@/assets/images/pc/food3.png';
import Food3_mobile from '@/assets/images/mobile/food3.png';
import Food4_pc from '@/assets/images/pc/food4.png';
import Food4_mobile from '@/assets/images/mobile/food4.png';
import Food5_pc from '@/assets/images/pc/food5.png';
import Food5_mobile from '@/assets/images/mobile/food5.png';
import { useCommonCtx } from '@/providers/common-provider';
import HomeFoodCard from './home-food-card';

interface FoodCard {
  title: string;
  date: string;
  time: string;
  description: string;
  bgImage: StaticImageData;
}
export default function HomeFood() {
  const { isMobile } = useCommonCtx();
  // const [foodList, setFoodList] = useState([])
  const foodList: FoodCard[] = [
    {
      title: '海霸',
      date: 'SUN-MON',
      time: '11:00 - 20:30',
      description:
        '以新鮮海產料理聞名，我們的專業廚師選用高雄當地的海鮮，每一道菜都充滿海洋的鮮美與清甜。無論是烤魚、蒸蝦還是煮蛤蜊，都能讓您品嚐到最新鮮的海洋風味。',
      bgImage: !isMobile ? Food1_pc : Food1_mobile,
    },
    {
      title: '日食',
      date: 'SUN-MON',
      time: '17:00 - 22:00',
      description:
        '為您提供優質的牛排，每一塊肉都來自頂級的牛肉，經過專業廚師的巧手烹調，口感豐滿、風味絕佳。搭配我們的特製醬料，讓您的味蕾享受一場美味的盛宴。',
      bgImage: !isMobile ? Food2_pc : Food2_mobile,
    },
    {
      title: '山臻',
      date: 'SUN-MON',
      time: '11:30 - 20:30',
      description:
        '帶您進入一次辣味與鮮香兼具的川菜美食之旅。我們的廚師掌握正宗的川菜烹調技巧，從麻辣鍋到口水雞，每一道菜都有其獨特的風味，讓您回味無窮。',
      bgImage: !isMobile ? Food3_pc : Food3_mobile,
    },
    {
      title: '月永',
      date: 'SUN-MON',
      time: '11:00 - 20:00',
      description:
        '從鮮美的海鮮、經典的牛排，到各國的特色美食，我們都一應俱全。在這裡，您可以品嚐到世界各地的美食，每一道菜都由專業廚師用心製作，讓您在享受美食的同時，也能感受到我們的熱情與用心。',
      bgImage: !isMobile ? Food4_pc : Food4_mobile,
    },
    {
      title: '天潮',
      date: 'SUN-MON',
      time: '14:00 - 19:30',
      description:
        '我們提供各種精緻甜點與糕點，無論您喜歡的是巧克力蛋糕、法式馬卡龍，還是台灣傳統的糕點，都能在這裡找到。讓我們的甜點帶您進入一場繽紛的甜蜜旅程。',
      bgImage: !isMobile ? Food5_pc : Food5_mobile,
    },
  ];
  return (
    <section className="home-food">
      {!isMobile && (
        <Image
          src={Line}
          alt="line"
          className="home-food-line"
        />
      )}
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
      <Swiper
        className="w-full"
        spaceBetween={24}
        slidesPerView="auto"
      >
        {foodList.map((item, index) => (
          <SwiperSlide
            key={index}
            className="w-auto"
          >
            <HomeFoodCard
              title={item.title}
              date={item.date}
              time={item.time}
              description={item.description}
              bgImage={item.bgImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
