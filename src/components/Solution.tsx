import React from 'react';
import { CheckCircle, Zap, Package, Wifi, WifiOff } from 'lucide-react';

const Solution = () => {
  return (
    <section id="solution" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-6 py-3 rounded-full mb-6 shadow-sm">
            <CheckCircle className="h-4 w-4" />
            <span className="text-sm font-medium">Our Solution</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Adaptable AI for Global Health
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Starting with malaria in Botswana, we're building a robust, scalable solution 
            for disease detection that can be deployed across the Global South.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 rounded-lg p-2 flex-shrink-0">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Analysis</h3>
                <p className="text-gray-600">
                  Advanced machine learning models analyze medical images like blood smears 
                  with high accuracy and speed.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 rounded-lg p-2 flex-shrink-0">
                <div className="flex gap-1">
                  <Wifi className="h-3 w-3 text-green-600" />
                  <WifiOff className="h-3 w-3 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Online & Offline</h3>
                <p className="text-gray-600">
                  Works both online and offline — ideal for remote and urban settings alike, 
                  ensuring consistent access to diagnostics.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-purple-100 rounded-lg p-2 flex-shrink-0">
                <Package className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Modular Design</h3>
                <p className="text-gray-600">
                  Beginning with malaria, expanding to diseases like TB, sickle cell, 
                  and cervical cancer as the platform grows.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Benefits</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">Reduces diagnostic delays</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">Improves access to care</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">Supports public health response</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">Enables equitable access globally</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 mb-2">📱</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Smartphone Ready</h3>
            <p className="text-gray-600">Runs on affordable smartphones and edge devices</p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-3xl font-bold text-green-600 mb-2">🧪</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Medical Images</h3>
            <p className="text-gray-600">Analyzes blood smears, slides, and other medical imagery</p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-3xl font-bold text-purple-600 mb-2">🌐</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Scale</h3>
            <p className="text-gray-600">Built for deployment across the Global South</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;