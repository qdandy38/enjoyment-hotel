'use client';
import { useState, useEffect } from 'react';
import { motion, type Variants, useAnimation } from 'framer-motion';
import Banner_pc from '@/assets/images/pc/banner.png';
import Banner_mobile from '@/assets/images/mobile/banner.png';
import { useCommonCtx } from '@/providers/common-provider';

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
  const { isMobile } = useCommonCtx();
  const controls = useAnimation();
  const [bgImage, setBgImage] = useState(Banner_pc.src);
  const bgStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage})`,
    backgroundSize: 'cover',
    // backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  useEffect(() => {
    setBgImage(isMobile ? Banner_mobile.src : Banner_pc.src);
  }, [isMobile]);
  return (
    <div
      className="home-banner"
      style={bgStyle}
    >
      <div className="w-full pt-[112px] pb-[71px] lg:py-[166px] px-5 lg:px-20 flex flex-col gap-10 lg:flex-row lg:items-center  lg:gap-[200px]">
        <div className="flex flex-col items-center lg:items-start gap-5 lg:gap-10 flex-1 w-full lg:w-1/2">
          <div className="flex flex-col gap-2 w-full">
            <h2 className="w-full self-stretch text-primary text-[40px] lg:text-5xl tracking-[2px] font-bold text-center lg:text-left">
              享樂酒店
            </h2>
            <p className="text-primary text-2xl font-bold lg:pb-10 text-center lg:text-left tracking-[1.2px]">
              Enjoyment Luxury Hotel
            </p>
          </div>
          <div className="w-[2px] h-[83px] bg-gradient-to-b lg:w-full lg:h-[2px] lg:bg-gradient-to-r from-primary to-[#fff]"></div>
        </div>
        <div className="ml-[44px] lg:ml-0 py-[60px] lg:py-24 pr-5 lg:pr-[200px] flex flex-col border-t border-r rounded-[40px] lg:rounded-[80px] border-[#F5F7F9] bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(255,255,255,0.3)] backdrop-blur-[10px]">
          <div className="flex flex-col gap-[60px] ml-[-40px] lg:ml-[-30px]">
            <div className="flex flex-col gap-6">
              <h1 className="flex flex-col gap-2 items-start text-5xl lg:text-[100px] font-bold tracking-[2.4px] lg:tracking-[5px]">
                <span>高雄</span>
                <span>豪華住宿之選</span>
              </h1>
              <p className="text-black-40 text-base lg:text-3.5xl tracking-[0.32px] lg:tracking-[1.6px]">
                我們致力於為您提供無與倫比的奢華體驗與優質服務
              </p>
            </div>
            <motion.button
              className="p-5 lg:p-10 flex justify-end items-center gap-2.5 rounded-lg cursor-pointer self-stretch"
              onHoverStart={() => controls.start('hover')}
              onHoverEnd={() => controls.start('normal')}
              variants={btnContainerVariants}
              initial="normal"
              animate={controls}
              transition={{ type: 'spring', duration: 0.8 }}
            >
              <span className="text-base lg:text-2xl font-bold tracking-[0.32px] lg:tracking-[1.2px]">立即訂房</span>
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
