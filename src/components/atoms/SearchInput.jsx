// src/components/SearchInput.js

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setSearchTerm, selectSearchTerm } from '../../app/features/searchSlice';
import { setArtistInfo, selectArtistInfo } from '../../app/features/artistSlice';
import { setEvents, selectEvents } from '../../app/features/eventsSlice';
import { motion } from 'framer-motion';

const SearchInput = () => {
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();
  const artistInfo = useSelector(selectArtistInfo);
  const events = useSelector(selectEvents);

  const handleInputChange = (event) => {
    const { value } = event.target;
    dispatch(setSearchTerm(value));
  };

  const handleSearch = async () => {
    try {
      const artistResponse = await axios.get(
        `https://rest.bandsintown.com/v3/artists/${encodeURIComponent(searchTerm)}?app_id=YOUR_APP_ID`
      );

      dispatch(setArtistInfo(artistResponse.data));

      const eventsResponse = await axios.get(
        `https://rest.bandsintown.com/v3/artists/${encodeURIComponent(searchTerm)}/events?app_id=YOUR_APP_ID`
      );

      dispatch(setEvents(eventsResponse.data || []));
    } catch (error) {
      console.error('Error fetching data:', error);
      dispatch(setArtistInfo(null));
      dispatch(setEvents([]));
    }
  };

  useEffect(() => {
    if (searchTerm) {
      handleSearch();
    }
  }, [searchTerm]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='w-2/4'
    >
      <div className='w-full p-3 border rounded-full border-gray-300 flex'>
        <span span className="mr-5 material-symbols-outlined  text-gray-500">
          search
        </span>
        <input
          type="text"
          placeholder="Search for an artist"
          value={searchTerm}
          onChange={handleInputChange}
          className="w-full focus:outline-none bg-transparent"
        />
        
      </div>

    </motion.div>
  );
};

export default SearchInput;
