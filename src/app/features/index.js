
import searchReducer from './searchSlice';
import artistReducer from './artistSlice';
import eventsReducer from './eventsSlice';

const rootReducer = {
  search: searchReducer,
  artist: artistReducer,
  events: eventsReducer,
};

export default rootReducer;
