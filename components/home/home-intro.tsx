'use client';
import Image from 'next/image';
import News1 from '@/assets/images/pc/news1.png';
import News2 from '@/assets/images/pc/news2.png';
import News3 from '@/assets/images/pc/news3.png';
import News1_mobile from '@/assets/images/mobile/news1.png';
import News2_mobile from '@/assets/images/mobile/news2.png';
import News3_mobile from '@/assets/images/mobile/news3.png';
import Dot_pc from '@/assets/images/pc/dot.png';
import Dot_mobile from '@/assets/images/mobile/dot.png';
import { useCommonCtx } from '@/providers/common-provider';

export default function HomeIntro() {
  const { isMobile } = useCommonCtx();
  return (
    <section className="home-intro">
      <div className="home-intro-title">
        <h1>
          <span>最新</span>
          <span>消息</span>
        </h1>
        <div className="home-intro-title-underline" />
      </div>
      <div className="home-intro-card">
        <div className="home-intro-card-item">
          <Image
            src={!isMobile ? News1 : News1_mobile}
            alt="intro-img"
            className="rounded-lg w-[474px]"
          />
          <div className="home-intro-card-item-content">
            <h3>秋季旅遊，豪華享受方案</h3>
            <p>
              秋天就是要來場豪華的旅遊！我們為您準備了一系列的秋季特別方案，包括舒適的住宿、美食饗宴，以及精彩的活動。不論您是想來一趟浪漫之旅，還是想和家人共度美好時光，都能在這裡找到最適合的方案。
            </p>
          </div>
        </div>
        <div className="home-intro-card-item">
          <Image
            src={!isMobile ? News2 : News2_mobile}
            alt="intro-img"
            className="rounded-lg w-[474px]"
          />
          <div className="home-intro-card-item-content">
            <h3>輕鬆住房專案</h3>
            <p>
              我們知道，有時候您只是需要一個舒適的地方放鬆心情。因此，我們推出了「輕鬆住房專案」，讓您無壓力地享受住宿。不管是短期的休息，還是長期的住宿，我們都會以最貼心的服務，讓您感到賓至如歸。
            </p>
          </div>
        </div>
        <div className="home-intro-card-item">
          <Image
            src={!isMobile ? News3 : News3_mobile}
            alt="intro-img"
            className="rounded-lg w-[474px]"
          />
          <div className="home-intro-card-item-content">
            <h3>耶誕快樂，住房送禮</h3>
            <p>
              聖誕節來臨，我們為您準備了特別的禮物！在聖誕期間訂房，不僅有特別優惠，還會送上我們精心準備的聖誕禮物。讓我們一起慶祝這個溫馨的節日吧！
            </p>
          </div>
        </div>
      </div>
      <Image
        src={!isMobile ? Dot_pc : Dot_mobile}
        alt="dot"
        className="home-intro-dot right-6 top-10 lg:right-[180px] lg:top-[100px]"
      />
      <Image
        src={!isMobile ? Dot_pc : Dot_mobile}
        alt="dot"
        className="home-intro-dot left-6 bottom-[-60px] lg:left-[200px] lg:bottom-[-80px]"
      />
    </section>
  );
}
