import React, { useState, useEffect, useRef } from 'react';
import songsData from '../data/songs.json';

interface Song {
  id: number;
  title: string;
  artist: string;
  lyrics: string;
}

interface SongSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSong: (title: string, lyrics: string) => void;
}

const SongSearchModal: React.FC<SongSearchModalProps> = ({ isOpen, onClose, onSelectSong }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSongs, setFilteredSongs] = useState<Song[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setSearchTerm('');
      setFilteredSongs(songsData);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredSongs(songsData);
      return;
    }

    const lowercasedTerm = searchTerm.toLowerCase();
    const results = songsData.filter(
      song => 
        song.title.toLowerCase().includes(lowercasedTerm) || 
        song.lyrics.toLowerCase().includes(lowercasedTerm) ||
        song.artist.toLowerCase().includes(lowercasedTerm)
    );
    setFilteredSongs(results);
  }, [searchTerm]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200" onClick={onClose}>
      <div 
        className="bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-3xl shadow-2xl flex flex-col max-h-[85vh] overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header / Search Bar */}
        <div className="p-6 border-b border-slate-800 bg-slate-900 relative">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-400">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              찬양 검색
            </h2>
            <button 
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
          
          <div className="relative">
            <input 
              ref={inputRef}
              type="text" 
              placeholder="제목, 가사, 아티스트명으로 검색해보세요..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950 border-2 border-slate-700 text-white px-5 py-4 pl-12 rounded-2xl focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20 text-lg transition-all placeholder:text-slate-500"
            />
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-slate-500 hover:text-slate-300 transition-colors bg-slate-800 rounded-full"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            )}
          </div>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto flex-1 p-4 bg-slate-950/50">
          {filteredSongs.length > 0 ? (
            <div className="space-y-3">
              {filteredSongs.map((song) => (
                <button
                  key={song.id}
                  onClick={() => {
                    onSelectSong(song.title, song.lyrics);
                    onClose();
                  }}
                  className="w-full text-left p-4 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-primary-500/50 rounded-2xl transition-all duration-200 group relative overflow-hidden"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-primary-300 transition-colors line-clamp-1">
                      {song.title}
                    </h3>
                    <span className="text-xs font-medium text-slate-400 bg-slate-900 px-2.5 py-1 rounded-full whitespace-nowrap border border-slate-700">
                      {song.artist}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">
                    {song.lyrics}
                  </p>
                </button>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mb-4 border border-slate-700">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              <p className="text-lg font-bold text-white mb-1">검색 결과가 없습니다.</p>
              <p className="text-slate-500 text-sm">다른 키워드로 검색해 보세요.</p>
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900 flex justify-between items-center text-xs text-slate-500 font-medium">
          <span>내장된 기본 찬양 DB에서 검색됩니다.</span>
          <span>{filteredSongs.length}곡 검색됨</span>
        </div>
      </div>
    </div>
  );
};

export default SongSearchModal;
