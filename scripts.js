window.addEventListener('scroll', function() {
    const img = document.querySelector('.main .planet_about_us img');
    const section = document.querySelector('.about-us');
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const sectionTop = rect.top + scrollTop;
    const sectionHeight = rect.height;

    // Tính toán tỷ lệ cuộn
    const scrollRatio = (scrollTop + windowHeight - sectionTop) / (sectionHeight);

    // Giới hạn tỷ lệ cuộn trong khoảng từ 0 đến 1
    const clampedScrollRatio = Math.min(Math.max(scrollRatio, 0), 1);

    // Tính toán vị trí mới của phần tử
    const newLeft = -100 + (100 * clampedScrollRatio); // Từ -100% đến 0%
    const newRotation = 360 * clampedScrollRatio; // Từ 0deg đến 360deg
    requestAnimationFrame(() => {
        img.style.left = `${newLeft}%`;
        img.style.transform = `translateX(-40%)`;
        img.style.transform = `translateX(${newLeft}%) rotate(${newRotation}deg)`;
    });
});