import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface CommonState {
  isLoading: boolean;
}

const initialState: CommonState = {
  isLoading: false,
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export default commonSlice.reducer;
export const { setIsLoading } = commonSlice.actions;
