import React from 'react';

const TipsCard: React.FC = () => (
  <div className="bg-primary-950/50 p-6 rounded-2xl border-2 border-primary-500/40 text-white text-base shadow-xl backdrop-blur-md">
    <h3 className="font-black text-primary-300 mb-3 text-lg flex items-center">
      <span className="mr-2">💡</span> 슬라이드 생성 가이드
    </h3>
    <ul className="list-disc list-inside space-y-2 font-medium">
      <li>한 슬라이드에는 가독성을 위해 최대 2줄만 포함됩니다.</li>
      <li>문단을 나누면(빈 줄 추가) 슬라이드가 새로 시작됩니다.</li>
    </ul>
  </div>
);

export default TipsCard;
