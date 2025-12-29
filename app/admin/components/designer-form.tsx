'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import type { DesignerDisplay } from '@/app/lib/types/database';

interface DesignerFormProps {
  designer?: DesignerDisplay;
  mode: 'create' | 'edit';
}

export default function DesignerForm({ designer, mode }: DesignerFormProps) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    location: designer?.location || 'sinsa',
    name: designer?.name || '',
    position: designer?.position || '',
    image: designer?.image || '',
    socialWonbar: designer?.social?.wonbar || '',
    socialInstagram: designer?.social?.instagram || '',
    urlInstagram: designer?.urls?.instagram || '',
    urlBooking: designer?.urls?.booking || '',
    urlYoutube: designer?.urls?.youtube || '',
    description: designer?.description || '',
    displayOrder: designer?.displayOrder ?? 0,
    isActive: designer?.isActive ?? true,
  });

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      setError('JPG, PNG, WebP 이미지만 업로드 가능합니다.');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('파일 크기는 5MB 이하만 가능합니다.');
      return;
    }

    setError('');
    setUploading(true);

    try {
      const uploadFormData = new FormData();
      uploadFormData.append('file', file);
      uploadFormData.append('location', formData.location);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: uploadFormData,
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || '업로드에 실패했습니다.');
      }

      const data = await response.json();
      setFormData({ ...formData, image: data.path });
    } catch (err) {
      setError(err instanceof Error ? err.message : '업로드에 실패했습니다.');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const payload = {
        location: formData.location,
        name: formData.name,
        position: formData.position,
        image: formData.image,
        social: {
          wonbar: formData.socialWonbar || null,
          instagram: formData.socialInstagram || null,
        },
        urls: {
          instagram: formData.urlInstagram,
          booking: formData.urlBooking,
          youtube: formData.urlYoutube || null,
        },
        description: formData.description,
        displayOrder: formData.displayOrder,
        isActive: formData.isActive,
      };

      const url = mode === 'create'
        ? '/api/designers'
        : `/api/designers?id=${designer?.id}`;

      const response = await fetch(url, {
        method: mode === 'create' ? 'POST' : 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || '저장에 실패했습니다.');
      }

      router.push('/admin/dashboard/designers');
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : '저장에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {/* Location */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          지점 <span className="text-red-500">*</span>
        </label>
        <div className="flex gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="location"
              value="sinsa"
              checked={formData.location === 'sinsa'}
              onChange={(e) => setFormData({ ...formData, location: e.target.value as 'sinsa' | 'konkuk' })}
              className="mr-2"
            />
            신사점
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="location"
              value="konkuk"
              checked={formData.location === 'konkuk'}
              onChange={(e) => setFormData({ ...formData, location: e.target.value as 'sinsa' | 'konkuk' })}
              className="mr-2"
            />
            건대점
          </label>
        </div>
      </div>

      {/* Name & Position */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            이름 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#26D07C] focus:border-transparent outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            직급 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.position}
            onChange={(e) => setFormData({ ...formData, position: e.target.value })}
            placeholder="예: 대표 원장, 실장, 디자이너"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#26D07C] focus:border-transparent outline-none"
            required
          />
        </div>
      </div>

      {/* Image Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          프로필 이미지 <span className="text-red-500">*</span>
        </label>
        <div className="space-y-4">
          {/* Upload Controls */}
          <div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={handleFileChange}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50"
            >
              {uploading ? '업로드 중...' : '이미지 선택'}
            </button>
            <p className="text-sm text-gray-500 mt-2">
              JPG, PNG, WebP 형식 (최대 5MB)
            </p>
          </div>

          {/* Preview */}
          {formData.image && (
            <div className="space-y-2">
              <p className="text-sm text-gray-600">미리보기:</p>
              <div
                className="w-32 h-32 rounded-lg bg-gray-200 bg-cover bg-center border border-gray-300"
                style={{ backgroundImage: `url(${formData.image})` }}
              />
              <p className="text-xs text-gray-500 break-all max-w-md">
                {formData.image}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Social */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            원바 핸들
          </label>
          <input
            type="text"
            value={formData.socialWonbar}
            onChange={(e) => setFormData({ ...formData, socialWonbar: e.target.value })}
            placeholder="@WonBar"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#26D07C] focus:border-transparent outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            인스타그램 핸들
          </label>
          <input
            type="text"
            value={formData.socialInstagram}
            onChange={(e) => setFormData({ ...formData, socialInstagram: e.target.value })}
            placeholder="@atlanc_xxx"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#26D07C] focus:border-transparent outline-none"
          />
        </div>
      </div>

      {/* URLs */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            인스타그램 URL
          </label>
          <input
            type="url"
            value={formData.urlInstagram}
            onChange={(e) => setFormData({ ...formData, urlInstagram: e.target.value })}
            placeholder="https://instagram.com/xxx"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#26D07C] focus:border-transparent outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            예약 URL
          </label>
          <input
            type="url"
            value={formData.urlBooking}
            onChange={(e) => setFormData({ ...formData, urlBooking: e.target.value })}
            placeholder="https://naver.me/xxx"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#26D07C] focus:border-transparent outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            유튜브 URL
          </label>
          <input
            type="url"
            value={formData.urlYoutube}
            onChange={(e) => setFormData({ ...formData, urlYoutube: e.target.value })}
            placeholder="https://youtube.com/xxx"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#26D07C] focus:border-transparent outline-none"
          />
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          소개 <span className="text-red-500">*</span>
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#26D07C] focus:border-transparent outline-none resize-none"
          required
        />
      </div>

      {/* Display Order & Active */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            표시 순서
          </label>
          <input
            type="number"
            value={formData.displayOrder}
            onChange={(e) => setFormData({ ...formData, displayOrder: parseInt(e.target.value) || 0 })}
            min={0}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#26D07C] focus:border-transparent outline-none"
          />
          <p className="text-sm text-gray-500 mt-1">낮은 숫자가 먼저 표시됩니다.</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            상태
          </label>
          <label className="flex items-center mt-3">
            <input
              type="checkbox"
              checked={formData.isActive}
              onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
              className="w-5 h-5 rounded border-gray-300 text-[#26D07C] focus:ring-[#26D07C]"
            />
            <span className="ml-2">활성화 (사이트에 표시)</span>
          </label>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 pt-4">
        <button
          type="submit"
          disabled={loading || !formData.image}
          className="flex-1 bg-[#26D07C] text-white py-3 rounded-lg font-semibold hover:bg-[#1fb86a] transition-colors disabled:opacity-50"
        >
          {loading ? '저장 중...' : mode === 'create' ? '디자이너 추가' : '수정 완료'}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="px-8 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
        >
          취소
        </button>
      </div>
    </form>
  );
}
