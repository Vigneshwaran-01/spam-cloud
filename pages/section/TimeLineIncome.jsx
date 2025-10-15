
import React from "react";

export default function TimeLineIncome() {
  const features = [
    {
      icon: "🛡️",
      title: "Advanced Threat Protection",
      description: "Eliminate spam email before it reaches your network with our proprietary, predictive, self-learning technology. Learning from millions of emails processed daily, our filtering system has a nearly 100% accuracy rate."
    },
    {
      icon: "📧",
      title: "Increased Email Continuity", 
      description: "When your email server is unreachable, our system provides full access to emails stored in our queue. This ensures uninterrupted email flow and prevents messages from being lost or bounced back."
    },
    {
      icon: "🔍",
      title: "Real-Time Threat Detection",
      description: "Our system continuously collects and analyzes data to predict and instantly identify new spam outbreaks. Intelligence is shared real-time with all clients worldwide for immediate protection."
    },
    {
      icon: "💰",
      title: "Resource Optimization",
      description: "Reduce resource usage while providing comprehensive monitoring and regular updates with new functionality. Optimize your infrastructure and offload support requirements."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {features.map((feature, index) => (
        <div 
          key={index}
          className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                {feature.icon}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3 leading-tight">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
