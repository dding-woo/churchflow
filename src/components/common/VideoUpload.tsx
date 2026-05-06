import React, { ChangeEvent, useRef } from 'react';

interface VideoUploadProps {
    bgVideo: string | null;
    handleVideoUpload: (e: ChangeEvent<HTMLInputElement>) => void;
}

const VideoUpload: React.FC<VideoUploadProps> = ({
    bgVideo,
    handleVideoUpload
}) => {
    const videoInputRef = useRef<HTMLInputElement>(null);

    return (
        <div>
            <div
                onClick={() => videoInputRef.current?.click()}
                className="group relative h-40 w-full border-2 border-dashed border-slate-400 rounded-xl flex items-center justify-center cursor-pointer hover:border-white hover:bg-slate-700 transition-all overflow-hidden"
            >
                {bgVideo ? (
                    <>
                        <video 
                            src={bgVideo} 
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                            muted
                            autoPlay
                            loop
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-white font-bold bg-black/80 px-4 py-2 rounded-lg border border-white">동영상 변경</span>
                        </div>
                    </>
                ) : (
                    <div className="text-center">
                        <svg className="mx-auto h-12 w-12 text-slate-300 group-hover:text-white mb-2 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <p className="text-slate-200 font-bold group-hover:text-white">배경 동영상 업로드</p>
                    </div>
                )}
                <input
                    type="file"
                    ref={videoInputRef}
                    onChange={handleVideoUpload}
                    className="hidden"
                    accept="video/*"
                />
            </div>
        </div>
    );
};

export default VideoUpload;
