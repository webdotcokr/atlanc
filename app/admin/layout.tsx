import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '관리자 - 아뜰랑 맨즈헤어',
  description: '아뜰랑 맨즈헤어 관리자 페이지',
  robots: 'noindex, nofollow',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      {children}
    </div>
  );
}
