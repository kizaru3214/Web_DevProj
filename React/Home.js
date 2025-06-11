import React from 'react'
import {Link} from 'react-router-dom'
import BannerImage from '../assets/Pizza1.png'
import '../styles/Home.css'
function Home() {
  return (
    <div className='home'  style={{ backgroundImage: `url(${BannerImage})`}}>
       
      <div className='headerContainer'>
        <h1>Lynsy's Pizzeria</h1>
        <p>OREO PIZZA ON TOP</p>
        <Link to='/menu'>
        <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  )
}

export default Home

