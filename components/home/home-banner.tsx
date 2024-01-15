'use client';
import { useState, useEffect } from 'react';
import { motion, type Variants, useAnimation } from 'framer-motion';
import Banner_pc from '@/assets/images/pc/banner.png';
import Banner_mobile from '@/assets/images/mobile/banner.png';
// import Image from 'next/image';
// import Logo from '@/assets/images/logo.png';
import Header from '@/components/layout/header';

import useResize from '@/hooks/useResize';

const btnContainerVariants: Variants = {
  normal: {
    backgroundColor: '#fff',
    color: '#000',
  },
  hover: {
    backgroundColor: '#BF9D7D',
    color: '#fff',
  },
};
const btnLineVariants: Variants = {
  normal: {
    width: '25%',
    backgroundColor: '#000',
  },
  hover: {
    width: '20%',
    backgroundColor: '#fff',
  },
};
export default function HomeBanner() {
  const controls = useAnimation();
  const [bgImage, setBgImage] = useState(Banner_pc.src);
  const bgStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage})`,
    backgroundSize: 'cover',
    // backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const handleResize = () => {
    const bg = window.innerWidth < 1024 ? Banner_mobile.src : Banner_pc.src;
    setBgImage(bg);
  };

  useResize(handleResize);

  useEffect(() => {
    handleResize();
  }, []);
  return (
    <div
      className="w-full min-h-screen"
      style={bgStyle}
    >
      <div className="w-full py-[166px] px-20 flex items-center gap-[200px]">
        <div className="flex flex-col items-start gap-10 flex-1 w-1/2">
          <div className="flex flex-col gap-2">
            <h1 className="text-primary text-5xl font-bold">享樂酒店</h1>
            <p className="text-primary text-2xl font-bold pb-10">Enjoyment Luxury Hotel</p>
          </div>
          <div className="w-full h-[2px] bg-gradient-to-r from-primary to-[#fff]"></div>
        </div>
        <div className="py-24 pr-[200px] flex flex-col border-t border-r rounded-[80px] border-[#F5F7F9] bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(255,255,255,0.3)] backdrop-blur-[10px]">
          <div className="flex flex-col gap-[60px] ml-[-30px]">
            <div className="flex flex-col gap-6">
              <p className="flex flex-col gap-2 items-start text-[100px] font-bold tracking-[5px]">
                <span>高雄</span>
                <span>豪華住宿之選</span>
              </p>
              <p className="text-black-40 text-[32px] tracking-[1.6px]">
                我們致力於為您提供無與倫比的奢華體驗與優質服務
              </p>
            </div>
            <motion.button
              className="p-10 flex justify-end items-center gap-2.5 rounded-lg cursor-pointer"
              onHoverStart={() => controls.start('hover')}
              onHoverEnd={() => controls.start('normal')}
              variants={btnContainerVariants}
              initial="normal"
              animate={controls}
              transition={{ type: 'spring', duration: 0.8 }}
            >
              <span className="text-2xl leading-9 font-bold tracking-[1.2px]">立即訂房</span>
              <motion.div
                className="h-[1px] bg-black"
                variants={btnLineVariants}
                initial="normal"
                animate={controls}
                transition={{ type: 'spring', duration: 0.8 }}
              />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
