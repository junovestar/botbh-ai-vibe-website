
import React, { useEffect, useRef } from 'react';

const Mission: React.FC = () => {
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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="section-animate max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-8">Sứ mệnh của chúng tôi</h2>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8">
            "Chúng tôi tin rằng trí tuệ nhân tạo có thể dân chủ hóa tiếp thị hiệu suất cao cho mọi doanh nghiệp Việt Nam, bất kể quy mô. Sứ mệnh của chúng tôi là xây dựng các công cụ AI tiên tiến nhưng dễ sử dụng để giúp các doanh nghiệp địa phương cạnh tranh trên toàn cầu."
          </p>
          <div className="flex justify-center">
            <div className="glass-card px-6 py-4">
              <p className="text-primary font-medium">Nguyễn Văn An - CEO & Founder, BotBH</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
