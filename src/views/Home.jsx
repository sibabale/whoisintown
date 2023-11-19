import {useEffect} from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import ConcertImage from '../assets/nicholas-green-nPz8akkUmDI-unsplash.jpeg';
import {ReactComponent as Logo} from '../assets/logo.svg';

export const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };

useEffect(() => {
  if (isAuthenticated){
    return navigate("/dashboard");
  } else {
    return navigate("/");
  }
},[isAuthenticated]);

  return(
    <div 
    >
    <div className='flex'>

      <div className='w-1/2 p-5' >

        <Logo className='w-40' />
        <div className='h-full flex flex-col justify-center'>
          <h1 className='text-6xl font-bold'>Discover the Beat, <br /> Feel the Vibes</h1>
          <p>Unleash your ultimate concert experience and find out <span className='text-teal-500 font-bold'>Who's in Town</span>.</p>

          <div className='mt-5'>
            <button 
              onClick={handleLogin}
              className='bg-teal-500 py-2 px-4 text-white rounded-full'>
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className='h-screen w-1/2 bg-cover' style={{backgroundImage: `url(${ConcertImage})`}}>
        <div className='w-full h-full' style={{backgroundColor: '#0080807a'}}></div>
      </div>
    </div>

    </div>
  )
}

export default Home