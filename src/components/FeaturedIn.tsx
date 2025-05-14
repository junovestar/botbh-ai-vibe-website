
import React, { useEffect, useRef } from 'react';

const featuredLogos = [
  { name: 'TechCrunch', logo: 'https://placeholder.pics/svg/150x50/DEDEDE/555555/TechCrunch' },
  { name: 'Forbes', logo: 'https://placeholder.pics/svg/150x50/DEDEDE/555555/Forbes' },
  { name: 'Wired', logo: 'https://placeholder.pics/svg/150x50/DEDEDE/555555/Wired' },
  { name: 'VnExpress', logo: 'https://placeholder.pics/svg/150x50/DEDEDE/555555/VnExpress' },
  { name: 'Báo Mới', logo: 'https://placeholder.pics/svg/150x50/DEDEDE/555555/BaoMoi' },
];

const FeaturedIn: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-active');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="section-animate text-center">
          <h2 className="text-lg text-white/50 mb-10">ĐƯỢC NHẮC ĐẾN TRONG</h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {featuredLogos.map((logo, index) => (
              <div key={index} className="opacity-70 hover:opacity-100 transition-opacity">
                <img src={logo.logo} alt={logo.name} className="h-10 md:h-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
