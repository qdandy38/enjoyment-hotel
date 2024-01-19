'use client';
import Image from 'next/image';
import Map_pc from '@/assets/images/pc/map.png';
import Map_mobile from '@/assets/images/mobile/map.png';
import Bg_line_pc from '@/assets/images/pc/line2.png';
import Bg_line_mobile from '@/assets/images/mobile/line.png';
import Ic_Car from '@/assets/icons/ic_car.svg';
import Ic_Train from '@/assets/icons/ic_train.svg';
import Ic_LuxuryCar from '@/assets/icons/ic_luxurycar.svg';
import { useCommonCtx } from '@/providers/common-provider';

function HomeTraffic() {
  const { isMobile } = useCommonCtx();

  return (
    <section className="home-traffic">
      <div className="home-traffic-content">
        <div className="home-traffic-content-heading">
          <h1 className="home-traffic-content-heading-title">
            <span>交通</span>
            <span>方式</span>
          </h1>
          <div className="home-food-heading-line" />
        </div>
        <div className="home-traffic-content-main">
          <div className="home-traffic-content-main-map">
            <p className="font-bold">台灣高雄市新興區六角路123號</p>
            <Image
              src={!isMobile ? Map_pc : Map_mobile}
              alt="map"
              priority
              className="w-full h-auto flex justify-center items-center rounded-lg"
            />
          </div>
          <ul className="home-traffic-content-main-way">
            <li className="home-traffic-content-main-way-item">
              <Ic_Car className="icon w-[48px] h-[48px] lg:w-20 lg:h-20" />
              <div className="home-traffic-content-main-way-item-text">
                <h5>自行開車</h5>
                <p>
                  如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。
                </p>
              </div>
            </li>
            <li className="home-traffic-content-main-way-item">
              <Ic_Train className="icon w-[48px] h-[48px] lg:w-20 lg:h-20" />
              <div className="home-traffic-content-main-way-item-text">
                <h5>高鐵/火車</h5>
                <p>
                  如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘捷運紅線至中央公園站下車，步行約10分鐘便可抵達。
                </p>
              </div>
            </li>
            <li className="home-traffic-content-main-way-item">
              <Ic_LuxuryCar className="icon w-[48px] h-[48px] lg:w-20 lg:h-20" />
              <div className="home-traffic-content-main-way-item-text">
                <h5>禮賓車服務</h5>
                <p>
                  承億酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：(07)123-4567
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Image
        src={!isMobile ? Bg_line_pc : Bg_line_mobile}
        alt="bg_line"
        className="w-full"
        priority
      />
    </section>
  );
}

export default HomeTraffic;
