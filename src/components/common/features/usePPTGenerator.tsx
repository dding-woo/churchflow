import { useState, useRef, ChangeEvent } from 'react';
import pptxgen from 'pptxgenjs';

export interface SongData {
  id: string;
  title: string;
  lyrics: string;
}

export const usePPTGenerator = () => {
  const [songList, setSongList] = useState<SongData[]>([{ id: Date.now().toString(), title: '', lyrics: '' }]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const lyrics = songList[activeIndex]?.lyrics || '';
  const title = songList[activeIndex]?.title || '';

  const setLyrics = (newLyrics: string) => {
    const newList = [...songList];
    if (newList[activeIndex]) {
      newList[activeIndex].lyrics = newLyrics;
      setSongList(newList);
    }
  };

  const setTitle = (newTitle: string) => {
    const newList = [...songList];
    if (newList[activeIndex]) {
      newList[activeIndex].title = newTitle;
      setSongList(newList);
    }
  };

  const addSong = (newTitle: string = '', newLyrics: string = '') => {
    const newSong = { id: Date.now().toString() + Math.random().toString(), title: newTitle, lyrics: newLyrics };
    setSongList([...songList, newSong]);
    setActiveIndex(songList.length);
  };

  const removeSong = (index: number) => {
    const newList = songList.filter((_, i) => i !== index);
    if (newList.length === 0) {
      newList.push({ id: Date.now().toString(), title: '', lyrics: '' });
    }
    setSongList(newList);
    if (activeIndex >= newList.length) {
      setActiveIndex(Math.max(0, newList.length - 1));
    } else if (activeIndex === index) {
      setActiveIndex(Math.max(0, index - 1));
    }
  };
  const [showTitle, setShowTitle] = useState<boolean>(false);
  const [titleFontSize, setTitleFontSize] = useState<number>(24);
  const [titleColor, setTitleColor] = useState<string>('#AAAAAA');
  const [titleAlign, setTitleAlign] = useState<'left' | 'center' | 'right'>('left');
  const [bgImage, setBgImage] = useState<string | null>(null);
  // const [bgVideo, setBgVideo] = useState<string | null>(null);
  const [bgColor, setBgColor] = useState<string>('#000000');
  const [fontSize, setFontSize] = useState<number>(36);
  const [fontColor, setFontColor] = useState<string>('#FFFFFF');
  const [fontFace, setFontFace] = useState<string>('Arial');
  const [textAlign, setTextAlign] = useState<'left' | 'center' | 'right'>('center');
  const [verticalAlign, setVerticalAlign] = useState<'top' | 'middle' | 'bottom'>('middle');
  const [lineSpacing, setLineSpacing] = useState<number>(1.2);
  const [letterSpacing, setLetterSpacing] = useState<number>(0);
  const [linesPerSlide, setLinesPerSlide] = useState<number>(2);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setBgImage(event.target.result as string);
          // setBgVideo(null); // 비디오 초기화
          // setBgVideoData(null); // 비디오 데이터 초기화
        }
      };
      reader.readAsDataURL(file);
    }
  };

  /*
  const handleVideoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // 미리보기를 위한 Blob URL 생성 (대용량 파일 대응)
      const blobUrl = URL.createObjectURL(file);
      setBgVideo(blobUrl);
      setBgImage(null); // 이미지 초기화

      // PPT 생성을 위한 Base64 변환
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setBgVideoData(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
  };
  */

  // State for raw video data (base64)
  // const [bgVideoData, setBgVideoData] = useState<string | null>(null);

  const generatePPT = async () => {
    const hasLyrics = songList.some(song => song.lyrics.trim());
    if (!hasLyrics) {
      alert('가사를 입력해주세요.');
      return;
    }

    setIsGenerating(true);
    try {
      const pres = new pptxgen();
      pres.layout = 'LAYOUT_WIDE';

      songList.forEach((song) => {
        if (!song.lyrics.trim()) return;

        // Split lyrics into paragraphs by double newline
        const paragraphs = song.lyrics.split(/\n\s*\n/);

        paragraphs.forEach((paragraph) => {
          const lines = paragraph.split('\n').map(line => line.trim()).filter(line => line !== '');

          // Groups of max linesPerSlide lines per slide
          for (let i = 0; i < lines.length; i += linesPerSlide) {
            const slideText = lines.slice(i, i + linesPerSlide).join('\n');
            const slide = pres.addSlide();

            // 배경 설정
            /*
            if (bgVideoData) {
              slide.addMedia({
                type: 'video',
                data: bgVideoData,
                x: 0, y: 0, w: '100%', h: '100%'
              });
            } else */
            if (bgImage) {
              slide.background = { data: bgImage };
            } else {
              slide.background = { color: bgColor.replace('#', '') };
            }

            // Add title if enabled
            if (showTitle && song.title) {
              slide.addText(song.title, {
                x: '5%',
                y: '5%',
                w: '90%',
                h: '10%',
                align: titleAlign,
                valign: 'middle',
                fontSize: titleFontSize,
                color: titleColor.replace('#', ''),
                fontFace: fontFace,
                bold: true
              });
            }

            // Add text with better visibility (shadow/outline)
            slide.addText(slideText, {
              x: '5%',
              y: '10%', // Giving more room for vertical alignment adjustment
              w: '90%',
              h: '80%',
              align: textAlign,
              valign: verticalAlign,
              lineSpacingMultiple: lineSpacing,
              charSpacing: letterSpacing,
              fontSize: fontSize,
              color: fontColor.replace('#', ''),
              fontFace: fontFace,
              bold: true,
              breakLine: true,
              shadow: { type: 'outer', color: '000000', blur: 3, offset: 2, opacity: 0.8 }
            });
          }
        });
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
  };
};
