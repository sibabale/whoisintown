
import { createSlice } from '@reduxjs/toolkit';

const artistSlice = createSlice({
  name: 'artist',
  initialState: { artistInfo: null },
  reducers: {
    setArtistInfo: (state, action) => {
      state.artistInfo = action.payload;
    },
    clearArtistInfo: (state) => {
      state.artistInfo = null
    },
  },
});

export const { setArtistInfo, clearArtistInfo } = artistSlice.actions;
export const selectArtistInfo = (state) => state.artist.artistInfo;
export default artistSlice.reducer;
