document.addEventListener('DOMContentLoaded', function () {
    const contactCards = document.querySelectorAll(".contact-card");

    contactCards.forEach(card => {
        card.addEventListener('mousemove', event => {
            const [x, y] = [event.offsetX, event.offsetY];
            const rect = card.getBoundingClientRect();
            const [width, height] = [rect.width, rect.height];
            const middleX = width / 2;
            const middleY = height / 2;
            const offsetX = ((x - middleX) / middleX) * 25;
            const offsetY = ((y - middleY) / middleY) * 25;
            const offX = 50 + ((x - middleX) / middleX) * 25;
            const offY = 50 - ((y - middleY) / middleY) * 20;

            card.style.setProperty("--rotateX", 1 * offsetX + "deg");
            card.style.setProperty("--rotateY", -1 * offsetY + "deg");
            card.style.setProperty("--posx", offX + "%");
            card.style.setProperty("--posy", offY + "%");
        });

        card.addEventListener('mouseleave', event => {
            card.style.animation = 'reset-card 1s ease';
            card.addEventListener("animationend", () => {
                card.style.animation = 'unset';
                card.style.setProperty("--rotateX", "0deg");
                card.style.setProperty("--rotateY", "0deg");
                card.style.setProperty("--posx", "50%");
                card.style.setProperty("--posy", "50%");
            }, {
                once: true
            });
        });
    });
});