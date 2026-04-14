import React, { ChangeEvent, RefObject } from 'react';
import Button from './common/Button';
import ImageUpload from './common/ImageUpload';
import FontFaceSelect from './common/FontFaceSelect';
import FontSizeInput from './common/FontSizeInput';

interface StyleSettingsProps {
  bgImage: string | null;
  handleImageUpload: (e: ChangeEvent<HTMLInputElement>) => void;
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
  isGenerating: boolean;
  generatePPT: () => Promise<void>;
  fileInputRef: RefObject<HTMLInputElement | null>;
}

const StyleSettings: React.FC<StyleSettingsProps> = ({
  bgImage,
  handleImageUpload,
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
  isGenerating,
  generatePPT,
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

        {/* 배경 이미지 */}
        <ImageUpload
          bgImage={bgImage}
          handleImageUpload={handleImageUpload}
          fileInputRef={fileInputRef}
        />

        <div className="grid grid-cols-2 gap-6">
          {/* 폰트 */}
          <div>
            <label className="block text-sm font-bold mb-2 text-slate-100">폰트</label>
            <div className='w-full bg-slate-950 border-2 border-slate-500 rounded-lg p-3 text-white focus:ring-4 focus:ring-primary-500/50 outline-none font-bold'>
              <FontFaceSelect fontFace={fontFace} setFontFace={setFontFace} className="" />
            </div>
          </div>

          {/* 글자 크기 */}
          <div>
            <label className="block text-sm font-bold mb-2 text-slate-100">크기 (pt)</label>
            <div className='w-full bg-slate-950 border-2 border-slate-500 rounded-lg p-3 text-white focus:ring-4 focus:ring-primary-500/50 outline-none font-bold'>
              <FontSizeInput fontSize={fontSize} setFontSize={setFontSize} className="w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
            </div>
          </div>
        </div>

        {/* 텍스트 정렬 */}
        <div>
          <label className="block text-sm font-bold mb-3 text-slate-100">텍스트 정렬</label>
          <div className="space-y-4">
            {/* 가로 정렬 */}
            <div className="flex bg-slate-950 p-1 rounded-xl border-2 border-slate-700">
              {alignButtons.map((btn) => (
                <button
                  key={btn.value}
                  onClick={() => setTextAlign(btn.value as any)}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg transition-all duration-200 font-bold text-sm ${
                    textAlign === btn.value
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-900/40'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  {btn.icon}
                  <span>{btn.label}</span>
                </button>
              ))}
            </div>

            {/* 세로 정렬 */}
            <div className="flex bg-slate-950 p-1 rounded-xl border-2 border-slate-700">
              {vAlignButtons.map((btn) => (
                <button
                  key={btn.value}
                  onClick={() => setVerticalAlign(btn.value as any)}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg transition-all duration-200 font-bold text-sm ${
                    verticalAlign === btn.value
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-900/40'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  {btn.icon}
                  <span>{btn.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 행간 조절 */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-bold text-slate-100">행간 조절</label>
            <span className="text-primary-300 font-black font-mono">{lineSpacing.toFixed(1)}x</span>
          </div>
          <div className="bg-slate-950 p-4 rounded-xl border-2 border-slate-700 flex items-center gap-4">
            <input
              type="range"
              min="1.0"
              max="2.5"
              step="0.1"
              value={lineSpacing}
              onChange={(e) => setLineSpacing(parseFloat(e.target.value))}
              className="flex-1 h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary-500"
            />
          </div>
        </div>

        {/* 글자 색상 */}
        <div>
          <label className="block text-sm font-bold mb-2 text-slate-100">글자 색상</label>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full border-4 border-slate-400 overflow-hidden cursor-pointer hover:scale-110 transition-all bg-slate-900">
              <input
                type="color"
                value={fontColor}
                onChange={(e) => setFontColor(e.target.value)}
                className="w-full h-full scale-[2] cursor-pointer"
              />
            </div>
            <span className="text-white font-black text-xl font-mono tracking-tighter bg-slate-950 px-3 py-1 rounded-md border border-slate-700">{fontColor.toUpperCase()}</span>
          </div>
        </div>

        {/* 다운로드 버튼 */}
        <Button generatePPT={generatePPT} isGenerating={isGenerating}></Button>
      </div>
    </section>
  );
};

export default StyleSettings;
