window.addEventListener('scroll', function() {
    const img = document.querySelector('.main .planet_about_us img');
    const section = document.querySelector('.about-us');
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const sectionTop = rect.top + scrollTop;
    const sectionHeight = rect.height;

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

window.addEventListener('load', function() {
     const loadingScreen = document.getElementsByClassName('spinner')[0];
     loadingScreen.style.display = 'none';
});

document.addEventListener("DOMContentLoaded", function() {
    var footer = document.getElementById("footer");
    var sentinel = document.querySelector(".sentinel");

    var observer = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) {
            footer.classList.add("show");
        } else {
            footer.classList.remove("show");
        }
    });

    observer.observe(sentinel);
});

document.addEventListener("DOMContentLoaded", function() {
    var allColumns = document.querySelector(".allColumns");

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                var ratio = entry.intersectionRatio;
                if (ratio >= 0.5) {
                    allColumns.style.opacity = 1; // Fully visible
                } else {
                    allColumns.style.opacity = ratio * 2; // Partially visible
                }
            } else {
                allColumns.style.opacity = 0; // Not visible
            }
        });
    }, { threshold: [0, 0.5, 1] });

    observer.observe(allColumns);
});
