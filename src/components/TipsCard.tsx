import React from 'react';

const TipsCard: React.FC = () => (
  <div className="mb-5 bg-primary-950/50 p-6 rounded-2xl border-2 border-primary-500/40 text-white text-base shadow-xl backdrop-blur-md">
    <h3 className="font-black text-primary-300 mb-3 text-lg flex items-center">
      <span className="mr-2">💡</span> 슬라이드 생성 가이드
    </h3>
    <ul className="list-disc list-inside space-y-2 font-medium">
      <li>PC에 폰트가 설치되어 있지 않으면 폰트가 제대로 보이지 않을 수 있습니다.</li>
      <li>한 슬라이드에는 가독성을 위해 최대 2줄만 포함됩니다.</li>
      <li>2줄 자동 분할 : 나뉜 각 문단 안에서 가사가 길어지면 최대 2줄씩 자동으로 슬라이드를 생성합니다.</li>
    </ul>
  </div>
);

export default TipsCard;
