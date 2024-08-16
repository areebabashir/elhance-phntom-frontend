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
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!name.trim()) errors.name = 'Name is required.';
    if (!email.trim()) errors.email = 'Email is required.';
    if (!message.trim()) errors.message = 'Message is required.';

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:8000/api/v1/contact/contactus', {
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        });

        if (response.status === 201) {
          toast.success('Message sent successfully!');
          // Clear form fields
          setName('');
          setEmail('');
          setMessage('');
        }
      } catch (error) {
        toast.error(`Error: ${error.response?.data?.message || error.message}`);
      }
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
                {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
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
                {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
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
                {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
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