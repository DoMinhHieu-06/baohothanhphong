// ============================================
// THÀNH PHONG - BẢO HỘ LAO ĐỘNG
// Main JavaScript
// ============================================
// Dữ liệu ảnh cho từng sản phẩm
// 1. Cấu trúc dữ liệu chi tiết sản phẩm
const productData = {
    'DongPhucBaoVe': {
        title: 'Đồng Phục Bảo Vệ Áo Trắng',
        price: '350.000đ',
        desc: 'Chất liệu vải Kate Mỹ cao cấp, bền đẹp, thoáng mát. Đường may chắc chắn theo tiêu chuẩn.',
        imgs: ['images/Đồng Phục Bảo Vệ/ao-trang-quan-den.png', 'images/Đồng Phục Bảo Vệ/do-bao-ve.png']
    },
    'GayCaoSu': {
        title: 'Gậy Cao Su - Dùi Cui Bảo Vệ',
        price: '120.000đ',
        desc: 'Sản phẩm chuyên dụng, độ đàn hồi cực tốt, chịu lực va đập mạnh.',
        imgs: ['images/Gậy cao su - Dùi cui bảo vệ/dcbv.png']
    }
    // Thêm các sản phẩm khác vào đây...
};

// ==========================================
// SMOOTH SCROLL
// ==========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==========================================
// ACTIVE NAV ON SCROLL
// ==========================================
function initActiveNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function setActiveLink() {
        const scrollPos = window.pageYOffset + 120;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', setActiveLink, { passive: true });
}

// ==========================================
// PRODUCT FILTER
// ==========================================
function initProductFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    if (!filterBtns.length || !productCards.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            productCards.forEach((card, index) => {
                const category = card.dataset.category;
                const shouldShow = filter === 'all' || category === filter;

                if (shouldShow) {
                    card.classList.remove('hidden');
                    card.style.animation = `fadeInUp 0.5s ease ${index * 0.05}s forwards`;
                } else {
                    card.classList.add('hidden');
                    card.style.animation = '';
                }
            });
        });
    });

    // Add fadeInUp animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// ==========================================
// STATS COUNTER
// ==========================================
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    if (!statNumbers.length) return;

    let hasAnimated = false;

    function animateCounters() {
        if (hasAnimated) return;

        const heroSection = document.getElementById('hero');
        if (!heroSection) return;

        const rect = heroSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
            hasAnimated = true;

            statNumbers.forEach(el => {
                const target = parseInt(el.dataset.count);
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;

                const counter = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        current = target;
                        clearInterval(counter);
                    }
                    el.textContent = Math.round(current);
                }, 16);
            });
        }
    }

    window.addEventListener('scroll', animateCounters, { passive: true });
    animateCounters(); // Check on load
}

// ==========================================
// SCROLL TO TOP
// ==========================================
function initScrollTop() {
    const scrollTopBtn = document.getElementById('scrollTop');
    if (!scrollTopBtn) return;

    function toggleScrollBtn() {
        if (window.pageYOffset > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', toggleScrollBtn, { passive: true });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==========================================
// CONTACT FORM
// ==========================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        // Validate
        const name = form.querySelector('#name').value.trim();
        const phone = form.querySelector('#phone').value.trim();

        if (!name) {
            showNotification('Vui lòng nhập họ và tên!', 'error');
            return;
        }

        if (!phone || !/^(0[0-9]{9,10})$/.test(phone)) {
            showNotification('Vui lòng nhập số điện thoại hợp lệ!', 'error');
            return;
        }

        // Loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang gửi...';
        submitBtn.disabled = true;

        // Simulate form submission
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));

            showNotification('Gửi yêu cầu thành công! Chúng tôi sẽ liên hệ bạn sớm nhất.', 'success');
            form.reset();
        } catch (error) {
            showNotification('Có lỗi xảy ra. Vui lòng thử lại!', 'error');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

// ==========================================
// NOTIFICATION
// ==========================================
function showNotification(message, type = 'success') {
    // Remove existing notification
    const existing = document.querySelector('.notification-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = `notification-toast notification-${type}`;
    toast.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;

    // Styles
    Object.assign(toast.style, {
        position: 'fixed',
        top: '24px',
        right: '24px',
        zIndex: '10000',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '16px 24px',
        borderRadius: '12px',
        fontFamily: "'Be Vietnam Pro', sans-serif",
        fontSize: '14px',
        fontWeight: '500',
        color: '#fff',
        background: type === 'success' ? 'linear-gradient(135deg, #10B981, #34D399)' : 'linear-gradient(135deg, #EF4444, #F87171)',
        boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
        transform: 'translateX(120%)',
        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        maxWidth: '400px'
    });

    const closeBtn = toast.querySelector('.notification-close');
    Object.assign(closeBtn.style, {
        background: 'none',
        border: 'none',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '14px',
        padding: '4px',
        opacity: '0.8',
        marginLeft: '8px'
    });

    document.body.appendChild(toast);

    // Slide in
    requestAnimationFrame(() => {
        toast.style.transform = 'translateX(0)';
    });

    // Auto remove
    setTimeout(() => {
        toast.style.transform = 'translateX(120%)';
        setTimeout(() => toast.remove(), 400);
    }, 5000);
}

// ==========================================
// PARALLAX EFFECT ON HERO
// ==========================================
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const scrolled = window.pageYOffset;
    const shapes = hero.querySelectorAll('.shape');

    shapes.forEach((shape, i) => {
        const speed = (i + 1) * 0.03;
        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
}, { passive: true });

// ==========================================
// PRODUCT GALLERY LIGHTBOX
// ==========================================
// 1. Hàm khởi tạo Lightbox
function initProductGalleryLightbox() {
    const lightbox = document.getElementById('productLightbox');
    if (!lightbox) return;

    document.querySelectorAll('.product-gallery-trigger').forEach(trigger => {
        trigger.onclick = (e) => {
            e.preventDefault();
            const id = trigger.getAttribute('data-album-id');
            const data = productData[id];

            if (data) {
                // Đổ dữ liệu vào khung
                document.getElementById('lt-title').innerText = data.title;
                document.getElementById('lt-price').innerText = data.price;
                document.getElementById('lt-desc').innerText = data.desc;
                
                // Cập nhật ảnh (Dùng lại logic album cũ của bạn)
                currentAlbum = data.imgs;
                currentIndex = 0;
                updateLightbox();
                
                lightbox.classList.add('open');
                document.body.style.overflow = 'hidden';
            }
        };
    });
}

    // Mở Lightbox khi bấm vào ảnh
    document.querySelectorAll('.product-gallery-trigger').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const albumId = trigger.getAttribute('data-album-id');
            currentAlbum = productAlbums[albumId] || [trigger.getAttribute('href')];
            currentIndex = 0;
            updateLightbox();
            lightbox.classList.add('open');
            document.body.style.overflow = 'hidden';
        });
    });

    // Cập nhật nội dung ảnh và danh sách ảnh nhỏ
    function updateLightbox() {
        if (currentAlbum.length === 0) return;
        mainImg.src = currentAlbum[currentIndex];
        
        thumbsContainer.innerHTML = '';
        currentAlbum.forEach((imgSrc, index) => {
            const thumb = document.createElement('div');
            thumb.className = `thumb-item ${index === currentIndex ? 'active' : ''}`;
            thumb.innerHTML = `<img src="${imgSrc}">`;
            thumb.onclick = () => { currentIndex = index; updateLightbox(); };
            thumbsContainer.appendChild(thumb);
        });
    }

    // Điều hướng Trải/Phải
    prevBtn.onclick = () => { currentIndex = (currentIndex - 1 + currentAlbum.length) % currentAlbum.length; updateLightbox(); };
    nextBtn.onclick = () => { currentIndex = (currentIndex + 1) % currentAlbum.length; updateLightbox(); };

    // Đóng Lightbox
    const close = () => { lightbox.classList.remove('open'); document.body.style.overflow = ''; };
    closeBtn.onclick = close;
    overlay.onclick = close;
// 2. Hàm xử lý số lượng
function changeQty(amt) {
    const qtyInput = document.getElementById('lt-qty');
    let val = parseInt(qtyInput.value) + amt;
    if (val < 1) val = 1;
    qtyInput.value = val;
}
// 3. Hàm thêm vào giỏ hàng
function addToCart() {
    const title = document.getElementById('lt-title').innerText;
    showNotification(`Đã thêm ${title} vào giỏ hàng!`, 'success');
}