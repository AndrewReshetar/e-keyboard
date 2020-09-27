const keys = document.querySelectorAll('div.key');

function t11(event) {
    if (event.key == "CapsLock") {
        document.querySelector('.capslock').classList.add('key-press-animation');
    }
    keys.forEach(key => {
        if (event.keyCode == key.getAttribute('data')) {
            key.classList.add('key-press-animation');
        }
    });
}

function t12(event) {
    keys.forEach(key => {
        if (event.keyCode == key.getAttribute('data')) {
            key.classList.remove('key-press-animation');
            document.querySelector('.capslock').classList.remove('key-press-animation');
        }
    });
}

document.querySelector('.i-11').onkeydown = t11;
document.querySelector('.i-11').onkeyup = t12;


