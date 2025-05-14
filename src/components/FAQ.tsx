
import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'BotBH hoạt động như thế nào?',
    answer: 'BotBH sử dụng các thuật toán AI tiên tiến để phân tích dữ liệu marketing của bạn, tạo nội dung, và tự động tối ưu hóa chiến dịch quảng cáo. Hệ thống liên tục học hỏi từ kết quả để cải thiện hiệu suất theo thời gian.'
  },
  {
    question: 'BotBH có phù hợp với doanh nghiệp nhỏ không?',
    answer: 'Có! Chúng tôi có các gói dịch vụ phù hợp với mọi quy mô doanh nghiệp, bao gồm cả gói Miễn phí với các tính năng cơ bản để giúp các doanh nghiệp nhỏ bắt đầu hành trình marketing AI.'
  },
  {
    question: 'Tôi có thể tích hợp BotBH với những nền tảng nào?',
    answer: 'BotBH tích hợp với hầu hết các nền tảng marketing phổ biến như Facebook Ads, Google Ads, Instagram, TikTok, LinkedIn, và nhiều nền tảng khác. Đối với các tích hợp tùy chỉnh, vui lòng liên hệ với đội ngũ hỗ trợ của chúng tôi.'
  },
  {
    question: 'Mất bao lâu để thấy kết quả?',
    answer: 'Hầu hết khách hàng của chúng tôi bắt đầu thấy cải thiện trong vòng 2-4 tuần đầu tiên. Tuy nhiên, kết quả có thể khác nhau tùy thuộc vào ngành, thị trường mục tiêu và ngân sách marketing của bạn.'
  },
  {
    question: 'BotBH có hỗ trợ nhiều ngôn ngữ không?',
    answer: 'Có, BotBH hỗ trợ đầy đủ tiếng Việt và tiếng Anh, cũng như nhiều ngôn ngữ khác cho các tính năng tạo nội dung và phân tích. Chúng tôi liên tục thêm hỗ trợ cho các ngôn ngữ mới.'
  },
  {
    question: 'Làm thế nào để bắt đầu với BotBH?',
    answer: 'Bạn chỉ cần đăng ký tài khoản, chọn gói dịch vụ phù hợp, và làm theo hướng dẫn cài đặt đơn giản của chúng tôi. Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng giúp đỡ trong suốt quá trình.'
  },
];

const FAQ: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
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
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="section-animate">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Câu hỏi thường gặp</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Tìm câu trả lời cho những câu hỏi phổ biến về BotBH và dịch vụ Marketing AI của chúng tôi.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-card mb-4">
                <button
                  className="flex justify-between items-center w-full text-left p-6"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-xl">{faq.question}</h3>
                  <ChevronDown 
                    size={20} 
                    className={`transform transition-transform ${
                      openIndex === index ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="p-6 pt-0 border-t border-white/10">
                    <p className="text-white/70">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
