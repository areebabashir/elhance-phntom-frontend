import Layout from "../Layouts/Layout"
import safi from "../../assets/safii.jpeg"
import sarmad from "../../assets/sarmad.jpeg"
import atiya from "../../assets/attiya.png"
import aliyan from "../../assets/aliyan.jpeg"
import hafsa from "../../assets/hafsa.jpeg"
import shahyar from "../../assets/shahyar.jpeg"
import haroon from "../../assets/haroon.jpeg"
import daniyal from "../../assets/daniyal.jpeg"
import talha from "../../assets/talha.jpeg"
import shamir from "../../assets/shamir.jpeg"
import fatima from "../../assets/fatima.jpg"
import sharjeel from "../../assets/sharjeel.jpeg"
import gulzareen from "../../assets/gulzareen.jpeg"
import areeba from "../../assets/areeba.png"

const Cabinet = () => {
  const gradientStyle = {
    background: 'linear-gradient(hsla(269, 100%, 65%, 1), hsla(200, 80%, 69%, 1))',
    height: '400px',
  };

  const cardStyle = {
    background: 'white',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.25)',
  };

  const members = [
    { img: sarmad, name: "Sarmad Mirza", title: "Vice President" },
    { img: safi, name: "M.Saffi-Ul-Haq", title: "President" },
    { img: atiya, name: "Attia batool", title: "Vice President" },
    { img: aliyan, name: "Aliyan Ilyas", title: "Finance Secretary" },
    { img: hafsa, name: "Hafsa Faraz", title: "General Secretary" },
    { img: shahyar, name: "Shehryar", title: "Joint Secretary" },
    { img: haroon, name: "Haroon", title: "E-commerce Head" },
    { img: daniyal, name: "Daniyal Mehran", title: "Management Head" },
    { img: talha, name: "Talha Iqbal", title: "Marketing Head" },
    { img: shamir, name: "Shahmir Hassan", title: "Blockchain Head" },
    { img: fatima, name: "Fatima Nadeem", title: "Graphics Head" },
    { img: sharjeel, name: "Sharjeel", title: "Freelancing Head" },
    { img: gulzareen, name: "Gulzareen", title: "Photography Head" },
    { img: areeba, name: "Areeba Bashir", title: "Web Head" },
  ];

  return (
    <Layout>
      <div className="w-full text-white text-center text-5xl font-bold flex items-center justify-center " style={gradientStyle}>
        <h1>
          Welcome, Meet <br /> Our Team!
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-center m-auto   pb-20 gap-6 w-full" style={{ width: '80%' }}>
        {members.map((member, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/4 p-4 md:mt-12">
            <div className="bg-white shadow-2xl text-center text-lg rounded-lg p-8" style={cardStyle}>
              <div className="relative h-12">
                <img
                  src={member.img}
                  alt="Profile"
                  className="w-40 h-40 object-cover object-top  rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <div className="pt-20">
                <div className="text-4xl font-bold text-black">{member.name}</div>
                <h3
                  className="mt-4 text-white md:pl-4 md:pr-4 rounded-3xl   "
                  style={{
                    background: 'linear-gradient(hsla(200, 80%, 69%, 1), hsla(269, 100%, 65%, 1))',
                  }}
                >
                  {member.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Cabinet;
