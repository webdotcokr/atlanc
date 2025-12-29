interface StatusBadgeProps {
  status: 'pending' | 'contacted' | 'completed' | 'cancelled';
}

const statusConfig = {
  pending: {
    label: '대기중',
    className: 'bg-yellow-100 text-yellow-800',
  },
  contacted: {
    label: '연락완료',
    className: 'bg-blue-100 text-blue-800',
  },
  completed: {
    label: '완료',
    className: 'bg-green-100 text-green-800',
  },
  cancelled: {
    label: '취소',
    className: 'bg-gray-100 text-gray-800',
  },
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${config.className}`}>
      {config.label}
    </span>
  );
}
