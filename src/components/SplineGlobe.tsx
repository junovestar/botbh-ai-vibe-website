
import React, { useEffect, useRef } from 'react';

const SplineGlobe: React.FC = () => {
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
    <section className="py-20 relative">
      <div ref={sectionRef} className="section-animate h-[600px] relative">
        <iframe 
          src='https://my.spline.design/worldplanet-kxRNruJt1AGvt43iS0sGA8T9/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          title="3D Globe"
        />
      </div>
    </section>
  );
};

export default SplineGlobe;
