
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background/50 backdrop-blur-md border-t border-white/10 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <a href="#" className="text-2xl font-medium tracking-tight text-white">
              Bot<span className="text-primary">BH</span>
            </a>
            <p className="mt-4 text-white/60 max-w-xs">
              Dịch vụ Marketing AI hàng đầu tại Việt Nam, giúp doanh nghiệp của bạn tăng trưởng nhanh chóng.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/60 hover:text-white transition-colors">Trang chủ</a></li>
              <li><a href="#features" className="text-white/60 hover:text-white transition-colors">Tính năng</a></li>
              <li><a href="#howItWorks" className="text-white/60 hover:text-white transition-colors">Cách thức hoạt động</a></li>
              <li><a href="#pricing" className="text-white/60 hover:text-white transition-colors">Báo giá</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Chính sách</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Điều khoản dịch vụ</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Chính sách bảo mật</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Cookie</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Chính sách hoàn tiền</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Liên hệ</h4>
            <ul className="space-y-2">
              <li className="text-white/60">Email: contact@botbh.vn</li>
              <li className="text-white/60">Điện thoại: +84 123 456 789</li>
              <li className="text-white/60">Địa chỉ: 123 Nguyễn Huệ, Quận 1, TP.HCM</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">© {currentYear} BotBH. Đã đăng ký bản quyền.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-white transition-colors">Facebook</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
