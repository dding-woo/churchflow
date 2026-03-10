import React from 'react';

const Footer: React.FC = () => (
  <footer className="mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
    &copy; {new Date().getFullYear()} ChurchFlow. Built with React & Tailwind.
  </footer>
);

export default Footer;
