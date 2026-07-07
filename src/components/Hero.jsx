import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center bg-surface overflow-hidden px-margin-mobile md:px-margin-desktop reveal active py-20">
      <div className="max-w-max-width mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-lg items-center relative z-10">
        {/* Left Column: Intro */}
        <div className="flex flex-col gap-lg order-2 lg:order-1 items-center text-center lg:items-start lg:text-left">
          <div>
            <div className="w-16 h-1 bg-primary mb-md mx-auto lg:mx-0"></div>
            <h1 className="font-display text-[48px] md:text-[64px] leading-tight text-on-surface font-bold">
              Tôi là Thái Nguyễn,<br />
              một Kỹ sư<br />
              Phần mềm
            </h1>
            <p className="font-body-lg text-body-lg text-secondary mt-md max-w-md">
              Kỹ sư Phần mềm Full-Stack tập trung vào kiến trúc backend hiệu năng cao với Spring Boot và giao diện trực quan với React. Tôi kết nối tư duy logic phức tạp với trải nghiệm người dùng mượt mà.
            </p>
          </div>
          <a className="inline-flex items-center gap-sm px-lg py-md bg-primary text-on-primary rounded-full font-label-md text-label-md hover:shadow-lg transition-all hover:-translate-y-0.5 mt-sm" href="#skills">
            Khám phá thêm <span className="material-symbols-outlined text-sm">arrow_downward</span>
          </a>
        </div>

        {/* Center Column: Portrait Image */}
        <div className="relative order-1 lg:order-2 flex justify-center h-[400px] md:h-[600px] lg:h-[700px] w-full">
          <img alt="Thái Nguyễn Portrait" className="object-cover object-center h-full w-full rounded-2xl md:rounded-none md:mask-image-gradient" src="/avtrb.png" />
        </div>

        {/* Right Column: Info & Links */}
        <div className="flex flex-col gap-xl order-3 lg:order-3 pt-xl lg:pt-0 pl-0 lg:pl-xl border-t lg:border-t-0 lg:border-l border-outline-variant/30">
          {/* About */}
          <div>
            <h3 className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-bold mb-sm">Về tôi</h3>
            <p className="font-body-sm text-body-sm text-secondary">
              Đang tìm kiếm cơ hội Kỹ sư Phần mềm. Có kinh nghiệm xây dựng các hệ thống quy mô nhỏ và vừa với Java & React.
            </p>
            <a className="inline-flex items-center gap-xs font-label-sm text-label-sm text-primary hover:underline mt-sm uppercase font-bold" href="#about">
              TÌM HIỂU THÊM <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>

          {/* My Work */}
          <div>
            <h3 className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-bold mb-sm">Dự án</h3>
            <p className="font-body-sm text-body-sm text-secondary">
              Xây dựng các hệ thống đặt sân thể thao, công cụ AI, và mạng xã hội thời gian thực.
            </p>
            <a className="inline-flex items-center gap-xs font-label-sm text-label-sm text-primary hover:underline mt-sm uppercase font-bold" href="#projects">
              XEM DỰ ÁN <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>

          {/* Follow Me */}
          <div>
            <h3 className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-bold mb-sm">Theo dõi</h3>
            <div className="flex gap-md text-secondary">
              <a className="hover:text-primary transition-colors" href="https://github.com/nguyenhongthai2005" target="_blank" rel="noreferrer" title="GitHub"><span className="material-symbols-outlined">code</span></a>
              <a className="hover:text-primary transition-colors" href="https://www.linkedin.com/in/th%C3%A1i-nguy%E1%BB%85n-h%E1%BB%93ng-122b37337/?isSelfProfile=true" target="_blank" rel="noreferrer" title="LinkedIn"><span className="material-symbols-outlined">person</span></a>
              <a className="hover:text-primary transition-colors" href="https://www.facebook.com/thaiingyenday" target="_blank" rel="noreferrer" title="Facebook"><span className="material-symbols-outlined">group</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
