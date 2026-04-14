import React from 'react';
import Header from './components/Header';
import LyricsInput from './components/LyricsInput';
import StyleSettings from './components/StyleSettings';
import TipsCard from './components/TipsCard';
import Footer from './components/Footer';
import Preview from './components/Preview';
import { usePPTGenerator } from './components/common/features/usePPTGenerator';

const App: React.FC = () => {
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
    textAlign,
    setTextAlign,
    verticalAlign,
    setVerticalAlign,
    isGenerating,
    generatePPT,
    fileInputRef
  } = usePPTGenerator();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900 text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <Header />

        <TipsCard />
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Side: Input */}
          <LyricsInput lyrics={lyrics} setLyrics={setLyrics} />


          {/* Right Side: Preview & Options */}
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
              textAlign={textAlign}
              setTextAlign={setTextAlign}
              verticalAlign={verticalAlign}
              setVerticalAlign={setVerticalAlign}
              isGenerating={isGenerating}
              generatePPT={generatePPT}
              fileInputRef={fileInputRef}
            />
            <Preview
              lyrics={lyrics}
              fontFace={fontFace}
              fontSize={fontSize}
              fontColor={fontColor}
              textAlign={textAlign}
              verticalAlign={verticalAlign}
              bgImage={bgImage}
            />


          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
