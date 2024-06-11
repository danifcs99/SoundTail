import React from 'react';
import Header from './Header';
import SongList from './SongList';

function Home() {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center bg-primary'>
      <Header />
      <SongList />
    </div>
  )
}

export default Home