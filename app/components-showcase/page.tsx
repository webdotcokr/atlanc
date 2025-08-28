'use client';

import React from 'react';
import {
  Header,
  BtBanner,
  SectionTitle,
  StatisticCard,
  TagLabel,
  ReviewInfo,
  WhoWeAreSection,
  ItemCard,
  DesignerCard,
  SlideArrows,
  Footer
} from '../components/ui';

export default function ComponentsShowcase() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Component */}
      <div className="mb-16">
        <Header />
      </div>

      {/* Main Content */}
      <div className="pt-20 container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">컴포넌트 쇼케이스</h1>
          <p className="text-lg text-foreground/80">프로젝트에서 사용하는 모든 UI 컴포넌트들을 한눈에 볼 수 있습니다.</p>
        </div>

        {/* Components Grid */}
        <div className="grid gap-16">
          
          {/* BT Banner */}
          <section className="border rounded-lg p-8 bg-white">
            <h2 className="text-2xl font-semibold mb-4">BT Banner</h2>
            <BtBanner />
          </section>

          {/* Section Title */}
          <section className="border rounded-lg p-8 bg-white">
            <h2 className="text-2xl font-semibold mb-4">Section Title</h2>
            <div className="grid gap-4">
              <SectionTitle>기본 섹션 제목</SectionTitle>
              <SectionTitle className="text-green-600">커스텀 색상 섹션 제목</SectionTitle>
            </div>
          </section>

          {/* Statistic Cards */}
          <section className="border rounded-lg p-8 bg-white">
            <h2 className="text-2xl font-semibold mb-4">Statistic Cards</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <StatisticCard />
              <StatisticCard label="완료된 프로젝트" value="150+" />
              <StatisticCard label="고객 리뷰 평점" value="4.9/5" />
            </div>
          </section>

          {/* Tag Labels */}
          <section className="border rounded-lg p-8 bg-white">
            <h2 className="text-2xl font-semibold mb-4">Tag Labels</h2>
            <div className="flex flex-wrap gap-3">
              <TagLabel>디자인</TagLabel>
              <TagLabel>UI/UX</TagLabel>
              <TagLabel>브랜딩</TagLabel>
              <TagLabel>웹디자인</TagLabel>
              <TagLabel>모바일 앱</TagLabel>
            </div>
          </section>

          {/* Review Info */}
          <section className="border rounded-lg p-8 bg-white">
            <h2 className="text-2xl font-semibold mb-4">Review Info</h2>
            <ReviewInfo />
          </section>

          {/* Who We Are Section */}
          <section className="border rounded-lg p-8 bg-white">
            <h2 className="text-2xl font-semibold mb-4">Who We Are Section</h2>
            <WhoWeAreSection />
          </section>

          {/* Item Card */}
          <section className="border rounded-lg p-8 bg-white">
            <h2 className="text-2xl font-semibold mb-4">Item Card</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ItemCard />
              <ItemCard />
              <ItemCard />
            </div>
          </section>

          {/* Designer Card */}
          <section className="border rounded-lg p-8 bg-white">
            <h2 className="text-2xl font-semibold mb-4">Designer Card</h2>
            <div className="grid md:grid-cols-1 gap-6">
              <DesignerCard 
                name="김디자이너"
                position="시니어 디자이너"
                image="/placeholder-designer.jpg"
                social={{
                  wonbar: "@kimdesigner",
                  instagram: "@kim_designer"
                }}
                description="10년 경력의 시니어 디자이너입니다.
브랜딩과 UI/UX 전문가로 다양한 프로젝트를 진행했습니다."
                onDetailClick={() => alert('자세히 알아보기 클릭')}
                onBookingClick={() => alert('예약하기 클릭')}
              />
            </div>
          </section>

          {/* Slide Arrows */}
          <section className="border rounded-lg p-8 bg-white">
            <h2 className="text-2xl font-semibold mb-4">Slide Arrows</h2>
            <div className="flex justify-center gap-4">
              <SlideArrows />
            </div>
          </section>

        </div>

        <div className="h-32"></div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}