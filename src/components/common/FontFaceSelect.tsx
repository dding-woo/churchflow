import React, { useState, useRef, useEffect } from 'react';
import { FONT_LIST } from '../../constants/fonts';

interface FontFaceSelectProps {
    fontFace: string;
    setFontFace: (value: string) => void;
    className?: string;
}

const FontFaceSelect: React.FC<FontFaceSelectProps> = ({ fontFace, setFontFace, className }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Get current font name
    const currentFontName = FONT_LIST.find(f => f.value === fontFace)?.name || fontFace;

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className={`relative w-full ${className}`} ref={dropdownRef}>
            {/* Control Button */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between gap-2 text-left bg-transparent"
                style={{ fontFamily: fontFace }}
            >
                <span className="truncate">{currentFontName}</span>
                <svg 
                    width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                    strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                    className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} text-primary-400`}
                >
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute left-0 top-[calc(100%+12px)] w-full max-h-80 overflow-y-auto bg-slate-900 border-2 border-slate-700 rounded-2xl shadow-2xl z-[100] animate-in slide-in-from-top-2 duration-200">
                    <div className="p-2 space-y-1">
                        {FONT_LIST.map((font) => (
                            <button
                                key={font.value}
                                type="button"
                                onClick={() => {
                                    setFontFace(font.value);
                                    setIsOpen(false);
                                }}
                                className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex flex-col gap-0.5
                                    ${fontFace === font.value 
                                        ? 'bg-primary-600/20 text-primary-300 ring-1 ring-primary-500/50' 
                                        : 'hover:bg-slate-800 text-slate-300 hover:text-white'}`}
                                style={{ fontFamily: font.value }}
                            >
                                <span className="text-base font-bold">{font.name}</span>
                                <span className="text-[10px] opacity-50 font-mono tracking-tight">{font.value}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FontFaceSelect;
