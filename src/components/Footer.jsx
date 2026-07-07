import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-outline-variant/20 py-xl mt-32">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-max-width mx-auto px-margin-desktop gap-md">
        <div className="font-label-md text-label-md font-semibold text-secondary">Thái Nguyễn</div>
        <p className="font-body-sm text-body-sm text-secondary">© 2024 Thái Nguyễn. One day or Day One</p>
        <div className="flex gap-lg">
          <a className="text-secondary hover:text-primary hover:underline decoration-primary transition-all font-body-sm text-body-sm" href="https://github.com/nguyenhongthai2005" target="_blank" rel="noreferrer">GitHub</a>
          <a className="text-secondary hover:text-primary hover:underline decoration-primary transition-all font-body-sm text-body-sm" href="https://gitlab.com/nguyenhongthai06092005" target="_blank" rel="noreferrer">GitLab</a>
          <a className="text-secondary hover:text-primary hover:underline decoration-primary transition-all font-body-sm text-body-sm" href="https://www.linkedin.com/in/th%C3%A1i-nguy%E1%BB%85n-h%E1%BB%93ng-122b37337/?isSelfProfile=true" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="text-secondary hover:text-primary hover:underline decoration-primary transition-all font-body-sm text-body-sm" href="https://www.facebook.com/thaiingyenday" target="_blank" rel="noreferrer">Facebook</a>
          <a className="text-secondary hover:text-primary hover:underline decoration-primary transition-all font-body-sm text-body-sm" href="https://mail.google.com/mail/?view=cm&fs=1&to=nguyenhongthai06092005@gmail.com" target="_blank" rel="noreferrer">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
