'use client';
import HomeBanner from '@/components/home/home-banner';
import HomeIntro from '@/components/home/home-intro';
import HomeAbout from '@/components/home/home-about';
import HomeRoom from '@/components/home/home-room';
import HomeFood from '@/components/home/home-food';
import HomeTraffic from '@/components/home/home-traffic';
import '@/styles/home/index.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '@/apis/user';
import { setUserInfo } from '@/store/userSlice';

export default function Home() {
  const dispatch = useDispatch();

  const getUserInfo = async () => {
    try {
      const res = await getUser();
      dispatch(setUserInfo(res.data.result));
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    // getUserInfo();
  }, []);
  return (
    <>
      <HomeBanner />
      <HomeIntro />
      <HomeAbout />
      <HomeRoom />
      <HomeFood />
      <HomeTraffic />
    </>
  );
}
