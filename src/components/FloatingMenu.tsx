import React, { useState } from 'react';

const FloatingMenu: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="fixed right-6 bottom-6 z-40 flex flex-col gap-4">
        {/* 후원하기 버튼 */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="group flex items-center justify-center w-14 h-14 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full shadow-lg hover:shadow-rose-500/50 hover:scale-110 transition-all duration-300 relative"
          aria-label="후원하기"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:animate-pulse"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>

          {/* Tooltip */}
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-2 bg-slate-800 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl border border-slate-700">
            응원하기 ☕️
            <div className="absolute top-1/2 -translate-y-1/2 -right-1.5 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-slate-800"></div>
          </div>
        </button>
      </div>

      {/* QR Code Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            <div className="text-center space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">응원하기</h3>
                <p className="text-slate-500 text-sm">현재 운영에 필요한 비용 및 유지보수 비용을 사비로 감당하고 있습니다. 응원해주시면 향후 더 나은 서비스로 보답하도록 노력 하겠습니다</p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex justify-center items-center overflow-hidden">
                <img
                  src="/image/qr.jpg"
                  alt="후원하기 QR 코드"
                  className="w-full h-auto max-w-[250px] object-contain rounded-xl shadow-sm mix-blend-multiply"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://via.placeholder.com/250?text=QR+Code+Missing";
                  }}
                />
              </div>

              <div className="text-sm text-slate-400 font-medium pt-2">
                감사합니다! 💛
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingMenu;
