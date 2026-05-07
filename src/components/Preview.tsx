import React, { useState, useMemo } from 'react';

interface PreviewProps {
    lyrics: string;
    title: string;
    showTitle: boolean;
    titleFontSize: number;
    titleColor: string;
    titleAlign: 'left' | 'center' | 'right';
    fontFace: string;
    fontSize: number;
    fontColor: string;
    textAlign: 'left' | 'center' | 'right';
    verticalAlign: 'top' | 'middle' | 'bottom';
    lineSpacing: number;
    letterSpacing: number;
    linesPerSlide: number;
    bgImage: string | null;
    // bgVideo: string | null;
    bgColor: string;
}

const Preview: React.FC<PreviewProps> = ({ 
    lyrics, 
    title,
    showTitle,
    titleFontSize,
    titleColor,
    titleAlign,
    fontFace, 
    fontSize, 
    fontColor, 
    textAlign, 
    verticalAlign, 
    lineSpacing,
    letterSpacing,
    linesPerSlide,
    bgImage,
    // bgVideo,
    bgColor
}) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    // 슬라이드 데이터 생성 (PPT 생성 로직과 동일하게 유지)
    const slides = useMemo(() => {
        const result: string[] = [];
        const paragraphs = lyrics.split(/\n\s*\n/).filter(p => p.trim() !== '');
        
        if (paragraphs.length === 0) return ["가사를 입력하면 여기에 미리보기가 표시됩니다."];

        paragraphs.forEach((paragraph) => {
            const lines = paragraph.split('\n').map(line => line.trim()).filter(line => line !== '');
            for (let i = 0; i < lines.length; i += linesPerSlide) {
                result.push(lines.slice(i, i + linesPerSlide).join('\n'));
            }
        });
        return result;
    }, [lyrics, linesPerSlide]);

    // 슬라이드 인덱스 범위 보정
    const effectiveIndex = Math.min(currentSlideIndex, slides.length - 1);
    const displayText = slides[effectiveIndex] || "";

    // 정렬 맵핑
    const vAlignMap = {
        top: 'items-start',
        middle: 'items-center',
        bottom: 'items-end'
    };

    const hAlignMap = {
        left: 'justify-start',
        center: 'justify-center',
        right: 'justify-end'
    };

    const titleHAlignMap = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right'
    };

    const handlePrev = () => setCurrentSlideIndex(prev => Math.max(0, prev - 1));
    const handleNext = () => setCurrentSlideIndex(prev => Math.min(slides.length - 1, prev + 1));

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                        <span className="w-2.5 h-2.5 bg-primary-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
                        실시간 슬라이드 프리뷰
                    </label>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">16:9 Wide Presentation Mode</span>
                </div>
                
                {/* 슬라이드 네비게이션 */}
                <div className="flex items-center gap-3 bg-slate-900/50 p-1.5 rounded-2xl border border-slate-700/50 backdrop-blur-sm shadow-xl">
                    <button 
                        onClick={handlePrev}
                        disabled={effectiveIndex === 0}
                        className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all disabled:opacity-20 disabled:cursor-not-allowed group"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-active:-translate-x-1 transition-transform">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>
                    
                    <div className="flex flex-col items-center px-2 min-w-[60px]">
                        <span className="text-sm font-black text-primary-400 font-mono tracking-tighter">
                            {effectiveIndex + 1} <span className="opacity-30 text-xs">/</span> {slides.length}
                        </span>
                        <span className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Slide</span>
                    </div>

                    <button 
                        onClick={handleNext}
                        disabled={effectiveIndex === slides.length - 1}
                        className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all disabled:opacity-20 disabled:cursor-not-allowed group"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-active:translate-x-1 transition-transform">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
            </div>

            <div
                className="aspect-video w-full rounded-[2rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden relative border-4 border-slate-700/30 bg-black group ring-1 ring-white/5 active:scale-[0.99] transition-transform duration-300"
            >
                {/* 배경 미디어 레이어 */}
                {/* bgVideo ? (
                    <video
                        key={bgVideo}
                        src={bgVideo}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                ) : */ bgImage ? (
                    <img
                        key={bgImage} // Re-render when image changes for animation if needed
                        src={bgImage}
                        alt="PPT Background"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                ) : (
                    <div 
                        className="absolute inset-0 transition-colors duration-500"
                        style={{ backgroundColor: bgColor }}
                    ></div>
                )}

                {/* 오버레이 (이미지 가독성 향상) */}
                {(bgImage /* || bgVideo */) && <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>}

                {/* 제목 레이어 */}
                {showTitle && title && (
                    <div className={`absolute top-6 md:top-8 left-8 md:left-12 right-8 md:right-12 ${titleHAlignMap[titleAlign]} animate-in fade-in slide-in-from-top-4 duration-500`}>
                        <span 
                            style={{ 
                                fontFamily: fontFace, 
                                fontSize: `${titleFontSize * 0.7}px`, 
                                color: titleColor,
                                fontWeight: 'bold',
                                opacity: 0.8
                            }}
                        >
                            {title}
                        </span>
                    </div>
                )}

                {/* 텍스트 컨텐츠 레이어 */}
                <div className={`absolute inset-0 flex p-12 md:p-16 ${vAlignMap[verticalAlign]} ${hAlignMap[textAlign]}`}>
                    <p
                        key={effectiveIndex} // Change key to trigger re-animation on slide change
                        style={{
                            fontFamily: fontFace,
                            fontSize: `${Math.max(14, fontSize * 0.8)}px`,
                            color: fontColor,
                            textAlign: textAlign,
                            fontWeight: 'bold',
                            lineHeight: lineSpacing,
                            letterSpacing: `${letterSpacing}pt`,
                            whiteSpace: 'pre-wrap',
                            wordBreak: 'keep-all',
                            textShadow: '0 2px 10px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.4)',
                        }}
                        className="drop-shadow-2xl w-full animate-in fade-in zoom-in-95 duration-500"
                    >
                        {displayText}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Preview;
