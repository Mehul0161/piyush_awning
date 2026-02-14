"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { getImagePath, isPlaceholderImage } from "@/lib/imageUtils";

type CardProps = {
  title: string;
  description?: string;
  image?: string;
  href?: string;
  children?: React.ReactNode;
  className?: string;
};

export function Card({
  title,
  description,
  image,
  href,
  children,
  className = "",
}: CardProps) {
  const imagePath = getImagePath(image);
  const isPlaceholder = isPlaceholderImage(imagePath);

  const content = (
    <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-sage-100 shadow-lg transition-transform duration-500 group-hover:shadow-2xl">
      {imagePath && (
        <>
          <Image
            src={imagePath}
            alt={title}
            fill
            className="object-cover transition-transform duration-1000 ease-premium group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            unoptimized={isPlaceholder}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent transition-opacity duration-500 group-hover:from-charcoal/100" />
        </>
      )}
      <div className="absolute inset-x-0 bottom-0 p-8 pt-20">
        <h3 className="font-serif text-2xl font-bold text-white tracking-tight md:text-3xl">
          {title}
        </h3>
        {description && (
          <p className="mt-3 text-sm text-white/70 line-clamp-2 transition-opacity duration-300 group-hover:text-white/90">
            {description}
          </p>
        )}
        <div className="mt-6 flex items-center gap-3">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-accent transition-all duration-300 group-hover:gap-4">
            Explore Collection
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  );

  const wrapperClass = `group relative aspect-[3/4] w-full overflow-hidden transition-all duration-500 ${className}`;

  if (href) {
    return (
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="block h-full"
      >
        <Link href={href} className={`${wrapperClass} block h-full`}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return <div className={`${wrapperClass} h-full`}>{content}</div>;
}
