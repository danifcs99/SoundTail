import React from 'react';
import Header from './Header';
import SongList from './SongList';
import Footer from './footer';

function Home() {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center bg-primary'>
      <Header />
      <SongList />
      <Footer />
    </div>
  )
}

export default Home