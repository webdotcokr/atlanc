"use client";

import { useState } from "react";

interface CustomCheckboxProps {
  label?: string;
}

export default function CustomCheckbox({
  label = "개인정보 수집에 동의합니다",
}: CustomCheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label className="flex items-center gap-1.5 cursor-pointer">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
        className="sr-only"
      />
      <div
        className={`w-[23px] aspect-square rounded-full flex items-center justify-center transition-colors relative ${
          isChecked ? "bg-[#26E45C]" : "bg-white border-2 border-gray-300"
        }`}
      >
        {isChecked && (
          <img
            src="/ico-check.svg"
            className="w-[14px] h-[12px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 absolute"
            alt="check"
          />
        )}
      </div>
      <p className="text-white text-sm font-bold leading-[1.4]">{label}</p>
    </label>
  );
}
