
import React, { useEffect, useRef } from 'react';
import { BarChart, Brain, Layers, MessageSquare } from 'lucide-react';

const features = [
  {
    title: 'Phân tích dữ liệu AI',
    description: 'Phân tích hành vi khách hàng và xu hướng thị trường để cá nhân hóa chiến lược marketing.',
    icon: BarChart,
  },
  {
    title: 'Tự động tạo nội dung',
    description: 'Tạo nội dung hấp dẫn và tối ưu hóa SEO tự động cho tất cả các kênh marketing của bạn.',
    icon: MessageSquare,
  },
  {
    title: 'Tích hợp đa nền tảng',
    description: 'Kết nối và quản lý tất cả các kênh marketing của bạn từ một bảng điều khiển duy nhất.',
    icon: Layers,
  },
  {
    title: 'Học máy thích ứng',
    description: 'Hệ thống học từ dữ liệu của bạn và liên tục cải thiện chiến lược theo thời gian.',
    icon: Brain,
  },
];

const Features: React.FC = () => {
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
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="section-animate">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Tính năng chính</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              BotBH cung cấp một bộ công cụ marketing AI toàn diện để giúp doanh nghiệp của bạn phát triển.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glass-card p-8">
                <div className="bg-primary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <feature.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl mb-4">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
