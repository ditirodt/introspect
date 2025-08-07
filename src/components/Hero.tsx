import React from 'react';
import { ArrowRight, Smartphone, Globe, Microscope, Eye } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-600 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Eye className="h-16 w-16 text-blue-600" />
              <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-lg animate-pulse"></div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              AI-Powered Disease Detection
            </span>
            <span className="text-gray-800 block text-3xl md:text-5xl mt-2">Anywhere, Anytime</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            introspect uses AI-powered microscopy to diagnose malaria quickly and offline, bringing accurate detection to health facilities without labs or internet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Learn More <ArrowRight className="h-4 w-4" />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 backdrop-blur-sm">
              Watch Demo
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 hover:shadow-xl hover:bg-white/90 transition-all duration-300 group">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Smartphone className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile-First</h3>
            <p className="text-gray-600 leading-relaxed">Runs on affordable smartphones and low-cost microcontrollers</p>
          </div>

          <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 hover:shadow-xl hover:bg-white/90 transition-all duration-300 group">
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Globe className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Works Offline</h3>
            <p className="text-gray-600 leading-relaxed">Operates with or without internet — perfect for remote areas</p>
          </div>

          <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 hover:shadow-xl hover:bg-white/90 transition-all duration-300 group">
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Microscope className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered</h3>
            <p className="text-gray-600 leading-relaxed">Advanced image analysis for accurate disease detection</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;