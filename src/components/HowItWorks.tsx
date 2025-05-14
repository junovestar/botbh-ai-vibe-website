
import React, { useEffect, useRef } from 'react';

const steps = [
  {
    title: 'Kết nối tài khoản',
    description: 'Liên kết tài khoản marketing của bạn với BotBH. Chúng tôi hỗ trợ Facebook, Google Ads, Instagram và nhiều nền tảng khác.',
    image: 'https://placeholder.pics/svg/300x200/DEDEDE/555555/connect'
  },
  {
    title: 'Cài đặt trợ lý AI',
    description: 'Tùy chỉnh AI trợ lý của bạn theo nhu cầu, mục tiêu và ngân sách. Hệ thống tự động phân tích dữ liệu của bạn để tối ưu hóa chiến lược.',
    image: 'https://placeholder.pics/svg/300x200/DEDEDE/555555/setup'
  },
  {
    title: 'Tự động hóa giao dịch',
    description: 'AI sẽ tự động quản lý chiến dịch quảng cáo của bạn, tối ưu hóa ngân sách và tăng hiệu suất theo thời gian thực.',
    image: 'https://placeholder.pics/svg/300x200/DEDEDE/555555/automate'
  }
];

const HowItWorks: React.FC = () => {
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
    <section id="howItWorks" className="py-20">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="section-animate">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Cách thức hoạt động</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              BotBH đơn giản hóa marketing AI với quy trình 3 bước, giúp bạn tự động hóa và tối ưu hóa hoàn toàn các chiến dịch của mình.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="glass-card p-6 flex flex-col">
                <div className="mb-6">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl mb-4">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
