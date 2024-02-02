'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Line from '@/assets/images/pc/line.png';
import Dot_pc from '@/assets/images/pc/dot.png';
import Dot_mobile from '@/assets/images/mobile/dot.png';
import { useCommonCtx } from '@/providers/common-provider';
import HomeFoodCard from './home-food-card';
import { getCulinaryList } from '@/apis/home';
import { setIsLoading } from '@/store/commonSlice';
import { useDispatch } from 'react-redux';

interface FoodCard {
  _id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  diningTime: string;
  description: string;
  image: string;
}
export default function HomeFood() {
  const dispatch = useDispatch();
  const { isMobile } = useCommonCtx();
  const [culinaryList, setCulinaryList] = useState<FoodCard[]>([]);

  const getCulinary = async () => {
    try {
      dispatch(setIsLoading(true));
      const res = await getCulinaryList();
      setCulinaryList(res.data.result);
    } catch (err) {
      console.error(err);
    } finally {
      dispatch(setIsLoading(false));
    }
  };
  useEffect(() => {
    getCulinary();
  }, []);
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
        {culinaryList.map((item: FoodCard) => (
          <SwiperSlide
            key={item._id}
            className="w-auto"
          >
            <HomeFoodCard
              title={item.title}
              date={item.diningTime.split(' ')[0]}
              time={item.diningTime.split(' ')[1]}
              description={item.description}
              bgImage={item.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
