document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("carousel-track");
    const items = Array.from(track.querySelectorAll(".carousel-item"));

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    let scrollSpeed = 0.5;
    let fadeDuration = 1000;
    let fadeMargin = 200;

    if (isMobile) {
        scrollSpeed = 0.25;
        fadeDuration = 1200;
        fadeMargin = 0;
    }

    items.forEach((item, index) => {
        item.style.position = "absolute";
        item.style.left = index * (item.offsetWidth + 20) + "px";
        item.style.transition = `opacity ${fadeDuration}ms ease`;
    });


    function animateCarousel() {
        const containerWidth = track.parentElement.offsetWidth;

        items.forEach(item => {
            let left = parseFloat(item.style.left);
            left -= scrollSpeed;

            // Wrap around for infinite scroll
            if (left + item.offsetWidth < 0) {
                const maxLeft = Math.max(...items.map(i => parseFloat(i.style.left)));
                left = maxLeft + item.offsetWidth + 10; 
            }

            item.style.left = left + "px";

            // Fade in/out
            if (left + item.offsetWidth > fadeMargin && left < containerWidth - fadeMargin) {
                item.style.opacity = 1;
            } else {
                item.style.opacity = 0;
            }
        });

        requestAnimationFrame(animateCarousel);
    }

    animateCarousel();
});
