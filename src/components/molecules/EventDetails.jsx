
import React from 'react';
import { useSelector } from 'react-redux';
import { selectEvents } from '../../app/features/eventsSlice';
import DateFormat from '../../utils/DateFormat';
import events from '../../data/events.json';
const EventDetails = ({ eventId, onClose }) => {
  // const events = useSelector(selectEvents);
  const selectedEvent = events.find((event) => event.id === eventId);  

  if (!selectedEvent) {
    return null;
  }

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <div className="flex justify-end">
        <span className="material-symbols-outlined text-red-500"  onClick={onClose}>
          close
        </span>
      </div>
      <div className="mb-5 border-b pb-5">
        <h2 className="text-xl font-semibold mb-2">{selectedEvent.venue.name}</h2>
        <p className="text-sm text-gray-400">{DateFormat(selectedEvent.datetime, 'long')}</p>
      </div>

      <p className="text-sm text-gray-500">{selectedEvent.description}</p>

      <div>
        <h6 className='text-md border-b-4 w-fit border-teal-500 font-semibold'>Venue</h6>
      </div>
      <ul>

        <li>  
          <label className='mr-5'>Address: </label>
          <span>{selectedEvent.venue.street_address}</span>
        </li>

        <li>
          <label className='mr-5'>Location: </label>
          <span>{selectedEvent.venue.location}</span>
        </li>

        <li>
          <label className='mr-5'>Country: </label>
          <span>{selectedEvent.venue.country}</span>
        </li>

        
        <li>
          <label className='mr-5'>Postal Code: </label>
          <span>{selectedEvent.venue.postal_code}</span>
        </li>
        
        <li>
          <label className='mr-5'>Coordinates: </label>
          <span>{selectedEvent.venue.longitude} {selectedEvent.venue.latitude}</span>
        </li>
        
      </ul>

      <div className='my-5'>
        <h6 className='text-md border-b-4 w-fit border-teal-500 font-semibold'>Lineup</h6>
      </div>
      {selectedEvent.lineup.length > 0 && <ol>
        {selectedEvent.lineup.map((item, index) =>(
          <li key={index}>{item}</li>
        ))}
      </ol>}
    </div>
  );
};

export default EventDetails;
