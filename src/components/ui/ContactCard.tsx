import React from 'react';
import { ContactCardProps } from '../../types';

export const ContactCard = ({ icon, title, info }: ContactCardProps) => {
  return (
    <div className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
      {icon}
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-400">{info}</p>
    </div>
  );
};
