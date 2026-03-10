import React from 'react';

interface FontSizeInputProps {
    fontSize: number;
    setFontSize: (value: number) => void;
    className?: string;
}

const FontSizeInput: React.FC<FontSizeInputProps> = ({ fontSize, setFontSize, className }) => (
    <div className={className}>
        <input
            type="number"
            value={fontSize === 0 ? '' : fontSize}
            onChange={(e) => setFontSize(parseInt(e.target.value) || 0)}
            className={className}
            placeholder=""
        />
    </div>
);

export default FontSizeInput;
