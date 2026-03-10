import React from 'react';

interface FontFaceSelectProps {
    fontFace: string;
    setFontFace: (value: string) => void;
    className?: string;
}

const FontFaceSelect: React.FC<FontFaceSelectProps> = ({ fontFace, setFontFace, className }) => (
    <div className={className}>
        <select
            value={fontFace}
            onChange={(e) => setFontFace(e.target.value)}
            className={className}
        >
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
            <option value="Georgia">Georgia</option>
            <option value="Malgun Gothic">맑은 고딕</option>
            <option value="NanumGothic">나눔고딕</option>
            <option value="Pretendard">Pretendard</option>
            <option value="Ownglyph Wichylist">온글잎 위씨리스트</option>
        </select>
    </div>
);

export default FontFaceSelect;
