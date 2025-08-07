import React from 'react';
import { AlertTriangle, Clock, MapPin, TrendingUp } from 'lucide-react';

const Problem = () => {
  return (
    <section id="problem" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-100 to-orange-100 text-red-800 px-6 py-3 rounded-full mb-6 shadow-sm">
            <AlertTriangle className="h-4 w-4" />
            <span className="text-sm font-medium">The Problem</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Delayed Diagnoses Cost Lives
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            In many parts of the world, especially in the Global South, limited diagnostic infrastructure 
            and delayed results prevent timely treatment and cost lives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 rounded-lg p-2 flex-shrink-0">
                <Clock className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Diagnostic Delays</h3>
                <p className="text-gray-600">
                  Many clinics lack lab infrastructure or reliable diagnostic tools, leading to 
                  delayed treatment and worsened outcomes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-100 rounded-lg p-2 flex-shrink-0">
                <MapPin className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Limited Access</h3>
                <p className="text-gray-600">
                  Rural and underserved communities have limited access to diagnostic services, 
                  creating healthcare disparities.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-yellow-100 rounded-lg p-2 flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Growing Burden</h3>
                <p className="text-gray-600">
                  Disease burden continues to grow in underserved regions, with malaria alone 
                  affecting millions annually.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Case Study: Botswana</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                <span className="text-gray-700">Malaria cases (single season)</span>
                <span className="text-2xl font-bold text-red-600">1,400+</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                <span className="text-gray-700">Clinics lacking lab infrastructure</span>
                <span className="text-2xl font-bold text-orange-600">Many</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-lg">
                <span className="text-gray-700">Impact on diagnosis time</span>
                <span className="text-2xl font-bold text-yellow-600">Hours-Days</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              *Data from Botswana's Okavango District. This challenge isn't unique to malaria — 
              it cuts across diseases and borders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;