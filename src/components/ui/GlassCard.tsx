import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = "" }) => {
  return (
    <div className={`py-6 px-8 ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;
