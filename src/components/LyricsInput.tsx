import React from 'react';

interface LyricsInputProps {
  lyrics: string;
  setLyrics: (value: string) => void;
}

const LyricsInput: React.FC<LyricsInputProps> = ({ lyrics, setLyrics }) => (
  <section className="space-y-6">
    <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-600 shadow-2xl backdrop-blur-md">
      <label className="block text-sm font-bold mb-3 text-white uppercase tracking-wider">가사 입력</label>
      <textarea
        className="w-full h-80 bg-slate-950 border-2 border-slate-500 rounded-xl p-4 text-white placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-primary-500/50 focus:border-primary-400 transition-all resize-none text-lg overflow-visible"
        placeholder="여기에 가사를 입력하세요. 
문단을 나누면 슬라이드 섹션이 구분됩니다.

예시:
첫 번째 문단 첫 줄
첫 번째 문단 두 줄

두 번째 문단 첫 줄..."
        value={lyrics}
        onChange={(e) => setLyrics(e.target.value)}
      />
    </div>
  </section>
);

export default LyricsInput;
