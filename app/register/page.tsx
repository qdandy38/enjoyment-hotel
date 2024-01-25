'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import BgImg from '@/assets/images/pc/register.png';
import Line_pc from '@/assets/images/pc/line2.png';
import Line_mobile from '@/assets/images/mobile/line.png';
import { useCommonCtx } from '@/providers/common-provider';

import '@/styles/landing/index.css';

interface RegisterInfo {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  phone: string;
  birth: {
    year: string;
    month: string;
    date: string;
  };
  address: {
    city: string;
    district: string;
    fullAddress: string;
  };
  isRead: boolean;
}
function Register() {
  const router = useRouter();
  const { isMobile } = useCommonCtx();
  const [nowStep, setNowStep] = useState(1);
  const [registerInfo, setRegisterInfo] = useState<RegisterInfo>({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    phone: '',
    birth: {
      year: '',
      month: '',
      date: '',
    },
    address: {
      city: '',
      district: '',
      fullAddress: '',
    },
    isRead: false,
  });

  const goNextStep = () => {
    console.log('goNextStep');
  };
  return (
    <div className="landing">
      <Image
        src={!isMobile ? Line_pc : Line_mobile}
        alt="bg_line"
        className="absolute top-[152px] right-0 z-[-1]"
        priority
      />
      {!isMobile && (
        <Image
          src={BgImg}
          alt="bg_img"
          priority
          className="w-1/2"
        />
      )}
      <div className="landing-layout">
        <div className="register">
          <div className="register-heading">
            <div className="register-heading-title">
              <p className="font-bold text-primary text-sm lg:text-base">享樂酒店，誠摯歡迎</p>
              <h1 className="font-bold text-white text-3.5xl lg:text-5xl">立即註冊✔</h1>
            </div>
            <div className="register-heading-step">
              <div className="register-heading-step-item">
                <span className={`register-heading-step-item-nth ${nowStep === 1 && '-active'}`}>1</span>
                <span className={`font-bold ${nowStep === 1 ? 'text-white' : 'text-black-60'}`}>輸入信箱及密碼</span>
              </div>
              <div className="register-heading-step-line" />
              <div className="register-heading-step-item">
                <span className={`register-heading-step-item-nth ${nowStep === 2 && '-active'}`}>2</span>
                <span className={`font-bold ${nowStep === 2 ? 'text-white' : 'text-black-60'}`}>填寫基本資料</span>
              </div>
            </div>
          </div>
          <div className="register-form">
            {nowStep === 1 && (
              <>
                <label className="register-form-label">
                  <p className="font-bold text-sm lg:text-base">電子信箱</p>
                  <input
                    type="text"
                    placeholder="hello@exsample.com"
                    className="register-form-input"
                    value={registerInfo.email || ''}
                    onChange={e => setRegisterInfo({ ...registerInfo, email: e.target.value })}
                  />
                </label>
                <label className="register-form-label">
                  <p className="font-bold text-sm lg:text-base">密碼</p>
                  <input
                    type="password"
                    placeholder="請輸入密碼"
                    className="register-form-input"
                    value={registerInfo.password || ''}
                    onChange={e => setRegisterInfo({ ...registerInfo, password: e.target.value })}
                  />
                </label>
                <label className="register-form-label">
                  <p className="font-bold text-sm lg:text-base">確認密碼</p>
                  <input
                    type="text"
                    placeholder="請再輸入一次密碼"
                    className="register-form-input"
                    value={registerInfo.confirmPassword || ''}
                    onChange={e => setRegisterInfo({ ...registerInfo, confirmPassword: e.target.value })}
                  />
                </label>
              </>
            )}
            {nowStep === 2 && (
              <>
                <label className="register-form-label">
                  <p className="font-bold text-sm lg:text-base">姓名</p>
                  <input
                    type="text"
                    placeholder="請輸入姓名"
                    className="register-form-input"
                    value={registerInfo.name || ''}
                    onChange={e => setRegisterInfo({ ...registerInfo, name: e.target.value })}
                  />
                </label>
                <label className="register-form-label">
                  <p className="font-bold text-sm lg:text-base">手機號碼</p>
                  <input
                    type="password"
                    placeholder="請輸入手機號碼"
                    className="register-form-input"
                    value={registerInfo.phone || ''}
                    onChange={e => setRegisterInfo({ ...registerInfo, phone: e.target.value })}
                  />
                </label>
              </>
            )}
          </div>
          <button
            className="register-btn"
            onClick={() => setNowStep(2)}
          >
            下一步
          </button>
          <div className="flex items-center self-stretch gap-2">
            <p className="text-sm lg:text-base">已經有會員了嗎？</p>
            <button
              className="text-primary font-bold underline text-sm lg:text-base"
              onClick={() => router.push('/login')}
            >
              立即登入
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
