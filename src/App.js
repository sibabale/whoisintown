import React from 'react';
import { motion } from 'framer-motion';
import {useSelector} from 'react-redux';

import Header from './components/molecules/Header';
import EventsList from './components/molecules/EventsList';
import ArtistDetails from './components/molecules/ArtistDetails';
import FavoritesPanel from './components/molecules/FavoritesPanel';
import { selectEvents } from './app/features/eventsSlice';

const App = () => {

  const events = useSelector(selectEvents);

  return (
      <main className="bg-gray-200 ">
        <Header />

        <div className="pt-14 mx-auto w-3/4 min-h-screen bg-gray-200 font-sans flex">
          <div className="container mx-auto p-8 flex-1">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='mb-10'
            >
              <ArtistDetails numberOfEvents={events.length} />
            </motion.div>
            <div className='flex w-full justify-between'>
              <div className="w-2/3 mr-5">
                <EventsList />
              </div>

              <div className="w-1/3">
                <FavoritesPanel />
              </div>
            </div>
          </div>

        </div>
      </main>
  );
};

export default App;
