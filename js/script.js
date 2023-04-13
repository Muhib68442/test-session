// Click Text To Copy
const copyTextElements = document.querySelectorAll('.copy-text');

    copyTextElements.forEach(function(element) {
        element.addEventListener('click', function() {
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(element);
            selection.removeAllRanges();
            selection.addRange(range);
            document.execCommand('copy');
            alert('Command copied to clipboard!');
        });
    });