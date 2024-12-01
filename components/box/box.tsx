import React, { ReactNode } from 'react';

interface BoxProps {
  children: ReactNode;
  className?: string; // Optional className for customization
}

const Box: React.FC<BoxProps> = ({ children, className }) => {
  return (
    <div className={`max-w-screen-lg mx-auto pb-10  -mt-12 md:-mt-24 ${className ?? ''}`}>
      <div className="w-full bg-white h-full p-4 border shadow-sm rounded-md">
        {children}
      </div>
    </div>
  );
};

export default Box;
