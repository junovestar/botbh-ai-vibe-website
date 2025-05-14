
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, User } from 'lucide-react';
import { initScrollAnimations } from '@/utils/ScrollAnimation';

const blogPosts = [
  {
    id: 1,
    title: '5 cách AI đang thay đổi ngành marketing tại Việt Nam',
    excerpt: 'Khám phá cách trí tuệ nhân tạo đang cách mạng hóa ngành marketing và cách doanh nghiệp Việt Nam có thể tận dụng công nghệ này.',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
    author: 'Nguyễn Văn An',
    date: '15/05/2025',
    category: 'AI & Marketing',
    slug: 'ai-thay-doi-marketing-viet-nam'
  },
  {
    id: 2,
    title: 'Case Study: Cách BotBH giúp tăng 200% doanh thu cho DN vừa và nhỏ',
    excerpt: 'Phân tích chi tiết về cách một doanh nghiệp SME tại Việt Nam đã sử dụng BotBH để tăng đáng kể doanh thu và ROI marketing.',
    image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b',
    author: 'Lê Thị Hương',
    date: '28/04/2025',
    category: 'Case Study',
    slug: 'case-study-tang-doanh-thu-200-phan-tram'
  },
  {
    id: 3,
    title: 'Tương lai của marketing tự động hóa và cá nhân hóa',
    excerpt: 'Xu hướng và dự đoán về cách marketing AI sẽ phát triển trong 5 năm tới, với trọng tâm là tự động hóa và cá nhân hóa.',
    image: 'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e',
    author: 'Trần Minh Tuấn',
    date: '10/04/2025',
    category: 'Xu hướng',
    slug: 'tuong-lai-marketing-tu-dong-hoa'
  },
  {
    id: 4,
    title: 'Bảo mật dữ liệu trong thời đại marketing AI',
    excerpt: 'Những thách thức và giải pháp cho vấn đề bảo mật dữ liệu khi sử dụng AI trong marketing.',
    image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840',
    author: 'Phạm Đức Minh',
    date: '02/04/2025',
    category: 'Bảo mật & AI',
    slug: 'bao-mat-du-lieu-marketing-ai'
  }
];

const featuredCategories = [
  'Tất cả',
  'AI & Marketing',
  'Case Study',
  'Xu hướng',
  'Bảo mật & AI',
  'Hướng dẫn'
];

const Blog = () => {
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
              Blog <span className="text-primary">BotBH</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Khám phá các bài viết, hướng dẫn và case study về Marketing AI và tự động hóa
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Categories */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="section-animate flex flex-wrap justify-center gap-4">
            {featuredCategories.map((category, index) => (
              <a 
                key={index} 
                href="#" 
                className={`px-6 py-2 rounded-full transition-colors ${
                  index === 0 ? 'bg-primary text-white' : 'bg-white/10 hover:bg-white/20 text-white/80 hover:text-white'
                }`}
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="section-animate">
            <Link to={`/blog/${blogPosts[0].slug}`} className="block">
              <div className="glass-card overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="h-64 lg:h-auto">
                    <img 
                      src={blogPosts[0].image} 
                      alt={blogPosts[0].title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="bg-primary/20 text-primary-foreground text-xs px-3 py-1 rounded-full">
                        {blogPosts[0].category}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl mb-4 hover:text-primary transition-colors">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-white/70 mb-6">{blogPosts[0].excerpt}</p>
                    <div className="flex items-center text-sm text-white/60">
                      <div className="flex items-center mr-4">
                        <User size={16} className="mr-2" />
                        {blogPosts[0].author}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {blogPosts[0].date}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Blog Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="section-animate grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="block">
                <div className="glass-card overflow-hidden h-full">
                  <div className="h-48">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="bg-primary/20 text-primary-foreground text-xs px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl mb-3 hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-white/70 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-white/60">
                      <div className="flex items-center mr-4">
                        <User size={16} className="mr-2" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {post.date}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="section-animate max-w-3xl mx-auto text-center">
            <h2 className="text-3xl mb-4">Đăng ký nhận bản tin</h2>
            <p className="text-white/70 mb-8">
              Nhận các bài viết, hướng dẫn và xu hướng mới nhất về Marketing AI trực tiếp vào hộp thư của bạn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Email của bạn" 
                className="bg-white/5 border border-white/10 text-white rounded-lg flex-grow p-3"
              />
              <button className="neuro-button whitespace-nowrap">
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
