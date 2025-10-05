// اسکریپت‌های ساده برای تعامل
document.addEventListener('DOMContentLoaded', function() {
    // اسکرول نرم برای لینک‌ها
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // افزودن کلاس active به لینک فعال
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // انیمیشن اسکرول برای کارت‌ها
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // مشاهده المان‌ها برای انیمیشن
    document.querySelectorAll('.advantage-card, .service-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // کنسول لاگ برای توسعه‌دهندگان
    console.log('سایت خدمات کامپیوتری با موفقیت لود شد 🚀');
});