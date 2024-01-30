'use client';
import Image from 'next/image';
import { useEffect, useState, useMemo } from 'react';
import Select, { OptionsOrGroups, GroupBase, StylesConfig } from 'react-select';
import { useRouter } from 'next/navigation';
import BgImg from '@/assets/images/pc/register.png';
import Line_pc from '@/assets/images/pc/line2.png';
import Line_mobile from '@/assets/images/mobile/line.png';
import ValidateInput from '@/components/common/validate-input';
import { validateForm } from '@/utils/validation';
import { useCommonCtx } from '@/providers/common-provider';
import { useDispatch } from 'react-redux';
import { setIsLoading } from '@/store/commonSlice';
import { setToken, setUserInfo } from '@/store/userSlice';
import { register } from '@/apis/user';

import '@/styles/landing/index.css';

interface SelectOptionType {
  label: string;
  value: string | number;
}
type SelectedValue = SelectOptionType | null;
interface Step1Info {
  email: string;
  password: string;
  confirmPassword: string;
}
interface Step2Info {
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
interface RegisterInfo extends Step1Info, Step2Info {}

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
  const dispatch = useDispatch();

  const { isMobile, addressOptionData } = useCommonCtx();
  const [nowStep, setNowStep] = useState(1);
  const [step1Info, setStep1Info] = useState<Step1Info>({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [step2Info, setStep2Info] = useState<Step2Info>({
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

  const formRuleStep1: RulesMap = {
    email: [
      {
        message: '信箱格式錯誤',
        regExp: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      },
    ],
    password: [
      {
        message: '密碼必須大於8位',
        validator: val => val.trim().length >= 8,
      },
      {
        message: '只可輸入數字或英文',
        regExp: /^[a-zA-Z0-9]+$/,
      },
    ],
    confirmPassword: [
      {
        message: '密碼不一致',
        validator: val => val === step1Info.password,
      },
    ],
  };
  const formRuleStep2: RulesMap = {
    name: [
      {
        message: '此為必填',
        regExp: /\S/,
      },
    ],
    phone: [
      {
        message: '手機格式錯誤',
        regExp: /^\d+$/,
      },
    ],
    fullAddress: [
      {
        message: '此為必填',
        regExp: /\S/,
      },
    ],
  };

  const isValidStep1 = useMemo(() => {
    return validateForm(step1Info, formRuleStep1);
  }, [step1Info, formRuleStep1]);

  const isValidStep2 = useMemo(() => {
    return (
      validateForm(step2Info, formRuleStep2) &&
      Object.values(step2Info.birth).every(val => !!val) &&
      Object.values(step2Info.address).every(val => !!val) &&
      step2Info.isRead
    );
  }, [step2Info, formRuleStep2]);

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
    const year = step2Info.birth.year?.value as number | undefined;
    const month = step2Info.birth.month?.value as number | undefined;
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
      value: area.ZipCode,
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
    setStep2Info({ ...step2Info, birth: { ...step2Info.birth, date: null } });
  }, [step2Info.birth.year, step2Info.birth.month]);

  useEffect(() => {
    getDistrictOption(step2Info.address.city?.value);
    setStep2Info({ ...step2Info, address: { ...step2Info.address, district: null } });
  }, [step2Info.address.city]);

  const goNextStep = () => {
    if (!isValidStep1) return;
    setNowStep(2);
  };
  const doRegister = async () => {
    if (!isValidStep2) return;
    try {
      dispatch(setIsLoading(true));
      const sendData = {
        name: step2Info.name,
        email: step1Info.email,
        password: step1Info.password,
        phone: step2Info.phone,
        birthday: `${step2Info.birth.year?.value}/${step2Info.birth.month?.value}/${step2Info.birth.date?.value}`,
        address: {
          zipcode: step2Info.address.district?.value,
          detail: step2Info.address.fullAddress,
        },
      };
      const res = await register(sendData);
      dispatch(setToken(res.data.token));
      dispatch(setUserInfo(res.data.result));

      router.push('/');
    } catch (error) {
    } finally {
      dispatch(setIsLoading(false));
    }
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
              <h1 className="font-bold text-white text-3.5xl lg:text-5xl">立即註冊</h1>
            </div>
            <div className="register-heading-step">
              <div className="register-heading-step-item">
                <span className={`register-heading-step-item-nth ${nowStep >= 1 && '-active'}`}>
                  {nowStep > 1 ? '✔' : '1'}
                </span>
                <span className={`font-bold ${nowStep >= 1 ? 'text-white' : 'text-black-60'}`}>輸入信箱及密碼</span>
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
                  <ValidateInput
                    type="text"
                    placeholder="hello@exsample.com"
                    value={step1Info.email}
                    fn={val => setStep1Info({ ...step1Info, email: val })}
                    rules={formRuleStep1.email}
                  />
                </label>
                <label className="register-form-label">
                  <p className="font-bold text-sm lg:text-base">密碼</p>
                  <ValidateInput
                    type="password"
                    placeholder="請輸入密碼"
                    value={step1Info.password}
                    fn={val => setStep1Info({ ...step1Info, password: val })}
                    rules={formRuleStep1.password}
                  />
                </label>
                <label className="register-form-label">
                  <p className="font-bold text-sm lg:text-base">確認密碼</p>
                  <ValidateInput
                    type="password"
                    placeholder="請再輸入一次密碼"
                    value={step1Info.confirmPassword}
                    fn={val => setStep1Info({ ...step1Info, confirmPassword: val })}
                    rules={formRuleStep1.confirmPassword}
                  />
                </label>
              </>
            )}
            {nowStep === 2 && (
              <>
                <label className="register-form-label">
                  <p className="font-bold text-sm lg:text-base">姓名</p>
                  <ValidateInput
                    type="text"
                    placeholder="請輸入姓名"
                    value={step2Info.name}
                    fn={val => setStep2Info({ ...step2Info, name: val })}
                    rules={formRuleStep2.name}
                  />
                </label>
                <label className="register-form-label">
                  <p className="font-bold text-sm lg:text-base">手機號碼</p>
                  <ValidateInput
                    type="text"
                    placeholder="請輸入手機號碼"
                    value={step2Info.phone}
                    fn={val => setStep2Info({ ...step2Info, phone: val })}
                    rules={formRuleStep2.phone}
                  />
                </label>
                <div className="register-form-label">
                  <p className="font-bold text-sm lg:text-base">生日</p>
                  <div className="flex items-start gap-2 self-stretch">
                    <Select
                      options={yearOption}
                      placeholder="年"
                      value={step2Info.birth.year}
                      styles={selectStyle}
                      onChange={val => setStep2Info({ ...step2Info, birth: { ...step2Info.birth, year: val } })}
                    />
                    <Select
                      options={monthOption}
                      placeholder="月"
                      value={step2Info.birth.month}
                      styles={selectStyle}
                      onChange={val => setStep2Info({ ...step2Info, birth: { ...step2Info.birth, month: val } })}
                    />
                    <Select
                      options={dateOption}
                      placeholder="日"
                      value={step2Info.birth.date}
                      styles={selectStyle}
                      onChange={val => setStep2Info({ ...step2Info, birth: { ...step2Info.birth, date: val } })}
                    />
                  </div>
                </div>
                <div className="register-form-label ">
                  <p className="font-bold text-sm lg:text-base">地址</p>
                  <div className="flex items-start gap-2 self-stretch">
                    <Select
                      options={cityOption}
                      placeholder="縣市"
                      value={step2Info.address.city}
                      styles={selectStyle}
                      onChange={val => setStep2Info({ ...step2Info, address: { ...step2Info.address, city: val } })}
                    />
                    <Select
                      options={districtOption}
                      placeholder="區"
                      value={step2Info.address.district}
                      styles={selectStyle}
                      onChange={val => setStep2Info({ ...step2Info, address: { ...step2Info.address, district: val } })}
                    />
                  </div>
                  <ValidateInput
                    type="text"
                    placeholder="請輸入詳細地址"
                    value={step2Info.address.fullAddress}
                    fn={val => setStep2Info({ ...step2Info, address: { ...step2Info.address, fullAddress: val } })}
                    rules={formRuleStep2.fullAddress}
                  />
                </div>
                <div className="register-form-option">
                  <input
                    id="remember"
                    type="checkbox"
                    checked={step2Info.isRead}
                    className="w-6 h-6 rounded-[4px] border-black-60 bg-white cursor-pointer"
                    onChange={e => setStep2Info({ ...step2Info, isRead: e.target.checked })}
                  />
                  <label
                    htmlFor="remember"
                    className="font-bold text-sm lg:text-base"
                  >
                    我已閱讀並同意本網站個資使用規範
                  </label>
                </div>
              </>
            )}
          </div>
          {nowStep === 1 && (
            <button
              className={`register-btn ${!isValidStep1 && '-disabled'}`}
              disabled={!isValidStep1}
              onClick={goNextStep}
            >
              下一步
            </button>
          )}
          {nowStep === 2 && (
            <button
              className={`register-btn ${!isValidStep2 && '-disabled'}`}
              onClick={doRegister}
            >
              完成註冊
            </button>
          )}
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
