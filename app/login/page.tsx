'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import BgImg from '@/assets/images/pc/register.png';
import Line_pc from '@/assets/images/pc/line2.png';
import Line_mobile from '@/assets/images/mobile/line.png';
import { useCommonCtx } from '@/providers/common-provider';
import { login } from '@/apis/user';

import '@/styles/login/index.css';

function Login() {
  const { isMobile } = useCommonCtx();

  const apiTest = async () => {
    const data = {
      email: 'qdandy38@gmail.com',
      password: 'andy0001',
    };

    const res = await login(data);
    console.log('res', res);
  };
  useEffect(() => {
    // apiTest();
  }, []);
  return (
    <div className="login">
      <Image
        src={!isMobile ? Line_pc : Line_mobile}
        alt="bg_line"
        className="absolute top-[152px] right-0 z-[-1]"
      />
      {!isMobile && (
        <Image
          src={BgImg}
          alt="bg_img"
          priority
          className="w-1/2 "
        />
      )}
      <div className="login-layout">
        <div className="login-content">
          <div className="login-content-heading">
            <p className="font-bold text-primary text-sm lg:text-base">享樂酒店，誠摯歡迎</p>
            <h1 className="font-bold text-white text-3.5xl lg:text-5xl">立即開始旅程</h1>
          </div>
          <div className="login-content-form">
            <label className="login-content-form-label">
              <p className="font-bold text-sm lg:text-base">電子信箱</p>
              <input
                type="text"
                placeholder="hello@exsample.com"
                className="login-content-form-input"
              />
            </label>
            <label className="login-content-form-label">
              <p className="font-bold">密碼</p>
              <input
                type="text"
                placeholder="請輸入密碼"
                className="login-content-form-input"
              />
            </label>
            <div className="login-content-form-option">
              <input
                id="remember"
                type="checkbox"
                className="w-6 h-6 rounded-[4px] border-black-60 bg-white cursor-pointer"
              />
              <label
                htmlFor="remember"
                className="font-bold text-sm lg:text-base"
              >
                記住帳號
              </label>
              <button className="font-bold text-center underline text-primary ml-auto text-sm lg:text-base">
                忘記密碼？
              </button>
            </div>
          </div>
          <button className="login-content-btn">會員登入</button>
          <div className="login-content-noAccount">
            <p className="text-sm lg:text-base">沒有會員嗎？</p>
            <button className="text-primary font-bold underline text-sm lg:text-base">前往註冊</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
