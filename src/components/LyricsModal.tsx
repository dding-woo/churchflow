import React from 'react';

interface LyricsModalProps {
  isOpen: boolean;
  onClose: () => void;
  lyrics: string;
  setLyrics: (value: string) => void;
}

const LyricsModal: React.FC<LyricsModalProps> = ({ isOpen, onClose, lyrics, setLyrics }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div 
        className="w-full max-w-2xl bg-slate-800 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-slate-700 flex items-center justify-between bg-slate-800/50">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-500/20 text-primary-400">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            </span>
            <div>
              <h3 className="text-xl font-bold text-white leading-tight">가사 수정하기</h3>
              <p className="text-sm text-slate-400">2줄마다 자동으로 슬라이드가 나뉩니다.</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-700 rounded-full transition-colors text-slate-400 hover:text-white"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div className="p-6">
          <textarea
            className="w-full h-80 bg-slate-950 border-2 border-slate-700 rounded-2xl p-5 text-white placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-primary-500/30 focus:border-primary-500 transition-all resize-none text-lg font-medium leading-relaxed overflow-y-auto"
            placeholder="여기에 가사를 입력하세요..."
            value={lyrics}
            onChange={(e) => setLyrics(e.target.value)}
            autoFocus
          />
        </div>

        <div className="p-6 pt-0 flex justify-end">
          <button 
            onClick={onClose}
            className="px-8 py-3 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-xl shadow-lg shadow-primary-900/20 transform active:scale-95 transition-all"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default LyricsModal;
