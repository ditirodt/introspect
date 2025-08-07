import React from 'react';
import { Building, Users, Heart, Globe } from 'lucide-react';

const WhoWeServe = () => {
  const audiences = [
    {
      icon: <Building className="h-8 w-8 text-blue-600" />,
      title: "Ministries of Health",
      description: "Supporting government health initiatives in emerging economies",
      color: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200"
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Frontline Health Workers",
      description: "Rural clinics, mobile health units, and community health workers",
      color: "bg-gradient-to-br from-green-50 to-green-100 border-green-200"
    },
    {
      icon: <Heart className="h-8 w-8 text-purple-600" />,
      title: "NGOs & Researchers",
      description: "Supporting organizations and innovation hubs advancing global health",
      color: "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200"
    },
    {
      icon: <Globe className="h-8 w-8 text-orange-600" />,
      title: "Global Health Programs",
      description: "Programs in malaria-endemic and underserved regions worldwide",
      color: "bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Who We Serve
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Empowering diverse stakeholders across the healthcare ecosystem to deliver 
            better diagnostic outcomes for underserved communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {audiences.map((audience, index) => (
            <div key={index} className={`p-6 rounded-2xl border-2 ${audience.color} hover:shadow-lg transition-all`}>
              <div className="flex items-start gap-4">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  {audience.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {audience.title}
                  </h3>
                  <p className="text-gray-600">
                    {audience.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Join the Global Health Revolution
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Whether you're a government health ministry, NGO, or frontline health worker, 
              introspect can help you deliver better diagnostic outcomes for the communities you serve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Partner With Us
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;