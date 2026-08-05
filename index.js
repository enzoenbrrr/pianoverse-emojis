(function () {
    'use strict';

    (function addEmojisButton() {
        const emojisButton = document.createElement('i');
        emojisButton.classList.add('fa-solid', 'fa-face-laugh');
    
        let isOpen = false;
    
        emojisButton.style.cssText = [
            'display: flex;',
            'align-items: center;',
            'margin-right: max(0.7vw, 8px);',
            'cursor: url(/assets/pointer-BCNK29s4.cur), auto;',
            'opacity: 0.4;',
            'transition: opacity 0.15s ease;',
            'user-select: none;',
            '-webkit-user-select: none;'
        ].join('');
    
        function applyOpacity() {
            if (isOpen) {
                emojisButton.style.opacity = '1';
            } else {
                emojisButton.style.opacity =
                    emojisButton.dataset.hovering === 'true' ? '1' : '0.4';
            }
        }
    
        emojisButton.addEventListener('mouseenter', () => {
            emojisButton.dataset.hovering = 'true';
            applyOpacity();
        });
    
        emojisButton.addEventListener('mouseleave', () => {
            emojisButton.dataset.hovering = 'false';
            applyOpacity();
        });
    
        // Gestion du clic : on ignore si le clic vient de .popup-root
        emojisButton.addEventListener('click', (e) => {
            // Si le clic a lieu dans le popup, on ne fait rien
            if (e.target.closest('.popup-root')) {
                return;
            }
    
            isOpen = !isOpen;
            emojisButton.classList.toggle('fa-xmark');
            emojisButton.classList.toggle('fa-face-laugh');
    
            const popupRoot = emojisButton.querySelector('.popup-root');
            if (!popupRoot) return;
    
            popupRoot.style.display = isOpen ? 'flex' : 'none';
    
            applyOpacity();
        });
    
        const container = document.querySelector("body > div > div.chat > pv-chat > div");
        if (!container) {
            console.warn("Container not found for emojisButton");
            return;
        }
    
        container.insertBefore(emojisButton, container.firstChild);
    })();
    
    (async function addEmojisContainer() {
        const emojisButton = document.querySelector('i.fa-face-laugh');
        if (!emojisButton) {
            console.warn("emojisButton not found for addEmojisContainer");
            return;
        }

        await fetch("https://raw.githubusercontent.com/enzoenbrrr/pianoverse-emojis/refs/heads/main/src/index.html")
            .then(response => {
                if (!response.ok) {
                    throw new Error("HTTP error " + response.status);
                }
                return response.text();
            })
            .then(html => {
                emojisButton.innerHTML = html;

            })
            .catch(error => {
                console.error("Error loading emojis container:", error);
            });
        
        await fetch("https://raw.githubusercontent.com/enzoenbrrr/pianoverse-emojis/refs/heads/main/src/script.js")
            .then(response => {
                if (!response.ok) {
                    throw new Error("HTTP error " + response.status);
                }
                return response.text();
            })
            .then(script => {
                eval(script);
            })
            .catch(error => {
                console.error("Error loading emojis script:", error);
            });
        
        const emojis = await (await fetch('https://raw.githubusercontent.com/enzoenbrrr/pianoverse-emojis/refs/heads/main/emojis.json')).json();
        
        for (let cat in emojis) {
            let catDiv = document.getElementById(cat);
            for (let emoji of emojis[cat]) {
                const emojiElement = document.createElement('div');
                emojiElement.classList.add('emoji');
                emojiElement.setAttribute('data-name', emoji.name);
                emojiElement.setAttribute('data-id', emoji.id);
                emojiElement.setAttribute('data-animated', emoji.animated);

                const bgImgElement = document.createElement('div');
                bgImgElement.style.backgroundImage = `url(${emoji.url})`;

                const imgElement = document.createElement('img');
                imgElement.src = (emoji.url + (emoji.animated ? '?animated=true' : ''));

                emojiElement.appendChild(bgImgElement);
                emojiElement.appendChild(imgElement);

                emojiElement.addEventListener('click', () => {
                    let text = `<${emoji.animated ? 'a' : ''}:${emoji.name}:${emoji.id}>`;
                    const input = document.querySelector("body > div > div.chat > pv-chat > div > input");
                    const p = input.selectionStart;
                    input.value = input.value.slice(0, p) + text + input.value.slice(p);
                    input.setSelectionRange(p + text.length, p + text.length);
                    input.dispatchEvent(new Event("input", { bubbles: true }));
                });
                catDiv.appendChild(emojiElement);
            }
        }
    })();
})();