import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface UserState {
  token: string;
  userInfo: Record<string, any>;
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
    setUserInfo: (state, action: PayloadAction<Record<string, any>>) => {
      state.userInfo = action.payload;
    },
    setRememberMeData: (state, action: PayloadAction<string>) => {
      state.rememberMeData = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { setToken, setUserInfo, setRememberMeData } = userSlice.actions;
