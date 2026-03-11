import React from 'react';
import { FONT_LIST } from '../../constants/fonts';

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
            {FONT_LIST.map((font) => (
                <option key={font.value} value={font.value} style={{ fontFamily: font.value }}>
                    {font.name}
                </option>
            ))}
        </select>
    </div>
);

export default FontFaceSelect;
