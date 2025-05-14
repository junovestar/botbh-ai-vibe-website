
import React, { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Miễn phí',
    price: '0₫',
    description: 'Dành cho các doanh nghiệp nhỏ mới bắt đầu',
    features: [
      'Phân tích cơ bản',
      'Tích hợp 1 nền tảng',
      'Tạo nội dung giới hạn (5/tháng)',
      'Hỗ trợ email'
    ],
    isRecommended: false,
  },
  {
    name: 'Pro',
    price: '1.200.000₫/tháng',
    description: 'Dành cho doanh nghiệp vừa và nhỏ',
    features: [
      'Phân tích nâng cao',
      'Tích hợp 5 nền tảng',
      'Tạo nội dung không giới hạn',
      'Tối ưu hóa chiến dịch tự động',
      'Hỗ trợ ưu tiên qua chat 24/7',
    ],
    isRecommended: true,
  },
  {
    name: 'Doanh nghiệp',
    price: 'Liên hệ',
    description: 'Giải pháp tùy chỉnh cho doanh nghiệp lớn',
    features: [
      'Tất cả tính năng Pro',
      'API tùy chỉnh',
      'Quản lý tài khoản chuyên dụng',
      'Đào tạo & tư vấn 1:1',
      'Phân tích nâng cao theo ngành',
      'SLA đảm bảo',
    ],
    isRecommended: false,
  }
];

const Pricing: React.FC = () => {
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
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="section-animate">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Gói dịch vụ</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Chọn gói phù hợp với nhu cầu kinh doanh của bạn. Tất cả các gói đều bao gồm tiếp cận đầy đủ với nền tảng AI của chúng tôi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`glass-card p-8 relative ${
                  plan.isRecommended ? 'border-primary border-2' : ''
                }`}
              >
                {plan.isRecommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm">
                    Đề xuất
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl mb-2">{plan.name}</h3>
                  <div className="text-3xl md:text-4xl font-medium mb-4">{plan.price}</div>
                  <p className="text-white/70">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <Check size={20} className="text-primary mr-2 flex-shrink-0" />
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-center">
                  <a 
                    href="#contact" 
                    className={`inline-block px-6 py-3 rounded-lg w-full text-center ${
                      plan.isRecommended 
                        ? 'neuro-button' 
                        : 'bg-secondary/50 hover:bg-secondary/70 text-white transition-colors'
                    }`}
                  >
                    {plan.name === 'Doanh nghiệp' ? 'Liên hệ ngay' : 'Bắt đầu ngay'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
