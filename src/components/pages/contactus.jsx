import React, { useState } from 'react';
import Layout from "../Layouts/Layout";
import contact from '../../assets/conatct.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/v1/contact/contactus', {
        name,
        email,
        message,
      });

      if (response.status === 201) {
        toast.success('Message sent successfully!');
        // Clear form fields
        setName('');
        setEmail('');
        setMessage('');
      }
    } catch (error) {
      toast.error(`Error: ${error.response.data.message}`);
    }
  };

  return (
    <Layout>
      <ToastContainer />
      <div className="min-h-screen flex items-center w-full">
        <div className="container mx-auto flex flex-col md:flex-row items-center p-16" style={{
          background: "linear-gradient(hsla(200, 80%, 69%, 1), hsla(269, 100%, 65%, 1))",
        }}>
          {/* Image on the left */}
          <div className="w-full text-center md:w-1/3 flex justify-center items-center mb-6 md:mb-0">
            <img src={contact} alt="Contact" className="inline-block w-96" />
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-2/3 p-8 rounded-lg md:pr-20">
            <h2 className="text-4xl text-white font-bold mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-6 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}


export default ContactUs;