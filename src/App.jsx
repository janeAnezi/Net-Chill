import React from 'react';
import Banner from './Components/Banner';
import './index.css';
import SearchBox from './Components/SearchBox';

function App() {
  

  return (
    <>
      <div className='text-white w-full'>
        <Banner />
        <div className='absolute -top-1 right-5'>
          <SearchBox />
        </div>
        
        
      </div>
    </>
  )
}

export default App
