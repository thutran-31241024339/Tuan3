/* Main JavaScript for JavaScript-Labs Portfolio */

const exercises = [
    // Lab 08
    { lab: "Lab08", code: "Exercise 8.1", title: "Enabling/Disabling JavaScript", desc: "Kiểm tra bật/tắt JavaScript qua thẻ script và noscript.", url: "Lab08/lab08-exercise01.html" },
    { lab: "Lab08", code: "Exercise 8.2", title: "Embedded JavaScript", desc: "Nhúng mã JavaScript trực tiếp trong thẻ head hiển thị hộp thoại alert.", url: "Lab08/lab08-exercise02.html" },
    { lab: "Lab08", code: "Exercise 8.3", title: "External JavaScript", desc: "Liên kết file hello.js ngoài, dùng biến count và document.write().", url: "Lab08/lab08-exercise03.html" },
    { lab: "Lab08", code: "Exercise 8.4", title: "Using <noscript>", desc: "Bổ sung thông báo dự phòng khi trình duyệt tắt JavaScript.", url: "Lab08/lab08-exercise04.html" },
    { lab: "Lab08", code: "Exercise 8.5", title: "Using the Browser Console", desc: "Tổ chức js/hello.js và ghi log với console.log, warn, error.", url: "Lab08/lab08-walkthrough02.html" },
    { lab: "Lab08", code: "Exercise 8.6", title: "Built-in JavaScript Objects", desc: "Làm việc với String (== và ===), Date và Math.", url: "Lab08/lab08-walkthrough06.html" },
    { lab: "Lab08", code: "Exercise 8.7", title: "Arrays & Loops", desc: "Mảng daysOfWeek, push/unshift và vòng lặp tạo lịch 30 ngày.", url: "Lab08/lab08-walkthrough07.html" },
    { lab: "Lab08", code: "Exercise 8.8", title: "JavaScript Functions", desc: "Định nghĩa hàm outputBox(num) và phân biệt phạm vi biến.", url: "Lab08/lab08-walkthrough08.html" },
    { lab: "Lab08", code: "Exercise 8.9", title: "Functions as Objects", desc: "Truyền hàm ẩn danh tính thuế để tính tổng hóa đơn.", url: "Lab08/lab08-walkthrough09.html" },
    { lab: "Lab08", code: "Exercise 8.10", title: "Creating JavaScript Objects", desc: "Constructor function order() với phương thức total() và output().", url: "Lab08/lab08-walkthrough10.html" },
    { lab: "Lab08", code: "Exercise 8.11", title: "Arrays of Objects", desc: "Mảng đối tượng Country, vòng lặp for...in và hiển thị quốc kỳ.", url: "Lab08/lab08-walkthrough11.html" },
    { lab: "Lab08", code: "Mở rộng Lab 08", title: "Travel Posts Dynamic Page", desc: "Tách hàm render dữ liệu từ travel-data.js vào exercise.html.", url: "Lab08/exercise.html" },

    // Lab 09
    { lab: "Lab09", code: "Exercise 9.1", title: "Basic DOM Selection", desc: "Truy xuất DOM bằng ID, TagName, ClassName, querySelectorAll.", url: "Lab09/lab09-walkthrough01.html" },
    { lab: "Lab09", code: "Exercise 9.2", title: "DOM Family Relations", desc: "Duyệt childNodes, kiểm tra nodeType và đổi màu khối stories.", url: "Lab09/lab09-walkthrough02.html" },
    { lab: "Lab09", code: "Exercise 9.3", title: "Modifying the DOM", desc: "Tạo phần tử bằng createElement/appendChild và xóa bằng removeChild.", url: "Lab09/lab09-walkthrough03.html" },
    { lab: "Lab09", code: "Exercise 9.4", title: "Simple Event Handling", desc: "Sự kiện click ẩn/hiện nội dung có độ trễ và hover làm xám ảnh.", url: "Lab09/lab09-walkthrough04.html" },
    { lab: "Lab09", code: "Exercise 9.5", title: "Responding to Load Events", desc: "Dùng window.addEventListener('load') đọc #div1 an toàn.", url: "Lab09/lab09-exercise05.html" },
    { lab: "Lab09", code: "Exercise 9.6", title: "Debugging Events", desc: "Bắt sự kiện mouseover trên các div và gỡ lỗi bằng Breakpoint.", url: "Lab09/lab09-walkthrough05.html" },
    { lab: "Lab09", code: "Exercise 9.7", title: "Working with Forms", desc: "Đổi màu nền ô input khi xảy ra sự kiện focus và blur.", url: "Lab09/lab09-walkthrough07.html" },
    { lab: "Lab09", code: "Exercise 9.8", title: "Form Validation", desc: "Ngăn submit bằng preventDefault() và hiển thị lỗi trong #errors.", url: "Lab09/lab09-walkthrough08.html" },

    // Lab 10
    { lab: "Lab10", code: "Exercise 10.1", title: "Set Up jQuery", desc: "Tải jQuery từ CDN HTTPS và cơ chế fallback về bản nội bộ.", url: "Lab10/lab10-exercise01.html" },
    { lab: "Lab10", code: "Exercise 10.2", title: "Basic Selectors", desc: "Chọn phần tử với $() và dùng .val(), .html(), .css(), .addClass().", url: "Lab10/lab10-walkthrough01.html" },
    { lab: "Lab10", code: "Exercise 10.3", title: "Advanced Selectors", desc: "Bộ chọn nâng cao :nth-child(4n) và label:contains('word').", url: "Lab10/lab10-walkthrough03.html" },
    { lab: "Lab10", code: "Exercise 10.4", title: "jQuery Listeners", desc: "Xâu chuỗi .on('mousemove'/'mouseleave'/'click') và hủy bằng .off().", url: "Lab10/lab10-walkthrough04.html" },
    { lab: "Lab10", code: "Exercise 10.5", title: "Inserting DOM Elements", desc: "Tạo ảnh động và chèn vào DOM bằng insertBefore().", url: "Lab10/lab10-walkthrough05.html" },
    { lab: "Lab10", code: "Exercise 10.6", title: "Simple jQuery Animation", desc: "Các nút hiệu ứng fadeIn, fadeOut, fadeToggle, slideUp, slideDown.", url: "Lab10/lab10-walkthrough06.html" },
    { lab: "Lab10", code: "Exercise 10.7", title: "More jQuery Animation", desc: "Khung xem trước ảnh cỡ lớn theo vị trí chuột khi rê vào ảnh nhỏ.", url: "Lab10/lab10-walkthrough07.html" },
    { lab: "Lab10", code: "Exercise 10.8", title: "Complex Animations", desc: "Chuỗi hoạt ảnh đa bước bằng .animate() cho hộp #box.", url: "Lab10/lab10-walkthrough08.html" },
    { lab: "Lab10", code: "Exercise 10.9", title: "GET Requests", desc: "Gửi yêu cầu AJAX bằng $.get() và lặp dữ liệu JSON với $.each().", url: "Lab10/lab10-walkthrough09.html" },
    { lab: "Lab10", code: "Exercise 10.10", title: "jqXHR Handling", desc: "Xử lý bất đồng bộ với .done(), .fail(), .always() và ảnh loading.", url: "Lab10/lab10-walkthrough10.html" }
];

document.addEventListener("DOMContentLoaded", function () {
    initThemeToggle();
    initExerciseDirectory();
    initEcommerceDemo();
});

function initThemeToggle() {
    const btn = document.getElementById("themeToggle");
    if (!btn) return;

    const saved = localStorage.getItem("jslabs_theme");
    if (saved === "dark") {
        document.body.classList.add("dark-mode");
        btn.textContent = "Chế độ sáng";
    }

    btn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");
        btn.textContent = isDark ? "Chế độ sáng" : "Chế độ tối";
        localStorage.setItem("jslabs_theme", isDark ? "dark" : "light");
    });
}

function initExerciseDirectory() {
    const grid = document.getElementById("exerciseGrid");
    const searchInput = document.getElementById("exerciseSearch");
    const filterButtons = document.querySelectorAll(".filter-btn");
    if (!grid) return;

    let currentLab = "ALL";
    let currentQuery = "";

    function render() {
        const filtered = exercises.filter(function (item) {
            const matchLab = currentLab === "ALL" || item.lab === currentLab;
            const keyword = currentQuery.trim().toLowerCase();
            const matchText =
                !keyword ||
                item.code.toLowerCase().includes(keyword) ||
                item.title.toLowerCase().includes(keyword) ||
                item.desc.toLowerCase().includes(keyword);
            return matchLab && matchText;
        });

        if (filtered.length === 0) {
            grid.innerHTML = "<p>Không tìm thấy bài tập phù hợp với từ khóa.</p>";
            return;
        }

        grid.innerHTML = filtered
            .map(function (item) {
                return (
                    '<article class="ex-card">' +
                    '  <span class="ex-badge">' + item.lab + " &bull; " + item.code + "</span>" +
                    "  <h3>" + item.title + "</h3>" +
                    "  <p>" + item.desc + "</p>" +
                    '  <div class="card-actions">' +
                    '    <a class="btn-primary" href="' + item.url + '" target="_blank">Chạy thử bài tập</a>' +
                    "  </div>" +
                    "</article>"
                );
            })
            .join("");
    }

    filterButtons.forEach(function (btn) {
        btn.addEventListener("click", function () {
            filterButtons.forEach(function (b) { b.classList.remove("active"); });
            btn.classList.add("active");
            currentLab = btn.getAttribute("data-lab");
            render();
        });
    });

    if (searchInput) {
        searchInput.addEventListener("input", function () {
            currentQuery = searchInput.value;
            render();
        });
    }

    render();
}

function initEcommerceDemo() {
    const productListEl = document.getElementById("demoProducts");
    const subtotalEl = document.getElementById("demoSubtotal");
    const vatEl = document.getElementById("demoVat");
    const totalEl = document.getElementById("demoTotal");
    const formEl = document.getElementById("demoOrderForm");
    const feedbackEl = document.getElementById("demoFeedback");
    if (!productListEl || !formEl) return;

    const cartItems = [
        { id: 1, name: "Áo Thun UEH Cotton", price: 180000, qty: 1 },
        { id: 2, name: "Sổ Tay Lập Trình Web", price: 95000, qty: 2 },
        { id: 3, name: "Bình Nước Giữ Nhiệt BIT", price: 240000, qty: 0 }
    ];

    function formatVND(amount) {
        return amount.toLocaleString("vi-VN") + " đ";
    }

    function updateCartUI() {
        productListEl.innerHTML = cartItems
            .map(function (item) {
                return (
                    '<div class="product-item">' +
                    "  <div>" +
                    "    <strong>" + item.name + "</strong><br>" +
                    "    <small>" + formatVND(item.price) + "</small>" +
                    "  </div>" +
                    '  <div class="qty-controls">' +
                    '    <button type="button" class="qty-btn" data-id="' + item.id + '" data-delta="-1">-</button>' +
                    "    <span><strong>" + item.qty + "</strong></span>" +
                    '    <button type="button" class="qty-btn" data-id="' + item.id + '" data-delta="1">+</button>' +
                    "  </div>" +
                    "</div>"
                );
            })
            .join("");

        const subtotal = cartItems.reduce(function (sum, item) {
            return sum + item.price * item.qty;
        }, 0);
        const vat = Math.round(subtotal * 0.08);
        const total = subtotal + vat;

        subtotalEl.textContent = formatVND(subtotal);
        vatEl.textContent = formatVND(vat);
        totalEl.textContent = formatVND(total);
    }

    productListEl.addEventListener("click", function (e) {
        if (!e.target.classList.contains("qty-btn")) return;
        const id = Number(e.target.getAttribute("data-id"));
        const delta = Number(e.target.getAttribute("data-delta"));
        const targetItem = cartItems.find(function (p) { return p.id === id; });
        if (targetItem) {
            targetItem.qty = Math.max(0, targetItem.qty + delta);
            updateCartUI();
        }
    });

    formEl.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("custName").value.trim();
        const email = document.getElementById("custEmail").value.trim();
        const phone = document.getElementById("custPhone").value.trim();
        const totalQty = cartItems.reduce(function (sum, item) { return sum + item.qty; }, 0);

        const errors = [];
        if (totalQty === 0) errors.push("Vui lòng chọn ít nhất 1 sản phẩm trong giỏ hàng.");
        if (!name) errors.push("Họ tên người nhận không được để trống.");
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("Email chưa đúng định dạng.");
        if (!/^0\d{9,10}$/.test(phone)) errors.push("Số điện thoại phải bắt đầu bằng số 0 và gồm 10–11 chữ số.");

        if (errors.length > 0) {
            feedbackEl.className = "form-feedback error";
            feedbackEl.innerHTML = errors.join("<br>");
        } else {
            feedbackEl.className = "form-feedback success";
            feedbackEl.innerHTML =
                "Đặt hàng thử nghiệm thành công cho <strong>" + name + "</strong>! Tổng thanh toán: <strong>" + totalEl.textContent + "</strong>.";
        }
    });

    updateCartUI();
}
