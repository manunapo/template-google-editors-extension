import * as React from 'react';
import { EXTENSION_NAME } from '../../constants';

const Footer: React.FC = () => {
  return (
    <footer className="sticky bottom-0 bg-white border-t border-google-gray-200 px-4 py-3">
      <p className="text-xs text-google-gray-500 text-center">
        © {new Date().getFullYear()} {EXTENSION_NAME}
      </p>
    </footer>
  );
};

export default Footer;
