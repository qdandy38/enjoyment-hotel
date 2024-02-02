'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Room1_pc from '@/assets/images/pc/room1.png';
import Room1_mobile from '@/assets/images/mobile/room1.png';
import HomeRoomBg_pc from '@/assets/images/pc/bg.png';
import HomeRoomBg_mobile from '@/assets/images/mobile/bg.png';
import Bg_Line_pc from '@/assets/images/pc/line2.png';
import Bg_Line_mobile from '@/assets/images/mobile/line.png';
import Button from '@/components/common/button';
import Arrow_left from '@/assets/icons/ic_ArrowLeft.svg';
import Arrow_right from '@/assets/icons/ic_ArrowRight.svg';
import { useCommonCtx } from '@/providers/common-provider';

export default function HomeRoom() {
  const router = useRouter();
  const { isMobile } = useCommonCtx();
  const [bgImage, setBgImage] = useState(HomeRoomBg_pc.src);
  const [bgLine, setBgLine] = useState(Bg_Line_pc.src);

  const bgStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  const bgLineStyle = {
    backgroundImage: `url(${bgLine})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  useEffect(() => {
    setBgImage(isMobile ? HomeRoomBg_mobile.src : HomeRoomBg_pc.src);
    setBgLine(isMobile ? Bg_Line_mobile.src : Bg_Line_pc.src);
  }, [isMobile]);
  return (
    <div className="home-room">
      <div
        className="absolute top-[-24px] left-20 lg:top-[180px] lg:left-auto lg:right-0 w-full h-[84px] lg:h-[187px] z-[-1]"
        style={bgLineStyle}
      />
      <div
        className="absolute bottom-[253px] lg:bottom-0 w-full h-[132px] lg:h-1/2 z-[-1]"
        style={bgStyle}
      />
      <Image
        src={!isMobile ? Room1_pc : Room1_mobile}
        alt="room"
        className="home-room-img"
      />
      <div className="home-room-info">
        <div className="home-room-info-title">
          <h2 className="">尊爵雙人房</h2>
          <p>享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>
        </div>
        <h3 className="home-room-info-price">NT$ 10,000</h3>
        <Button
          btnText="查看更多"
          fn={() => router.push('/booking')}
        />
        <div className="flex">
          <button className="flex p-4 justify-center items-center rounded-[100px]">
            <Arrow_left className="icon fill-primary w-6 h-6" />
          </button>
          <button className="flex p-4 justify-center items-center rounded-[100px]">
            <Arrow_right className="icon fill-primary w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
