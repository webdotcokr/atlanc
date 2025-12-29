'use client';

import { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';
import StatusBadge from '../../../components/status-badge';
import type { FranchiseInquiry } from '@/app/lib/types/database';

interface InquiryDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function InquiryDetailPage({ params }: InquiryDetailPageProps) {
  const { id } = use(params);
  const router = useRouter();
  const [inquiry, setInquiry] = useState<FranchiseInquiry | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [notes, setNotes] = useState('');
  const [status, setStatus] = useState<FranchiseInquiry['status']>('pending');

  useEffect(() => {
    async function fetchInquiry() {
      try {
        const response = await fetch(`/api/inquiries?id=${id}`);
        if (!response.ok) {
          router.push('/admin/dashboard/inquiries');
          return;
        }
        const data = await response.json();
        setInquiry(data.inquiry);
        setNotes(data.inquiry.notes || '');
        setStatus(data.inquiry.status);
      } catch {
        router.push('/admin/dashboard/inquiries');
      } finally {
        setLoading(false);
      }
    }

    fetchInquiry();
  }, [id, router]);

  const handleSave = async () => {
    setSaving(true);
    try {
      const response = await fetch(`/api/inquiries?id=${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status, notes }),
      });

      if (response.ok) {
        const data = await response.json();
        setInquiry(data.inquiry);
        alert('저장되었습니다.');
      } else {
        alert('저장에 실패했습니다.');
      }
    } catch {
      alert('저장에 실패했습니다.');
    } finally {
      setSaving(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      weekday: 'long',
    });
  };

  if (loading) {
    return (
      <div className="p-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-48 mb-4"></div>
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="space-y-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="h-12 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!inquiry) {
    return null;
  }

  return (
    <div className="p-8">
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => router.push('/admin/dashboard/inquiries')}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">문의 상세</h1>
          <p className="text-gray-600 mt-1">{inquiry.name}님의 문의</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">문의 정보</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">성함</p>
                  <p className="font-medium text-gray-900">{inquiry.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">연락처</p>
                  <p className="font-medium text-gray-900">{inquiry.phone}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">희망 창업 지역</p>
                <p className="font-medium text-gray-900">{inquiry.desired_location}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">접수 일시</p>
                <p className="font-medium text-gray-900">{formatDate(inquiry.created_at)}</p>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">메모</h2>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={6}
              placeholder="문의에 대한 메모를 입력하세요..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#26D07C] focus:border-transparent outline-none resize-none"
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Status */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">상태 관리</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-2">현재 상태</p>
                <StatusBadge status={inquiry.status} />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">상태 변경</p>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as FranchiseInquiry['status'])}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#26D07C] focus:border-transparent outline-none"
                >
                  <option value="pending">대기중</option>
                  <option value="contacted">연락완료</option>
                  <option value="completed">완료</option>
                  <option value="cancelled">취소</option>
                </select>
              </div>
              <button
                onClick={handleSave}
                disabled={saving}
                className="w-full bg-[#26D07C] text-white py-3 rounded-lg font-semibold hover:bg-[#1fb86a] transition-colors disabled:opacity-50"
              >
                {saving ? '저장 중...' : '저장'}
              </button>
            </div>
          </div>

          {/* Email Status */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">알림 상태</h2>
            <div className="flex items-center gap-3">
              {inquiry.email_sent ? (
                <>
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">이메일 발송됨</p>
                    {inquiry.email_sent_at && (
                      <p className="text-sm text-gray-500">
                        {new Date(inquiry.email_sent_at).toLocaleString('ko-KR')}
                      </p>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-500">이메일 미발송</p>
                </>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">빠른 연락</h2>
            <a
              href={`tel:${inquiry.phone}`}
              className="flex items-center gap-3 p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-medium">{inquiry.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
