import React from 'react'
// import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Navbar from './Navbar';
import NewsArea from './NewsArea';


const Home = () => {
  return (
    <div>
      
        <Navbar/>
        <NewsArea/>
    </div>
  )
}

export default Home
