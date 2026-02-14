"use client";

export function TrustStrip() {
  const items = [
    { label: "15+ Years Experience", icon: "★" },
    { label: "In-house Factory", icon: "◆" },
    { label: "Premium Materials", icon: "◇" },
  ];

  return (
    <div className="fixed top-20 left-0 right-0 z-40 border-y border-sage-200/80 bg-stone-100/95 backdrop-blur-md py-3">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-4 text-xs text-sage-700 sm:gap-8 sm:text-sm">
        {items.map((item) => (
          <span
            key={item.label}
            className="flex items-center gap-1.5 font-medium whitespace-nowrap"
          >
            <span className="text-accent text-sm" aria-hidden>{item.icon}</span>
            <span>{item.label}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
