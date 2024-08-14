import React from 'react';
import Layout from "../Layouts/Layout.jsx";
import Analyse from "../../assets/Analyse.png";
import vector from "../../assets/Vector123.png";
import a from "../../assets/a.png";
import b from "../../assets/b.png";
import c from "../../assets/c.png";
import d from "../../assets/d.png";
import e from "../../assets/e.png";
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row items-center justify-center max-w-screen-xl mx-auto p-4">
        <div className="w-full md:w-1/2 text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to the <br />
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(hsla(200, 80%, 69%, 1), hsla(269, 100%, 65%, 1))' }}>
              Elance Phantoms
            </span>
          </h1>
          <p className="text-lg">Empowering e-commerce and web development through innovation, creativity, and collaboration. Explore our projects, join our community, and let us build the future together.</p>
          <div className="mt-4 inline-block px-6 py-3 font-bold border-2 rounded-full" style={{ background: 'linear-gradient(hsla(200, 80%, 69%, 1), hsla(269, 100%, 65%, 1))' }}>
            <Link to="/contactus" className="text-white">Contact us</Link>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img src={Analyse} alt="Example" className="w-full h-auto" />
        </div>
      </div>

      {/* Our Domain Section */}
      <div className="mt-20 w-full max-w-screen-xl mx-auto p-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Domain</h2>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Card 1 */}
          <div className="flex flex-col h-[400px] items-center bg-slate-100 p-6 rounded-lg shadow-xl w-full md:w-1/3">
            <img src={vector} alt="Web Development" className="w-48 h-48 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Web Development</h3>
            <p className="text-center">Web development is the process of developing a website, from design to programming to server management.</p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col h-[467px] items-center p-6 rounded-lg shadow-xl w-full md:w-1/3" style={{ background: 'linear-gradient(hsla(200, 80%, 69%, 1), hsla(269, 100%, 65%, 1))' }}>
            <img src={a} alt="E-Commerce Solutions" className="w-48 h-48 mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-white">E-Commerce Solutions</h3>
            <p className="text-center text-white">Ecommerce or electronic commerce is the trading of goods and services online. The internet allows individuals and businesses to buy and sell an increasing amount of physical goods.</p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col h-[400px] items-center bg-slate-100 p-6 md:pb-0 pb-10 rounded-lg shadow-black w-full md:w-1/3">
            <img src={b} alt="Digital Marketing" className="w-44 h-44 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Digital Marketing</h3>
            <p className="text-center">Digital marketing encompasses all online efforts to promote and sell products or services using digital channels. It includes various strategies and tactics to reach and engage with target audiences.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:mt-20 mb-20">
          {/* Card 1 */}
          <div className="flex flex-col h-[400px] items-center bg-slate-100 p-6 mt-6 rounded-lg shadow-xl w-full md:w-1/3">
            <img src={c} alt="Freelancing" className="w-48 h-48 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Freelancing</h3>
            <p className="text-center">Freelancing involves offering services to clients without long-term commitments to any employer. Freelancers work in various fields, including writing, graphic design, web development, and marketing.</p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col h-[467px] items-center p-6 rounded-lg shadow-xl w-full md:w-1/3" style={{ background: 'linear-gradient(hsla(200, 80%, 69%, 1), hsla(269, 100%, 65%, 1))' }}>
            <img src={d} alt="Blockchain Technology" className="w-48 h-48 mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-white">Blockchain Technology</h3>
            <p className="text-center text-white">Blockchain technology is a decentralized digital ledger that records transactions across multiple computers, ensuring that records cannot be altered retroactively without changing all subsequent blocks and gaining network consensus.</p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col h-[400px] items-center bg-slate-100 p-6 rounded-lg shadow-black w-full md:w-1/3">
            <img src={e} alt="Digital Marketing" className="w-48 h-48 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Digital Marketing</h3>
            <p className="text-center">Digital marketing encompasses all online efforts to promote and sell products or services using digital channels. It includes various strategies and tactics to reach and engage with target audiences.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
