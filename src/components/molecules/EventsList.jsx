// src/components/EventsList.js

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectEvents, addToFavorites } from '../../app/features/eventsSlice';
import { motion } from 'framer-motion';
import EventDetails from './EventDetails';
import events from '../../data/events.json';
import DateFormat from '../../utils/DateFormat';

const EventsList = () => {
  // const events = useSelector(selectEvents);
  const dispatch = useDispatch();
  // const [selectedEvent, setSelectedEvent] = useState(null);
  const setSelectedEvent  = null;
  const selectedEvent  = events[0].id;

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
      className="p-3 bg-white"
    >
      <h3 className="text-lg font-semibold mb-2">Events</h3>
      <ul className="">
        {events.map((event, index) => (
          <li
            key={index}
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
        ))}
      </ul>

      {selectedEvent && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <EventDetails eventId={selectedEvent} onClose={closeEventDetails} />
        </motion.div>
      )}
    </motion.div>
  );
};

export default EventsList;
