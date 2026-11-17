# JavaScript-Labs — Bài Thực Hành Chương 4: JavaScript

## 1. Thông tin sinh viên
- **Họ và tên:** Trần Ngọc Kim Thư
- **Mã số sinh viên:** 31241024339
- **Email:** thutran.31241024339@st.ueh.edu.vn
- **Học phần:** Phát triển ứng dụng Thương mại điện tử (UEH)
- **GitHub cá nhân:** https://github.com/thutran-31241024339
- **Repository:** https://github.com/thutran-31241024339/Tuan3

---

## 2. Mục tiêu thực hiện 03 bài Lab
Hoàn thành đầy đủ 03 bài thực hành JavaScript (`Lab 08`, `Lab 09`, `Lab 10`) nhằm làm chủ:
1. Cú pháp cơ bản của JavaScript, kiểu dữ liệu, mảng, hàm, đối tượng và gỡ lỗi qua Browser Console.
2. Truy xuất và thao tác cây DOM, xử lý sự kiện người dùng, gỡ lỗi bằng Breakpoint và kiểm tra dữ liệu Form.
3. Sử dụng thư viện jQuery cho Selectors, Listeners, thao tác DOM, hiệu ứng/hoạt ảnh và truy vấn GET bất đồng bộ qua `jqXHR`.

---

## 3. Cấu trúc thư mục

```text
Tuan3/
├── VeNha/                     # Các bài thực hành CSS trước đó (giữ nguyên)
└── JavaScript-Labs/
    ├── index.html             # Trang chủ Portfolio & điều hướng 03 bài Lab
    ├── README.md              # Tài liệu mô tả dự án thực hành
    ├── css/
    │   └── style.css          # Stylesheet chính cho trang chủ và trang con các Lab
    ├── js/
    │   └── main.js            # Script tìm kiếm/lọc bài tập, Dark Mode & Demo giỏ hàng TMĐT
    ├── images/
    │   └── avatar.png         # Ảnh đại diện sinh viên
    ├── Lab08/                 # Lab 08 – JavaScript 1: Language Foundations
    │   ├── index.html         # Danh sách liên kết Exercise 8.1 – 8.11 & bài mở rộng
    │   ├── lab08-exercise01.html .. lab08-walkthrough11.html, exercise.html
    │   ├── css/, flags/, images/, js/, hello.js
    ├── Lab09/                 # Lab 09 – JavaScript 2: DOM and Events
    │   ├── index.html         # Danh sách liên kết Exercise 9.1 – 9.8
    │   ├── lab09-walkthrough01.html .. lab09-walkthrough08.html
    │   ├── css/, images/, js/
    └── Lab10/                 # Lab 10 – JavaScript 3: jQuery
        ├── index.html         # Danh sách liên kết Exercise 10.1 – 10.10
        ├── lab10-exercise01.html, lab10-walkthrough01.html .. lab10-walkthrough10.html
        ├── css/, images/, js/ (gồm jquery-3.1.1.min.js & cities.json dự phòng)
```

---

## 4. Mô tả ngắn gọn nội dung từng Lab
- **Lab 08 – JavaScript 1: Language Foundations:** Thực hành bật/tắt JS, nhúng JS nội tuyến (`<script>`) và file ngoài, thẻ `<noscript>`, Browser Console, các đối tượng chuẩn (`String`, `Date`, `Math`), mảng và vòng lặp, hàm như đối tượng (hàm ẩn danh), hàm khởi tạo đối tượng (constructor) và mảng đối tượng.
- **Lab 09 – JavaScript 2: DOM and Events:** Thực hành truy xuất phần tử DOM bằng ID, tag, class, `querySelector`/`querySelectorAll`, duyệt quan hệ nút cha-con (`childNodes`, `nodeType`), tạo/xóa phần tử DOM, bắt sự kiện (`click`, `mouseover`, `mouseout`, `load`, `focus`, `blur`), gỡ lỗi sự kiện với Breakpoint và kiểm tra dữ liệu đầu vào Form.
- **Lab 10 – JavaScript 3: jQuery:** Thực hành cài đặt jQuery qua CDN kèm fallback nội bộ, sử dụng Basic/Advanced Selectors, xâu chuỗi sự kiện `.on()`/`.off()`, chèn phần tử DOM, hiệu ứng `fade`/`slide`/hộp xem trước ảnh/`animate()` đa bước, và gọi API JSON bất đồng bộ bằng `$.get()` kết hợp `jqXHR` (`.done()`, `.fail()`, `.always()`).

---

## 5. Đường dẫn GitHub Pages
- **Trang chủ JavaScript-Labs:** https://thutran-31241024339.github.io/Tuan3/JavaScript-Labs/
- **Lab 08:** https://thutran-31241024339.github.io/Tuan3/JavaScript-Labs/Lab08/
- **Lab 09:** https://thutran-31241024339.github.io/Tuan3/JavaScript-Labs/Lab09/
- **Lab 10:** https://thutran-31241024339.github.io/Tuan3/JavaScript-Labs/Lab10/

---

## 6. Hướng dẫn truy cập các bài thực hành
1. Truy cập trang chủ qua đường dẫn GitHub Pages ở mục 5 (hoặc mở trực tiếp file `JavaScript-Labs/index.html` trên máy).
2. Sử dụng bảng **Danh sách và liên kết đến các bài Lab** để mở trang tổng hợp riêng của `Lab 08`, `Lab 09`, `Lab 10`, hoặc dùng bộ lọc và thanh tìm kiếm ngay trên trang chủ để mở trực tiếp từng Exercise mong muốn.
3. Đối với Exercise 10.9 và 10.10 (gửi GET request AJAX), khuyến nghị mở qua GitHub Pages (HTTPS) hoặc máy chủ cục bộ (`python -m http.server`) để trình duyệt cho phép nạp tệp JSON dự phòng khi máy chủ dịch vụ cũ gặp hạn chế SSL/Mixed Content.
