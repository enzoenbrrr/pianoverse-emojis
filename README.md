# 🎉 Pianoverse Emojis are here !

This repository adds a custom emoji system, animated or static, directly into the **[Pianoverse](https://pianoverse.net/)** chat.  
The goal is to make conversations more expressive by integrating a dedicated emoji picker.

<img height="250" alt="image" src="https://github.com/user-attachments/assets/a181ac9e-1aba-4c2a-a1bf-b9a02eefa601" />

## Available Emojis

| Category | Count |
|:---------|------:|
| Face  | 15    |
| Cats  | 11    |
| Music | 13    |
| Symbols | 18  |
| **Total** | **57** |

> [!NOTE]
> Regular updates will automatically add new emojis if you follow the installation method recommended below.


## Requirements

To use this script in your browser, you need:

- **Tampermonkey** (userscript manager extension)
  - On Chrome: search for “Tampermonkey” in the Chrome Web Store
  - On Firefox: search for “Tampermonkey” in the Add-ons

Once Tampermonkey is installed, you can create a new script and paste the code below.

## Script installation

1. Open the Tampermonkey dashboard.
2. Create a **new script**.
3. Delete the default template content.
4. Copy and paste the following code:

```js
// ==UserScript==
// @name         Pianoverse Emojis
// @namespace    http://tampermonkey.net/
// @version      auto-update
// @description  Adds a custom emoji system, animated or static, directly into the Pianoverse chat.
// @author       enzoenbrrr
// @match        https://pianoverse.net/*
// @icon         data:image/gif;base64,/9j/2wCEAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBCQkJDAsMGA0NGDIhHCEyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAEAAQAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AM0CngUgFOA4qRgBS4qjHqCLq8unyZWTYJI89HHfH0q67rFG0kjBUUZZicACgQuKTBrl/wDhM4Jb8wwIDHu2hj35PI/SuoGSgYgjIzg9qBjSKbipCKYRQA4U8UwYp46UAZHiLSW1KxD25KXkB3wupwc+n4159qfiLU9Qt0tbmUqsY2uFG0uf9qu81GDxDczrFa3Nvb25+9IoywH4/wD1qwNL8FNd3E82o3LMqysvyH5pCDyST0zTTJaI/B3hxbpk1S5IMSN+6QHqR3P+FegGq1hp1rpkJhtI/LjJyV3E84x3q1SKGHmmGpDTCKAAGngisQaspfOcL1q3HeBlBB4NK5XKzRBpiQxxNIyKAZG3NjucAf0FQfbY127nVdw7mpYp0lHyurfQ0ySnqt0sMcZRm8xW5AbAA9/WtBWDKCDkEdfWuY8QQ3EUzzIVMJG4knoe9X9B1FLi3+zOSs0X8DcHFJMbNg0w0pNNJpiPMmvjtODgkYP51rLqmNPbkq5iJU+pzXKeYM9alFx8gQE4AxUctjRzuErvJyzEnPU802Kea2fzIZWjYfxKcGmNICKaWBBGa0Rz2JHup7jDSyM7HuxJrY8MXU6a/br5h2uSrAnORisFThcelXtJvk0/UoLt1LLGTlQeTwR/WncLHrBNMJrlD46tOf8ARZvzFNPjm0P/AC6zfmKmxrdH/9k=
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    fetch('https://raw.githubusercontent.com/enzoenbrrr/pianoverse-emojis/refs/heads/main/index.js')
        .then(r => r.text())
        .then(code => {eval(code);});
})();
```

5. Save the script.
6. Open Pianoverse and go to the chat: the emojis should now be available.

> [!CAUTION]
> - This is an **unofficial userscript** for Pianoverse.
> - Use it at your own risk and make sure it complies with Pianoverse’s terms of use.
> - Behavior may change if Pianoverse updates its interface or underlying code.

## Contributing

I am **enzoenbrrr**, enzoɞ `#mlk4kc85` on Pianoverse, and the sole contributor to this project. However, I am open to suggestions for updates and improvements !

> [!TIP]
> You can contact me via Discord if you run into a problem or wish to chat : **[enzoenbrrr](https://discord.com/users/450214806335782922)**
