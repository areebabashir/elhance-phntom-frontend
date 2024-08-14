import Layout from "../Layouts/Layout";
import mission from "../../assets/mission.png";
import fawad from "../../assets/fawad.hussain.jpg"
const Aboutus = () => {
  return (
    <Layout>
      <div
        className="flex flex-col items-center justify-center m-auto  pt-24 max-w-screen-xl  mx-auto p-4 "
  
      >
        <div
          className="text-center w-full rounded-lg"
          style={{ border: "6px solid black" }}
        >
          <h1
            className="text-7xl font-bold text-white p-6  md:ml-32 mr-4 ml-4 md:mr-32 rounded-2xl mt-6 mb-6"
            style={{
              background:
                "linear-gradient(hsla(200, 80%, 69%, 1), hsla(269, 100%, 65%, 1))",
            }}
          >
            About Us
          </h1>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
          <h1 className="text-3xl font-bold mt-10">Who are we?</h1>
          <p className="mt-2 text-lg">
            Welcome to Elance Phantoms, the pioneering e-commerce society at UET
            Taxila! Established with a vision to bridge the gap between academic
            knowledge and real-world business applications, we strive to empower
            students with the skills and insights necessary to thrive in the
            dynamic world of e-commerce.{" "}
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src={mission} className=" " />
        </div>



        <div className="w-full border-2  p-4 mb-10">
          <h1 className="text-3xl font-bold text-center mb-4">
           Advisor:
          </h1>
          <div className="flex md:flex-row flex-col items-center">
            {/* Left Div */}
            <div className="md:w-[60%] w-full ">
              <p className="text-lg pt-10 pl-10">
                Elance Phantoms thrives under the expert guidance of our
                dedicated advisor, whose strategic insights and unwavering
                support propel us to explore new frontiers in e-commerce. With
                their mentorship..
              </p>
            </div>
           <div className="md:w-[40%] md:pl-20 flex w-full flex-col items-center mt-10">
            <div className="w-36 h-36">
              <img
                src={fawad}
                alt="Dr. Fawad Hussain"
                className="w-full h-full rounded-full object-cover" style={{ border: "1px solid black" }}
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl bg-sky-500 rounded-full p-2 font-semibold " >Dr. Fawad Hussain</h3>
            </div>
          </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Aboutus;
