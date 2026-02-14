"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Option = {
    value: string;
    label: string;
};

type CustomSelectProps = {
    label: string;
    value: string;
    options: Option[];
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
};

export function CustomSelect({
    label,
    value,
    options,
    onChange,
    placeholder = "Select an option...",
    className = "",
}: CustomSelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const selectedOption = options.find((opt) => opt.value === value);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className={`relative space-y-2 ${className}`} ref={containerRef}>
            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-accent/60 ml-2">
                {label}
            </label>
            <div className="relative">
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className={`flex w-full items-center justify-between rounded-xl bg-white border border-stone-200 px-6 py-4 text-sm font-medium transition-all duration-300 focus:outline-none focus:border-accent hover:border-stone-300 ${isOpen ? "border-accent ring-4 ring-accent/5" : ""
                        }`}
                    aria-haspopup="listbox"
                    aria-expanded={isOpen}
                >
                    <span className={`${!selectedOption ? "text-stone-400" : "text-charcoal"}`}>
                        {selectedOption ? selectedOption.label : placeholder}
                    </span>
                    <motion.svg
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        className={`h-4 w-4 text-stone-400 transition-colors ${isOpen ? "text-accent" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.ul
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute z-50 mt-2 w-full overflow-hidden rounded-2xl bg-white border border-stone-100 shadow-2xl shadow-charcoal/5 backdrop-blur-xl"
                            role="listbox"
                        >
                            <div className="max-h-60 overflow-auto p-2 scrollbar-hide">
                                {options.map((opt) => (
                                    <li
                                        key={opt.value}
                                        role="option"
                                        aria-selected={value === opt.value}
                                        className={`cursor-pointer rounded-xl px-4 py-3 text-sm font-medium transition-all ${value === opt.value
                                                ? "bg-accent text-white shadow-lg shadow-accent/20"
                                                : "text-sage-600 hover:bg-stone-50 hover:text-accent"
                                            }`}
                                        onClick={() => {
                                            onChange(opt.value);
                                            setIsOpen(false);
                                        }}
                                    >
                                        <div className="flex items-center justify-between">
                                            {opt.label}
                                            {value === opt.value && (
                                                <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </div>
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
