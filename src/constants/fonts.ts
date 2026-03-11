export interface FontData {
  name: string;
  value: string;
  cdn?: string;
}

export const FONT_LIST: FontData[] = [
  { name: 'Pretendard', value: 'Pretendard', cdn: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css' },
  { name: '나눔고딕', value: 'Nanum Gothic', cdn: 'https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap' },
  { name: '노토산스 KR', value: 'Noto Sans KR', cdn: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap' },
  { name: 'G마켓 산스', value: 'GmarketSansMedium', cdn: 'https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff' },
  { name: '온글잎 위씨리스트', value: 'Ownglyph Wichylist', cdn: 'https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/OwnglyphWichylist.woff2' },
  { name: '조선일보명조', value: 'Chosunilbo_myungjo', cdn: 'https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Chosunilbo_myungjo.woff' },
  { name: '맑은 고딕', value: 'Malgun Gothic' },
  { name: 'Arial', value: 'Arial' },
  { name: 'Times New Roman', value: 'Times New Roman' },
  { name: 'Courier New', value: 'Courier New' },
  { name: 'Georgia', value: 'Georgia' },
];
