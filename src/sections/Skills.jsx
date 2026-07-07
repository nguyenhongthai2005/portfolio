import React from 'react';

const Skills = () => {
  return (
    <section className="space-y-xl reveal" id="skills">
      <div className="flex flex-col gap-sm">
        <h2 className="font-headline-lg text-headline-lg">Hành trang Kỹ thuật</h2>
        <div className="w-16 h-1 bg-primary rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
        {/* Backend */}
        <div className="p-lg border border-outline-variant/40 bg-surface rounded-xl hover:border-primary hover:shadow-md transition-all group">
          <div className="flex items-center gap-sm mb-md text-primary">
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">database</span>
            <h3 className="font-headline-md text-headline-md">Backend</h3>
          </div>
          <ul className="space-y-sm text-secondary font-body-md">
            <li className="flex items-center gap-xs"><span className="material-symbols-outlined text-[16px]">check_circle</span> Java (Spring Boot)</li>
            <li className="flex items-center gap-xs"><span className="material-symbols-outlined text-[16px]">check_circle</span> Spring Security</li>
            <li className="flex items-center gap-xs"><span className="material-symbols-outlined text-[16px]">check_circle</span> MySQL / PostgreSQL</li>
            <li className="flex items-center gap-xs"><span className="material-symbols-outlined text-[16px]">check_circle</span> RESTful APIs & Microservices</li>
          </ul>
        </div>
        
        {/* Frontend */}
        <div className="p-lg border border-outline-variant/40 bg-surface rounded-xl hover:border-primary hover:shadow-md transition-all group">
          <div className="flex items-center gap-sm mb-md text-primary">
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">layers</span>
            <h3 className="font-headline-md text-headline-md">Frontend</h3>
          </div>
          <ul className="space-y-sm text-secondary font-body-md">
            <li className="flex items-center gap-xs"><span className="material-symbols-outlined text-[16px]">check_circle</span> React & Vite</li>
            <li className="flex items-center gap-xs"><span className="material-symbols-outlined text-[16px]">check_circle</span> JavaScript (ES6+) / TypeScript</li>
            <li className="flex items-center gap-xs"><span className="material-symbols-outlined text-[16px]">check_circle</span> HTML5 & CSS3 (Tailwind)</li>
            <li className="flex items-center gap-xs"><span className="material-symbols-outlined text-[16px]">check_circle</span> Responsive UI Design</li>
          </ul>
        </div>
        
        {/* Infrastructure */}
        <div className="p-lg border border-outline-variant/40 bg-surface rounded-xl hover:border-primary hover:shadow-md transition-all group">
          <div className="flex items-center gap-sm mb-md text-primary">
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">settings_input_component</span>
            <h3 className="font-headline-md text-headline-md">Hạ tầng</h3>
          </div>
          <ul className="space-y-sm text-secondary font-body-md">
            <li className="flex items-center gap-xs"><span className="material-symbols-outlined text-[16px]">check_circle</span> Docker & Containerization</li>
            <li className="flex items-center gap-xs"><span className="material-symbols-outlined text-[16px]">check_circle</span> CI/CD & Render Deployment</li>
            <li className="flex items-center gap-xs"><span className="material-symbols-outlined text-[16px]">check_circle</span> Cloud Storage (S3/Cloudinary)</li>
            <li className="flex items-center gap-xs"><span className="material-symbols-outlined text-[16px]">check_circle</span> Git & GitHub Actions</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
