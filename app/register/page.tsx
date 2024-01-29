'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Select, { OptionsOrGroups, GroupBase, StylesConfig } from 'react-select';
import { useRouter } from 'next/navigation';
import BgImg from '@/assets/images/pc/register.png';
import Line_pc from '@/assets/images/pc/line2.png';
import Line_mobile from '@/assets/images/mobile/line.png';
import { useCommonCtx } from '@/providers/common-provider';

import '@/styles/landing/index.css';

interface SelectOptionType {
  label: string;
  value: string | number;
}
type SelectedValue = SelectOptionType | null;
interface RegisterInfo {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  phone: string;
  birth: {
    year: SelectedValue;
    month: SelectedValue;
    date: SelectedValue;
  };
  address: {
    city: SelectedValue;
    district: SelectedValue;
    fullAddress: string;
  };
  isRead: boolean;
}

type IsMulti = false;
const selectStyle: StylesConfig<SelectOptionType, IsMulti> = {
  container: provided => ({
    ...provided,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: '1 0 0',
    borderRadius: '8px',
  }),
  control: provided => ({
    ...provided,
    width: '100%',
    padding: '6px',
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isFocused || state.isSelected ? '#fff' : '#909090',
    backgroundColor: state.isFocused || state.isSelected ? '#BF9D7D' : provided.backgroundColor, // 悬停和选中状态的背景色
    '&:hover': {
      backgroundColor: '#BF9D7D', // 悬停时的背景色
      color: '#fff', // 悬停时的文字颜色
    },
  }),
};
function Register() {
  const router = useRouter();
  const { isMobile, addressOptionData } = useCommonCtx();
  const [nowStep, setNowStep] = useState(1);
  const [registerInfo, setRegisterInfo] = useState<RegisterInfo>({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    phone: '',
    birth: {
      year: null,
      month: null,
      date: null,
    },
    address: {
      city: null,
      district: null,
      fullAddress: '',
    },
    isRead: false,
  });

  const [yearOption, setYearOption] = useState<OptionsOrGroups<any, GroupBase<any>>>([]);
  const [monthOption, setMonthOption] = useState<OptionsOrGroups<any, GroupBase<any>>>([]);
  const [dateOption, setDateOption] = useState<OptionsOrGroups<any, GroupBase<any>>>([]);

  const [cityOption, setCityOption] = useState<OptionsOrGroups<any, GroupBase<any>>>([]);
  const [districtOption, setDistrictOption] = useState<OptionsOrGroups<any, GroupBase<any>>>([]);

  const getAddressOption = () => {
    const allData = addressOptionData.data;
    setCityOption(
      allData.map(item => ({
        label: item.CityName,
        value: item.CityEngName,
      })),
    );
  };

  const getDateOption = () => {
    const year = registerInfo.birth.year?.value as number | undefined;
    const month = registerInfo.birth.month?.value as number | undefined;
    if (!year || !month) return;

    const daysInMonth = new Date(year, month, 0).getDate();
    const monthOptions = Array.from({ length: daysInMonth }, (_, index) => {
      const day = index + 1;
      return { label: `${day}日`, value: day };
    });

    setDateOption(monthOptions);
  };

  const getDistrictOption = (city: any) => {
    // 在 addressOptionData 中找到對應城市的資料
    const cityData = addressOptionData.data.find(item => item.CityEngName === city);

    // 如果找到了對應城市的資料，則獲取其區域列表，否則設置為空數組
    const areaList = cityData ? cityData.AreaList : [];

    // 將區域列表轉換成適用於 Select 組件的格式
    const formattedDistrictOption = areaList.map((area: any) => ({
      label: area.AreaName,
      value: area.AreaEngName,
    }));

    // 更新 districtOption
    setDistrictOption(formattedDistrictOption);
  };

  const initBirthOption = () => {
    setYearOption(
      Array.from({ length: 2024 - 1980 + 1 }, (_, i) => ({ value: 1980 + i, label: `${1980 + i} 年` })).reverse(),
    );
    setMonthOption(Array.from({ length: 12 }, (_, i) => ({ value: 1 + i, label: `${1 + i} 月` })));
  };

  useEffect(() => initBirthOption(), []); // 初始化生日下拉選項

  useEffect(() => {
    getAddressOption();
  }, [addressOptionData]);

  useEffect(() => {
    getDateOption();
    setRegisterInfo({ ...registerInfo, birth: { ...registerInfo.birth, date: null } });
  }, [registerInfo.birth.year, registerInfo.birth.month]);

  useEffect(() => {
    getDistrictOption(registerInfo.address.city?.value);
    setRegisterInfo({ ...registerInfo, address: { ...registerInfo.address, district: null } });
  }, [registerInfo.address.city]);

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
                <div className="register-form-label">
                  <p className="font-bold text-sm lg:text-base">生日</p>
                  <div className="flex items-start gap-2 self-stretch">
                    <Select
                      options={yearOption}
                      placeholder="年"
                      value={registerInfo.birth.year}
                      styles={selectStyle}
                      onChange={val =>
                        setRegisterInfo({ ...registerInfo, birth: { ...registerInfo.birth, year: val } })
                      }
                    />
                    <Select
                      options={monthOption}
                      placeholder="月"
                      value={registerInfo.birth.month}
                      styles={selectStyle}
                      onChange={val =>
                        setRegisterInfo({ ...registerInfo, birth: { ...registerInfo.birth, month: val } })
                      }
                    />
                    <Select
                      options={dateOption}
                      placeholder="日"
                      value={registerInfo.birth.date}
                      styles={selectStyle}
                      onChange={val =>
                        setRegisterInfo({ ...registerInfo, birth: { ...registerInfo.birth, date: val } })
                      }
                    />
                  </div>
                </div>
                <div className="register-form-label ">
                  <p className="font-bold text-sm lg:text-base">地址</p>
                  <div className="flex items-start gap-2 self-stretch">
                    <Select
                      options={cityOption}
                      placeholder="縣市"
                      value={registerInfo.address.city}
                      styles={selectStyle}
                      onChange={val =>
                        setRegisterInfo({ ...registerInfo, address: { ...registerInfo.address, city: val } })
                      }
                    />
                    <Select
                      options={districtOption}
                      placeholder="區"
                      value={registerInfo.address.district}
                      styles={selectStyle}
                      onChange={val =>
                        setRegisterInfo({ ...registerInfo, address: { ...registerInfo.address, district: val } })
                      }
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="請輸入詳細地址"
                    className="register-form-input"
                    value={registerInfo.address.fullAddress || ''}
                    onChange={e =>
                      setRegisterInfo({
                        ...registerInfo,
                        address: { ...registerInfo.address, fullAddress: e.target.value },
                      })
                    }
                  />
                </div>
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
