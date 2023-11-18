
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DateFormat from '../../utils/DateFormat';
import EventDetails from './EventDetails';
import { selectSearchTerm } from '../../app/features/searchSlice';
import { selectEvents, addToFavorites } from '../../app/features/eventsSlice';

const EventsList = () => {
  const events = useSelector(selectEvents);
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);
  const [selectedEvent, setSelectedEvent] = useState(null);


  const addToFavoritesHandler = (eventId) => {
    dispatch(addToFavorites(eventId));
  };

  const showEventDetails = (eventId) => {
    setSelectedEvent(eventId);
  };

  const closeEventDetails = () => {
    setSelectedEvent(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 bg-white min-h-60"
      style={{minHeight: "316px"}}
    >
      <h3 className="text-lg font-semibold mb-4">Events</h3>
      <ul className="">
        {events.map((event, index) => (
          <div key={index}>
            <li
              className="p-4 border-b border-gray-400 mb-2"
            >
              <motion.div
                
                whileHover={{ scale: 1.03 }}
                className='w-full flex justify-between items-center'
              >
                <div className="flex items-center">
                  <div className="mr-5">
                    <small className="text-sm text-teal-500">{DateFormat(event.datetime, 'short', true).month}</small>
                    <p className="text-lg font-bold text-teal-500">
                      { DateFormat(event.datetime, 'short', true).day < 10 ? `0${DateFormat(event.datetime, 'short', true).day}`: DateFormat(event.datetime, 'short', true).day }
                    </p>
                  </div>
                  <div>
                    <p className="text-md font-semibold">{event.venue.name}</p>
                    <small className="text-sm text-gray-400">{event.venue.location}</small>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => addToFavoritesHandler(event.id)}
                    className="mr-4"
                  >
                    <span className="material-symbols-outlined text-red-500">
                      favorite
                    </span>
                  </button>
                  <button
                    onClick={() => showEventDetails(event.id)}
                    className="text-white py-2 px-4 rounded-full bg-teal-500"
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            </li>
            {selectedEvent && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <EventDetails eventId={selectedEvent} onClose={closeEventDetails} />
              </motion.div>
            )}
          </div>
        ))}
      </ul>

      <div>
        {events.length <= 0 && (
          <div className="h-60 w-full border border-dashed rounded-lg flex flex-col justify-center">
              <h5 className='text-center text-gray-400'>{searchTerm ? 'This artist has no events':  'To view events, search for an artist'}.</h5>
          </div>
        )}
      </div>

      
    </motion.div>
  );
};

export default EventsList;
