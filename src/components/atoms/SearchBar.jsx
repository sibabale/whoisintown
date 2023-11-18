// src/components/SearchBar.js

import React from 'react';
import { motion } from 'framer-motion';
import SearchInput from './SearchInput';
import ArtistDetails from '../molecules/ArtistDetails';
import EventsList from '../molecules/EventsList';

const SearchBar = () => {
  return (
    <div>
      <SearchInput />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ArtistDetails />
      </motion.div>

    </div>
  );
};

export default SearchBar;
