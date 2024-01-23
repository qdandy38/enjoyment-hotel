import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { localToken } from '@/utils/auth';
interface UserState {
  token: string;
  userInfo: object;
  rememberMeData: string;
}

const initialState: UserState = {
  token: '',
  userInfo: {},
  rememberMeData: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUserInfo: (state, action: PayloadAction<object>) => {
      state.userInfo = action.payload;
    },
    setRememberMeData: (state, action: PayloadAction<string>) => {
      state.rememberMeData = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { setToken, setUserInfo, setRememberMeData } = userSlice.actions;
