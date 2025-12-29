'use client';

interface LocationTabsProps {
  activeTab: 'sinsa' | 'konkuk';
  onTabChange: (tab: 'sinsa' | 'konkuk') => void;
  sinsaCount?: number;
  konkukCount?: number;
}

export default function LocationTabs({
  activeTab,
  onTabChange,
  sinsaCount,
  konkukCount
}: LocationTabsProps) {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => onTabChange('sinsa')}
        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
          activeTab === 'sinsa'
            ? 'bg-[#26D07C] text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        신사점
        {sinsaCount !== undefined && (
          <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
            activeTab === 'sinsa' ? 'bg-white/20' : 'bg-gray-200'
          }`}>
            {sinsaCount}
          </span>
        )}
      </button>
      <button
        onClick={() => onTabChange('konkuk')}
        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
          activeTab === 'konkuk'
            ? 'bg-[#26D07C] text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        건대점
        {konkukCount !== undefined && (
          <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
            activeTab === 'konkuk' ? 'bg-white/20' : 'bg-gray-200'
          }`}>
            {konkukCount}
          </span>
        )}
      </button>
    </div>
  );
}
