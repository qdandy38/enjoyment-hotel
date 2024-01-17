'use client';
import { useState, useEffect } from 'react';
import AboutBG_pc from '@/assets/images/pc/about.png';
import AboutBG_mobile from '@/assets/images/mobile/about.png';
import { useCommonCtx } from '@/providers/common-provider';

export default function HomeAbout() {
  const { isMobile } = useCommonCtx();
  const [bgImage, setBgImage] = useState(AboutBG_pc.src);

  const bgStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    // backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  useEffect(() => {
    setBgImage(isMobile ? AboutBG_mobile.src : AboutBG_pc.src);
  }, [isMobile]);
  return (
    <section className="home-about">
      <div
        className="home-about-bg"
        style={bgStyle}
      >
        <div className="home-about-content">
          <div className="home-about-content-heading">
            <h1>
              <span>關於</span>
              <span>我們</span>
            </h1>
            <div className="home-about-content-heading-line"></div>
          </div>
          <div className="home-about-content-main">
            <p>
              享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。
              我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。
            </p>
            <p>
              我們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿著藝術與設計的精緻。
              我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。
            </p>
            <p>
              在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；您也可以舒適地坐在我們的餐廳，品嚐精緻的佳餚，體驗無與倫比的味覺盛宴。
            </p>
            <p>
              享樂酒店，不僅是您在高雄的住宿之選，更是您感受高雄魅力的最佳舞台。我們期待著您的蒞臨，讓我們共同編織一段難忘的高雄故事。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
