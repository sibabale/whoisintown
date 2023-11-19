import React from 'react'

import SearchInput from '../atoms/SearchInput'

const Header = () => {

  return(
    <header className="p-5 border-b border-gray-300 flex items-center fixed bg-white w-full">
      <h4 className='w-1/5 font-bold'>Who's In Town</h4>
      <div className="flex w-4/5">
        <SearchInput/>
      </div>
    </header>
  )
}

export default Header