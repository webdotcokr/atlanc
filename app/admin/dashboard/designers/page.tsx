'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import LocationTabs from '../../components/location-tabs';
import type { DesignerDisplay } from '@/app/lib/types/database';

export default function DesignersPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'sinsa' | 'konkuk'>('sinsa');
  const [designers, setDesigners] = useState<DesignerDisplay[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  useEffect(() => {
    fetchDesigners();
  }, []);

  async function fetchDesigners() {
    try {
      const response = await fetch('/api/designers?includeInactive=true');
      if (response.ok) {
        const data = await response.json();
        setDesigners(data.designers || []);
      }
    } catch (error) {
      console.error('Failed to fetch designers:', error);
    } finally {
      setLoading(false);
    }
  }

  const filteredDesigners = designers.filter(d => d.location === activeTab);
  const sinsaCount = designers.filter(d => d.location === 'sinsa').length;
  const konkukCount = designers.filter(d => d.location === 'konkuk').length;

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`"${name}" 디자이너를 삭제하시겠습니까?`)) return;

    setDeleting(id);
    try {
      const response = await fetch(`/api/designers?id=${id}`, { method: 'DELETE' });
      if (response.ok) {
        setDesigners(designers.filter(d => d.id !== id));
      } else {
        alert('삭제에 실패했습니다.');
      }
    } catch {
      alert('삭제에 실패했습니다.');
    } finally {
      setDeleting(null);
    }
  };

  const handleToggleActive = async (designer: DesignerDisplay) => {
    try {
      const response = await fetch(`/api/designers?id=${designer.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isActive: !designer.isActive }),
      });

      if (response.ok) {
        setDesigners(designers.map(d =>
          d.id === designer.id ? { ...d, isActive: !d.isActive } : d
        ));
      }
    } catch (error) {
      console.error('Failed to toggle active:', error);
    }
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">디자이너 관리</h1>
          <p className="text-gray-600 mt-1">디자이너 프로필을 관리합니다.</p>
        </div>
        <Link
          href="/admin/dashboard/designers/new"
          className="bg-[#26D07C] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1fb86a] transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          디자이너 추가
        </Link>
      </div>

      <LocationTabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
        sinsaCount={sinsaCount}
        konkukCount={konkukCount}
      />

      {loading ? (
        <div className="mt-6 bg-white rounded-xl shadow-sm p-8">
          <div className="animate-pulse space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-20 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      ) : filteredDesigners.length === 0 ? (
        <div className="mt-6 bg-white rounded-xl shadow-sm p-12 text-center">
          <p className="text-gray-500">등록된 디자이너가 없습니다.</p>
          <Link
            href="/admin/dashboard/designers/new"
            className="inline-block mt-4 text-[#26D07C] font-medium hover:underline"
          >
            디자이너 추가하기
          </Link>
        </div>
      ) : (
        <div className="mt-6 bg-white rounded-xl shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">순서</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">이미지</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">이름</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">직급</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">상태</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">관리</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredDesigners.map((designer) => (
                <tr key={designer.id} className={!designer.isActive ? 'bg-gray-50' : ''}>
                  <td className="px-6 py-4 text-gray-600">{designer.displayOrder}</td>
                  <td className="px-6 py-4">
                    <div
                      className="w-12 h-12 rounded-lg bg-gray-200 bg-cover bg-center"
                      style={{ backgroundImage: `url('${designer.image}')` }}
                    />
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">{designer.name}</td>
                  <td className="px-6 py-4 text-gray-600">{designer.position}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleToggleActive(designer)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                        designer.isActive
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      {designer.isActive ? '활성' : '비활성'}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => router.push(`/admin/dashboard/designers/${designer.id}/edit`)}
                        className="px-3 py-1.5 text-sm text-blue-600 hover:bg-blue-50 rounded transition-colors"
                      >
                        수정
                      </button>
                      <button
                        onClick={() => handleDelete(designer.id, designer.name)}
                        disabled={deleting === designer.id}
                        className="px-3 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded transition-colors disabled:opacity-50"
                      >
                        {deleting === designer.id ? '삭제중...' : '삭제'}
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
