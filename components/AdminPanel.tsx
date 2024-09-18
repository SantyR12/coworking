"use client";

import React, { useState } from 'react';
import BookingManager from './BookingManager';

interface Booking {
  id: number;
  name: string;
  date: string;
  time: string;
  details: string;
}

const AdminPanel: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  const addBooking = (newBooking: Booking) => {
    if (bookings.length >= 5) {
      alert('No se pueden agregar más de 5 citas.');
      return;
    }

    setBookings([...bookings, newBooking]);
  };

  const removeBooking = (id: number) => {
    setBookings(bookings.filter(booking => booking.id !== id));
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-lg font-bold mb-4 text-black"></h2>

      <BookingManager 
        bookings={bookings}
        addBooking={addBooking}
        removeBooking={removeBooking}
      />

     
    </div>
  );
};

export default AdminPanel;
