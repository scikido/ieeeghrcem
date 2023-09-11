import React from "react";
import { useParams } from "react-router-dom";

import eventsData from "../eventData.js";

function EventPage() {
  const { id } = useParams(); // Get the event ID from the URL
  const event = eventsData.find((event) => event.id === parseInt(id)); // Find the event with the matching ID
  console.log(event);

  if (!event) {
    // If event is not found, display a message
    return <div className="text-center mt-8">Event not found</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
      <p className="text-gray-600 mb-4">{event.date}</p>
      <p className="mb-8">{event.details}</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {event.images.map(
          (image, index) => (
            // eslint-disable-next-line
            console.log(image),
            (
              <img
                key={index}
                src={image} // eslint-disable-next-line
                alt={`Event ${event.id} Image ${index + 1}`}
                className="w-full rounded-lg"
              />
            )
          )
        )}
      </div>
    </div>
  );
}

export default EventPage;
