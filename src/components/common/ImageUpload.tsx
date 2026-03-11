import React, { ChangeEvent, RefObject } from 'react';

interface ImageUploadProps {
    bgImage: string | null;
    handleImageUpload: (e: ChangeEvent<HTMLInputElement>) => void;
    fileInputRef: RefObject<HTMLInputElement | null>;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
    bgImage,
    handleImageUpload,
    fileInputRef
}) => (
    <div>
        <label className="block text-sm font-bold mb-2 text-slate-100 italic">배경 이미지</label>
        <div
            onClick={() => fileInputRef.current?.click()}
            className="group relative h-40 w-full border-2 border-dashed border-slate-400 rounded-xl flex items-center justify-center cursor-pointer hover:border-white hover:bg-slate-700 transition-all overflow-hidden"
        >
            {bgImage ? (
                <>
                    <img src={bgImage} alt="Preview" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white font-bold bg-black/80 px-4 py-2 rounded-lg border border-white">이미지 변경</span>
                    </div>
                </>
            ) : (
                <div className="text-center">
                    <svg className="mx-auto h-12 w-12 text-slate-300 group-hover:text-white mb-2 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-slate-200 font-bold group-hover:text-white">배경 이미지 업로드</p>
                </div>
            )}
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                className="hidden"
                accept="image/*"
            />
        </div>
    </div>
);

export default ImageUpload;
