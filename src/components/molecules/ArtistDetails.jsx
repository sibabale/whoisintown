
import React from 'react';
import { useSelector } from 'react-redux';

import { selectArtistInfo } from '../../app/features/artistSlice';
import artistInfo from '../../data/artist.json';
import ImagePlaceholder from "../../assets/jurica-koletic-7YVZYZeITc8-unsplash.jpg"
import { ReactComponent as FacebookIcon} from '../../assets/facebook-icon.svg';
import { ReactComponent as AmazonMusicIcon} from '../../assets/amazon-music-icon.svg';
const ArtistDetails = ({numberOfEvents}) => {
  // const artistInfo = useSelector(selectArtistInfo);

  return (
    artistInfo && (
      <section 
        className=" rounded-lg  border flex my-5 bg-center bg-cover"
        style={{backgroundImage: `url(${ImagePlaceholder})`}}
      >
        {/* <img
          src={artistInfo.image_url}
          alt={`${artistInfo.name}`}
          className="h-60 rounded-l-lg"
        /> */}
        <img src={ImagePlaceholder} alt={`${artistInfo.name}`} className="h-60 rounded-l-lg"/>
        <div className="p-6 bg w-full rounded-r-lg" style={{background: "#008080e3"}}>
          <h2 className="mb-5 text-2xl font-bold mt-4 text-slate-200">{artistInfo.name}</h2>
          <small className='py-1 px-4 rounded-full'
            style={{backgroundColor: "#ffffff38", color: 'wheat'}}
          >{numberOfEvents} Upcomig events</small>
          <p className='mt-3 text-slate-200'>Never miss another {artistInfo.name} concert. Get alerts about announcement, concert tickets and shows near you with a free What's In Town account.</p>
          <div className='mt-2 flex'>
            <a className="mr-5"href={artistInfo.facebook_page_url}><FacebookIcon /></a>
            <a href={artistInfo.links.find(link => link.type === 'amazon').url}><AmazonMusicIcon /></a>
          </div>
        </div>
      </section>
    )
  );
};

export default ArtistDetails;
