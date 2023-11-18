// src/App.js

import React from 'react';
import { motion } from 'framer-motion';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './app/store';
import ArtistDetails from './components/molecules/ArtistDetails';
import FavoritesPanel from './components/molecules/FavoritesPanel';
import Header from './components/molecules/Header';
import EventsList from './components/molecules/EventsList';
import { selectEvents } from './app/features/eventsSlice';

const App = () => {

  // const events = useSelector(selectEvents);
  const events = 15;

  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <main className="bg-gray-200 ">
        <Header />

        <div className="pt-14 mx-auto w-3/4 min-h-screen bg-gray-200 font-sans flex">
          <div className="container mx-auto p-8 flex-1">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ArtistDetails numberOfEvents={events} />
            </motion.div>
            <div className='flex w-full justify-between'>
              <div class="w-2/3 mr-5">
                <EventsList />
              </div>

              <div class="w-1/3">
                <FavoritesPanel />
              </div>
            </div>
          </div>

          

          

        </div>
      </main>
      {/* </PersistGate> */}
    </Provider>
  );
};

export default App;
