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
      <div className="home-banner-content">
        <div className="home-banner-content-title">
          <div className="home-banner-content-title-container">
            <h2>享樂酒店</h2>
            <p>Enjoyment Luxury Hotel</p>
          </div>
          <div className="home-banner-content-title-line"></div>
        </div>
        <div className="home-banner-content-slogan">
          <div className="home-banner-content-slogan-layout">
            <div className="flex flex-col gap-6">
              <h1 className="home-banner-content-slogan-title">
                <span>高雄</span>
                <span>豪華住宿之選</span>
              </h1>
              <p className="home-banner-content-slogan-subtitle">我們致力於為您提供無與倫比的奢華體驗與優質服務</p>
            </div>
            <motion.button
              className="home-banner-content-slogan-btn"
              onHoverStart={() => controls.start('hover')}
              onHoverEnd={() => controls.start('normal')}
              variants={btnContainerVariants}
              initial="normal"
              animate={controls}
              transition={{ type: 'spring', duration: 0.8 }}
            >
              <span>立即訂房</span>
              <motion.div
                className="home-banner-content-slogan-btn-line"
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
