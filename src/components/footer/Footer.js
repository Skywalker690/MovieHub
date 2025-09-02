import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Left Section */}
        <span className="text-sm text-gray-400">
          © {currentYear} Made by <span className="text-white font-semibold">Skywalker</span>
        </span>

        {/* Separator (Optional, only on larger screens) */}
        <div className="hidden sm:block border-l border-gray-700 h-5"></div>

        {/* Right Section - GitHub */}
        <a 
          href="https://github.com/Skywalker690" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 text-teal-400 hover:text-white transition-colors duration-300 font-medium text-sm"
        >
          <FaGithub className="w-5 h-5 hover:scale-110 transition-transform duration-300" />
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
