import React, { useState } from 'react';

interface Booking {
  id: number;
  name: string;
  date: string;
  time: string;
  details: string;
}

interface BookingManagerProps {
  bookings: Booking[];
  addBooking: (booking: Booking) => void;
  removeBooking: (id: number) => void;
}

const BookingManager: React.FC<BookingManagerProps> = ({ bookings, addBooking, removeBooking }) => {
  const [name, setName] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [details, setDetails] = useState<string>('');

  const handleAddBooking = () => {
    if (!name || !date || !time || !details) {
      alert('Por favor completa todos los campos.');
      return;
    }

    if (bookings.length >= 5) {
      alert('No se pueden agregar más de 5 citas.');
      return;
    }

    const newBooking: Booking = {
      id: bookings.length > 0 ? Math.max(...bookings.map(b => b.id)) + 1 : 1,
      name,
      date,
      time,
      details,
    };

    addBooking(newBooking);
    setName('');
    setDate('');
    setTime('');
    setDetails('');
  };

  return (
    <section className="p-9 max-w-md mx-auto bg-cian shadow-md rounded">
      <h2 className="text-lg font-bold mb-4 text-black">Citas para Psiquiatria </h2>

      <div className="mb-4">
        <label className="block mb-2">
          <span className="text-black">Nombre</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input mt-1 block w-full bg-grisClaro border-coral text-black"
            required
          />
        </label>

        <label className="block mb-2">
          <span className="text-black">Fecha</span>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="form-input mt-1 block w-full bg-grisClaro border-coral text-black"
            required
          />
        </label>

        <label className="block mb-2">
          <span className="text-black">Hora</span>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="form-input mt-1 block w-full bg-grisClaro border-coral text-black"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-black">Detalles de la Cita</span>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="form-textarea mt-1 block w-full bg-grisClaro border-coral text-black"
          ></textarea>
        </label>

        <button
          onClick={handleAddBooking}
          className="w-full bg-blue text-white py-2 rounded hover:bg-azulOscuro"
        >
          Agregar Cita
        </button>
      </div>

      <section>
        <ul>
          {bookings.map(booking => (
            <li key={booking.id} className="border-b py-2 flex justify-between items-center">
              <div>
                <p><strong>Nombre:</strong> {booking.name}</p>
                <p><strong>Fecha:</strong> {booking.date}</p>
                <p><strong>Hora:</strong> {booking.time}</p>
                <p><strong>Detalles:</strong> {booking.details}</p>
              </div>
              <button
                onClick={() => removeBooking(booking.id)}
                className="ml-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default BookingManager;