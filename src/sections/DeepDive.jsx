import React from 'react';

const DeepDive = () => {
  return (
    <section className="space-y-xl reveal" id="deep-dive">
      <div className="flex flex-col gap-sm">
        <h2 className="font-headline-lg text-headline-lg">Phân tích Kỹ thuật Chuyên sâu</h2>
        <p className="text-secondary font-body-md">Giải quyết các vấn đề kiến trúc phức tạp bằng phương pháp STAR.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        {/* Challenge 1 */}
        <div className="space-y-md border-l-2 border-primary pl-lg hover:bg-surface-container-low/30 transition-colors p-4 rounded-r-xl">
          <h3 className="font-headline-md text-headline-md">Tối ưu hóa Hiệu năng & Xử lý Hình ảnh (Legacy)</h3>
          <div className="space-y-sm">
            <p className="font-body-md"><span className="font-bold text-on-surface">Tình huống:</span> Ứng dụng Legacy gặp vấn đề về tốc độ tải trang do người dùng thường xuyên tải lên các tệp hình ảnh dung lượng lớn ({">"}10MB).</p>
            <p className="font-body-md"><span className="font-bold text-on-surface">Nhiệm vụ:</span> Giảm kích thước tệp tải lên mà không làm giảm đáng kể chất lượng hình ảnh, đồng thời giảm tải cho băng thông server.</p>
            <p className="font-body-md"><span className="font-bold text-on-surface">Hành động:</span> Triển khai thư viện browser-image-compression phía Frontend để nén ảnh trực tiếp trên trình duyệt của người dùng trước khi upload lên S3.</p>
            <p className="font-body-md text-primary font-bold">Kết quả: Giảm 80% dung lượng tệp trung bình (từ 10MB xuống còn ~2MB), tốc độ tải trang nhanh hơn gấp 3 lần và tiết kiệm đáng kể chi phí lưu trữ đám mây.</p>
          </div>
        </div>
        
        {/* Challenge 2 */}
        <div className="space-y-md border-l-2 border-primary pl-lg hover:bg-surface-container-low/30 transition-colors p-4 rounded-r-xl">
          <h3 className="font-headline-md text-headline-md">Xử lý Dữ liệu Lớn & Phân bổ Tự động</h3>
          <div className="space-y-sm">
            <p className="font-body-md"><span className="font-bold text-on-surface">Tình huống:</span> Hệ thống cần xử lý danh sách khám đoàn từ các doanh nghiệp với hàng trăm nhân viên gửi qua file Excel.</p>
            <p className="font-body-md"><span className="font-bold text-on-surface">Nhiệm vụ:</span> Tự động phân tích dữ liệu từ file và điều phối bệnh nhân đến đúng bác sĩ theo chuyên khoa tương ứng.</p>
            <p className="font-body-md"><span className="font-bold text-on-surface">Hành động:</span> Sử dụng thư viện Apache POI để đọc file Excel, kết hợp với thuật toán so khớp (Pattern Matching) để phân loại triệu chứng và map với chuyên khoa của bác sĩ trong cơ sở dữ liệu.</p>
            <p className="font-body-md text-primary font-bold">Kết quả: Giảm 90% thời gian nhập liệu thủ công và đảm bảo tính chính xác 100% trong việc phân bổ chuyên khoa.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeepDive;
