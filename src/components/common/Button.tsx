import React from 'react';

interface ButtonProps {
    generatePPT: () => void;
    isGenerating: boolean;
}

const Button: React.FC<ButtonProps> = ({ generatePPT, isGenerating }) => {
    return (
        <button
            onClick={generatePPT}
            disabled={isGenerating}
            className={`w-full py-5 rounded-2xl font-black text-xl shadow-2xl transition-all transform hover:scale-[1.03] active:scale-[0.97] border-2 border-white/20 ${isGenerating
                ? 'bg-slate-600 cursor-not-allowed text-slate-400'
                : 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-white hover:to-white hover:text-primary-900 text-white shadow-[0_0_20px_rgba(14,165,233,0.4)]'
                }`}
        >
            {isGenerating ? (
                <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    변환 중...
                </span>
            ) : 'PPT 생성 및 다운로드'}
        </button>
    )
}

export default Button;