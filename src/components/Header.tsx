import React, { useState } from 'react';
import { Menu, X, Eye } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Eye className="h-8 w-8 text-blue-600" />
              <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-sm"></div>
            </div>
            <span className="text-xl font-bold text-gray-900">introspect</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#problem" className="text-gray-600 hover:text-blue-600 transition-colors">Problem</a>
            <a href="#solution" className="text-gray-600 hover:text-blue-600 transition-colors">Solution</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How It Works</a>
            <a href="#journey" className="text-gray-600 hover:text-blue-600 transition-colors">Journey</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </nav>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            <a href="#problem" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Problem</a>
            <a href="#solution" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Solution</a>
            <a href="#how-it-works" className="block px-3 py-2 text-gray-600 hover:text-blue-600">How It Works</a>
            <a href="#journey" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Journey</a>
            <button className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;