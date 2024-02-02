'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Banner_pc from '@/assets/images/pc/banner.png';
import Banner_mobile from '@/assets/images/mobile/banner.png';
import { useCommonCtx } from '@/providers/common-provider';
import Button from '@/components/common/button';

export default function HomeBanner() {
  const router = useRouter();
  const { isMobile } = useCommonCtx();
  const [bgImage, setBgImage] = useState(Banner_pc.src);
  const bgStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  useEffect(() => {
    setBgImage(isMobile ? Banner_mobile.src : Banner_pc.src);
  }, [isMobile]);
  return (
    <section
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
            <Button
              btnText="立即訂房"
              fn={() => router.push('/booking')}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
