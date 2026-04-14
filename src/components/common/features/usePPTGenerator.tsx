import { useState, useRef, ChangeEvent } from 'react';
import pptxgen from 'pptxgenjs';

export const usePPTGenerator = () => {
  const [lyrics, setLyrics] = useState<string>('');
  const [bgImage, setBgImage] = useState<string | null>(null);
  const [fontSize, setFontSize] = useState<number>(36);
  const [fontColor, setFontColor] = useState<string>('#FFFFFF');
  const [fontFace, setFontFace] = useState<string>('Arial');
  const [textAlign, setTextAlign] = useState<'left' | 'center' | 'right'>('center');
  const [verticalAlign, setVerticalAlign] = useState<'top' | 'middle' | 'bottom'>('middle');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setBgImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const generatePPT = async () => {
    if (!lyrics.trim()) {
      alert('가사를 입력해주세요.');
      return;
    }

    setIsGenerating(true);
    try {
      const pres = new pptxgen();
      pres.layout = 'LAYOUT_WIDE';

      // Split lyrics into paragraphs by double newline
      const paragraphs = lyrics.split(/\n\s*\n/);

      paragraphs.forEach((paragraph) => {
        const lines = paragraph.split('\n').map(line => line.trim()).filter(line => line !== '');

        // Groups of max 2 lines per slide
        for (let i = 0; i < lines.length; i += 2) {
          const slideText = lines.slice(i, i + 2).join('\n');
          const slide = pres.addSlide();

          // Set background if exists
          if (bgImage) {
            slide.background = { data: bgImage };
          } else {
            slide.background = { color: '000000' };
          }

          // Add text with better visibility (shadow/outline)
          slide.addText(slideText, {
            x: '5%',
            y: '10%', // Giving more room for vertical alignment adjustment
            w: '90%',
            h: '80%',
            align: textAlign,
            valign: verticalAlign,
            fontSize: fontSize,
            color: fontColor.replace('#', ''),
            fontFace: fontFace,
            bold: true,
            breakLine: true,
            shadow: { type: 'outer', color: '000000', blur: 3, offset: 2, opacity: 0.8 }
          });
        }
      });

      await pres.writeFile({ fileName: `lyrics_${new Date().getTime()}.pptx` });
    } catch (error) {
      console.error('Error generating PPT:', error);
      alert('PPT 생성 중 오류가 발생했습니다.');
    } finally {
      setIsGenerating(false);
    }
  };

  return {
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
  };
};
