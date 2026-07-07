import React from 'react';

const Contact = () => {
  return (
    <section className="reveal" id="contact">
      <div className="p-xl bg-surface-container rounded-3xl text-center space-y-md border border-outline-variant/20 relative overflow-hidden">
        {/* Atmospheric background element */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <h2 className="font-display text-headline-lg relative z-10">Bạn đang tìm kiếm mảnh ghép mới cho đội ngũ?</h2>
        <p className="text-secondary font-body-lg max-w-xl mx-auto relative z-10">
          Tôi luôn sẵn sàng cho các cơ hội làm việc toàn thời gian. Tôi mong muốn được áp dụng chuyên môn của mình để phát triển các hệ thống quan trọng và mang lại giá trị thực tế qua từng sản phẩm.
        </p>
        <div className="flex flex-wrap justify-center gap-md pt-md relative z-10">
          <a className="inline-flex items-center gap-sm px-lg py-md bg-primary text-on-primary rounded-lg font-label-md text-label-md transition-all hover:scale-105 hover:shadow-lg" href="https://mail.google.com/mail/?view=cm&fs=1&to=nguyenhongthai06092005@gmail.com" target="_blank" rel="noreferrer">
            <span className="material-symbols-outlined">mail</span> Trò chuyện qua Email
          </a>
          <a className="inline-flex items-center gap-sm px-lg py-md bg-surface text-on-surface border border-outline rounded-lg font-label-md text-label-md hover:bg-surface-container-high transition-colors" href="https://www.linkedin.com/in/th%C3%A1i-nguy%E1%BB%85n-h%E1%BB%93ng-122b37337/?isSelfProfile=true" target="_blank" rel="noreferrer">
            Kết nối trên LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
