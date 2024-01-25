'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import BgImg from '@/assets/images/pc/register.png';
import Line_pc from '@/assets/images/pc/line2.png';
import Line_mobile from '@/assets/images/mobile/line.png';
import { useCommonCtx } from '@/providers/common-provider';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { setToken, setUserInfo, setRememberMeData } from '@/store/userSlice';
import { setIsLoading } from '@/store/commonSlice';
import { login } from '@/apis/user';

import '@/styles/landing/index.css';

interface LoginInfo {
  email: string;
  password: string;
}
function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const rememberMeData = useSelector((state: RootState) => state.user.rememberMeData);
  const { isMobile } = useCommonCtx();
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({ email: '', password: '' });
  const [isRememberMe, setIsRememberMe] = useState<boolean>(false);

  const doLogin = async () => {
    try {
      dispatch(setIsLoading(true));
      const res = await login(loginInfo);
      dispatch(setToken(res.data.token));
      dispatch(setUserInfo(res.data.result));
      setRememberData();

      router.push('/');
    } catch (err) {
      console.error(err);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  const setRememberData = () => {
    if (isRememberMe) {
      dispatch(setRememberMeData(loginInfo.email));
    } else {
      dispatch(setRememberMeData(''));
    }
  };

  useEffect(() => {
    if (rememberMeData) {
      setLoginInfo({ ...loginInfo, email: rememberMeData });
      setIsRememberMe(true);
    }
  }, [rememberMeData]);

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
          className="w-1/2 "
        />
      )}
      <div className="landing-layout">
        <div className="login">
          <div className="login-heading">
            <p className="font-bold text-primary text-sm lg:text-base">享樂酒店，誠摯歡迎</p>
            <h1 className="font-bold text-white text-3.5xl lg:text-5xl">立即開始旅程</h1>
          </div>
          <div className="login-form">
            <label className="login-form-label">
              <p className="font-bold text-sm lg:text-base">電子信箱</p>
              <input
                type="text"
                placeholder="hello@exsample.com"
                className="login-form-input"
                value={loginInfo.email || ''}
                onChange={e => setLoginInfo({ ...loginInfo, email: e.target.value })}
              />
            </label>
            <label className="login-form-label">
              <p className="font-bold">密碼</p>
              <input
                type="password"
                placeholder="請輸入密碼"
                className="login-form-input"
                value={loginInfo.password || ''}
                onChange={e => setLoginInfo({ ...loginInfo, password: e.target.value })}
              />
            </label>
            <div className="login-form-option">
              <input
                id="remember"
                type="checkbox"
                checked={isRememberMe || false}
                className="w-6 h-6 rounded-[4px] border-black-60 bg-white cursor-pointer"
                onChange={e => setIsRememberMe(e.target.checked)}
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
          <button
            className="login-btn"
            onClick={doLogin}
          >
            會員登入
          </button>
          <div className="flex items-center self-stretch gap-2">
            <p className="text-sm lg:text-base">沒有會員嗎？</p>
            <button
              className="text-primary font-bold underline text-sm lg:text-base"
              onClick={() => router.push('/register')}
            >
              前往註冊
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
