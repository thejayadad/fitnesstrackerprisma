import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 border">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-2xl font-bold">{value}</p>
      {description && <p className="text-sm text-gray-500">{description}</p>}
    </div>
  );
};

export default StatCard;
