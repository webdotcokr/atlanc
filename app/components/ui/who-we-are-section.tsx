import React from 'react';
import SectionTitle from './section-title';
import StatisticCard from './statistic-card';
import ReviewInfo from './review-info';

export interface WhoWeAreSectionProps {
  className?: string;
}

export default function WhoWeAreSection({
  className = ""
}: WhoWeAreSectionProps) {
  return (
    <div className={`bg-white relative w-full min-h-screen p-8 ${className}`}>
      {/* Section Title - 중앙 */}
      <div className="flex justify-center items-center mb-16">
        <SectionTitle />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Statistic Card - 왼쪽 */}
        <div className="flex justify-center lg:justify-start">
          <StatisticCard />
        </div>

        {/* 중앙 공간 */}
        <div className="hidden lg:block"></div>

        {/* Review Info - 오른쪽 */}
        <div className="flex justify-center lg:justify-end">
          <ReviewInfo />
        </div>
      </div>
    </div>
  );
}