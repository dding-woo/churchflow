import React from 'react';

const Footer: React.FC = () => (
  <footer className="mt-20 pb-12 pt-8 border-t border-slate-800 text-center space-y-4">
    <div className="max-w-2xl mx-auto space-y-2">
      <p className="text-slate-100 font-bold tracking-tight">예배 준비에 도움이 되길 바라며 만든 개인 프로젝트입니다. <br />생성된 자료는 비영리적 용도로만 사용해 주세요. <br />저작권 및 활용에 관한 책임은 사용자에게 있습니다.</p>
    </div>
    <p className="text-slate-500 text-[10px] font-black tracking-[0.1em] pt-6 text-white">
      &copy; {new Date().getFullYear()} ChurchFlow. All rights reserved.
    </p>
  </footer>
);

export default Footer;
