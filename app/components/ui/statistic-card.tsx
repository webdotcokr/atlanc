import React from 'react';

export interface StatisticCardProps {
  label?: string;
  value?: string;
  className?: string;
}

export default function StatisticCard({
  label = "평균 고객 만족도",
  value = "98%",
  className = ""
}: StatisticCardProps) {
  return (
    <div className={`flex flex-col items-end text-right text-primary ${className}`}>
      <div className="font-semibold text-xl tracking-tight w-full">
        <p className="leading-snug">{label}</p>
      </div>
      <div className="font-semibold italic text-7xl tracking-tight w-full">
        <p className="leading-normal">{value}</p>
      </div>
    </div>
  );
}