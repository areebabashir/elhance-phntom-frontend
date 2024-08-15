// TeamMemberCard.js
import React from 'react';

const TeamMemberCard = ({ image, name, title }) => {
  const cardStyle = {
    background: 'white',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.25)',
  };

  return (
    <div className="max-w-xs mx-auto md:pt-0 pt-10 bg-white shadow-2xl text-center text-lg rounded-lg p-8" style={cardStyle}>
      <div className="relative h-12">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 object-cover object-top rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="p-8">
        <div className="text-2xl font-bold text-black">{name}</div>
        <h3
          className="mt-4 text-white pl-4 pr-4 rounded-3xl"
          style={{
            background: 'linear-gradient(hsla(200, 80%, 69%, 1), hsla(269, 100%, 65%, 1))',
          }}
        >
          {title}
        </h3>
      </div>
    </div>
  );
};

export default TeamMemberCard;
