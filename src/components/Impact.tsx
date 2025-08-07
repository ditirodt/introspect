import React from 'react';
import { TrendingUp, Users, Clock, Globe } from 'lucide-react';

const Impact = () => {
  const metrics = [
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      value: "Seconds",
      label: "Diagnosis Time",
      description: "From hours to seconds",
      color: "bg-gradient-to-br from-blue-50 to-blue-100"
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      value: "1000s",
      label: "Lives Impacted",
      description: "Starting with malaria in Botswana",
      color: "bg-gradient-to-br from-green-50 to-green-100"
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-600" />,
      value: "Global",
      label: "Scalable Solution",
      description: "Built for the Global South",
      color: "bg-gradient-to-br from-purple-50 to-purple-100"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-orange-600" />,
      value: "Growing",
      label: "Platform Expansion",
      description: "Multi-disease diagnostics",
      color: "bg-gradient-to-br from-orange-50 to-orange-100"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why It Matters
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Every diagnosis delivered faster means lives saved, communities strengthened, 
            and healthcare systems empowered to serve those who need it most.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className={`p-6 rounded-2xl ${metric.color} text-center hover:shadow-lg transition-all`}>
              <div className="flex justify-center mb-4">
                {metric.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-gray-700 mb-2">
                {metric.label}
              </div>
              <div className="text-xs text-gray-600">
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Immediate Impact
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Reduces diagnostic delays significantly</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-700">Improves access to care in rural areas</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-gray-700">Enables faster treatment decisions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                <span className="text-gray-700">Supports disease surveillance efforts</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Long-term Vision
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-700">Equitable diagnostic access globally</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                <span className="text-gray-700">Strengthened health systems</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Reduced healthcare disparities</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-gray-700">Empowered frontline workers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;