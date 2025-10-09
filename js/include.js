// محتوای هدر - به صورت رشته در JS
const headerHTML = `
<header class="header">
    <div class="container">
        <div class="logo">
            <a href="index.html">
                <h2>🖥️ خدمات کامپیوتری</h2>
                <span class="tagline">پشتیبانی تخصصی IT</span>
            </a>
        </div>
        
        <nav class="nav">
            <a href="index.html">خانه</a>
            <a href="services.html">خدمات ما</a>
            <a href="pricing.html">تعرفه‌ها</a>
            <a href="education.html">آموزش رایگان</a>
            <a href="tools.html">ابزارهای رایگان</a>
            <a href="about.html">درباره ما</a>
            <a href="contact.html">تماس با ما</a>
        </nav>
        
        <!-- منوی موبایل -->
        <div class="mobile-menu-btn">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</header>

<!-- منوی موبایل -->
<div class="mobile-menu">
    <a href="index.html">🏠 خانه</a>
    <a href="services.html">🛠️ خدمات ما</a>
    <a href="pricing.html">💰 تعرفه‌ها</a>
    <a href="education.html">🎓 آموزش رایگان</a>
    <a href="tools.html">🛠️ ابزارهای رایگان</a>
    <a href="about.html">👥 درباره ما</a>
    <a href="contact.html">📞 تماس با ما</a>
</div>
`;

// محتوای فوتر - به صورت رشته در JS
const footerHTML = `
<footer class="footer">
    <div class="container">
        <div class="footer-content">
            <!-- بخش اطلاعات شرکت -->
            <div class="footer-section">
                <div class="footer-logo">
                    <h3>🖥️ خدمات کامپیوتری</h3>
                    <p class="footer-tagline">پشتیبانی تخصصی IT برای کسب‌وکارهای کوچک و متوسط</p>
                </div>
                
                <div class="footer-about">
                    <p>با ۱۰+ سال تجربه در ارائه خدمات تخصصی کامپیوتر، شبکه و امنیت اطلاعات به شرکت‌ها و سازمان‌ها</p>
                </div>
                
                <div class="trust-badges">
                    <div class="trust-badge">✅ ۱۰+ سال تجربه</div>
                    <div class="trust-badge">✅ ۵۰۰+ پروژه موفق</div>
                    <div class="trust-badge">✅ ۹۸% رضایت مشتریان</div>
                </div>
            </div>

            <!-- بخش خدمات -->
            <div class="footer-section">
                <h4>خدمات تخصصی ما</h4>
                <div class="footer-links">
                    <a href="services.html#network">
                        <span class="link-icon">🌐</span>
                        پشتیبانی شبکه
                    </a>
                    <a href="services.html#security">
                        <span class="link-icon">🛡️</span>
                        امنیت اطلاعات
                    </a>
                    <a href="services.html#internet">
                        <span class="link-icon">📡</span>
                        خدمات اینترنت
                    </a>
                    <a href="services.html#hardware">
                        <span class="link-icon">💻</span>
                        تعمیرات سخت‌افزار
                    </a>
                    <a href="services.html#software">
                        <span class="link-icon">📊</span>
                        نرم‌افزارهای اداری
                    </a>
                </div>
            </div>

            <!-- بخش منابع رایگان -->
            <div class="footer-section">
                <h4>منابع رایگان</h4>
                <div class="footer-links">
                    <a href="education.html">
                        <span class="link-icon">🎓</span>
                        آموزش‌های ویدیویی
                    </a>
                    <a href="tools.html">
                        <span class="link-icon">🛠️</span>
                        ابزارهای کاربردی
                    </a>
                    <a href="blog.html">
                        <span class="link-icon">📚</span>
                        مقالات آموزشی
                    </a>
                    <a href="downloads.html">
                        <span class="link-icon">📥</span>
                        دانلود رایگان
                    </a>
                </div>
            </div>

            <!-- بخش تماس و اطلاعات -->
            <div class="footer-section">
                <h4>ارتباط با ما</h4>
                
                <div class="contact-info">
                    <div class="contact-item">
                        <span class="contact-icon">📞</span>
                        <div class="contact-details">
                            <span class="contact-label">تلفن تماس</span>
                            <a href="tel:02112345678" class="contact-value">۰۲۱-۱۲۳۴۵۶۷۸</a>
                        </div>
                    </div>
                    
                    <div class="contact-item">
                        <span class="contact-icon">📱</span>
                        <div class="contact-details">
                            <span class="contact-label">واتساپ</span>
                            <a href="https://wa.me/989121234567" class="contact-value">۰۹۱۲۱۲۳۴۵۶۷</a>
                        </div>
                    </div>
                    
                    <div class="contact-item">
                        <span class="contact-icon">📧</span>
                        <div class="contact-details">
                            <span class="contact-label">ایمیل</span>
                            <a href="mailto:info@itservice.ir" class="contact-value">info@itservice.ir</a>
                        </div>
                    </div>
                    
                    <div class="contact-item">
                        <span class="contact-icon">🏢</span>
                        <div class="contact-details">
                            <span class="contact-label">آدرس</span>
                            <span class="contact-value">تهران، خیابان ولیعصر</span>
                        </div>
                    </div>
                </div>

                <div class="business-hours">
                    <h5>🕒 ساعات کاری</h5>
                    <div class="hours-item">
                        <span>شنبه - چهارشنبه:</span>
                        <span>۸:۰۰ - ۱۷:۰۰</span>
                    </div>
                    <div class="hours-item">
                        <span>پنجشنبه:</span>
                        <span>۸:۰۰ - ۱۴:۰۰</span>
                        
                    </div>
                </div>
                

                <!-- بخش آمار -->
    <div class="footer-stats" style="text-align: center; margin: 25px 0; padding: 20px 0; border-top: 1px solid #eee;">
        <h4 style="margin-bottom: 15px; color: #666;">📊 آمار بازدید itroot</h4>
        <iframe src="https://visit-counter.ali-ir-th.workers.dev?page=footer" 
                width="280" height="240"
                style="border: none; border-radius: 10px; display: inline-block;">
        </iframe>
    </div>

               
            </div>
        </div>

        <!-- خط جداکننده -->
        <div class="footer-divider"></div>

        <!-- بخش پایینی -->
        <div class="footer-bottom">
            <div class="footer-bottom-content">
                <div class="copyright">
                    <p>&copy; ۱۴۰۳ - خدمات کامپیوتری. تمامی حقوق محفوظ است.</p>
                </div>
                
                <div class="footer-bottom-links">
                    <a href="privacy.html">حریم خصوصی</a>
                    <a href="terms.html">قوانین و مقررات</a>
                    <a href="sitemap.html">نقشه سایت</a>
                </div>
            </div>
            
            <div class="developer-credit">
                <p>طراحی و توسعه با ❤️ برای جامعه IT ایران</p>
            </div>
        </div>
    </div>
</footer>
`;

// تابع برای لود هدر و فوتر
function loadHeaderAndFooter() {
    console.log('🚀 Loading header and footer...');
    
    // لود هدر
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
        console.log('✅ Header loaded successfully');
    } else {
        console.error('❌ Header placeholder not found');
    }
    
    // لود فوتر
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
        console.log('✅ Footer loaded successfully');
        
        // فعال‌سازی اسکریپت‌های فوتر
        initFooterScripts();
    } else {
        console.error('❌ Footer placeholder not found');
    }
    
    // فعال‌سازی منوی موبایل و ناوبری
    initMobileMenu();
    setActiveNav();
}

// منوی موبایل
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            menuBtn.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
        
        // بستن منو با کلیک خارج
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.mobile-menu') && 
                !event.target.closest('.mobile-menu-btn') &&
                mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                menuBtn.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
        
        console.log('✅ Mobile menu initialized');
    }
}

// ست کردن لینک فعال در ناوبری
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav a, .mobile-menu a');
    
    navLinks.forEach(link => {
        // حذف کلاس active از همه
        link.classList.remove('active');
        
        // بررسی لینک فعلی
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        }
        
        // برای صفحه اصلی
        if (currentPage === 'index.html' && linkHref === 'index.html') {
            link.classList.add('active');
        }
    });
    
    console.log(`✅ Active navigation set for: ${currentPage}`);
}

// اسکریپت‌های فوتر
function initFooterScripts() {
    console.log('🎯 Initializing footer scripts...');
    
    // انیمیشن برای آیتم‌های تماس
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    console.log(`✅ ${contactItems.length} contact items animated`);

}


    


// لودر صفحه
function showLoader() {
    const loader = document.createElement('div');
    loader.id = 'page-loader';
    loader.innerHTML = `
        <div class="loader-spinner"></div>
        <p>در حال بارگذاری...</p>
    `;
    document.body.appendChild(loader);
}

function hideLoader() {
    const loader = document.getElementById('page-loader');
    if (loader) {
        loader.remove();
    }
}

// بارگذاری هنگام لود صفحه
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM loaded, initializing components...');
    showLoader();
    
    // لود هدر و فوتر
    setTimeout(() => {
        loadHeaderAndFooter();
        hideLoader();
        console.log('🎉 All components initialized successfully');
    }, 100);
});

// CSS برای هدر و فوتر - به صورت dynamic
const headerFooterCSS = `
/* استایل‌های هدر */
.header {
    background: white;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

.header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
}

.logo h2 {
    color: var(--primary);
    font-size: 1.5rem;
    margin: 0;
}

.tagline {
    display: block;
    font-size: 0.8rem;
    color: var(--secondary);
    margin-top: 0.2rem;
}

.nav {
    display: flex;
    gap: 2rem;
}

.nav a {
    text-decoration: none;
    color: var(--dark);
    font-weight: 500;
    transition: color 0.3s;
    padding: 0.5rem 0;
}

.nav a:hover,
.nav a.active {
    color: var(--primary);
}

/* منوی موبایل */
.mobile-menu-btn {
    display: none;
    flex-direction: column;
    cursor: pointer;
    gap: 4px;
    padding: 0.5rem;
}

.mobile-menu-btn span {
    width: 25px;
    height: 3px;
    background: var(--dark);
    transition: 0.3s;
}

.mobile-menu {
    display: none;
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: white;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    flex-direction: column;
    padding: 1rem 0;
    z-index: 1000;
}

.mobile-menu.active {
    display: flex;
}

.mobile-menu a {
    padding: 1rem 2rem;
    text-decoration: none;
    color: var(--dark);
    border-bottom: 1px solid var(--light);
    transition: all 0.3s;
}

.mobile-menu a:hover,
.mobile-menu a.active {
    background: var(--primary);
    color: white;
}

/* استایل‌های فوتر */
.footer {
    background: linear-gradient(135deg, var(--dark) 0%, #1a202c 100%);
    color: white;
    padding: 3rem 0 1rem;
    margin-top: auto;
}

.footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1.5fr;
    gap: 2rem;
    margin-bottom: 2rem;
}

.footer-section h4 {
    color: white;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
}

.footer-tagline {
    color: #cbd5e1;
    margin-bottom: 1rem;
}

.footer-about p {
    color: #94a3b8;
    line-height: 1.6;
}

.trust-badges {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
}

.trust-badge {
    background: rgba(255, 255, 255, 0.1);
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-size: 0.85rem;
}

.footer-links {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
}

.footer-links a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #cbd5e1;
    text-decoration: none;
    transition: all 0.3s;
    padding: 0.3rem 0;
}

.footer-links a:hover {
    color: white;
    transform: translateX(-5px);
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.contact-item {
    display: flex;
    align-items: flex-start;
    gap: 0.8rem;
    padding: 0.5rem;
    transition: all 0.3s;
}

.contact-details {
    display: flex;
    flex-direction: column;
}

.contact-label {
    font-size: 0.8rem;
    color: #94a3b8;
}

.contact-value {
    color: white;
    text-decoration: none;
}

.business-hours {
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(255,255,255,0.1);
}

.hours-item {
    display: flex;
    justify-content: space-between;
    padding: 0.3rem 0;
    font-size: 0.9rem;
    color: #cbd5e1;
}

.footer-divider {
    height: 1px;
    background: rgba(255,255,255,0.1);
    margin: 2rem 0;
}

.footer-bottom-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer-bottom-links {
    display: flex;
    gap: 1.5rem;
}

.footer-bottom-links a {
    color: #94a3b8;
    text-decoration: none;
    font-size: 0.9rem;
}

.developer-credit {
    text-align: center;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(255,255,255,0.1);
    color: #94a3b8;
    font-size: 0.9rem;
}

/* رسپانسیو */
@media (max-width: 768px) {
    .nav {
        display: none;
    }
    
    .mobile-menu-btn {
        display: flex;
    }
    
    .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .footer-bottom-content {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }
    
    .tagline {
        display: none;
    }
}

/* لودر */
#page-loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.loader-spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #f3f4f6;
    border-top: 5px solid var(--primary);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 1rem;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

body.menu-open {
    overflow: hidden;
}
`;

// اضافه کردن CSS به صفحه
const style = document.createElement('style');
style.textContent = headerFooterCSS;
document.head.appendChild(style);


console.log('✅ Header and Footer system ready!');






