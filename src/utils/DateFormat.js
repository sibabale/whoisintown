const dateFormat = (timestamp, type, truncate = false) => {
  const options = {
    weekday:  type,
    year:  'numeric',
    month: type,
    day: 'numeric',
    hour:  'numeric',
    minute:  'numeric',
  };

  

  if (truncate) {
    return {
      day: new Date(timestamp).toLocaleString('en-US',  {day: 'numeric'} ),
      month: new Date(timestamp).toLocaleString('en-US',  {month: type} )
    }
  }

  return new Date(timestamp).toLocaleString('en-US', options );

  // return new Date(timestamp).toLocaleString('en-US', truncate ? truncateOptions : options );
};

export default dateFormat