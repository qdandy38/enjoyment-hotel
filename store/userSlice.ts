import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { localToken } from '@/utils/auth';
interface UserState {
  token: string;
}

const initialState: UserState = {
  token: localToken.get() || '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localToken.set(action.payload);
    },
  },
});

export default userSlice.reducer;
export const { setToken } = userSlice.actions;
