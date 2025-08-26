import React from 'react';

export interface TagLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function TagLabel({
  children,
  className = ""
}: TagLabelProps) {
  return (
    <div className={`bg-white border border-gray-200 px-2 py-1 rounded-full inline-flex items-center justify-center ${className}`}>
      <div className="font-normal text-xs text-primary tracking-tight">
        <p className="leading-relaxed whitespace-pre">{children}</p>
      </div>
    </div>
  );
}