import React from 'react';

interface PreviewProps {
    lyrics: string;
    fontFace: string;
    fontSize: number;
    fontColor: string;
    textAlign: 'left' | 'center' | 'right';
    verticalAlign: 'top' | 'middle' | 'bottom';
    bgImage: string | null;
}

const Preview: React.FC<PreviewProps> = ({ 
    lyrics, 
    fontFace, 
    fontSize, 
    fontColor, 
    textAlign, 
    verticalAlign, 
    bgImage 
}) => {
    // 첫 번째 문단(슬라이드)만 미리보기로 보여줌
    const paragraphs = lyrics.split(/\n\s*\n/).filter(p => p.trim() !== '');
    const displayText = paragraphs.length > 0
        ? paragraphs[0].split('\n').slice(0, 2).join('\n') // 최대 2줄까지만 보여줌
        : "가사를 입력하면 여기에 미리보기가 표시됩니다.";

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

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
                    슬라이드 미리보기 (첫 섹션)
                </label>
                <span className="text-[10px] text-slate-500">16:9 Wide Ratio</span>
            </div>

            <div
                className="aspect-video w-full rounded-2xl shadow-2xl overflow-hidden relative border border-slate-700/50 bg-slate-900 group"
            >
                {/* 배경 이미지 레이어 */}
                {bgImage ? (
                    <img
                        src={bgImage}
                        alt="PPT Background"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                ) : (
                    <div className="absolute inset-0 bg-slate-950"></div>
                )}

                {/* 오버레이 (이미지 가독성 향상) */}
                {bgImage && <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>}

                {/* 텍스트 컨텐츠 레이어 */}
                <div className={`absolute inset-0 flex p-12 md:p-16 ${vAlignMap[verticalAlign]} ${hAlignMap[textAlign]}`}>
                    <p
                        style={{
                            fontFamily: fontFace,
                            fontSize: `${Math.max(14, fontSize * 0.8)}px`,
                            color: fontColor,
                            textAlign: textAlign,
                            fontWeight: 'bold',
                            lineHeight: 1.4,
                            whiteSpace: 'pre-wrap',
                            wordBreak: 'keep-all',
                            textShadow: '0 2px 10px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.4)',
                            transition: 'all 0.3s ease'
                        }}
                        className="drop-shadow-2xl w-full"
                    >
                        {displayText}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Preview;
