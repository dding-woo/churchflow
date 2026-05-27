import { useState } from 'react';
import Header from './components/Header';
import StyleSettings from './components/StyleSettings';
import TipsCard from './components/TipsCard';
import Footer from './components/Footer';
import Preview from './components/Preview';
import Button from './components/common/Button';
import LyricsModal from './components/LyricsModal';
import FloatingMenu from './components/FloatingMenu';
import SongSearchModal from './components/SongSearchModal';
import { usePPTGenerator } from './components/common/features/usePPTGenerator';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const {
    lyrics,
    setLyrics,
    bgImage,
    handleImageUpload,
    // bgVideo,
    // handleVideoUpload,
    fontSize,
    setFontSize,
    fontColor,
    setFontColor,
    fontFace,
    setFontFace,
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
    isGenerating,
    generatePPT,
    fileInputRef,
    songList,
    activeIndex,
    setActiveIndex,
    addSong,
    removeSong
  } = usePPTGenerator();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900 text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <Header />
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setIsSearchModalOpen(true)}
              className="flex items-center gap-3 px-6 py-4 bg-slate-800/80 hover:bg-slate-700 border border-slate-600 rounded-2xl font-bold transition-all transform hover:-translate-y-1 active:scale-95 shadow-xl group"
            >
              <span className="p-2 bg-yellow-500/20 text-yellow-400 rounded-lg group-hover:bg-yellow-500 group-hover:text-slate-900 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
              <div className="text-left">
                <div className="text-sm text-slate-400 font-medium">검색</div>
                <div className="text-lg">찬양 검색하기</div>
              </div>
            </button>

            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-3 px-6 py-4 bg-slate-800/80 hover:bg-slate-700 border border-slate-600 rounded-2xl font-bold transition-all transform hover:-translate-y-1 active:scale-95 shadow-xl group"
            >
              <span className="p-2 bg-primary-500/20 text-primary-400 rounded-lg group-hover:bg-primary-500 group-hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              </span>
              <div className="text-left">
                <div className="text-sm text-slate-400 font-medium">콘텐츠</div>
                <div className="text-lg">가사 수정하기</div>
              </div>
            </button>
          </div>
        </div>

        <TipsCard />

        <main className="space-y-10">
          {/* Playlist UI */}
          <div className="bg-slate-800/50 p-4 md:p-6 rounded-3xl border border-slate-700/50 backdrop-blur-sm shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-400">
                  <path d="M9 18V5l12-2v13"></path>
                  <circle cx="6" cy="18" r="3"></circle>
                  <circle cx="18" cy="16" r="3"></circle>
                </svg>
                재생목록 (PPT 생성 목록)
              </h3>
              <span className="text-sm text-slate-400 font-medium">총 {songList.length}곡</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {songList.map((song, index) => (
                <div 
                  key={song.id} 
                  className={`flex items-center gap-2 px-4 py-2 rounded-2xl border transition-all ${
                    activeIndex === index 
                      ? 'bg-primary-500/20 border-primary-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]' 
                      : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-300'
                  }`}
                >
                  <button 
                    onClick={() => setActiveIndex(index)}
                    className="font-bold whitespace-nowrap outline-none focus:outline-none"
                  >
                    {song.title || `새 찬양 ${index + 1}`}
                  </button>
                  {songList.length > 1 && (
                    <button 
                      onClick={() => removeSong(index)}
                      className={`p-1 rounded-full hover:bg-black/20 transition-colors ${activeIndex === index ? 'text-primary-300 hover:text-primary-100' : 'text-slate-500 hover:text-red-400'}`}
                      title="삭제"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                  )}
                </div>
              ))}
              <button 
                onClick={() => addSong()}
                className="flex items-center gap-2 px-4 py-2 rounded-2xl border border-dashed border-slate-600 bg-slate-800/50 text-slate-400 hover:text-white hover:border-slate-500 hover:bg-slate-700/50 transition-all font-bold"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                곡 추가
              </button>
            </div>
          </div>
          {/* Main Workspace: Side-by-Side Editor & Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Style Settings (Compact) */}
            <div className="lg:col-span-6 xl:col-span-5">
              <StyleSettings
                bgImage={bgImage}
                handleImageUpload={handleImageUpload}
                // bgVideo={bgVideo}
                // handleVideoUpload={handleVideoUpload}
                bgColor={bgColor}
                setBgColor={setBgColor}
                title={title}
                setTitle={setTitle}
                showTitle={showTitle}
                setShowTitle={setShowTitle}
                titleFontSize={titleFontSize}
                setTitleFontSize={setTitleFontSize}
                titleColor={titleColor}
                setTitleColor={setTitleColor}
                titleAlign={titleAlign}
                setTitleAlign={setTitleAlign}
                fontFace={fontFace}
                setFontFace={setFontFace}
                fontSize={fontSize}
                setFontSize={setFontSize}
                fontColor={fontColor}
                setFontColor={setFontColor}
                textAlign={textAlign}
                setTextAlign={setTextAlign}
                verticalAlign={verticalAlign}
                setVerticalAlign={setVerticalAlign}
                lineSpacing={lineSpacing}
                setLineSpacing={setLineSpacing}
                letterSpacing={letterSpacing}
                setLetterSpacing={setLetterSpacing}
                linesPerSlide={linesPerSlide}
                setLinesPerSlide={setLinesPerSlide}
                fileInputRef={fileInputRef}
              />
            </div>

            {/* Right: Preview (Prominent & Sticky) */}
            <div className="lg:col-span-6 xl:col-span-7 space-y-8 lg:sticky lg:top-6">
              <div className="bg-slate-800/30 p-8 rounded-[2.5rem] border border-slate-700/50 backdrop-blur-md shadow-inner">
                <Preview
                  lyrics={lyrics}
                  title={title}
                  showTitle={showTitle}
                  titleFontSize={titleFontSize}
                  titleColor={titleColor}
                  titleAlign={titleAlign}
                  fontFace={fontFace}
                  fontSize={fontSize}
                  fontColor={fontColor}
                  textAlign={textAlign}
                  verticalAlign={verticalAlign}
                  lineSpacing={lineSpacing}
                  letterSpacing={letterSpacing}
                  linesPerSlide={linesPerSlide}
                  bgImage={bgImage}
                  // bgVideo={bgVideo}
                  bgColor={bgColor}
                />
              </div>

              {/* Action: Big Download Button */}
              <div className="flex justify-center">
                <div className="w-full max-w-lg">
                  <Button generatePPT={generatePPT} isGenerating={isGenerating} />
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>

      <LyricsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        lyrics={lyrics}
        setLyrics={setLyrics}
      />

      <FloatingMenu />

      <SongSearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelectSong={(newTitle, newLyrics) => {
          if (!lyrics && !title) {
            setTitle(newTitle);
            setLyrics(newLyrics);
          } else {
            addSong(newTitle, newLyrics);
          }
          setShowTitle(true);

        }}
      />
    </div>
  );
}

export default App;
