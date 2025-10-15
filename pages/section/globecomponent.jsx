import React from "react";

export default function GlobeComponent() {
  const stats = [
    { number: "99.9%", label: "Threat Detection Rate" },
    { number: "150+", label: "Countries Protected" },
    { number: "24/7", label: "Global Monitoring" },
    { number: "1M+", label: "Emails Filtered Daily" }
  ];

  return (
    <div className="flex flex-col items-center justify-center py-12">
      {/* Enhanced Globe Representation */}
      <div className="relative mb-12 group">
        <div className="w-56 h-56 rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-8 w-16 h-16 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-8 right-6 w-12 h-12 border border-white/15 rounded-full"></div>
            <div className="absolute top-12 right-12 w-8 h-8 border border-white/25 rounded-full"></div>
          </div>
          
          <div className="w-44 h-44 rounded-full border-2 border-white/20 flex items-center justify-center backdrop-blur-sm">
            <div className="w-36 h-36 rounded-full border border-white/15 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="w-8 h-8 bg-white/90 rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <div className="text-sm font-semibold tracking-wide">Global Protection</div>
                <div className="text-xs opacity-80 mt-1">Worldwide Coverage</div>
              </div>
            </div>
          </div>
          
          {/* Enhanced floating elements */}
          <div className="absolute top-6 right-8 w-3 h-3 bg-white/80 rounded-full animate-pulse shadow-lg"></div>
          <div className="absolute bottom-8 left-6 w-2 h-2 bg-white/70 rounded-full animate-pulse delay-300 shadow-md"></div>
          <div className="absolute top-12 left-12 w-2 h-2 bg-white/60 rounded-full animate-pulse delay-700 shadow-md"></div>
          <div className="absolute bottom-6 right-12 w-3 h-3 bg-white/75 rounded-full animate-pulse delay-1000 shadow-lg"></div>
          
          {/* Orbital rings */}
          <div className="absolute inset-0 border-2 border-white/10 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute inset-4 border border-white/5 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
        </div>
      </div>

      {/* Enhanced Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl">
        {stats.map((stat, index) => (
          <div key={index} className="text-center group">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
              {stat.number}
            </div>
            <div className="text-sm font-medium text-slate-600 group-hover:text-slate-800 transition-colors duration-300">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
