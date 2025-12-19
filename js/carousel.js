document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("carousel-track");
    const items = Array.from(track.querySelectorAll(".carousel-item"));
    const scrollSpeed = 0.5;       // pixels per frame
    const fadeDuration = 2000;    // in ms, how long fade in/out takes
    const fadeMargin = 220;       // in px, how far from edge to start fading

    // Set initial positions
    items.forEach((item, index) => {
        item.style.position = "absolute";
        item.style.left = (index * (item.offsetWidth + 10)) + "px";
        item.style.transition = `opacity ${fadeDuration}ms ease`; // use fadeDuration
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
