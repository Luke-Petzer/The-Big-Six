interface StripesProps {
  className?: string;
  vertical?: boolean;
}
export function Stripes({
  className = '',
  vertical = true
}: StripesProps) {
  if (vertical) {
    return <div className={`absolute inset-0 flex justify-center pointer-events-none ${className}`}>
      <div className="relative w-full max-w-7xl h-full">
        <div className="absolute left-1/2 -translate-x-[60px] w-[10px] h-full bg-[#2B2B2B]" />
        <div className="absolute left-1/2 translate-x-[50px] w-[10px] h-full bg-[#2B2B2B]" />
      </div>
    </div>;
  }
  return <div className={`absolute inset-0 flex items-center pointer-events-none ${className}`}>
    <div className="relative w-full h-full">
      <div className="absolute top-1/2 -translate-y-[60px] w-full h-[10px] bg-[#2B2B2B]" />
      <div className="absolute top-1/2 translate-y-[50px] w-full h-[10px] bg-[#2B2B2B]" />
    </div>
  </div>;
}