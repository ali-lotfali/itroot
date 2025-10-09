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

    // آدرس واقعی Worker خودتان را اینجا قرار دهید
    const WORKER_URL = 'https://contact-form-handler.ali-ir-th.workers.dev';

// -------------------------------------------------------------------------------------------------------------------------------
// مدیریت فرم تماس
function initContactForm() {
    const contactForm = document.getElementById('serviceRequestForm');
    
    if (!contactForm) {
        console.log('❌ فرم تماس پیدا نشد');
        return;
    }

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        try {
            // تغییر وضعیت دکمه
            submitBtn.textContent = 'در حال ارسال...';
            submitBtn.disabled = true;

            // ایجاد FormData
            const formData = new FormData(this);
            
            // ارسال به Worker
            const response = await fetch('https://contact-form-handler.ali-ir-th.workers.dev', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                // نمایش پیام موفقیت
                showFormMessage(result.message, 'success');
                contactForm.reset(); // ریست کردن فرم
            } else {
                showFormMessage(result.error || 'خطا در ارسال فرم', 'error');
            }

        } catch (error) {
            console.error('خطا:', error);
            showFormMessage('خطا در ارتباط با سرور', 'error');
        } finally {
            // بازگرداندن دکمه
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

// تابع نمایش پیام
function showFormMessage(message, type) {
    // حذف پیام قبلی
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // ایجاد پیام جدید
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.innerHTML = `
        <div style="
            padding: 15px;
            margin: 20px 0;
            border-radius: 8px;
            text-align: center;
            font-weight: bold;
            font-size: 16px;
            ${type === 'success' ? 
                'background: #d4edda; color: #155724; border: 1px solid #c3e6cb;' : 
                'background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;'
            }
        ">
            ${type === 'success' ? '✅ ' : '❌ '}
            ${message}
        </div>
    `;

    // اضافه کردن پیام به فرم
    const form = document.getElementById('serviceRequestForm');
    const submitSection = form.querySelector('.form-submit');
    form.insertBefore(messageDiv, submitSection);

    // حذف خودکار بعد از 5 ثانیه
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 5000);
}

// راه‌اندازی وقتی صفحه لود شد
document.addEventListener('DOMContentLoaded', function() {
    initContactForm();
    console.log('✅ فرم تماس راه‌اندازی شد');
});


// -------------------------------------------------------------------------------------------------------------------------------


    

});

