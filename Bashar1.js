// 1. وظيفة العداد التنازلي (Countdown Timer)
// تاريخ الزفاف المستهدف: 4 أكتوبر 2026
const targetDate = new Date("October 4, 2026 21:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = String(days).padStart(2, '0');
        document.getElementById("hours").innerText = String(hours).padStart(2, '0');
        document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
        document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// 2. وظيفة تبديل اللغات (عربي / إنجليزي)
let currentLang = 'ar';

function toggleLanguage() {
    const htmlTag = document.documentElement;
    const langBtn = document.getElementById("langBtn");
    
    if (currentLang === 'ar') {
        currentLang = 'en';
        htmlTag.setAttribute('lang', 'en');
        htmlTag.setAttribute('dir', 'ltr');
        langBtn.innerText = 'ع';
    } else {
        currentLang = 'ar';
        htmlTag.setAttribute('lang', 'ar');
        htmlTag.setAttribute('dir', 'rtl');
        langBtn.innerText = 'EN';
    }

    // تحديث النصوص بناءً على الخاصية المعرفة لكل عنصر
    const elements = document.querySelectorAll('[data-ar]');
    elements.forEach(el => {
        if (currentLang === 'en') {
            el.innerHTML = el.getAttribute('data-en');
        } else {
            el.innerHTML = el.getAttribute('data-ar');
        }
    });
}

// 3. التعامل مع إرسال نموذج الرسائل
document.getElementById("messageForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const guestName = document.getElementById("guestName").value;
    const guestMsg = document.getElementById("guestMsg").value;

    if(guestName && guestMsg) {
        alert(currentLang === 'ar' ? 'شكراً لك! تم إرسال رسالتك بنجاح للعروسين.' : 'Thank you! Your message has been sent successfully.');
        document.getElementById("messageForm").reset();
    }
});
