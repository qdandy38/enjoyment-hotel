import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import IC_Profile from '@/assets/icons/ic_Profile.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';

interface Props {
  toggle: () => void;
}
const ulVariant: Variants = {
  open: {
    visibility: 'visible',
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    visibility: 'hidden',
    transition: { staggerChildren: 0.05, staggerDirection: -1, when: 'afterChildren' },
  },
};

const liVariant: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(0px at 0px 0px)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};
export default function Navigation({ toggle }: Props) {
  const token = useSelector((state: RootState) => state.user.token);
  const userInfo = useSelector((state: RootState) => state.user.userInfo);
  const segment = useSelectedLayoutSegment();

  return (
    <>
      <ul className="hidden lg:flex lg: items-center lg:text-lg lg:gap-4">
        <li className={`${segment === 'booking' ? 'text-primary' : 'hover:text-primary'} transition-colors p-4`}>
          <Link href="/booking">客房旅宿</Link>
        </li>
        {!token ? (
          <li
            className={`${
              segment === 'login' || segment === 'register' ? 'text-primary' : 'hover:text-primary'
            } transition-colors p-4`}
          >
            <Link href="/login">會員登入</Link>
          </li>
        ) : (
          <li className="p-4 flex justify-center items-center gap-2">
            <IC_Profile className="icon fill-white w-[24px] h-[24px] flex-shrink-0" />
            <span>{userInfo.name}</span>
          </li>
        )}
        <li className="bg-primary hover:bg-primary-120 py-4 px-8 rounded-lg">
          <Link href="/booking">立即訂房</Link>
        </li>
      </ul>
      <motion.div
        className="bg-black-dark fixed top-0 left-0 bottom-0 right-0 -z-[1]"
        variants={sidebar}
      />
      <motion.ul
        className="fixed top-1/3 w-4/5 text-center text-white font-bold text-xl left-1/2 -translate-x-1/2"
        variants={ulVariant}
      >
        <motion.li
          className={`p-4 mb-4 ${segment === 'booking' ? 'text-primary' : 'hover:text-primary'}`}
          variants={liVariant}
          onClick={toggle}
        >
          <Link href="/booking">客房旅宿</Link>
        </motion.li>
        <motion.li
          className={`${
            segment === 'login' || segment === 'register' ? 'text-primary' : 'hover:text-primary'
          } p-4 mb-4`}
          variants={liVariant}
          onClick={toggle}
        >
          {!token ? (
            <Link href="/login">會員登入</Link>
          ) : (
            <div className="p-4 flex justify-center items-center gap-2">
              <IC_Profile className="icon fill-white w-[24px] h-[24px] flex-shrink-0" />
              <span>{userInfo.name}</span>
            </div>
          )}
        </motion.li>
        <motion.li
          className="bg-primary hover:bg-primary-120 py-4 px-8 rounded-lg"
          variants={liVariant}
          onClick={toggle}
        >
          <Link href="/booking">立即訂房</Link>
        </motion.li>
      </motion.ul>
    </>
  );
}
