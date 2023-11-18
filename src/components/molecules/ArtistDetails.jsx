
import React from 'react';
import { useSelector } from 'react-redux';

import ImagePlaceholder from '../../assets/avatar-placeholder.png';
import { selectArtistInfo } from '../../app/features/artistSlice';
import { ReactComponent as FacebookIcon} from '../../assets/facebook-icon.svg';

const ArtistDetails = ({numberOfEvents}) => {
  const artistInfo = useSelector(selectArtistInfo);
 
  return (
    artistInfo ? (
      <section 
        className=" rounded-lg  border flex my-5 bg-center bg-cover"
        style={{backgroundImage: artistInfo.thumb_url ? `url(${artistInfo.thumb_url})`: ''}}
      >
        <img src={artistInfo.thumb_url ? artistInfo.thumb_url: ImagePlaceholder} alt={`${artistInfo.name}`} className="h-full w-1/4 rounded-l-lg"/>
        <div className="p-6 bg w-full rounded-r-lg" style={{background: "#008080e3"}}>
          <h2 className="mb-5 text-2xl font-bold mt-4 text-slate-200">{artistInfo.name}</h2>
          <small 
            className='py-1 px-4 rounded-full'
            style={{backgroundColor: "#ffffff38", color: 'wheat'}}
          >
            {numberOfEvents} Upcomig events
          </small>
          <p className='mt-3 text-slate-200'>Never miss another {artistInfo.name} concert. Get alerts about announcement, concert tickets and shows near you with a free What's In Town account.</p>
          
          <a className="mt-2 mr-5"href={artistInfo.facebook_page_url}><FacebookIcon /></a>
        </div>
      </section>
    ): (

      <div className="bg-white my-5 rounded-lg flex" style={{width: '1016px', height: '242px'}}>
        <div className="h-full w-1/4 rounded-l-lg bg-gray-300"></div>
        <div className='flex flex-col justify-center w-full ml-5 '>
          <div className="h-4 my-2 w-1/4 rounded-lg bg-gray-300"></div>
          <div className="h-4 my-2 w-11/12 rounded-lg bg-gray-300"></div>
          <div className="h-4 my-2 w-11/12 rounded-lg bg-gray-300"></div>
          <div className="h-4 my-2 w-1/4 rounded-lg bg-gray-300"></div>
        </div>
      </div>
      )
  );
};

export default ArtistDetails;
