import React from 'react';
import Header from './components/Header';
import LyricsInput from './components/LyricsInput';
import StyleSettings from './components/StyleSettings';
import TipsCard from './components/TipsCard';
import Footer from './components/Footer';
import { usePPTGenerator } from './components/common/features/usePPTGenerator';

function App() {
  const {
    lyrics,
    setLyrics,
    bgImage,
    handleImageUpload,
    fontSize,
    setFontSize,
    fontColor,
    setFontColor,
    fontFace,
    setFontFace,
    isGenerating,
    generatePPT,
    fileInputRef
  } = usePPTGenerator();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900 text-white p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        <Header />

        <main className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side: Input */}
          <LyricsInput lyrics={lyrics} setLyrics={setLyrics} />

          {/* Right Side: Options & Actions */}
          <div className="space-y-6">
            <StyleSettings 
              bgImage={bgImage}
              handleImageUpload={handleImageUpload}
              fontFace={fontFace}
              setFontFace={setFontFace}
              fontSize={fontSize}
              setFontSize={setFontSize}
              fontColor={fontColor}
              setFontColor={setFontColor}
              isGenerating={isGenerating}
              generatePPT={generatePPT}
              fileInputRef={fileInputRef}
            />
            <TipsCard />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
