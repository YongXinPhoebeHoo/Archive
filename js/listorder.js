document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("ratingGrid");
    const rows = Array.from(grid.children);

    rows.sort((a, b) => {
        const nameA = a.querySelector(".rating-name").textContent.toLowerCase();
        const nameB = b.querySelector(".rating-name").textContent.toLowerCase();
        return nameA.localeCompare(nameB);
    });

    rows.forEach(row => grid.appendChild(row));
});
