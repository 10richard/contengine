"use client";

import { InlineWidget } from "react-calendly";

const CalendlyBooking = () => {
  return (
    <div
      id="calendlybooking"
      className="text-center flex flex-col gap-10 pt-20 pb-28 bg-[#F7F7F7]"
    >
      <h2 className="text-5xl font-medium">Ready to Scale?</h2>

      <InlineWidget
        styles={{ height: "750px" }}
        url="https://calendly.com/contengine/growth-consultation?primary_color=4f7492"
      />
    </div>
  );
};

export default CalendlyBooking;
