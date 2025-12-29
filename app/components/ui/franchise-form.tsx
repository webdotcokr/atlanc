'use client';

import { useState } from 'react';
import CustomCheckbox from './custom-checkbox';

interface FranchiseFormProps {
  variant: 'main' | 'desktop-bar' | 'mobile-bar';
}

export default function FranchiseForm({ variant }: FranchiseFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [desiredLocation, setDesiredLocation] = useState('');
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();

    if (!name.trim() || !phone.trim()) {
      setMessage({ type: 'error', text: '성함과 연락처를 입력해주세요.' });
      return;
    }

    if (!privacyConsent) {
      setMessage({ type: 'error', text: '개인정보 수집에 동의해주세요.' });
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          desiredLocation: desiredLocation.trim() || '미입력',
          privacyConsent,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: data.message || '문의가 접수되었습니다.' });
        setName('');
        setPhone('');
        setDesiredLocation('');
        setPrivacyConsent(false);
      } else {
        setMessage({ type: 'error', text: data.error || '문의 접수에 실패했습니다.' });
      }
    } catch {
      setMessage({ type: 'error', text: '서버 연결에 실패했습니다.' });
    } finally {
      setLoading(false);
    }
  };

  if (variant === 'main') {
    return (
      <div className="pt-11 pb-[38px] max-md:p-4 max-md:pt-5 px-10 bg-[#00000099] border border-[#FFFFFF26] flex lg:items-end gap-4 max-md:gap-8 rounded-lg overflow-hidden max-lg:flex-col">
        <div className="flex flex-col gap-2.5 max-md:gap-5">
          <div className="flex items-center gap-4 max-lg:flex-col">
            <div className="flex flex-col gap-1.5 max-lg:w-full">
              <p className="text-base font-bold leading-[1.3] text-white">성함</p>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white w-[222px] max-lg:w-full max-md:h-12 h-[54px] px-[17px] py-[15px] text-[16px] max-md:py-[14px] max-md:px-[14px] max-md:text-[15px] font-bold leading-[1.4] placeholder:text-[#777] outline-none rounded-sm"
                placeholder="성함을 입력하세요"
                disabled={loading}
              />
            </div>
            <div className="flex flex-col gap-1.5 max-lg:w-full">
              <p className="text-base font-bold leading-[1.3] text-white">연락처</p>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-white w-[222px] max-lg:w-full max-md:h-12 h-[54px] px-[17px] py-[15px] text-[16px] max-md:py-[14px] max-md:px-[14px] max-md:text-[15px] font-bold leading-[1.4] placeholder:text-[#777] outline-none rounded-sm"
                placeholder="연락처를 입력하세요"
                type="tel"
                disabled={loading}
              />
            </div>
            <div className="flex flex-col gap-1.5 max-lg:w-full">
              <p className="text-base font-bold leading-[1.3] text-white">창업 희망지역</p>
              <input
                value={desiredLocation}
                onChange={(e) => setDesiredLocation(e.target.value)}
                className="bg-white w-[222px] max-lg:w-full max-md:h-12 h-[54px] px-[17px] py-[15px] text-[16px] max-md:py-[14px] max-md:px-[14px] max-md:text-[15px] font-bold leading-[1.4] placeholder:text-[#777] outline-none rounded-sm"
                placeholder="희망 지역을 입력하세요.(ex. 성남 분당)"
                disabled={loading}
              />
            </div>
          </div>

          <div className="flex items-center gap-5 lg:justify-end">
            <CustomCheckbox checked={privacyConsent} onChange={setPrivacyConsent} />
            <p className="cursor-pointer text-sm max-md:text-[13px] leading-1.4 text-white underline">
              약관보기
            </p>
          </div>

          {message && (
            <p className={`text-sm ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
              {message.text}
            </p>
          )}
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-[#26E45C] py-4 pl-[24px] cursor-pointer pr-5 rounded-lg w-[192px] h-[87px] max-lg:w-full max-md:h-[54px] flex items-center justify-center gap-[15px] max-md:gap-2 disabled:opacity-50"
        >
          <p className="text-[22px] text-black font-extrabold leading-[1.2] max-md:text-lg">
            {loading ? '접수 중...' : <>무료 컨설팅 <br className="max-lg:hidden" />신청하기</>}
          </p>
          {!loading && (
            <img src="ico-arrow-2.svg" alt="ico-arrow" className="w-5 max-md:w-[18px]" />
          )}
        </button>
      </div>
    );
  }

  if (variant === 'desktop-bar') {
    return (
      <>
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-3 ml-[29px] mr-6">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white w-[222px] max-xl:w-[190px] max-lg:w-[180px] h-[54px] px-[17px] py-[15px] text-[16px] font-bold leading-[1.4] placeholder:text-[#777] outline-none rounded-sm"
              placeholder="성함을 입력하세요"
              disabled={loading}
            />
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-white w-[244px] max-xl:w-[190px] max-lg:w-[180px] h-[54px] px-[17px] py-[15px] text-[16px] font-bold leading-[1.4] placeholder:text-[#777] outline-none rounded-sm"
              placeholder="연락처를 입력하세요"
              type="tel"
              disabled={loading}
            />
            <input
              value={desiredLocation}
              onChange={(e) => setDesiredLocation(e.target.value)}
              className="max-xl:hidden bg-white w-[313px] h-[54px] px-[17px] py-[15px] text-[16px] font-bold leading-[1.4] placeholder:text-[#777] outline-none rounded-sm"
              placeholder="희망 지역을 입력하세요.(ex. 성남 분당)"
              disabled={loading}
            />

            <div className="flex flex-col gap-[3px] items-end max-lg:gap-2">
              <CustomCheckbox label="개인정보 수집동의" checked={privacyConsent} onChange={setPrivacyConsent} />
              <p className="cursor-pointer text-sm leading-1.4 text-white underline">약관보기</p>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-[#26E45C] py-4 cursor-pointer rounded-lg w-[192px] max-lg:w-[160px] h-[68px] flex items-center justify-center gap-[15px] disabled:opacity-50"
          >
            <p className="text-[22px] text-black font-extrabold leading-[1.2] max-lg:text-lg">
              {loading ? '접수 중...' : '무료상담 신청'}
            </p>
            {!loading && <img src="ico-arrow-2.svg" alt="ico-arrow" className="w-5" />}
          </button>
        </div>
        {message && (
          <p className={`text-center text-sm mt-2 ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
            {message.text}
          </p>
        )}
      </>
    );
  }

  // mobile-bar
  return (
    <>
      <div className="flex gap-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="h-10 md:h-12 md:text-base px-[13px] rounded-sm text-[13px] shrink-0 font-bold placeholder:text-[#777] bg-white w-[30%] outline-none"
          placeholder="성함"
          disabled={loading}
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="h-10 md:h-12 md:text-base px-[13px] rounded-sm text-[13px] font-bold placeholder:text-[#777] bg-white grow w-full"
          placeholder="연락처"
          type="tel"
          disabled={loading}
        />
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="cursor-pointer md:h-12 h-10 w-[98px] md:w-[120px] shrink-0 bg-[#26E45C] flex items-center gap-1 rounded-sm justify-center disabled:opacity-50"
        >
          <p className="text-[15px] text-black font-extrabold leading-[1.2] md:text-lg">
            {loading ? '접수중' : '무료 상담'}
          </p>
          {!loading && <img src="ico-arrow-2.svg" alt="ico-arrow" className="w-3" />}
        </button>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <CustomCheckbox label="개인정보 수집동의" checked={privacyConsent} onChange={setPrivacyConsent} />
          <p className="cursor-pointer text-[11px] leading-1.4 text-white underline md:text-sm">약관보기</p>
        </div>

        <div className="flex items-center gap-1 md:gap-2">
          <img src="/ico-call.svg" alt="ico-call" className="w-2.5 md:w-4" />
          <p className="text-xs font-extrabold text-[#26E45C] leading-[1.4] md:text-base">0507-1341-9532</p>
        </div>
      </div>

      {message && (
        <p className={`text-center text-xs ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
          {message.text}
        </p>
      )}
    </>
  );
}
