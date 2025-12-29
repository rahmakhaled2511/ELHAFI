document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("orderForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const order = document.getElementById("order").value;
    const address = document.getElementById("address").value;

    const phoneNumber = "201151552471"; // رقم الواتساب بدون +

    const message = encodeURIComponent(
    "طلب جديد 🛒\n\n" +
    "الاسم: " + name + "\n" +
    "الأوردر: " + order + "\n" +
    "العنوان: " + address
    );

    const url = "https://wa.me/" + phoneNumber + "?text=" + message;

    window.location.href = url; // يفتح واتساب مباشرة
});

const images = document.querySelectorAll('#gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

images.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src; // تظهر الصورة فقط عند الضغط
    });
});

// إغلاق عند الضغط على الخلفية
lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// منع الإغلاق عند الضغط على الصورة نفسها
lightboxImg.addEventListener('click', (e) => e.stopPropagation());
// --- كود تأثير الكتابة ---
    const textElement = document.getElementById("typing-text");
    const fullText = "مرحباً بكم في مطعم كبابجي الحافي";
    let index = 0;

    function typeWriter() {
        if (index < fullText.length) {
            textElement.innerHTML += fullText.charAt(index);
            index++;
            setTimeout(typeWriter, 40); // 100 هي سرعة الكتابة
        }
    }
    
    typeWriter(); // استدعاء الدالة للبدء
});
