import React, { useState } from 'react';

const Appointments = () => {
  const [appointments, setAppointments] = useState<{ text: string; time: string }[]>([]);
  const [newAppointment, setNewAppointment] = useState('');
  const [newTime, setNewTime] = useState('');

  const handleAddAppointment = () => {
    if (newAppointment.trim() && newTime.trim()) {
      const newAppointments = [...appointments, { text: newAppointment, time: newTime }];
      setAppointments(newAppointments);
      setNewAppointment('');
      setNewTime('');

      // Send WhatsApp reminder
      const message = `Appointment Reminder: ${newAppointment} at ${newTime}`;
      const phoneNumber = "+50498497898"; // Replace with your phone number and Honduras country code
      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');

      // Optional: Send SMS reminder (replace with actual implementation if needed)
      // const smsMessage = `Appointment Reminder: ${newAppointment} at ${newTime}`;
      // sendSMS(smsMessage, phoneNumber);
    }
  };

  return (
    <div className="appointments-container">
      <h2>📅 Appointments</h2>
      <div className="appointment-input">
        <textarea
          value={newAppointment}
          onChange={(e) => setNewAppointment(e.target.value)}
          placeholder="Enter your appointment"
        />
        <input
          type="time"
          value={newTime}
          onChange={(e) => setNewTime(e.target.value)}
        />
        <button onClick={handleAddAppointment}>Add Appointment</button>
      </div>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index}>
            <div className="appointment-text">{appointment.text}</div>
            <div className="appointment-time">{appointment.time}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Appointments;
