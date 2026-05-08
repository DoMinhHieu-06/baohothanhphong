// ============================================
// THÀNH PHONG - BẢO HỘ LAO ĐỘNG
// Main JavaScript
// ============================================

// 1. Cấu trúc dữ liệu chi tiết sản phẩm (Đầy đủ từ index.html)
const productData = {
    'DongPhucBaoVe': {
        title: 'Quần áo bảo vệ - Áo trắng, quần đen',
        price: 'Liên hệ',
        desc: 'Đồng phục bảo vệ chuyên nghiệp, chất liệu vải tốt, form dáng chuẩn. Nhận may thêu logo theo yêu cầu.',
        imgs: ['images/Đồng Phục Bảo Vệ/ao-trang-quan-den.png', 'images/Đồng Phục Bảo Vệ/do-bao-ve.png']
    },
    'DongPhucBaoVeNew': {
        title: 'Quần áo bảo vệ - Áo xanh biển, quần xanh than',
        price: 'Liên hệ',
        desc: 'Phong cách chuyên nghiệp, vải bền đẹp, thoáng mát, phù hợp môi trường làm việc năng động.',
        imgs: ['images/Đồng Phục Bảo Vệ NEW/ao-xanh-bien-quan-xanh-than.png']
    },
    'CauVaiBaoVe': {
        title: 'Cầu vai bảo vệ',
        price: 'Liên hệ',
        desc: 'Cầu vai viền đỏ, viền vàng, gạch đồng, thông tư mới. Cầu vai TTM loại đẹp (thêu) đầy đủ mẫu mã.',
        imgs: ['images/Cầu Vai Bảo Vệ/do.png']
    },
    'NonSaoBaoVe': {
        title: 'Nón bảo vệ & Sao bảo vệ',
        price: 'Liên hệ',
        desc: 'Nón bảo vệ thêu chữ Security, sao bảo vệ chuẩn quy cách. Logo bảo vệ nội bộ đầy đủ.',
        imgs: ['images/Nón , Sao Bảo Vệ/non-bao-ve.png']
    },
    'CaVatVeAoBaoVe': {
        title: 'Cà vạt & Ve áo bảo vệ',
        price: 'Liên hệ',
        desc: 'Cà vạt bảo vệ sang trọng, ve áo bảo vệ thông tư mới. Hoàn thiện bộ đồng phục chuyên nghiệp.',
        imgs: ['images/Cà Vạt, Ve Bảo Vệ/image.png']
    },
    'DayThatLungBaoVe': {
        title: 'Dây thắt lưng bảo vệ Security',
        price: 'Liên hệ',
        desc: 'Dây thắt lưng bền chắc, khóa chắc chắn, in logo Security chuyên dụng cho lực lượng bảo vệ.',
        imgs: ['images/Dây thắt lưng bảo vệ Security/day-that-lung.png']
    },
    'DayDaKhongBuoc': {
        title: 'Giày da bảo vệ - Không buộc dây',
        price: 'Liên hệ',
        desc: 'Giày da cao cấp, thiết kế sang trọng, không cần buộc dây tiện lợi. Đế chống trượt, êm chân.',
        imgs: ['images/Giày da bảo vệ - Không buộc dây/day-da-kb.png']
    },
    'DayDaCoBuoc': {
        title: 'Giày da bảo vệ - Có buộc dây',
        price: 'Liên hệ',
        desc: 'Giày da có dây buộc, ôm chân chắc chắn, phù hợp cho bảo vệ tuần tra, hoạt động ngoài trời.',
        imgs: ['images/Giày da bảo vệ - Có buộc dây/day-co-cao.png']
    },
    'DayBaoHoLaoDong': {
        title: 'Giày bảo hộ lao động',
        price: 'Liên hệ',
        desc: 'Giày bảo hộ đầu thép, chống đâm xuyên, chống trượt, đạt tiêu chuẩn an toàn quốc tế.',
        imgs: ['images/Giày bảo hộ lao động/Giày Jogger  .png']
    },
    'MuBaoHoLaoDong': {
        title: 'Mũ bảo hộ lao động',
        price: 'Liên hệ',
        desc: 'Mũ bảo hộ đạt chuẩn, chống va đập, nhẹ và thoáng khí. Nhiều màu sắc, phù hợp mọi công trường.',
        imgs: ['images/Mũ bảo hộ lao động/N40-1 Thùy Dương.png']
    },
    'KinhKhauTrangBaoHo': {
        title: 'Kính bảo hộ & Khẩu trang',
        price: 'Liên hệ',
        desc: 'Kính chống bụi, chống tia UV, khẩu trang than hoạt tính. Bảo vệ mắt và đường hô hấp hiệu quả.',
        imgs: ['images/Kính bảo hộ & Khẩu trang/k2.png']
    },
    'GangTayBaoHo': {
        title: 'Găng tay bảo hộ',
        price: 'Liên hệ',
        desc: 'Găng tay vải, găng tay cao su, găng tay chống cắt. Đa dạng chủng loại cho mọi ngành nghề.',
        imgs: ['images/Gang tay bảo hộ/Găng Tay Da Hàn Đỏ.png']
    },
    'AoPhanQuangQuanAoBaoHo': {
        title: 'Áo phản quang & Quần áo bảo hộ',
        price: 'Liên hệ',
        desc: 'Áo phản quang an toàn, quần áo bảo hộ vải chống cháy, chống hóa chất. Bảo vệ toàn diện cho người lao động.',
        imgs: ['images/Áo Phản Quang/vải POLY/image.png']
    },
    'GayCaoSuDuiCui': {
        title: 'Gậy cao su - Dùi cui bảo vệ',
        price: 'Liên hệ',
        desc: 'Gậy cao su chuyên dụng cho bảo vệ, dùi cui chất lượng cao, bền bỉ theo thời gian.',
        imgs: ['images/Gậy cao su - Dùi cui bảo vệ/dcbv.png']
    },
    'GayGiaoThong': {
        title: 'Gậy giao thông',
        price: 'Liên hệ',
        desc: 'Gậy điều hướng giao thông phản quang, sáng rõ ban đêm, chuyên dụng cho lực lượng bảo vệ và điều hành giao thông.',
        imgs: ['images/Gậy giao thông/gdt.png']
    },
    'PCCCAnToan': {
        title: 'Thiết bị PCCC & An toàn',
        price: 'Liên hệ',
        desc: 'Bình chữa cháy, vòi cứu hỏa, biển báo an toàn. Trang bị đầy đủ cho doanh nghiệp đạt chuẩn PCCC.',
        imgs: ['images/Thiết bị PCCC & An toàn/Bình bột ABC - 4kg .png']
    }
};

// Biến toàn cục cho Lightbox
let currentAlbum = [];
let currentIndex = 0;
let lightbox, mainImg, thumbsContainer, prevBtn, nextBtn, closeBtn, overlay;

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Ẩn Preloader
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('hidden');
    }

    // 2. Khởi tạo các thành phần
    initSmoothScroll();
    initActiveNavOnScroll();
    initProductFilter();
    initStatsCounter();
    initScrollTop();
    initContactForm();
    initProductGalleryLightbox();

    // 3. Khởi tạo AOS Animation
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }
});

// ==========================================
// SMOOTH SCROLL
// ==========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
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
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            productCards.forEach((card, index) => {
                const category = card.dataset.category;
                const shouldShow = filter === 'all' || category === filter;

                if (shouldShow) {
                    card.style.display = 'block';
                    card.classList.remove('hidden');
                    card.style.animation = `fadeInUp 0.5s ease ${index * 0.05}s forwards`;
                } else {
                    card.style.display = 'none';
                    card.classList.add('hidden');
                    card.style.animation = '';
                }
            });
        });
    });
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
    animateCounters();
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
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.visibility = 'visible';
        } else {
            scrollTopBtn.classList.remove('visible');
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.visibility = 'hidden';
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

        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang gửi...';
        submitBtn.disabled = true;

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

    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.style.transform = 'translateX(0)';
    });

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
function initProductGalleryLightbox() {
    lightbox = document.getElementById('productLightbox');
    if (!lightbox) return;

    mainImg = document.getElementById('lightboxMainImg');
    thumbsContainer = document.getElementById('lightboxThumbs');
    prevBtn = lightbox.querySelector('.prev-btn');
    nextBtn = lightbox.querySelector('.next-btn');
    closeBtn = lightbox.querySelector('.lightbox-close');
    overlay = lightbox.querySelector('.lightbox-overlay');

    document.querySelectorAll('.product-gallery-trigger').forEach(trigger => {
        trigger.onclick = (e) => {
            e.preventDefault();
            const id = trigger.getAttribute('data-album-id');
            const data = productData[id];

            if (data) {
                document.getElementById('lt-title').innerText = data.title;
                document.getElementById('lt-price').innerText = data.price;
                document.getElementById('lt-desc').innerText = data.desc;
                currentAlbum = data.imgs;
            } else {
                const title = trigger.closest('.product-card').querySelector('h3').innerText;
                document.getElementById('lt-title').innerText = title;
                document.getElementById('lt-price').innerText = 'Liên hệ';
                document.getElementById('lt-desc').innerText = 'Thông tin chi tiết đang được cập nhật...';
                currentAlbum = [trigger.getAttribute('href')];
            }

            currentIndex = 0;
            updateLightbox();
            lightbox.classList.add('open');
            document.body.style.overflow = 'hidden';
        };
    });

    const closeLightbox = () => {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
    };

    if (closeBtn) closeBtn.onclick = closeLightbox;
    if (overlay) overlay.onclick = closeLightbox;

    if (prevBtn) {
        prevBtn.onclick = () => {
            currentIndex = (currentIndex - 1 + currentAlbum.length) % currentAlbum.length;
            updateLightbox();
        };
    }

    if (nextBtn) {
        nextBtn.onclick = () => {
            currentIndex = (currentIndex + 1) % currentAlbum.length;
            updateLightbox();
        };
    }
}

function updateLightbox() {
    if (!currentAlbum || currentAlbum.length === 0) return;
    if (mainImg) mainImg.src = currentAlbum[currentIndex];

    if (thumbsContainer) {
        thumbsContainer.innerHTML = '';
        currentAlbum.forEach((imgSrc, index) => {
            const thumb = document.createElement('div');
            thumb.className = `thumb-item ${index === currentIndex ? 'active' : ''}`;
            thumb.innerHTML = `<img src="${imgSrc}">`;
            thumb.onclick = () => {
                currentIndex = index;
                updateLightbox();
            };
            thumbsContainer.appendChild(thumb);
        });
    }
}

window.changeQty = function(amt) {
    const qtyInput = document.getElementById('lt-qty');
    if (!qtyInput) return;
    let val = parseInt(qtyInput.value) + amt;
    if (val < 1) val = 1;
    qtyInput.value = val;
};

window.addToCart = function() {
    const title = document.getElementById('lt-title').innerText;
    showNotification(`Đã thêm ${title} vào giỏ hàng!`, 'success');
};