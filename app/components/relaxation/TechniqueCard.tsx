import React from 'react';

interface TechniqueCardProps {
  title: string;
  description: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
}

const TechniqueCard: React.FC<TechniqueCardProps> = ({ title, description, bgColor, borderColor, textColor }) => {
  return (
    <div className={`p-4 ${bgColor} rounded-lg ${borderColor}`}>
      <p className={textColor}>{title}</p>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default TechniqueCard;