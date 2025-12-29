'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Stats {
  totalDesigners: number;
  sinsaDesigners: number;
  konkukDesigners: number;
  pendingInquiries: number;
  totalInquiries: number;
}

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats>({
    totalDesigners: 0,
    sinsaDesigners: 0,
    konkukDesigners: 0,
    pendingInquiries: 0,
    totalInquiries: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const [designersRes, inquiriesRes] = await Promise.all([
          fetch('/api/designers'),
          fetch('/api/inquiries'),
        ]);

        if (designersRes.ok) {
          const designersData = await designersRes.json();
          const designers = designersData.designers || [];
          setStats(prev => ({
            ...prev,
            totalDesigners: designers.length,
            sinsaDesigners: designers.filter((d: { location: string }) => d.location === 'sinsa').length,
            konkukDesigners: designers.filter((d: { location: string }) => d.location === 'konkuk').length,
          }));
        }

        if (inquiriesRes.ok) {
          const inquiriesData = await inquiriesRes.json();
          const inquiries = inquiriesData.inquiries || [];
          setStats(prev => ({
            ...prev,
            totalInquiries: inquiries.length,
            pendingInquiries: inquiries.filter((i: { status: string }) => i.status === 'pending').length,
          }));
        }
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  const statCards = [
    {
      title: '전체 디자이너',
      value: stats.totalDesigners,
      subtitle: `신사 ${stats.sinsaDesigners}명 / 건대 ${stats.konkukDesigners}명`,
      href: '/admin/dashboard/designers',
      color: 'bg-blue-500',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: '대기중 문의',
      value: stats.pendingInquiries,
      subtitle: `전체 ${stats.totalInquiries}건`,
      href: '/admin/dashboard/inquiries',
      color: 'bg-yellow-500',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">대시보드</h1>
        <p className="text-gray-600 mt-1">아뜰랑 맨즈헤어 관리 시스템에 오신 것을 환영합니다.</p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-sm animate-pulse">
              <div className="h-20 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {statCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">{card.title}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{card.value}</p>
                  <p className="text-gray-400 text-sm mt-1">{card.subtitle}</p>
                </div>
                <div className={`${card.color} p-3 rounded-lg`}>
                  {card.icon}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Quick Actions */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">빠른 작업</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            href="/admin/dashboard/designers/new"
            className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="bg-[#26D07C]/10 p-3 rounded-lg">
              <svg className="w-6 h-6 text-[#26D07C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-gray-900">디자이너 추가</p>
              <p className="text-sm text-gray-500">새 디자이너 등록</p>
            </div>
          </Link>

          <Link
            href="/admin/dashboard/inquiries"
            className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="bg-yellow-100 p-3 rounded-lg">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-gray-900">문의 확인</p>
              <p className="text-sm text-gray-500">대기중 {stats.pendingInquiries}건</p>
            </div>
          </Link>

          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="bg-blue-100 p-3 rounded-lg">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-gray-900">사이트 보기</p>
              <p className="text-sm text-gray-500">새 탭에서 열기</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
