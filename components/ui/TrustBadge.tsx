"use client";

type TrustBadgeProps = {
  label: string;
  value: string;
  className?: string;
};

export function TrustBadge({ label, value, className = "" }: TrustBadgeProps) {
  return (
    <div className={`flex flex-col items-center md:items-start gap-0.5 ${className}`}>
      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent drop-shadow-sm">
        {value}
      </span>
      <span className="text-sm font-bold text-white/90">
        {label}
      </span>
    </div>
  );
}
