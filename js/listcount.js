document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("ratingGrid");
    const rows = Array.from(grid.children);

    // Sort alphabetically
    rows.sort((a, b) => {
        const nameA = a.querySelector(".rating-name").textContent.toLowerCase();
        const nameB = b.querySelector(".rating-name").textContent.toLowerCase();
        return nameA.localeCompare(nameB);
    });

    rows.forEach(row => grid.appendChild(row));

    // ✅ Count items
    const countEl = document.getElementById("ratingCount");
    countEl.textContent = rows.length;
});
