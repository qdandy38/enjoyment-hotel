'use client';
import { useState, useEffect } from 'react';
import { getRooms } from '@/apis/booking';
import BookingRoomCard from './booking-room-card';
type ProvideInfo = {
  title: string;
  isProvide: boolean;
};
export interface RoomInfo {
  name: string;
  description: string;
  imageUrl: string;
  imageUrlList: string[];
  areaInfo: string;
  bedInfo: string;
  maxPeople: number;
  price: number;
  status: number;
  facilityInfo: ProvideInfo[];
  amenityInfo: ProvideInfo[];
  _id: string;
  createdAt: string;
  updatedAt: string;
}
function BookingRoom() {
  const [roomsInfo, setRoomsInfo] = useState<RoomInfo[]>([]);

  const getRoomsInfo = async () => {
    try {
      const res = await getRooms();
      console.log('rooms', res);
      setRoomsInfo(res.data.result);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getRoomsInfo();
  }, []);
  return (
    <section className="booking-room">
      <div className="booking-room-content">
        <div className="booking-room-content-heading">
          <p>房型選擇</p>
          <h2>各種房型，任您挑選</h2>
        </div>
        <ul className="booking-room-content-list">
          {roomsInfo.map(item => (
            <li
              className="w-full"
              key={item._id}
            >
              <BookingRoomCard info={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default BookingRoom;
