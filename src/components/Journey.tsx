import React from 'react';
import { MapPin, Award, Users, TrendingUp, Globe } from 'lucide-react';

const Journey = () => {
  const milestones = [
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: "Starting in Botswana",
      description: "Focusing on malaria detection in partnership with local health systems",
      status: "current",
      color: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200"
    },
    {
      icon: <Award className="h-6 w-6 text-green-600" />,
      title: "MIT Partnership",
      description: "Backed by MIT's Botswana Early-Stage Program for technical excellence",
      status: "current",
      color: "bg-gradient-to-br from-green-50 to-green-100 border-green-200"
    },
    {
      icon: <Users className="h-6 w-6 text-purple-600" />,
      title: "Clinical Partnerships",
      description: "Building partnerships with public clinics for pilot testing",
      status: "current",
      color: "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-orange-600" />,
      title: "Multi-Disease Platform",
      description: "Expanding toward TB, sickle cell, and cervical cancer detection",
      status: "future",
      color: "bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200"
    },
    {
      icon: <Globe className="h-6 w-6 text-teal-600" />,
      title: "Global South Scale",
      description: "Vision: Empower health systems across the Global South",
      status: "future",
      color: "bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200"
    }
  ];

  return (
    <section id="journey" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Journey
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            From malaria detection in Botswana to a global platform for disease diagnosis — 
            here's how we're building the future of healthcare accessibility.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300 hidden md:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full hidden md:block z-10"></div>

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className={`p-6 rounded-2xl border-2 ${milestone.color} hover:shadow-lg transition-all`}>
                    <div className="flex items-start gap-4">
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        {milestone.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {milestone.title}
                          </h3>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            milestone.status === 'current' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            {milestone.status === 'current' ? 'Active' : 'Planned'}
                          </span>
                        </div>
                        <p className="text-gray-600">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Building for Impact
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our journey is guided by the communities we serve. Every milestone brings us closer 
              to our vision of equitable healthcare access worldwide.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">🇧🇼</div>
                <div className="text-sm text-gray-600">Starting in Botswana</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">🎓</div>
                <div className="text-sm text-gray-600">MIT Partnership</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">🌍</div>
                <div className="text-sm text-gray-600">Global Vision</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;