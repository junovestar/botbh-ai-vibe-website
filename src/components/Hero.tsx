
import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
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
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative z-10">
      <div className="container mx-auto px-4 py-20">
        <div ref={sectionRef} className="section-animate text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-light mb-6">
            Dịch vụ <span className="text-primary">Marketing AI</span> hàng đầu tại Việt Nam
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            BotBH giúp doanh nghiệp của bạn tự động hóa tiếp thị, tăng hiệu suất và tối ưu ROI với sức mạnh của trí tuệ nhân tạo.
          </p>
          <a href="#contact" className="neuro-button inline-block">
            Bắt đầu ngay
          </a>
          
          <div className="mt-16 relative">
            <img 
              src="/lovable-uploads/05d19bb7-a86b-4576-9478-42fb090ad479.png" 
              alt="BotBH UI" 
              className="rounded-lg shadow-2xl w-full max-w-4xl mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
