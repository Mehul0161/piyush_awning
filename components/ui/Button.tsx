import Link from "next/link";
import { WHATSAPP_LINK } from "@/lib/constants";

type ButtonVariant = "primary" | "secondary" | "whatsapp" | "outline";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-black uppercase tracking-[0.2em] text-[10px] transition-all duration-500 focus:outline-none disabled:opacity-60 overflow-hidden relative group";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent px-10 py-5 text-white shadow-[0_20px_40px_-10px_rgba(34,197,94,0.3)] hover:shadow-[0_30px_60px_-15px_rgba(34,197,94,0.4)] hover:-translate-y-1 active:translate-y-0",
  secondary:
    "bg-charcoal px-10 py-5 text-white hover:bg-black shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0",
  whatsapp:
    "bg-[#25D366] px-10 py-5 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0",
  outline:
    "border border-white/30 bg-transparent px-10 py-5 text-white hover:bg-white hover:text-charcoal backdrop-blur-md transition-all duration-300 hover:-translate-y-1 active:translate-y-0",
};

type ButtonProps = {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
} & (
    | { href: string; onClick?: never }
    | { href?: never; onClick?: () => void }
  );

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    if (variant === "whatsapp") {
      return (
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      onClick={"onClick" in props ? props.onClick : undefined}
    >
      {children}
    </button>
  );
}
