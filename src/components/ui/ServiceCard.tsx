import React from 'react';
import { memo } from 'react';
import { ServiceCardProps } from '../../types';

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        {React.cloneElement(icon as any, { className: "w-6 h-6 text-white" })}
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default memo(ServiceCard);
