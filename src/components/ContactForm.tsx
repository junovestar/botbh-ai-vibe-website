
import React, { useEffect, useRef, useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactForm: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Gửi thành công!",
        description: "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
      });
      setFormData({ name: '', email: '', company: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="section-animate">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Liên hệ với chúng tôi</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Có câu hỏi hoặc muốn tìm hiểu thêm về BotBH? Hãy liên hệ với chúng tôi và đội ngũ của chúng tôi sẽ liên hệ lại với bạn.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="glass-card p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border border-white/10 text-white rounded-lg block w-full p-3"
                    placeholder="Nguyễn Văn A"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border border-white/10 text-white rounded-lg block w-full p-3"
                    placeholder="example@company.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="company" className="block mb-2 text-sm font-medium">
                  Công ty
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-white/5 border border-white/10 text-white rounded-lg block w-full p-3"
                  placeholder="Tên công ty của bạn"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Tin nhắn
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="bg-white/5 border border-white/10 text-white rounded-lg block w-full p-3"
                  placeholder="Tôi muốn tìm hiểu thêm về..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="neuro-button w-full"
              >
                {isSubmitting ? 'Đang gửi...' : 'Gửi tin nhắn'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
