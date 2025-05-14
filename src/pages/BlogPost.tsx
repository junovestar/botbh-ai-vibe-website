
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, User, Tag, ChevronLeft } from 'lucide-react';
import { initScrollAnimations } from '@/utils/ScrollAnimation';

// Mock data for a blog post
const blogPost = {
  title: '5 cách AI đang thay đổi ngành marketing tại Việt Nam',
  content: `
    <p>Trong những năm gần đây, trí tuệ nhân tạo (AI) đã trở thành một công nghệ đột phá trong nhiều lĩnh vực, đặc biệt là ngành marketing. Tại Việt Nam, xu hướng này đang ngày càng phát triển mạnh mẽ, mang đến nhiều cơ hội và thách thức cho các doanh nghiệp.</p>
    
    <h2>1. Cá nhân hóa trải nghiệm khách hàng</h2>
    <p>AI cho phép doanh nghiệp phân tích hành vi và sở thích của từng khách hàng để cung cấp nội dung và đề xuất sản phẩm phù hợp. Thay vì áp dụng chiến lược "một kích cỡ phù hợp với tất cả", AI giúp tạo ra trải nghiệm độc đáo cho từng người dùng.</p>
    <p>Ví dụ, một chuỗi bán lẻ tại Việt Nam đã áp dụng AI để phân tích lịch sử mua hàng và hành vi duyệt web của khách hàng, từ đó gửi email marketing với sản phẩm phù hợp, tăng tỷ lệ chuyển đổi lên 40%.</p>
    
    <h2>2. Tối ưu hóa ngân sách quảng cáo</h2>
    <p>AI giúp doanh nghiệp phân bổ ngân sách quảng cáo hiệu quả hơn bằng cách dự đoán những kênh và khung thời gian mang lại hiệu suất cao nhất. Các thuật toán học máy liên tục phân tích dữ liệu về hiệu suất chiến dịch và tự động điều chỉnh để đạt kết quả tốt nhất.</p>
    <p>Một công ty thương mại điện tử tại Việt Nam đã giảm 30% chi phí quảng cáo trong khi vẫn duy trì doanh số nhờ sử dụng AI để tối ưu hóa chiến dịch Google Ads và Facebook Ads.</p>
    
    <h2>3. Chatbot và trợ lý ảo</h2>
    <p>Chatbot AI đang ngày càng phổ biến tại các doanh nghiệp Việt Nam, giúp tự động hóa dịch vụ khách hàng và hỗ trợ bán hàng 24/7. Những công cụ này không chỉ trả lời câu hỏi cơ bản mà còn có thể hướng dẫn khách hàng qua quá trình mua hàng và giải quyết vấn đề.</p>
    <p>Nhiều ngân hàng và công ty bảo hiểm tại Việt Nam đã triển khai chatbot có thể hiểu và trả lời các câu hỏi bằng tiếng Việt, giúp giảm 60% thời gian chờ đợi của khách hàng.</p>
    
    <h2>4. Tạo nội dung tự động</h2>
    <p>AI đang cách mạng hóa cách doanh nghiệp tạo nội dung marketing. Từ bài viết blog đến bài đăng mạng xã hội và email marketing, công nghệ AI có thể tạo ra nội dung chất lượng cao phù hợp với đối tượng mục tiêu của bạn.</p>
    <p>Các công ty truyền thông tại Việt Nam đã bắt đầu sử dụng AI để tạo nội dung tin tức và bài viết blog, giúp tiết kiệm thời gian và nguồn lực đáng kể.</p>
    
    <h2>5. Phân tích dữ liệu và dự đoán xu hướng</h2>
    <p>AI cho phép doanh nghiệp phân tích khối lượng dữ liệu lớn để xác định xu hướng thị trường và hành vi người tiêu dùng. Điều này giúp các marketer Việt Nam đưa ra quyết định dựa trên dữ liệu và dự đoán nhu cầu trong tương lai.</p>
    <p>Một thương hiệu thời trang Việt Nam đã sử dụng AI để phân tích xu hướng tìm kiếm và mạng xã hội, giúp họ dự đoán chính xác các xu hướng sắp tới và điều chỉnh chiến lược sản phẩm phù hợp.</p>
    
    <h2>Thách thức và tương lai</h2>
    <p>Mặc dù AI mang lại nhiều lợi ích, các doanh nghiệp Việt Nam vẫn phải đối mặt với những thách thức như chi phí triển khai, thiếu nhân lực có kỹ năng, và lo ngại về bảo mật dữ liệu. Tuy nhiên, với sự phát triển nhanh chóng của công nghệ và giá cả ngày càng hợp lý, ngày càng nhiều doanh nghiệp vừa và nhỏ có thể tiếp cận với các giải pháp AI marketing.</p>
    <p>Trong tương lai, chúng tôi dự đoán sẽ thấy sự gia tăng trong việc áp dụng AI tại thị trường Việt Nam, đặc biệt là các giải pháp được địa phương hóa để đáp ứng nhu cầu cụ thể của người tiêu dùng Việt Nam.</p>
  `,
  image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
  author: 'Nguyễn Văn An',
  date: '15/05/2025',
  category: 'AI & Marketing',
  tags: ['Marketing AI', 'Tự động hóa', 'Doanh nghiệp Việt Nam', 'Xu hướng'],
};

// Mock related posts
const relatedPosts = [
  {
    id: 2,
    title: 'Case Study: Cách BotBH giúp tăng 200% doanh thu cho DN vừa và nhỏ',
    image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b',
    slug: 'case-study-tang-doanh-thu-200-phan-tram'
  },
  {
    id: 3,
    title: 'Tương lai của marketing tự động hóa và cá nhân hóa',
    image: 'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e',
    slug: 'tuong-lai-marketing-tu-dong-hoa'
  },
  {
    id: 4,
    title: 'Bảo mật dữ liệu trong thời đại marketing AI',
    image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840',
    slug: 'bao-mat-du-lieu-marketing-ai'
  },
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  useEffect(() => {
    initScrollAnimations();
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Blog Post Content */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="section-animate max-w-4xl mx-auto">
            <Link to="/blog" className="flex items-center text-white/70 hover:text-white mb-8 transition-colors">
              <ChevronLeft size={20} className="mr-2" />
              Quay lại Blog
            </Link>
            
            <div className="mb-6">
              <span className="bg-primary/20 text-primary-foreground text-sm px-3 py-1 rounded-full">
                {blogPost.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl mb-6">{blogPost.title}</h1>
            
            <div className="flex items-center text-sm text-white/60 mb-8">
              <div className="flex items-center mr-6">
                <User size={18} className="mr-2" />
                {blogPost.author}
              </div>
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />
                {blogPost.date}
              </div>
            </div>
            
            <div className="mb-10">
              <img 
                src={blogPost.image} 
                alt={blogPost.title} 
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
            </div>
            
            <div className="mt-10 pt-8 border-t border-white/10">
              <div className="flex flex-wrap items-center">
                <div className="mr-3 text-white/60">
                  <Tag size={18} />
                </div>
                {blogPost.tags.map((tag, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="bg-white/10 text-white/80 text-sm px-3 py-1 rounded-full mr-2 mb-2 hover:bg-white/20 transition-colors"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Posts */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="section-animate">
            <h2 className="text-3xl mb-10 text-center">Bài viết liên quan</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
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
                      <h3 className="text-xl hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16">
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

export default BlogPost;
