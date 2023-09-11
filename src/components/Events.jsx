import React from "react";
import { Link } from "react-router-dom";
import eventsData from "../eventData"; // Import your event data module

function Event() {
  return (
    <section id="events">
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4">Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {eventsData.map((event) => (
            <div key={event.id} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
              <p className="text-gray-600 mb-2">{event.date}</p>
              <p className="mb-4">{event.details.substring(0, 100)}...</p>
              <Link to={`/events/${event.id}`}>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  View More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Event;
