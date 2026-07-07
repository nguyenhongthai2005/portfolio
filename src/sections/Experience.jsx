import React from 'react';

const Experience = () => {
  return (
    <section className="space-y-xl reveal" id="experience">
      <div className="flex flex-col gap-sm">
        <h2 className="font-headline-lg text-headline-lg">Cột mốc Sự nghiệp</h2>
        <div className="w-16 h-1 bg-primary rounded-full"></div>
      </div>
      <div className="relative space-y-lg before:absolute before:left-3 before:top-2 before:bottom-0 before:w-0.5 before:bg-outline-variant/30">
        
        {/* Milestone 1 */}
        <div className="relative pl-12 group">
          <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-surface border-2 border-primary z-10 group-hover:scale-125 transition-transform"></div>
          <div className="flex flex-col md:flex-row md:items-center gap-xs md:gap-md">
            <span className="text-label-sm font-bold text-primary">2024 - Hiện tại</span>
            <h3 className="font-headline-md text-headline-md">Học tập và phát triển bản thân</h3>
          </div>
          <p className="text-secondary font-body-md mt-sm">Tập trung trở thành Kỹ sư Full-Stack với thế mạnh về ReactJS và Spring Boot. Không ngừng trau dồi kiến thức mới và áp dụng vào thực tiễn.</p>
        </div>
        
        {/* Milestone 2 */}
        <div className="relative pl-12 group">
          <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-surface border-2 border-outline-variant z-10 group-hover:border-primary group-hover:scale-125 transition-all"></div>
          <div className="flex flex-col md:flex-row md:items-center gap-xs md:gap-md">
            <span className="text-label-sm font-bold text-secondary">2024 - 2025</span>
            <h3 className="font-headline-md text-headline-md">Thành tích học tập nổi bật</h3>
          </div>
          <p className="text-secondary font-body-md mt-sm">Hoàn thành các dự án cá nhân và môn học với điểm số cao, chú trọng vào phân tích nghiệp vụ và kiến trúc hệ thống bền vững.</p>
        </div>
        
        {/* Milestone 3 */}
        <div className="relative pl-12 group">
          <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-surface border-2 border-outline-variant z-10 group-hover:border-primary group-hover:scale-125 transition-all"></div>
          <div className="flex flex-col md:flex-row md:items-center gap-xs md:gap-md">
            <span className="text-label-sm font-bold text-secondary">2020 - 2024</span>
            <h3 className="font-headline-md text-headline-md">Theo học chuyên ngành Khoa học Máy tính</h3>
          </div>
          <p className="text-secondary font-body-md mt-sm">Xây dựng nền tảng vững chắc về thuật toán, cơ sở dữ liệu và nguyên lý kỹ thuật phần mềm tại môi trường đại học.</p>
        </div>
        
      </div>
    </section>
  );
};

export default Experience;
