
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { initScrollAnimations } from '@/utils/ScrollAnimation';

const teamMembers = [
  {
    name: 'Nguyễn Văn An',
    role: 'CEO & Founder',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Với hơn 15 năm kinh nghiệm trong ngành công nghệ và marketing, Văn An đã xây dựng BotBH với tầm nhìn đưa sức mạnh của AI đến với doanh nghiệp Việt Nam.'
  },
  {
    name: 'Trần Minh Tuấn',
    role: 'CTO',
    image: 'https://randomuser.me/api/portraits/men/67.jpg',
    bio: 'Minh Tuấn có chuyên môn sâu về AI và học máy, từng làm việc tại các công ty công nghệ hàng đầu như Google và Meta trước khi gia nhập BotBH.'
  },
  {
    name: 'Lê Thị Hương',
    role: 'CMO',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    bio: 'Với nền tảng về tiếp thị kỹ thuật số và phân tích dữ liệu, Thị Hương giúp khách hàng của BotBH tối đa hóa ROI và phát triển thương hiệu.'
  },
  {
    name: 'Phạm Đức Minh',
    role: 'Head of AI Research',
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
    bio: 'Tiến sĩ Đức Minh dẫn dắt đội ngũ nghiên cứu AI của BotBH, tập trung vào phát triển các thuật toán tiên tiến cho phân tích marketing và tối ưu hóa chiến dịch.'
  }
];

const milestones = [
  {
    year: '2019',
    title: 'Thành lập',
    description: 'BotBH được thành lập tại TP.HCM với sứ mệnh dân chủ hóa marketing AI cho doanh nghiệp Việt Nam.'
  },
  {
    year: '2020',
    title: 'Ra mắt phiên bản beta',
    description: 'Phát hành phiên bản beta đầu tiên của nền tảng BotBH cho 50 khách hàng thử nghiệm.'
  },
  {
    year: '2021',
    title: 'Huy động vốn Series A',
    description: 'Huy động thành công 2 triệu đô la trong vòng gọi vốn Series A để mở rộng đội ngũ và phát triển sản phẩm.'
  },
  {
    year: '2022',
    title: 'Mở rộng thị trường Đông Nam Á',
    description: 'Mở văn phòng tại Singapore và Indonesia, bắt đầu mở rộng ra thị trường Đông Nam Á.'
  },
  {
    year: '2023',
    title: 'Ra mắt BotBH 2.0',
    description: 'Phát hành phiên bản 2.0 với các tính năng tiên tiến về phân tích dữ liệu và tự động hóa marketing.'
  },
  {
    year: '2024',
    title: 'Cột mốc 1000 khách hàng',
    description: 'Đạt cột mốc 1000 khách hàng doanh nghiệp sử dụng nền tảng BotBH trên toàn ASEAN.'
  }
];

const About = () => {
  useEffect(() => {
    initScrollAnimations();
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center justify-center pt-20 mb-16">
        <div className="container mx-auto px-4 py-20">
          <div className="section-animate text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Về <span className="text-primary">BotBH</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Chúng tôi đang thay đổi cách doanh nghiệp Việt Nam tiếp cận marketing bằng sức mạnh của trí tuệ nhân tạo
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="section-animate">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl mb-6">Câu chuyện của chúng tôi</h2>
                <p className="text-white/70 mb-4">
                  BotBH được thành lập vào năm 2019 bởi một nhóm các nhà khoa học dữ liệu và chuyên gia marketing người Việt với tầm nhìn mang công nghệ AI tiên tiến đến với các doanh nghiệp vừa và nhỏ tại Việt Nam.
                </p>
                <p className="text-white/70 mb-4">
                  Chúng tôi nhận thấy rằng công nghệ AI marketing thường chỉ dành cho các tập đoàn lớn với ngân sách lớn. Chúng tôi muốn thay đổi điều đó bằng cách tạo ra một nền tảng dễ sử dụng, giá cả phải chăng nhưng vẫn mạnh mẽ và hiệu quả.
                </p>
                <p className="text-white/70">
                  Ngày nay, BotBH đã phục vụ hơn 1000 doanh nghiệp trên khắp khu vực ASEAN, giúp họ tăng hiệu suất marketing, giảm chi phí và cạnh tranh hiệu quả trên thị trường số.
                </p>
              </div>
              <div className="glass-card p-6 h-full">
                <img
                  src="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
                  alt="BotBH Office"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="section-animate text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Giá trị cốt lõi</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Những giá trị định hình văn hóa và định hướng mọi quyết định của chúng tôi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass-card p-6 text-center">
              <h3 className="text-2xl mb-4">Đổi mới</h3>
              <p className="text-white/70">
                Chúng tôi không ngừng tìm kiếm những cách thức mới để giải quyết các thách thức marketing bằng công nghệ tiên tiến.
              </p>
            </div>
            <div className="glass-card p-6 text-center">
              <h3 className="text-2xl mb-4">Khách hàng là trọng tâm</h3>
              <p className="text-white/70">
                Mọi tính năng và quyết định của chúng tôi đều hướng đến việc mang lại giá trị thực tế cho khách hàng.
              </p>
            </div>
            <div className="glass-card p-6 text-center">
              <h3 className="text-2xl mb-4">Minh bạch</h3>
              <p className="text-white/70">
                Chúng tôi tin vào sự minh bạch trong hoạt động kinh doanh, từ báo giá đến cách AI của chúng tôi đưa ra quyết định.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="section-animate text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Đội ngũ lãnh đạo</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Gặp gỡ những con người đứng sau BotBH - đội ngũ chuyên gia với niềm đam mê về AI và marketing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="glass-card p-6">
                <div className="mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-32 h-32 rounded-full object-cover mx-auto"
                  />
                </div>
                <h3 className="text-xl mb-1 text-center">{member.name}</h3>
                <p className="text-primary font-medium mb-4 text-center">{member.role}</p>
                <p className="text-white/70 text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Timeline/Milestones */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="section-animate text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Hành trình của chúng tôi</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Những cột mốc quan trọng trong hành trình phát triển của BotBH
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="section-animate flex mb-8">
                <div className="mr-8 text-center">
                  <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center text-white font-medium">
                    {milestone.year}
                  </div>
                  <div className="h-full w-0.5 bg-primary/30 mx-auto mt-4"></div>
                </div>
                <div className="glass-card p-6 flex-1">
                  <h3 className="text-xl mb-2">{milestone.title}</h3>
                  <p className="text-white/70">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="section-animate text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-6">Hãy trở thành một phần của hành trình BotBH</h2>
            <p className="text-white/70 mb-8">
              Chúng tôi luôn tìm kiếm cơ hội hợp tác mới và những tài năng đam mê công nghệ AI và marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="neuro-button">Liên hệ với chúng tôi</a>
              <a href="#" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-colors">Cơ hội nghề nghiệp</a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
