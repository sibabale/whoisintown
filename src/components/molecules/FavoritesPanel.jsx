
import React from 'react';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';

import ImagePlaceholder from '../../assets/avatar-placeholder.png';
import { selectFavorites, removeFromFavorites } from '../../app/features/eventsSlice';

const FavoritesPanel = () => {
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  const removeFromFavoritesHandler = (eventId) => {
    dispatch(removeFromFavorites(eventId));
  };

  const formatTimestamp = (timestamp) => {
    const options = {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
  
    return new Date(timestamp).toLocaleString('en-US', options);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      className="bg-white w-full p-4 overflow-y-auto  min-h-full"
      style={{minHeight: "316px"}}
    >
      <h2 className="text-xl font-semibold mb-4">Favorites</h2>
      <ul>
        {favorites.map((event) => (
          <motion.li
            key={event.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 1 }}
            className="mb-2 bg-white p-4 rounded shadow-md flex justify-between items-center"
          >
            <img src={event.artist ? event.artist.thumb_url :ImagePlaceholder} alt='' className='h-10 rounded-full'/>
            <div>
              <p className="text-md   font-semibold">{event.venue.name}</p>
              <small className="text-sm text-gray-400">{formatTimestamp(event.datetime)}</small>
            </div>
            <button
              className="text-red-500 hover:underline"
              onClick={() => removeFromFavoritesHandler(event.id)}
            >
              <span className="material-symbols-outlined">
                delete
              </span>
            </button>
          </motion.li>
        ))}
      </ul>

      <div>
        {favorites.length <= 0 && (
          <div className="h-60 w-full border border-dashed rounded-lg flex flex-col justify-center">
              <h5 className='text-center text-gray-400'>Add favorite events</h5>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default FavoritesPanel;
