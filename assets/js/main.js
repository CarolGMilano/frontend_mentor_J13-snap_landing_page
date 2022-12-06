let menuFechado = document.querySelector('.cabecalho__menuHamburguer');
let menuAberto = document.querySelector('.naveg__icone');

let nav = document.querySelector('.naveg');
let escuro = document.querySelector('.escuro');

let feature = document.querySelector('.feature__li');
let featureConteudo = document.querySelector('.feature');

let company = document.querySelector('.company__li');
let companyConteudo = document.querySelector('.company');

let featureImg = document.querySelector('.feature__img');
let companyImg = document.querySelector('.company__img');

let body = document.querySelector('body');

menuFechado.addEventListener('click', function () {
    nav.classList.remove('none');
    nav.classList.add('flex');

    escuro.classList.remove('none');
    escuro.classList.add('flex');

    body.classList.add('hidden');
})

menuAberto.addEventListener('click', function () {
    nav.classList.remove('flex');
    nav.classList.add('none');

    escuro.classList.remove('flex');
    escuro.classList.add('none');

    body.classList.remove('hidden');
})

feature.addEventListener('click', function () {
    if(featureConteudo.classList.contains('none')) {
        featureConteudo.classList.remove('none');
        featureConteudo.classList.add('flex');

        featureImg.setAttribute('src', 'assets/img/icon-arrow-down.svg');
    } else {
        featureConteudo.classList.remove('flex');
        featureConteudo.classList.add('none');

        featureImg.setAttribute('src', 'assets/img/icon-arrow-up.svg');
    }
})

company.addEventListener('click', function () {
    if(companyConteudo.classList.contains('none')) {
        companyConteudo.classList.remove('none');
        companyConteudo.classList.add('flex');

        companyImg.setAttribute('src', 'assets/img/icon-arrow-down.svg');
    } else {
        companyConteudo.classList.remove('flex');
        companyConteudo.classList.add('none');

        companyImg.setAttribute('src', 'assets/img/icon-arrow-up.svg');
    }
})
