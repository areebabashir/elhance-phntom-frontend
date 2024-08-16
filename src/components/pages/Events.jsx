import React, { useEffect, useState } from 'react';
import Layout from "../Layouts/Layout";
import axios from 'axios';
import { Link } from 'react-router-dom';

// Utility function to truncate text
const truncateText = (text, wordLimit) => {
  const words = text.split(' ');
  if (words.length <= wordLimit) {
    return text;
  }
  return words.slice(0, wordLimit).join(' ') + '...';
};

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/event/all-events');
        setEvents(response.data);
      } catch (error) {
        console.error('Failed to fetch events', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <Layout>
      <div
        className="w-full"
        style={{
          background: 'linear-gradient(hsla(200, 80%, 69%, 1), hsla(269, 100%, 65%, 1))',
          height: '300px',
        }}
      >
        <div className="flex flex-row justify-center items-center">
          {['E', 'V', 'E', 'N', 'T', 'S'].map((char, index) => (
            <p
              key={index}
              className={`text-center flex justify-center ${
                index % 2 === 0 ? 'mt-10' : 'mt-32'
              } items-center font-bold md:text-9xl text-7xl`}
              style={{
                background: 'linear-gradient(90deg, hsla(200, 100%, 35%, 1), hsla(0, 0%, 100%, 1))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {char}
            </p>
          ))}
        </div>
      </div>

      <div className="md:w-[70%] pt-20 pb-20 pl-4 pr-4 m-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {events.map((event) => (
          <div key={event._id} className="bg-white shadow-md rounded-lg overflow-hidden border border-black">
            <img src={`http://localhost:8000/${event.eventPhoto}`} className="w-full h-80 object-cover p-4" alt="Event" />
            <div className="p-4 flex flex-col ">
              <h3 className="text-xl font-semibold mb-2">{event.eventTitle}</h3>
              <p className="text-gray-700 mb-4">
                {truncateText(event.eventDescription, 15)}
              </p>
              <div className="flex justify-center w-full">
                <button
                  className="text-white px-4 py-2 rounded flex "
                  style={{
                    background: 'linear-gradient(hsla(200, 80%, 69%, 1), hsla(269, 100%, 65%, 1))',
                  }}
                >
                  <Link to={`/eventinfo/${event._id}`}>More Info</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Events;
