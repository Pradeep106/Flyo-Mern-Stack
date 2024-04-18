import React from 'react'
import FlightBookingCard from '../components/FlightBookingCard'
import Sidebar from '../components/Sidebar'

const FlightSearch = () => {
  return (
    <div className='flex gap-5'>
    <Sidebar/>
    <FlightBookingCard/>
      
    </div>
  )
}

export default FlightSearch
