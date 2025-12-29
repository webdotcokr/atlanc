'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import StatusBadge from '../../components/status-badge';
import type { FranchiseInquiry } from '@/app/lib/types/database';

type StatusFilter = 'all' | 'pending' | 'contacted' | 'completed' | 'cancelled';

export default function InquiriesPage() {
  const [inquiries, setInquiries] = useState<FranchiseInquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [deleting, setDeleting] = useState<string | null>(null);

  useEffect(() => {
    fetchInquiries();
  }, []);

  async function fetchInquiries() {
    try {
      const response = await fetch('/api/inquiries');
      if (response.ok) {
        const data = await response.json();
        setInquiries(data.inquiries || []);
      }
    } catch (error) {
      console.error('Failed to fetch inquiries:', error);
    } finally {
      setLoading(false);
    }
  }

  const filteredInquiries = statusFilter === 'all'
    ? inquiries
    : inquiries.filter(i => i.status === statusFilter);

  const statusCounts = {
    all: inquiries.length,
    pending: inquiries.filter(i => i.status === 'pending').length,
    contacted: inquiries.filter(i => i.status === 'contacted').length,
    completed: inquiries.filter(i => i.status === 'completed').length,
    cancelled: inquiries.filter(i => i.status === 'cancelled').length,
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      const response = await fetch(`/api/inquiries?id=${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        setInquiries(inquiries.map(i =>
          i.id === id ? { ...i, status: newStatus as FranchiseInquiry['status'] } : i
        ));
      }
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('이 문의를 삭제하시겠습니까?')) return;

    setDeleting(id);
    try {
      const response = await fetch(`/api/inquiries?id=${id}`, { method: 'DELETE' });
      if (response.ok) {
        setInquiries(inquiries.filter(i => i.id !== id));
      } else {
        alert('삭제에 실패했습니다.');
      }
    } catch {
      alert('삭제에 실패했습니다.');
    } finally {
      setDeleting(null);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">가맹 문의 관리</h1>
        <p className="text-gray-600 mt-1">프랜차이즈 문의 내역을 관리합니다.</p>
      </div>

      {/* Status Filter */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {[
          { key: 'all', label: '전체' },
          { key: 'pending', label: '대기중' },
          { key: 'contacted', label: '연락완료' },
          { key: 'completed', label: '완료' },
          { key: 'cancelled', label: '취소' },
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setStatusFilter(key as StatusFilter)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              statusFilter === key
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {label}
            <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
              statusFilter === key ? 'bg-white/20' : 'bg-gray-200'
            }`}>
              {statusCounts[key as keyof typeof statusCounts]}
            </span>
          </button>
        ))}
      </div>

      {loading ? (
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="animate-pulse space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-16 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      ) : filteredInquiries.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm p-12 text-center">
          <p className="text-gray-500">문의 내역이 없습니다.</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">접수일시</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">성함</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">연락처</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">희망지역</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">상태</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">이메일</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">관리</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredInquiries.map((inquiry) => (
                <tr key={inquiry.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {formatDate(inquiry.created_at)}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">{inquiry.name}</td>
                  <td className="px-6 py-4 text-gray-600">{inquiry.phone}</td>
                  <td className="px-6 py-4 text-gray-600">{inquiry.desired_location}</td>
                  <td className="px-6 py-4">
                    <select
                      value={inquiry.status}
                      onChange={(e) => handleStatusChange(inquiry.id, e.target.value)}
                      className="bg-transparent border-0 focus:ring-0 cursor-pointer text-sm"
                    >
                      <option value="pending">대기중</option>
                      <option value="contacted">연락완료</option>
                      <option value="completed">완료</option>
                      <option value="cancelled">취소</option>
                    </select>
                  </td>
                  <td className="px-6 py-4">
                    {inquiry.email_sent ? (
                      <span className="text-green-600 text-sm">발송됨</span>
                    ) : (
                      <span className="text-gray-400 text-sm">-</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/dashboard/inquiries/${inquiry.id}`}
                        className="px-3 py-1.5 text-sm text-blue-600 hover:bg-blue-50 rounded transition-colors"
                      >
                        상세
                      </Link>
                      <button
                        onClick={() => handleDelete(inquiry.id)}
                        disabled={deleting === inquiry.id}
                        className="px-3 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded transition-colors disabled:opacity-50"
                      >
                        {deleting === inquiry.id ? '삭제중...' : '삭제'}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
