import React from 'react'

import SearchInput from '../atoms/SearchInput'

const Header = () => {

  return(
    <header className="p-5 border-b border-gray-300 flex items-center fixed bg-white w-full">
      <h4 className='w-1/5 font-bold'>Who's In Town</h4>
      <div className="flex w-4/5">
        <SearchInput/>
      </div>
      <div className="flex">
        <button className="p-3 text-md text-teal-500 font-semibold">
          Signup
        </button>
        <button className="p-3">
          Login
        </button>
      </div>
    </header>
  )
}

export default Header