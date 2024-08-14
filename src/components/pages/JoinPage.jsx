import { useState } from 'react';
import axios from 'axios';
import Layout from "../Layouts/Layout";
import join1 from "../../assets/join.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JoinPage = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    department: '',
    vision: '',
  });
  const [errors, setErrors] = useState({});

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!selectedOption) errors.selectedOption = 'Please select an option.';
    if (!selectedRole) errors.selectedRole = 'Please select a role.';
    if (!formData.name) errors.name = 'Full name is required.';
    if (!formData.email) errors.email = 'Email is required.';
    if (!formData.whatsapp) errors.whatsapp = 'Whatsapp number is required.';
    if (!formData.department) errors.department = 'Department is required.';
    if (!formData.vision) errors.vision = 'Vision is required.';

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:8000/api/v1/form/submit-form', {
          selectedOption,
          name: formData.name,
          email: formData.email,
          whatsapp: formData.whatsapp,
          department: formData.department,
          selectedRole,
          vision: formData.vision,
        });

        if (response.status === 201) {
          toast.success('Form submitted successfully!');
          setTimeout(() => {
            window.location.reload(); // Refresh the page after 2 seconds
          }, 2000);
        } else {
          toast.error(`Error: ${response.data.message}`);
        }
      } catch (error) {
        toast.error(`Error: ${error.response?.data?.message || error.message}`);
        console.error(error);
      }
    }
  };

  const buttonStyle = {
    background: 'linear-gradient(hsla(200, 80%, 69%, 1), hsla(269, 100%, 65%, 1))',
    border: 'none',
    color: 'white',
    padding: '0.75rem 3rem',
    borderRadius: '9999px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginTop: '1rem',
    marginBottom: '3rem'
  };

  return (
    <Layout>
      <ToastContainer />
      <div className="flex items-center justify-center mt-0 mb-12">
        <div className="rounded-lg text-center w-full pt-3" style={{ background: "linear-gradient(hsla(200, 80%, 69%, 1), hsla(269, 100%, 65%, 1))", height: '433px' }}>
          <h1 className="text-white font-extrabold text-3xl pt-12 mb-5">Become Part of <br />our team!!</h1>
          <img src={join1} alt="Placeholder Image" className="mx-auto mb-0 pb-0" />
        </div>
      </div>
      <div className="px-4 md:px-0">
        <h1 className="font-bold mb-10 text-3xl text-center">Fill this form</h1>
        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="border border-black p-4 rounded-2xl mx-auto" style={{ width: '90%' }}>
            <h2 className="pl-4 font-bold">You are applying for?</h2>
            <div className="flex flex-wrap">
              {['Head', 'Co-Head', 'General Member'].map((option) => (
                <label
                  key={option}
                  className={`border border-black p-2 m-2 text-center rounded-full flex items-center justify-center cursor-pointer ${selectedOption === option ? 'bg-black text-white' : ''}`}
                >
                  <input
                    type="radio"
                    name="applyingFor"
                    value={option}
                    checked={selectedOption === option}
                    onChange={handleOptionChange}
                    className="hidden"
                  />
                  {option}
                </label>
              ))}
              {errors.selectedOption && <p className="text-red-500 text-sm mt-2">{errors.selectedOption}</p>}
            </div>
          </div>

          <div className="border border-black p-4 rounded-2xl mx-auto" style={{ width: '90%' }}>
            <h2 className="pl-4 font-bold">Full Name</h2>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="p-2 mb-4 outline-none border-transparent w-full sm:w-1/2"
              style={{ borderBottom: "1px solid black" }}
              placeholder="Enter your name"
              required
            />
            {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
          </div>

          <div className="border border-black p-4 rounded-2xl mx-auto" style={{ width: '90%' }}>
            <h2 className="pl-4 font-bold">Email</h2>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="p-2 mb-4 outline-none border-transparent w-full sm:w-1/2"
              style={{ borderBottom: "1px solid black" }}
              placeholder="Enter your email"
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
          </div>

          <div className="border border-black p-4 rounded-2xl mx-auto" style={{ width: '90%' }}>
            <h2 className="pl-4 font-bold">Whatsapp no</h2>
            <input
              type="number"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleInputChange}
              className="p-2 mb-4 outline-none border-transparent w-full sm:w-1/2"
              style={{ borderBottom: "1px solid black" }}
              placeholder="Enter your whatsapp num"
              required
            />
            {errors.whatsapp && <p className="text-red-500 text-sm mt-2">{errors.whatsapp}</p>}
          </div>

          <div className="border border-black p-4 rounded-2xl mx-auto" style={{ width: '90%' }}>
            <h2 className="pl-4 font-bold">Department</h2>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              className="p-2 mb-4 outline-none border-transparent w-full sm:w-1/2"
              style={{ borderBottom: "1px solid black" }}
              placeholder="Enter your department"
              required
            />
            {errors.department && <p className="text-red-500 text-sm mt-2">{errors.department}</p>}
          </div>

          <div className="border border-black p-4 rounded-2xl mx-auto" style={{ width: '90%' }}>
            <h2 className="pl-4 font-bold">You Want to be</h2>
            <div className="grid grid-cols-2 gap-3 mt-6 ml-4">
              {['President& Vice', 'Media', 'Graphics', 'Marketing', 'Photography', 'Management', 'E-commerce', 'Web-Development', 'Blockchain', 'Freelancing'].map((role, index) => (
                <div className="flex items-center" key={index}>
                  <input
                    type="radio"
                    id={`option${index + 1}`}
                    name="role"
                    value={role}
                    checked={selectedRole === role}
                    onChange={handleRoleChange}
                    className="mr-2"
                  />
                  <label htmlFor={`option${index + 1}`}>{role}</label>
                </div>
              ))}
              {errors.selectedRole && <p className="text-red-500 text-sm mt-2">{errors.selectedRole}</p>}
            </div>
          </div>

          <div className="border border-black p-4 rounded-2xl mx-auto" style={{ width: '90%' }}>
            <h2 className="pl-4 font-bold">Vision</h2>
            <input
              type="text"
              name="vision"
              value={formData.vision}
              onChange={handleInputChange}
              className="p-2 mb-4 outline-none border-transparent w-full sm:w-1/2"
              style={{ borderBottom: "1px solid black" }}
              placeholder="Enter your vision"
              required
            />
            {errors.vision && <p className="text-red-500 text-sm mt-2">{errors.vision}</p>}
          </div>

          <div className="text-center">
            <button type="submit" style={buttonStyle}>Submit</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default JoinPage;
