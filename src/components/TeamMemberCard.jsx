import React from 'react';

const TeamMemberCard = ({ image, name, title }) => {
  return (
    <div className="max-w-xs bg-white shadow-2xl text-center text-lg rounded-lg p-8 mb-8">
      <div className="relative h-32">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 object-cover object-top rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="mt-16">
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
