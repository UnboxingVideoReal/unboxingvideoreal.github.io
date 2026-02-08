document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".recent").forEach(el => {
        fetch("recent.html")
            .then(res => res.text())
            .then(html => {
                el.innerHTML = html;
            });
    });
});
