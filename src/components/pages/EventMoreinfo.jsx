import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Layout from '../Layouts/Layout';

const EventMoreinfo = () => {
    const { id } = useParams(); // Extract event ID from the URL
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/v1/event/event/${id}`);
                console.log(response.data); // Check API response in console
                setEvent(response.data);
            } catch (error) {
                console.error('Failed to fetch event', error);
            }
        };

        fetchEvent();
    }, [id]); // Dependency array includes `id`

    // Conditional rendering
    if (!event) {
        return <div>Loading...</div>;
    }

    const { eventTitle, eventDescription, speakerName, aboutSpeaker, eventPhoto, speakerPhoto } = event;

    return (
        <Layout>
            <div className="p-6 m-auto w-{90%}">
                {/* Event Section */}
                <div className="mb-8">
                    <img
                        src={`http://localhost:8000/${eventPhoto}`} // Event image URL from API
                        alt="Event"
                        className="w-full h-96 object-cover  rounded-lg "
                    />
                    <h1
                        className="text-4xl font-bold mt-4 mb-2"
                        style={{
                            background: 'linear-gradient(90deg, rgb(0, 119, 179), rgb(255, 255, 255))',
                            WebkitBackgroundClip: 'text', 
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        {eventTitle} {/* Event title from API */}
                    </h1>
                    <p className="text-gray-700 text-lg">
                        {eventDescription} {/* Event description from API */}
                    </p>
                </div>

                {/* Speaker Section */}
                <div className="mb-8">
                    <img
                        src={`http://localhost:8000/${speakerPhoto}`} // Event image URL from API
                        alt="Event"
                        className="w-full h-96 object-cover  rounded-lg "
                    />
                    <h1
                        className="text-4xl font-bold mt-4 mb-2"
                        style={{
                            background: 'linear-gradient(90deg, rgb(0, 119, 179), rgb(255, 255, 255))',
                            WebkitBackgroundClip: 'text', 
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        {speakerName} {/* Event title from API */}
                    </h1>
                    <p className="text-gray-700 text-lg">
                        {aboutSpeaker} {/* Event description from API */}
                    </p>
                </div>
            </div>
        </Layout>
    );
}

export default EventMoreinfo;
