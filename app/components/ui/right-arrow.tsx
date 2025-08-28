interface RightArrowProps {
  className?: string;
}

export default function RightArrow({ className = "" }: RightArrowProps) {
  return (
    <svg 
      width="13" 
      height="9" 
      viewBox="0 0 13 9" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M0 4.5H11.8571M8 0.5L12 4.5L8 8.5" 
        stroke="currentColor" 
        strokeWidth="1.2"
      />
    </svg>
  );
}