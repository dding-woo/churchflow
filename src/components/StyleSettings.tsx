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
  isGenerating,
  generatePPT,
  fileInputRef
}) => (
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

export default StyleSettings;
