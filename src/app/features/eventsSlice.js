
import { createSlice } from '@reduxjs/toolkit';

const eventsSlice = createSlice({
  name: 'events',
  initialState: { events: [], favorites: [] },
  reducers: {
    setEvents: (state, action) => {
      state.events = action.payload;
    },
    clearEvents: (state) => {
      state.events = [];
      state.favoriteEventIds = [];
    },
    addToFavorites: (state, action) => {
      const eventToAdd = state.events.find((event) => event.id === action.payload);

      // Checking if the event is not already in the favorites list
      if (eventToAdd && !state.favorites.some((favEvent) => favEvent.id === eventToAdd.id)) {
        state.favorites.push(eventToAdd);
      }
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter((event) => event.id !== action.payload);
    },
  },
});

export const { setEvents, clearEvents,  addToFavorites, removeFromFavorites } = eventsSlice.actions;
export const selectEvents = (state) => state.events.events;
export const selectFavorites = (state) => state.events.favorites;
export default eventsSlice.reducer;
