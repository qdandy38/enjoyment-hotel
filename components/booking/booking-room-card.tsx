import Room2 from '@/assets/images/pc/room2-1.png';
import Room2_1 from '@/assets/images/pc/room2-2.png';
import Room2_2 from '@/assets/images/pc/room2-3.png';
import Room2_3 from '@/assets/images/pc/room2-4.png';
import Room2_4 from '@/assets/images/pc/room2-5.png';
import Image from 'next/image';
import IC_Size from '@/assets/icons/ic_Size.svg';
import IC_Bed from '@/assets/icons/ic_Bed.svg';
import IC_Person from '@/assets/icons/ic_Person.svg';
import Arrow_right from '@/assets/icons/ic_ArrowRight.svg';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { type RoomInfo } from './booking-room';
import { formatAmount } from '@/utils/common';
interface Props {
  info: RoomInfo;
}
function BookingRoomCard({ info }: Props) {
  return (
    <div className="booking-room-card">
      <Swiper
        modules={[Navigation, Pagination]}
        className="w-full lg:w-[60%] rounded-t-[20px] lg:rounded-tr-none lg:rounded-l-[20px]"
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {[info.imageUrl, ...info.imageUrlList].map((img, i) => (
          <SwiperSlide key={i}>
            <Image
              src={img}
              alt="room"
              priority
              width={773}
              height={457}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="booking-room-card-content">
        <div className="booking-room-card-content-heading">
          <h2 className="booking-room-card-content-heading-title">{info.name}</h2>
          <p className="booking-room-card-content-heading-subtitle">{info.description}</p>
        </div>
        <div className="booking-room-card-content-info">
          <div className="booking-room-card-content-info-container">
            <IC_Size className="icon w-[24px] h-[24px] fill-primary" />
            <p className="text-black-80 font-bold">{info.areaInfo}</p>
          </div>
          <div className="booking-room-card-content-info-container">
            <IC_Bed className="icon w-[24px] h-[24px] fill-primary" />
            <p className="text-black-80 font-bold">{info.bedInfo}</p>
          </div>
          <div className="booking-room-card-content-info-container">
            <IC_Person className="icon w-[24px] h-[24px] fill-primary" />
            <p className="text-black-80 font-bold">{`1-${info.maxPeople}人`}</p>
          </div>
        </div>
        <div className="booking-room-card-content-line" />
        <div className="booking-room-card-content-footer">
          <h5 className="text-2xl font-bold text-primary">{`NT$ ${formatAmount(info.price)}`}</h5>
          <button className="text-primary text-base font-bold flex gap-1">
            查看更多
            <Arrow_right className="icon fill-primary w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingRoomCard;
