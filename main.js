let semanticCore = {
    logo: {
        'ua': 'Лого',
        'en': 'Logo',
        'pl': 'logo'


    },
    home: {
        'ua': 'Домашня',
        'en': 'Home',
        'pl': 'Dom'
    },
    about: {
        'ua': 'Про нас',
        'en': 'About',
        'pl': 'o'
    },
    service: {
        'ua': 'Сервіс',
        'en': 'Service',
        'pl': 'service'
    },
    contact: {
        'ua': 'Контакти',
        'en': 'Сontact',
        'pl': 'contact'
    },
    text: {
        'ua': ' текст',
        'en': ' text',
        'pl': 'Text'
    },
    iphone7: {
        'ua': 'Айфон 7',
        'en': 'Iphone 7',
        'pl': 'Iphone7'
    },
    iphone8: {
        'ua': 'Айфон 8',
        'en': 'Iphone 8',
        'pl': 'Iphone18'
    },
    iphone14: {
        'ua': 'Айфон 14',
        'en': 'Iphone 14',
        'pl': 'Iphone14'
    }
};

let lang = 'en';

ua.onclick = function () {
    lang = 'ua';
    changeURL();
}
en.onclick = function () {
    lang = 'en';
    changeURL();
}
pl.onclick = function () {
    lang = 'pl';
    changeURL();
}

function changeURL() {
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}
function changeLanguage() {
    let hash = (window.location.hash).substring(1);

    for (let key in semanticCore) {
        $('.lang-' + key).text(semanticCore[key][hash]);
        console.log(key);
    }
}

changeLanguage()