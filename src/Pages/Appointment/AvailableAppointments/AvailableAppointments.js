import { format } from "date-fns";
import React from "react";

const AvailableAppointments = ({ selectedDate, setSelectedDate }) => {
  return (
    <section className="mt-16">
      <p className="text-secondary font-semibold text-center">
        Available Appointments on {format(selectedDate, 'PP')}
      </p>
    </section>
  );
};

export default AvailableAppointments;
