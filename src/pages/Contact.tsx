
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { initScrollAnimations } from '@/utils/ScrollAnimation';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Địa chỉ',
    content: '123 Nguyễn Huệ, Quận 1, TP.HCM, Việt Nam',
  },
  {
    icon: Phone,
    title: 'Điện thoại',
    content: '+84 123 456 789',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'contact@botbh.vn',
  },
  {
    icon: Clock,
    title: 'Giờ làm việc',
    content: 'Thứ 2 - Thứ 6: 9:00 - 18:00',
  },
];

const Contact = () => {
  useEffect(() => {
    initScrollAnimations();
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-[40vh] flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="section-animate text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Liên hệ <span className="text-primary">BotBH</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn với mọi thắc mắc và yêu cầu
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="section-animate grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <div className="bg-primary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <info.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-xl mb-2">{info.title}</h3>
                <p className="text-white/70">{info.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Form and Map */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="section-animate grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl mb-8">Gửi tin nhắn cho chúng tôi</h2>
              <div className="glass-card p-8">
                <ContactForm />
              </div>
            </div>
            <div>
              <h2 className="text-3xl mb-8">Tìm chúng tôi</h2>
              <div className="glass-card p-4 h-[500px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4241674198073!2d106.70236025065338!3d10.777868992283602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f46b8cf46cd%3A0x9c29f897964ddd3e!2sNguyen%20Hue%20Walking%20Street!5e0!3m2!1sen!2s!4v1671954599353!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, borderRadius: '0.5rem' }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BotBH Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="section-animate text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-6">Câu hỏi thường gặp</h2>
            <p className="text-white/70 mb-8">
              Không tìm thấy câu trả lời cho câu hỏi của bạn? Hãy liên hệ với đội ngũ hỗ trợ của chúng tôi.
            </p>
            <a href="#" className="neuro-button">Xem tất cả FAQ</a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
