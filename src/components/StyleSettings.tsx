import React, { ChangeEvent, RefObject } from 'react';
import ImageUpload from './common/ImageUpload';
import VideoUpload from './common/VideoUpload';
import FontFaceSelect from './common/FontFaceSelect';
import FontSizeInput from './common/FontSizeInput';

interface StyleSettingsProps {
  bgImage: string | null;
  handleImageUpload: (e: ChangeEvent<HTMLInputElement>) => void;
  bgVideo: string | null;
  handleVideoUpload: (e: ChangeEvent<HTMLInputElement>) => void;
  bgColor: string;
  setBgColor: (value: string) => void;
  title: string;
  setTitle: (value: string) => void;
  showTitle: boolean;
  setShowTitle: (value: boolean) => void;
  titleFontSize: number;
  setTitleFontSize: (value: number) => void;
  titleColor: string;
  setTitleColor: (value: string) => void;
  titleAlign: 'left' | 'center' | 'right';
  setTitleAlign: (value: 'left' | 'center' | 'right') => void;
  fontFace: string;
  setFontFace: (value: string) => void;
  fontSize: number;
  setFontSize: (value: number) => void;
  fontColor: string;
  setFontColor: (value: string) => void;
  textAlign: 'left' | 'center' | 'right';
  setTextAlign: (value: 'left' | 'center' | 'right') => void;
  verticalAlign: 'top' | 'middle' | 'bottom';
  setVerticalAlign: (value: 'top' | 'middle' | 'bottom') => void;
  lineSpacing: number;
  setLineSpacing: (value: number) => void;
  letterSpacing: number;
  setLetterSpacing: (value: number) => void;
  linesPerSlide: number;
  setLinesPerSlide: (value: number) => void;
  fileInputRef: RefObject<HTMLInputElement | null>;
}

const StyleSettings: React.FC<StyleSettingsProps> = ({
  bgImage,
  handleImageUpload,
  bgVideo,
  handleVideoUpload,
  bgColor,
  setBgColor,
  title,
  setTitle,
  showTitle,
  setShowTitle,
  titleFontSize,
  setTitleFontSize,
  titleColor,
  setTitleColor,
  titleAlign,
  setTitleAlign,
  fontFace,
  setFontFace,
  fontSize,
  setFontSize,
  fontColor,
  setFontColor,
  textAlign,
  setTextAlign,
  verticalAlign,
  setVerticalAlign,
  lineSpacing,
  setLineSpacing,
  letterSpacing,
  setLetterSpacing,
  linesPerSlide,
  setLinesPerSlide,
  fileInputRef
}) => {
  const alignButtons = [
    { value: 'left', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line></svg>, label: '좌측' },
    { value: 'center', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line></svg>, label: '가운데' },
    { value: 'right', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line></svg>, label: '우측' },
  ];

  const vAlignButtons = [
    { value: 'top', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16M4 12h16M4 18h16"></path><path d="M7 2l5 4 5-4" strokeWidth="2"></path></svg>, label: '상단' },
    { value: 'middle', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16M4 12h16M4 18h16"></path><path d="M12 2v4m0 12v4"></path></svg>, label: '중간' },
    { value: 'bottom', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16M4 12h16M4 18h16"></path><path d="M7 22l5-4 5 4" strokeWidth="2"></path></svg>, label: '하단' },
  ];

  return (
    <section className="space-y-6">
      <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-600 shadow-2xl backdrop-blur-md space-y-6">
        <label className="block text-sm font-bold text-white uppercase tracking-wider">스타일 설정</label>

        {/* 배경 설정 섹션 */}
        <div className="space-y-6 pb-6 border-b border-slate-700/50">
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-200 uppercase tracking-widest">배경 이미지 (정지)</label>
              <ImageUpload
                bgImage={bgImage}
                handleImageUpload={handleImageUpload}
                fileInputRef={fileInputRef}
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-200 uppercase tracking-widest">배경 동영상 (움직이는 배경)</label>
              <VideoUpload
                bgVideo={bgVideo}
                handleVideoUpload={handleVideoUpload}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-200 uppercase tracking-widest">단색 배경</label>
            <div className="flex items-center space-x-4 bg-slate-950 p-2.5 rounded-xl border-2 border-slate-700">
              <div className="w-12 h-12 rounded-lg border-2 border-slate-400 overflow-hidden cursor-pointer hover:scale-105 transition-all bg-slate-900 shrink-0">
                <input
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="w-full h-full scale-[2] cursor-pointer"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-lg font-mono tracking-tighter">{bgColor.toUpperCase()}</span>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Selected Color</span>
              </div>
            </div>
          </div>
        </div>

        {/* 제목 설정 섹션 */}
        <div className="space-y-4 pb-6 border-b border-slate-700/50">
          <div className="flex items-center justify-between">
            <label className="text-sm font-bold text-white uppercase tracking-wider">제목 표시</label>
            <button
              onClick={() => setShowTitle(!showTitle)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${showTitle ? 'bg-primary-600' : 'bg-slate-700'}`}
            >
              <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${showTitle ? 'translate-x-6' : ''}`} />
            </button>
          </div>

          {showTitle && (
            <div className="space-y-4 animate-in fade-in slide-in-from-top-1">
              <div>
                <label className="block text-[10px] font-bold text-slate-500 mb-1">제목 텍스트</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="슬라이드 상단에 표시될 제목"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-primary-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 mb-1">폰트 사이즈</label>
                  <div className="flex items-center bg-slate-950 border border-slate-700 rounded-lg px-2 py-1.5 h-[42px]">
                    <FontSizeInput fontSize={titleFontSize} setFontSize={setTitleFontSize} className="w-full bg-transparent outline-none text-white text-xs" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 mb-1">폰트 색상</label>
                  <div className="flex items-center space-x-2 bg-slate-950 border border-slate-700 rounded-lg px-2 py-1.5 h-[42px]">
                    <input
                      type="color"
                      value={titleColor}
                      onChange={(e) => setTitleColor(e.target.value)}
                      className="w-6 h-6 rounded-md bg-transparent cursor-pointer"
                    />
                    <span className="text-[10px] font-mono text-slate-400">{titleColor.toUpperCase()}</span>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 mb-1">제목 정렬</label>
                <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-700 h-[42px]">
                  {alignButtons.map((btn) => (
                    <button
                      key={btn.value}
                      onClick={() => setTitleAlign(btn.value as any)}
                      className={`flex-1 flex items-center justify-center rounded-lg transition-all duration-200 ${titleAlign === btn.value
                        ? 'bg-slate-700 text-white shadow-md'
                        : 'text-slate-500 hover:text-slate-300'
                        }`}
                      title={btn.label}
                    >
                      {btn.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 섹션 1: 글꼴 및 정렬 */}
        <div className="space-y-6 pb-6 border-b border-slate-700/50">
          {/* 글꼴 */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-bold text-slate-100 uppercase tracking-wider">글꼴</label>
              <a
                href="https://noonnu.cc/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[10px] font-bold text-slate-400 hover:text-primary-400 transition-colors bg-slate-900/50 px-2 py-1 rounded-md border border-slate-700/50"
                title="무료 폰트 사이트(눈누)로 이동"
              >
                <span>무료 폰트 받기</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
            <div className='w-full bg-slate-950 border-2 border-slate-700 rounded-lg text-white focus-within:ring-4 focus-within:ring-primary-500/50 focus-within:border-primary-500 transition-all font-bold'>
              <FontFaceSelect fontFace={fontFace} setFontFace={setFontFace} className="px-3 py-3" />
            </div>
          </div>

          {/* 텍스트 정렬 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold mb-2 text-slate-400">가로 정렬</label>
              <div className="flex bg-slate-950 p-1 rounded-xl border-2 border-slate-700">
                {alignButtons.map((btn) => (
                  <button
                    key={btn.value}
                    onClick={() => setTextAlign(btn.value as any)}
                    className={`flex-1 flex items-center justify-center py-2 rounded-lg transition-all duration-200 font-bold text-xs ${textAlign === btn.value
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-900/40'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                      }`}
                    title={btn.label}
                  >
                    {btn.icon}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold mb-2 text-slate-400">세로 정렬</label>
              <div className="flex bg-slate-950 p-1 rounded-xl border-2 border-slate-700">
                {vAlignButtons.map((btn) => (
                  <button
                    key={btn.value}
                    onClick={() => setVerticalAlign(btn.value as any)}
                    className={`flex-1 flex items-center justify-center py-2 rounded-lg transition-all duration-200 font-bold text-xs ${verticalAlign === btn.value
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-900/40'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                      }`}
                    title={btn.label}
                  >
                    {btn.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 섹션 2: 상세 수치 조절 */}
        <div className="space-y-6 pt-2">
          {/* 폰트 사이즈 & 색상 (한 줄에 배치 가능할 듯) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold mb-2 text-slate-100 uppercase tracking-wider">폰트 사이즈</label>
              <div className='w-full bg-slate-950 border-2 border-slate-700 rounded-lg text-white focus-within:ring-4 focus-within:ring-primary-500/50 focus-within:border-primary-500 transition-all font-bold overflow-hidden px-3 py-3'>
                <FontSizeInput fontSize={fontSize} setFontSize={setFontSize} className="w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none bg-transparent outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-slate-100 uppercase tracking-wider">폰트 색상</label>
              <div className="flex items-center space-x-3 bg-slate-950 p-2 rounded-xl border-2 border-slate-700 h-[52px]">
                <div className="w-8 h-8 rounded-full border-2 border-slate-400 overflow-hidden cursor-pointer hover:scale-105 transition-all bg-slate-900 shrink-0">
                  <input
                    type="color"
                    value={fontColor}
                    onChange={(e) => setFontColor(e.target.value)}
                    className="w-full h-full scale-[2] cursor-pointer"
                  />
                </div>
                <span className="text-white font-bold text-base font-mono tracking-tighter truncate">{fontColor.toUpperCase()}</span>
              </div>
            </div>
          </div>

          {/* 간격 조절 (한 줄에 배치) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 행간 조절 */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-bold text-slate-400">행간</label>
                <div className="flex items-center gap-1.5">
                  <input
                    type="number"
                    step="0.1"
                    min="1"
                    max="3"
                    value={lineSpacing}
                    onChange={(e) => setLineSpacing(Math.min(3, Math.max(1, parseFloat(e.target.value) || 1)))}
                    className="w-10 bg-slate-950 border border-slate-700 rounded px-1 py-0.5 text-right font-mono text-primary-300 text-[10px] focus:outline-none focus:border-primary-500"
                  />
                  <span className="text-slate-500 text-[10px] font-bold">x</span>
                </div>
              </div>
              <div className="bg-slate-950 p-2.5 rounded-xl border-2 border-slate-700 flex items-center gap-3">
                <input
                  type="range"
                  min="1.0"
                  max="3.0"
                  step="0.1"
                  value={lineSpacing}
                  onChange={(e) => setLineSpacing(parseFloat(e.target.value))}
                  className="flex-1 h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary-500"
                />
              </div>
            </div>

            {/* 자간 조절 */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-bold text-slate-400">자간</label>
                <div className="flex items-center gap-1.5">
                  <input
                    type="number"
                    step="0.5"
                    min="-5"
                    max="20"
                    value={letterSpacing}
                    onChange={(e) => setLetterSpacing(Math.min(20, Math.max(-5, parseFloat(e.target.value) || 0)))}
                    className="w-10 bg-slate-950 border border-slate-700 rounded px-1 py-0.5 text-right font-mono text-primary-300 text-[10px] focus:outline-none focus:border-primary-500"
                  />
                  <span className="text-slate-500 text-[10px] font-bold">pt</span>
                </div>
              </div>
              <div className="bg-slate-950 p-2.5 rounded-xl border-2 border-slate-700 flex items-center gap-3">
                <input
                  type="range"
                  min="-5.0"
                  max="20.0"
                  step="0.5"
                  value={letterSpacing}
                  onChange={(e) => setLetterSpacing(parseFloat(e.target.value))}
                  className="flex-1 h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary-500"
                />
              </div>
            </div>
          </div>

          {/* 슬라이드 당 줄 수 */}
          <div>
            <label className="block text-sm font-bold mb-2 text-slate-100 uppercase tracking-wider">슬라이드 당 줄 수</label>
            <div className="flex bg-slate-950 p-1 rounded-xl border-2 border-slate-700">
              {[2, 3, 4].map((lines) => (
                <button
                  key={lines}
                  onClick={() => setLinesPerSlide(lines)}
                  className={`flex-1 flex items-center justify-center py-2 rounded-lg transition-all duration-200 font-bold text-sm ${linesPerSlide === lines
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-900/40'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                    }`}
                >
                  {lines}줄
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StyleSettings;
