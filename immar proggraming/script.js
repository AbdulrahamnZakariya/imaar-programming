// تشغيل التأثيرات عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
    });
});

// تحريك العناصر عند التمرير
window.addEventListener("scroll", function () {
    let elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => {
        let position = el.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {
            el.classList.add("visible");
        }
    });
});

// تأثير عند تمرير الماوس على المشاريع
let projects = document.querySelectorAll(".project");
projects.forEach((project) => {
    project.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.05)";
        this.style.boxShadow = "0 15px 40px rgba(0, 0, 0, 0.3)";
    });

    project.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
        this.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let popup = document.getElementById("welcomePopup");
    let closeBtn = document.getElementById("closePopup");

    // التحقق مما إذا كان المستخدم زار الموقع سابقًا
    if (!sessionStorage.getItem("visited")) {
        setTimeout(() => {
            popup.classList.add("show");
        }, 1000); // تأخير 1 ثانية قبل الظهور

        // حفظ الحالة لمنع ظهورها مرة أخرى
        sessionStorage.setItem("visited", "true");
    }

    // إغلاق النافذة عند الضغط على الزر
    closeBtn.addEventListener("click", function () {
        popup.classList.remove("show");
    });

    // إغلاق النافذة عند الضغط خارجها
    popup.addEventListener("click", function (e) {
        if (e.target === popup) {
            popup.classList.remove("show");
        }
    });
});
