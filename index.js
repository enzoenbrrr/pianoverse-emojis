(function () {
    'use strict';

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

        const container = document.querySelector("body > div > div.chat > pv-chat > div");
        if (!container) {
            console.warn("Container not found for emojisButton");
            return;
        }

        container.insertBefore(emojisButton, container.firstChild);
    })();

    (async function addEmojisContainer() {
        // emojisButton doit être accessible ici : il faut le récupérer ou le passer
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
        
        for (const cat in emojis) {
            const catDiv = document.getElementById(cat);
            for (const emoji of emojis[cat]) {
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
                catDiv.appendChild(emojiElement);
            }
        }
    })();
})();