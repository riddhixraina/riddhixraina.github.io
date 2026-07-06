import React from 'react';
import stackImage from '../assets/about/riddhi-avatar.jpg';
import { aboutContent } from '../data/portfolioData';

// Tech stack SVG icons rendered inline for crisp rendering
const JavaIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#EA2D2E" d="M47.5 124.5s-3.5 2 7.5 3c18.5 1.5 28.5-1 44-7 0 0 7.5-5 4-7.5s-11.5 2.5-18 4.5c-6.5 2-14 3.5-22 3.5-8 0-12-1.5-12-1.5z"/>
      <path fill="#EA2D2E" d="M81.5 116.5s4 3 11 4.5c14 2.5 24.5 1 34-3.5 0 0 5.5-3.5 2.5-6s-9 2-15.5 3.5c-6.5 1.5-14 2-22 1.5-8-.5-10-1-10-1z"/>
      <path fill="#F8981D" d="M48.5 98.5c-18-10.5-2.5-25.5 0-36.5 2-8.5 1.5-14.5 1.5-14.5s9 4.5 14 13.5c5.5 10 3 20.5-3 28.5-5.5 7.5-12.5 9-12.5 9z"/>
      <path fill="#F8981D" d="M79.5 98.5c18-10.5 2.5-25.5 0-36.5-2-8.5-1.5-14.5-1.5-14.5s-9 4.5-14 13.5c-5.5 10-3 20.5 3 28.5 5.5 7.5 12.5 9 12.5 9z"/>
      <path fill="#5382A1" d="M64 12c-22 0-38 8-38 22 0 10 6 16 14 20 8 4 12 6 12 10s-2 8-6 12c-4 4-8 8-8 14 0 6 4 10 10 10 6 0 10-4 14-8 4-4 8-10 8-16 0-8-4-14-10-18-6-4-10-8-10-14 0-6 6-10 14-14 8-4 14-10 14-18 0-14-16-22-38-22z"/>
      <path fill="#F8981D" d="M64 4c-26 0-44 10-44 26 0 12 8 20 18 26 10 6 14 10 14 16 0 4-2 8-6 12-4 4-6 8-6 12 0 4 2 8 8 8 6 0 10-4 14-8 4-4 6-10 6-16 0-10-6-16-14-22-8-6-12-12-12-20 0-8 8-14 20-18 12-4 20-12 20-24C96 14 78 4 64 4z"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Java</span>
  </div>
);

const CSharpIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#68217A" d="M117.5 33.5v61L82.5 117.5H45.5L10.5 94.5v-61L45.5 10.5h37l35 23z"/>
      <path fill="#fff" d="M64 38c-14.4 0-26 11.6-26 26s11.6 26 26 26 26-11.6 26-26-11.6-26-26-26zm0 8c9.9 0 18 8.1 18 18s-8.1 18-18 18-18-8.1-18-18 8.1-18 18-18z"/>
      <path fill="#68217A" d="M88 52h-6v24h6c7.7 0 14-6.3 14-14s-6.3-14-14-14zm0 8c3.3 0 6 2.7 6 6s-2.7 6-6 6v-12z"/>
      <path fill="#68217A" d="M46 52h-8v24h8c7.7 0 14-6.3 14-14v-4h-8v4c0 3.3-2.7 6-6 6h-2V52z"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">C#</span>
  </div>
);

const ReactIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <g stroke="#00d8ff" strokeWidth="4.5" fill="none" transform="translate(10, 10)">
        <ellipse cx="54" cy="54" rx="16" ry="46" transform="rotate(30 54 54)" />
        <ellipse cx="54" cy="54" rx="16" ry="46" transform="rotate(90 54 54)" />
        <ellipse cx="54" cy="54" rx="16" ry="46" transform="rotate(150 54 54)" />
        <circle cx="54" cy="54" r="7" fill="#00d8ff" />
      </g>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">React</span>
  </div>
);

const PythonIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#3776AB" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"/>
      <path fill="#FFD43B" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Python</span>
  </div>
);

const CloudK8sIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#326CE5" d="M63.556 12.058a8.508 8.508 0 00-3.257.826L26.792 28.9a8.437 8.437 0 00-4.572 5.717l-8.27 35.966a8.404 8.404 0 001.146 6.447c.183.279.38.548.594.805l23.185 28.83a8.464 8.464 0 006.614 3.158l37.16-.008a8.463 8.463 0 006.614-3.15l23.176-28.838a8.421 8.421 0 001.647-7.244l-8.287-35.966a8.437 8.437 0 00-4.572-5.717L67.72 12.884a8.5 8.5 0 00-4.164-.826z"/>
      <g stroke="#fff" strokeWidth="5" fill="none" strokeLinecap="round">
        <circle cx="64" cy="60" r="17" />
        <line x1="64" y1="30" x2="64" y2="43" />
        <line x1="64" y1="77" x2="64" y2="90" />
        <line x1="34" y1="60" x2="47" y2="60" />
        <line x1="81" y1="60" x2="94" y2="60" />
        <line x1="43" y1="39" x2="52" y2="48" />
        <line x1="76" y1="72" x2="85" y2="81" />
        <line x1="85" y1="39" x2="76" y2="48" />
        <line x1="52" y1="72" x2="43" y2="81" />
      </g>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Kubernetes</span>
  </div>
);


const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="Riddhi Raina Prasad, Full Stack & AI Engineer" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <p 
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Horizontal Skills Row */}
          <div className="flex flex-wrap items-center gap-8 md:gap-10 mt-8">
            <div data-aos="zoom-in" data-aos-delay="200" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <JavaIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <CSharpIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="400" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <ReactIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="500" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <PythonIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <CloudK8sIcon />
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
