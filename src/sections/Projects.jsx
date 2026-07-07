import React, { useState } from 'react';

const Projects = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <section className="space-y-xl reveal" id="projects">
      <div className="flex flex-col gap-sm">
        <h2 className="font-headline-lg text-headline-lg">Dự án tiêu biểu</h2>
        <p className="text-secondary font-body-md">Giải quyết các bài toán phức tạp trong thực tế.</p>
      </div>
      <div className="flex flex-col gap-md max-w-4xl">
        
        {/* Project 1 */}
        <div className="border border-outline-variant/30 bg-surface rounded-2xl overflow-hidden transition-all duration-300">
          <button 
            className="w-full text-left p-lg flex justify-between items-start focus:outline-none hover:bg-surface-container-low transition-colors" 
            onClick={() => toggleAccordion('project1')}
          >
            <div className="flex-1 pr-md">
              <div className={`flex items-center gap-xs font-label-sm uppercase tracking-wider mb-xs ${openAccordion === 'project1' ? 'text-primary' : 'text-secondary'}`}>
                <span className="material-symbols-outlined text-sm">museum</span> Bảo tàng số
              </div>
              <h3 className="font-headline-md text-headline-md mb-xs">Legacy (Digital Family Memory Museum)</h3>
              <p className="text-secondary font-body-sm">Hệ thống lưu trữ ký ức gia đình với kiến trúc SPA hiện đại.</p>
            </div>
            <div className="pt-sm">
              <span className={`material-symbols-outlined transform transition-transform duration-300 text-secondary ${openAccordion === 'project1' ? 'rotate-180' : ''}`}>expand_more</span>
            </div>
          </button>
          
          <div className={`transition-all duration-500 overflow-hidden ${openAccordion === 'project1' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-lg pb-lg">
              <div className="pt-md border-t border-outline-variant/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-lg mt-md">
                  <div className="space-y-md">
                    <p className="font-body-md text-secondary">Phát triển ứng dụng SPA hoàn chỉnh với ReactJS (Vite) và Bootstrap 5. Tích hợp hệ thống nén ảnh trình duyệt để tối ưu hóa tốc độ tải trang và quản lý tài sản truyền thông lớn.</p>
                    <div className="code-container text-xs bg-surface-container-low p-sm rounded-lg overflow-x-auto">
                      <pre><code><span className="code-comment text-secondary/70">// Xử lý nén ảnh trước khi upload</span>{'\n'}<span className="code-keyword text-primary">const</span> handleUpload = <span className="code-keyword text-primary">async</span> (file) ={">"} {'{'}{'\n'}  <span className="code-keyword text-primary">const</span> options = {'{'} maxSizeMB: 1, maxWidthOrHeight: 1920 {'}'};{'\n'}  <span className="code-keyword text-primary">const</span> compressedFile = <span className="code-keyword text-primary">await</span> imageCompression(file, options);{'\n'}  <span className="code-keyword text-primary">await</span> uploadToS3(compressedFile);{'\n'}{'}'};</code></pre>
                    </div>
                    <div className="flex flex-wrap gap-sm pt-md">
                      <span className="px-sm py-xs bg-surface-container text-secondary rounded text-label-sm">Spring Boot</span>
                      <span className="px-sm py-xs bg-surface-container text-secondary rounded text-label-sm">Reactjs</span>
                      <span className="px-sm py-xs bg-surface-container text-secondary rounded text-label-sm">JPA</span>
                      <span className="px-sm py-xs bg-surface-container text-secondary rounded text-label-sm">MySQL</span>
                      <span className="px-sm py-xs bg-surface-container text-secondary rounded text-label-sm">AI API</span>
                    </div>
                  </div>
                  <div className="bg-surface-container-high rounded-xl relative overflow-hidden h-64 md:h-auto min-h-[250px]">
                    <img alt="Legacy Project Preview" className="absolute inset-0 w-full h-full object-cover" src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="border border-outline-variant/30 bg-surface rounded-2xl overflow-hidden transition-all duration-300">
          <button 
            className="w-full text-left p-lg flex justify-between items-start focus:outline-none hover:bg-surface-container-low transition-colors" 
            onClick={() => toggleAccordion('project2')}
          >
            <div className="flex-1 pr-md">
              <div className={`flex items-center gap-xs font-label-sm uppercase tracking-wider mb-xs ${openAccordion === 'project2' ? 'text-primary' : 'text-secondary'}`}>
                <span className="material-symbols-outlined text-sm">medical_services</span> Y tế
              </div>
              <h3 className="font-headline-md text-headline-md mb-xs">Clinic Booking System</h3>
              <p className="text-secondary font-body-sm">Hệ thống đặt lịch khám bệnh và quản lý hồ sơ bệnh nhân.</p>
            </div>
            <div className="pt-sm">
              <span className={`material-symbols-outlined transform transition-transform duration-300 text-secondary ${openAccordion === 'project2' ? 'rotate-180' : ''}`}>expand_more</span>
            </div>
          </button>
          
          <div className={`transition-all duration-500 overflow-hidden ${openAccordion === 'project2' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-lg pb-lg">
              <div className="pt-md border-t border-outline-variant/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-lg mt-md">
                  <div className="space-y-md">
                    <p className="font-body-md text-secondary">Trưởng nhóm phát triển Backend trong đội ngũ 5 người. Thiết kế và triển khai hệ thống RESTful API, quy trình nghiệp vụ và phân quyền người dùng (Admin, Tiếp tân). Áp dụng mô hình Use Case, quy trình Agile/Scrum và đảm bảo tách biệt các lớp kiến trúc (domain, application, infrastructure).</p>
                    <div className="code-container text-xs bg-surface-container-low p-sm rounded-lg overflow-x-auto">
                      <pre><code><span className="code-comment text-secondary/70">// Gửi thông báo xác nhận lịch hẹn tự động</span>{'\n'}<span className="code-keyword text-primary">@Service</span>{'\n'}<span className="code-keyword text-primary">public class</span> NotificationService {'{'}{'\n'}    <span className="code-keyword text-primary">public void</span> sendConfirmation(<span className="code-type">String</span> email, <span className="code-type">LocalDateTime</span> time) {'{'}{'\n'}        emailClient.send(email, <span className="code-string text-tertiary">"Lịch hẹn của bạn đã được xác nhận vào "</span> + time);{'\n'}    {'}'}{'\n'}{'}'}</code></pre>
                    </div>
                    <div className="flex flex-wrap gap-sm pt-md">
                      <span className="px-sm py-xs bg-surface-container text-secondary rounded text-label-sm">Spring Boot</span>
                      <span className="px-sm py-xs bg-surface-container text-secondary rounded text-label-sm">JPA/Hibernate</span>
                      <span className="px-sm py-xs bg-surface-container text-secondary rounded text-label-sm">SQL Server</span>
                      <span className="px-sm py-xs bg-surface-container text-secondary rounded text-label-sm">Unit Testing</span>
                      <span className="px-sm py-xs bg-surface-container text-secondary rounded text-label-sm">Agile/Scrum</span>
                    </div>
                    <a href="https://github.com/nguyenhongthai2005" target="_blank" rel="noreferrer" className="inline-flex items-center gap-xs font-label-sm text-primary hover:underline mt-md uppercase font-bold">
                      <span className="material-symbols-outlined text-sm">link</span> Xem mã nguồn GitHub
                    </a>
                  </div>
                  <div className="bg-surface-container-high rounded-xl relative overflow-hidden h-64 md:h-auto min-h-[250px]">
                    <img alt="Clinic System Preview" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLl0r05Kbihz51evVHSvyqAHTwUrhWaEEbS2k_G5Jm38j4B2yFV3uIyXxcSyNVR07X_M-UpUQzHgCcNMCsa4LCpp8DvlxSpTbq92Pbt2g05KDoDeizCnNtfuGhs5RKPesrdxR8ZzBMlB-2f2tdH-Boun2-QnVPOvFwCqN6T-eEuRuZekxobPuaf135SfC7rEnwuoKUoXfMa1UjaehWhJSeMw9GWJOUbZmuIpqP49bzo3WfydK02fIrutQyjFbOI6GqQQkXgA_TnE8n" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="border border-outline-variant/30 bg-surface rounded-2xl overflow-hidden transition-all duration-300">
          <button 
            className="w-full text-left p-lg flex justify-between items-start focus:outline-none hover:bg-surface-container-low transition-colors" 
            onClick={() => toggleAccordion('project3')}
          >
            <div className="flex-1 pr-md">
              <div className={`flex items-center gap-xs font-label-sm uppercase tracking-wider mb-xs ${openAccordion === 'project3' ? 'text-primary' : 'text-secondary'}`}>
                <span className="material-symbols-outlined text-sm">sports_soccer</span> Thể thao
              </div>
              <h3 className="font-headline-md text-headline-md mb-xs">Sports Field Booking System</h3>
              <p className="text-secondary font-body-sm">Nền tảng đặt sân thể thao và quản lý giao dịch thời gian thực.</p>
            </div>
            <div className="pt-sm">
              <span className={`material-symbols-outlined transform transition-transform duration-300 text-secondary ${openAccordion === 'project3' ? 'rotate-180' : ''}`}>expand_more</span>
            </div>
          </button>
          
          <div className={`transition-all duration-500 overflow-hidden ${openAccordion === 'project3' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-lg pb-lg">
              <div className="pt-md border-t border-outline-variant/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-lg mt-md">
                  <div className="space-y-md">
                    <p className="font-body-md text-secondary">Xây dựng module chat thời gian thực và bảng tin sử dụng WebSocket. Quản lý luồng giao dịch và chuyển nhượng vé đặt sân tương tự quy trình thương mại điện tử.</p>
                    <div className="code-container text-xs bg-surface-container-low p-sm rounded-lg overflow-x-auto">
                      <pre><code><span className="code-comment text-secondary/70">// Cấu hình WebSocket cho chat thời gian thực</span>{'\n'}<span className="code-keyword text-primary">@Configuration</span>{'\n'}<span className="code-keyword text-primary">@EnableWebSocketMessageBroker</span>{'\n'}<span className="code-keyword text-primary">public class</span> WebSocketConfig <span className="code-keyword text-primary">implements</span> <span className="code-type">WebSocketMessageBrokerConfigurer</span> {'{'}{'\n'}    <span className="code-keyword text-primary">@Override</span>{'\n'}    <span className="code-keyword text-primary">public void</span> registerStompEndpoints(<span className="code-type">StompEndpointRegistry</span> registry) {'{'}{'\n'}        registry.addEndpoint(<span className="code-string text-tertiary">"/ws"</span>).withSockJS();{'\n'}    {'}'}{'\n'}{'}'}</code></pre>
                    </div>
                    <div className="flex flex-wrap gap-sm pt-md">
                      <span className="px-sm py-xs bg-surface-container text-secondary rounded text-label-sm">Spring Boot</span>
                      <span className="px-sm py-xs bg-surface-container text-secondary rounded text-label-sm">ReactJS</span>
                      <span className="px-sm py-xs bg-surface-container text-secondary rounded text-label-sm">JPA/Hibernate</span>
                      <span className="px-sm py-xs bg-surface-container text-secondary rounded text-label-sm">MySQL</span>
                      <span className="px-sm py-xs bg-surface-container text-secondary rounded text-label-sm">WebSocket</span>
                    </div>
                  </div>
                  <div className="bg-surface-container-high rounded-xl relative overflow-hidden h-64 md:h-auto min-h-[250px]">
                    <img alt="Sports System Preview" className="absolute inset-0 w-full h-full object-cover" src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
