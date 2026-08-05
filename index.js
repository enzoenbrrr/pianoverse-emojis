(function () {
    
    (function addEmojisButton() {
        const emojisButton = document.createElement('i');
        emojisButton.classList.add('fa-solid', 'fa-face-laugh');
        emojisButton.style.cssText = 'display: flex;align-items: center;margin-right: max(0.7vw, 8px);cursor: url(/assets/pointer-BCNK29s4.cur);opacity: 0.4;';

        emojisButton.addEventListener('mouseenter', () => {
            emojisButton.style.opacity = '1';
        });
        emojisButton.addEventListener('mouseleave', () => {
            emojisButton.style.opacity = '0.4';
        });

        document.querySelector("body > div > div.chat > pv-chat > div").insertBefore(emojisButton, document.querySelector("body > div > div.chat > pv-chat > div").firstChild);
    })()

    (function addEmojisContainer() {
        
    })()
})();