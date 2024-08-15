import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Layout from '../Layouts/Layout';

const EventMoreinfo = () => {
  const { id } = useParams(); // Extract event ID from the URL
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/event/event/${id}`);
        console.log(response.data); // Check API response in console
        setEvent(response.data);
      } catch (error) {
        console.error('Failed to fetch event', error);
        setError('Failed to load event details.');
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]); // Dependency array includes `id`

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div> {/* Add your spinner component or custom CSS here */}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  const { eventTitle, eventDescription, speakerName, aboutSpeaker, eventPhoto, speakerPhoto, eventDate } = event;

  return (
    <Layout>
      <div className="p-6 mx-auto max-w-4xl flex flex-col items-center">
        {/* Event Section */}
        <div className="mb-8 mt-16 w-full">
          <img
            src={`http://localhost:8000/${eventPhoto}`} // Event image URL from API
            alt="Event"
            className="object-contain rounded-lg mx-auto" style={{ height: "400px" }}
          />
          <h1
            className="text-4xl font-bold mt-6 mb-6 text-black"
            style={{ textAlign: "left" }}
          >
            {eventTitle} {/* Event title from API */}
          </h1>
          {eventDate && (
            <p className="text-gray-500 text-md mb-2" style={{ textAlign: "left" }}>
              {new Date(eventDate).toLocaleDateString()} {/* Event date from API */}
            </p>
          )}
          <p className="text-gray-700 text-xl" style={{ textAlign: "left" }}>
            {eventDescription} {/* Event description from API */}
          </p>
        </div>

        {/* Speaker Section */}
        <div className="mb-8 w-full">
          <img
            src={`http://localhost:8000/${speakerPhoto}`} // Speaker image URL from API
            alt="Speaker"
            className="h-96 object-cover rounded-lg mx-auto"
          />
          <h1
            className="text-4xl font-bold mt-4 mb-2 text-black"
            style={{ textAlign: "left" }}
          >
            {speakerName} {/* Speaker name from API */}
          </h1>
          <p className="text-gray-700 text-xl mt-4" style={{ textAlign: "left" }}>
            {aboutSpeaker} {/* About speaker from API */}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default EventMoreinfo;
