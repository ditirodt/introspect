import React from 'react';
import { Smartphone, Camera, Brain, CheckCircle2 } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Smartphone className="h-8 w-8 text-blue-600" />,
      title: "Connect Device",
      description: "Health worker uses a smartphone connected to a microscope",
      color: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200"
    },
    {
      icon: <Camera className="h-8 w-8 text-green-600" />,
      title: "Capture Image",
      description: "Captures a medical image (e.g., blood smear)",
      color: "bg-gradient-to-br from-green-50 to-green-100 border-green-200"
    },
    {
      icon: <Brain className="h-8 w-8 text-purple-600" />,
      title: "AI Analysis",
      description: "The AI model analyzes it — on-device or via cloud",
      color: "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200"
    },
    {
      icon: <CheckCircle2 className="h-8 w-8 text-orange-600" />,
      title: "Get Results",
      description: "Diagnosis result is provided in seconds",
      color: "bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Simple, fast, and accurate — our four-step process transforms disease detection 
            for frontline health workers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className={`p-6 rounded-2xl border-2 ${step.color} transition-all hover:shadow-lg`}>
                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-sm mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                  <div className="w-0 h-0 border-l-4 border-l-gray-300 border-t-2 border-t-transparent border-b-2 border-b-transparent ml-6 -mt-1"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Fast & Accurate Results
              </h3>
              <p className="text-gray-600 mb-6">
                Our AI-powered platform delivers diagnostic results in seconds, not hours. 
                Whether online or offline, the system provides consistent, reliable analysis 
                that health workers can trust.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Results in seconds</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">High accuracy rates</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Works with standard equipment</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">⚡</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h4>
                <p className="text-gray-600 text-sm">
                  From image capture to diagnosis in seconds, enabling rapid treatment decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;