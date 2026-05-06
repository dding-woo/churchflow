import { useState } from 'react';
import Header from './components/Header';
import StyleSettings from './components/StyleSettings';
import TipsCard from './components/TipsCard';
import Footer from './components/Footer';
import Preview from './components/Preview';
import Button from './components/common/Button';
import LyricsModal from './components/LyricsModal';
import { usePPTGenerator } from './components/common/features/usePPTGenerator';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    lyrics,
    setLyrics,
    bgImage,
    handleImageUpload,
    bgVideo,
    handleVideoUpload,
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
    fileInputRef
  } = usePPTGenerator();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900 text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <Header />
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

        <TipsCard />

        <main className="space-y-10">
          {/* Main Workspace: Side-by-Side Editor & Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Style Settings (Compact) */}
            <div className="lg:col-span-6 xl:col-span-5">
              <StyleSettings
                bgImage={bgImage}
                handleImageUpload={handleImageUpload}
                bgVideo={bgVideo}
                handleVideoUpload={handleVideoUpload}
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
                  bgVideo={bgVideo}
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
    </div>
  );
}





export default App;
