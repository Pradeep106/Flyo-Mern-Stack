import React, { useState } from 'react';

const FlightSeatBooking = ({ rows = ['A', 'B', 'C', 'D'], seatsPerRow = 6 }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seat) => {
    const index = selectedSeats.indexOf(seat);
    if (index === -1) {
      setSelectedSeats([...selectedSeats, seat]);
    } else {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    }
  };

  const renderSeat = (seat) => {
    const isSelected = selectedSeats.includes(seat);
    return (
      <div
        key={seat}
        className={`seat ${isSelected ? 'bg-blue-500' : 'bg-blue-200'} hover:bg-blue-300 cursor-pointer p-5 rounded-sm`}
        onClick={() => handleSeatClick(seat)}
      >
        {seat}
      </div>
    );
  };

  const renderRow = (row) => {
    const seats = [];
    for (let i = 1; i <= seatsPerRow; i++) {
      seats.push(renderSeat(`${row}${i}`));
    }
    return (
      <div key={row} className="flex justify-center  space-x-2">
        {seats}
      </div>
    );
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Flight Seat Booking</h2>
      {rows.map(row => (
        <div key={row} className='border'>
          {renderRow(row)}
        </div>
      ))}
      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2">Selected Seats</h3>
        <ul className="list-disc pl-6">
          {selectedSeats.map(seat => (
            <li key={seat} 
            className='border'>{seat}</li>
          ))}
        </ul>
      </div>
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={() => alert(`Booking seats: ${selectedSeats.join(', ')}`)}
      >
        Book Seats
      </button>
    </div>
  );
};

export default FlightSeatBooking;
