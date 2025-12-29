'use client';

import { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';
import DesignerForm from '../../../../components/designer-form';
import type { DesignerDisplay } from '@/app/lib/types/database';

interface EditDesignerPageProps {
  params: Promise<{ id: string }>;
}

export default function EditDesignerPage({ params }: EditDesignerPageProps) {
  const { id } = use(params);
  const router = useRouter();
  const [designer, setDesigner] = useState<DesignerDisplay | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchDesigner() {
      try {
        const response = await fetch(`/api/designers?id=${id}`);
        if (!response.ok) {
          setError('디자이너를 찾을 수 없습니다.');
          return;
        }
        const data = await response.json();
        setDesigner(data.designer);
      } catch {
        setError('데이터를 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    }

    fetchDesigner();
  }, [id]);

  if (loading) {
    return (
      <div className="p-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-48 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-64 mb-8"></div>
          <div className="bg-white rounded-xl shadow-sm p-8 max-w-3xl">
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="h-12 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !designer) {
    return (
      <div className="p-8">
        <div className="bg-red-50 text-red-600 p-8 rounded-xl text-center">
          <p className="font-medium">{error || '디자이너를 찾을 수 없습니다.'}</p>
          <button
            onClick={() => router.push('/admin/dashboard/designers')}
            className="mt-4 text-red-700 underline"
          >
            목록으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">디자이너 수정</h1>
        <p className="text-gray-600 mt-1">{designer.name} 디자이너 정보를 수정합니다.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8 max-w-3xl">
        <DesignerForm designer={designer} mode="edit" />
      </div>
    </div>
  );
}
