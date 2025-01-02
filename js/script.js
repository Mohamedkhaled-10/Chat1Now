// التحقق إذا كان هناك تاريخ نهاية محفوظ في Local Storage
let countdownEndDate = localStorage.getItem('countdownEndDate');

// إذا لم يكن هناك تاريخ محفوظ، يتم تعيين تاريخ جديد بعد 194 يومًا
if (!countdownEndDate) {
    const countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + 194); // إضافة 194 يومًا
    countdownEndDate = countdownDate.getTime();
    localStorage.setItem('countdownEndDate', countdownEndDate); // تخزين التاريخ في المتصفح
}

// تحديث العداد
function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownEndDate - now;

    // حساب الأيام والساعات والدقائق والثواني
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // تحديث النصوص
    document.getElementById('countdown').innerHTML = `
        <span>${days} يوم</span>
        <span>${hours} ساعة</span>
        <span>${minutes} دقيقة</span>
        <span>${seconds} ثانية</span>
    `;

    // التوجيه عند انتهاء العداد
    if (distance < 0) {
        clearInterval(timer);
        localStorage.removeItem('countdownEndDate'); // إزالة التاريخ بعد انتهاء العداد
        window.location.href = 'index.html'; // توجيه للموقع الأساسي
    }
}

// تحديث العد كل ثانية
const timer = setInterval(updateCountdown, 1000);
