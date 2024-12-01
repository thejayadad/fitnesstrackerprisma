import React from 'react';

type Props = {
  userEmail: string;
};

const WelcomeMessage: React.FC<Props> = ({ userEmail }) => {
  return (
    <div className="space-y-2 mb-4">
      <h2 className="text-xl lg:text-2xl text-primary font-medium">
        Welcome Back 👋
      </h2>
      <p className="text-sm lg:text-base text-gray-600">
        This is your Fuel & Burn Overview <span className="text-secondary font-semibold">{userEmail}</span>
      </p>
    </div>
  );
};

export default WelcomeMessage;
