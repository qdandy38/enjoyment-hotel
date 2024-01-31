'use client';

import { useState, useEffect } from 'react';
import Banner_pc from '@/assets/images/pc/banner.png';
import Banner_mobile from '@/assets/images/mobile/banner.png';
import { useCommonCtx } from '@/providers/common-provider';
function BookingBanner() {
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
      className="booking-banner"
      style={bgStyle}
    >
      <div className="booking-banner-content">
        <div className="booking-banner-content-heading">
          <div className="booking-banner-content-heading-title">
            <div className="booking-banner-content-heading-title-container">
              <h2>享樂酒店</h2>
              <p>Enjoyment Luxury Hotel</p>
            </div>
            <div className="booking-banner-content-heading-title-line"></div>
          </div>
          <h1>客房旅宿</h1>
        </div>
      </div>
    </section>
  );
}

export default BookingBanner;
