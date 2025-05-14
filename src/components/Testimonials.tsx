
import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Nguyễn Văn A',
    position: 'CEO, Tech Solutions',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'BotBH đã giúp công ty chúng tôi tăng 300% lưu lượng truy cập và 150% doanh số trong vòng 3 tháng. Đây là một công cụ marketing AI tuyệt vời!',
    result: 'Tăng trưởng doanh số +150%',
  },
  {
    name: 'Trần Thị B',
    position: 'Marketing Director, Fashion Brand',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'Tôi đã tiết kiệm hơn 20 giờ mỗi tuần nhờ tự động hóa các chiến dịch marketing. ROI tăng gấp đôi và ngân sách quảng cáo giảm 30%.',
    result: 'Tiết kiệm ngân sách 30%',
  },
  {
    name: 'Lê Minh C',
    position: 'Founder, E-commerce Store',
    image: 'https://randomuser.me/api/portraits/men/67.jpg',
    text: 'Từ khi sử dụng BotBH, chúng tôi đã tăng tỷ lệ chuyển đổi lên 25% và số lượng khách hàng mới tăng đáng kể. Dịch vụ khách hàng của họ cũng rất tốt.',
    result: 'Tỷ lệ chuyển đổi +25%',
  },
  {
    name: 'Phạm Hoàng D',
    position: 'CMO, Fintech Startup',
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
    text: 'Tôi đặc biệt ấn tượng với khả năng phân tích dữ liệu và tạo ra các kế hoạch marketing cá nhân hóa của BotBH. Công cụ này đã giúp chúng tôi đi trước đối thủ.',
    result: 'Tăng 200% khách hàng tiềm năng',
  },
];

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
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
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="section-animate">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Khách hàng nói gì về BotBH</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Chúng tôi đã giúp hàng trăm doanh nghiệp tại Việt Nam tăng trưởng với sức mạnh của Marketing AI.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="glass-card p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-20 h-20 rounded-full object-cover mx-auto md:mx-0"
                  />
                </div>
                <div>
                  <div className="mb-6">
                    <p className="text-lg italic mb-6">"{testimonials[currentIndex].text}"</p>
                    <div className="glass-card inline-block px-4 py-2 text-sm bg-primary/20 text-primary-foreground">
                      {testimonials[currentIndex].result}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium">{testimonials[currentIndex].name}</h4>
                    <p className="text-white/60">{testimonials[currentIndex].position}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            
            <button 
              className="absolute top-1/2 -left-10 md:-left-16 transform -translate-y-1/2 bg-primary/20 hover:bg-primary/30 p-3 rounded-full text-white"
              onClick={prevSlide}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              className="absolute top-1/2 -right-10 md:-right-16 transform -translate-y-1/2 bg-primary/20 hover:bg-primary/30 p-3 rounded-full text-white"
              onClick={nextSlide}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
