# 프로젝트 명: Lyrics to PPT Converter

## 1. 개요
사용자가 입력한 가사를 분석하여 문단별/두 줄 단위로 분할하고, 배경 이미지와 폰트 설정을 적용하여 PPTX 파일로 추출하는 리액트 기반 웹 애플리케이션.

## 2. 주요 기능 요구사항

### 2.1 가사 입력 및 파싱 (Input & Parsing)
* **Textarea 입력**: 사용자가 가사를 자유롭게 붙여넣을 수 있는 공간 제공.
* **슬라이드 분할 로직**:
    1.  **문단 기준**: 빈 줄(Double Newline)을 기준으로 슬라이드 섹션을 나눔.
    2.  **줄 수 제한**: 한 슬라이드에는 최대 **두 줄**만 노출.
    3.  예시: 한 문단이 4줄일 경우, 해당 문단은 2개의 슬라이드로 생성됨.

### 2.2 스타일 및 커스터마이징 (Styling)
* **배경 이미지**: 로컬 이미지 파일을 업로드하여 모든 슬라이드의 배경으로 설정.
* **폰트 설정**: 
    * 폰트 종류 선택 (Google Fonts 연동 또는 기본 시스템 폰트).
    * 폰트 크기(FontSize) 조절.
    * 텍스트 색상 및 정렬(중앙 정렬 필수) 옵션.

### 2.3 PPT 추출 (Export)
* **PptxGenJS 라이브러리** 활용: 브라우저 환경에서 직접 .pptx 파일 생성.
* **변환 버튼**: 클릭 시 설정된 로직과 스타일에 따라 즉시 다운로드.

## 3. 기술 스택
* **Framework**: React (Vite 추천)
* **UI Library**: Tailwind CSS 또는 Ant Design
* **PPT Library**: `pptxgenjs`
* **State Management**: React Hooks (useState, useRef)

## 4. 로직 상세 (Pseudocode)
```javascript
const lines = text.split('\n\n'); // 문단 나누기
lines.forEach(paragraph => {
  const phrases = paragraph.split('\n').filter(p => p.trim() !== "");
  for (let i = 0; i < phrases.length; i += 2) {
    const slideText = phrases.slice(i, i + 2).join('\n');
    // slideText를 새로운 슬라이드에 추가
  }
});

---

### 💡 구현을 위한 팁

1.  **핵심 라이브러리**: PPT를 만드는 데 가장 표준적으로 사용되는 라이브러리는 **`pptxgenjs`**입니다. 
    * `npm install pptxgenjs` 명령어로 설치하세요.
2.  **줄 바꿈 처리**: 가사 데이터에 `\r\n`이 섞여 있을 수 있으니 정규식(`.split(/\n\s*\n/)`)을 사용하여 문단을 나누는 것이 더 안전합니다.
3.  **이미지 처리**: 배경 이미지를 넣을 때는 사용자가 업로드한 파일(File 객체)을 **Data URL**(`FileReader` 이용)로 변환해야 PPT 라이브러리에서 인식할 수 있습니다.

**이 파일 내용을 안티그래비티 에디터에 붙여넣으시면, 에디터가 전체적인 컴포넌트 구조와 슬라이드 생성 로직을 자동으로 짜줄 것입니다. 추가로 구체적인 UI 디자인(예: 테일윈드 스타일)이 필요하시면 말씀해 주세요!**