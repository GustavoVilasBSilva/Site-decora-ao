


const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate'

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4 - 800)  ;
    target.forEach(function(element){
        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    })
}

animeScroll();

if(target.length) {

    window.addEventListener('scroll', function() {
        animeScroll();
        
    })
}

function sent() {
    const name = document.getElementById('name')
    const surname = document.getElementById('surname')
    const email = document.getElementById('email')
    const fone = document.getElementById('fone')

    const nameSpan = document.getElementById('span-name')
    const surnameSpan = document.getElementById('span-surname')
    const emailSpan = document.getElementById('span-email')
    const foneSpan = document.getElementById('span-fone')


    if(name.value != '' & surname.value != '' & email.value != '' & fone.value != '') {
        alert('Olá Sr(a) ' + name.value + ', sua solicitação de orçamento foi enviado com sucesso. Entraremos em contato através de Email: '+ email.value + ' ou Telefone: ' +fone.value+ ' dentro de 2 horas.')
    } else {  
        if(name.value == '') {
            nameSpan.classList.add('active')
        } else {
            nameSpan.classList.remove('active')
        }
        
        if(surname.value == '') {
            surnameSpan.classList.add('active')
        } else {
            surnameSpan.classList.remove('active')
        }
        
        if(email.value == '') {
            emailSpan.classList.add('active')
        } else {
            emailSpan.classList.remove('active')
        }
        
        if(fone.value == '') {
            foneSpan.classList.add('active')
        } else {
            foneSpan.classList.remove('active')
        }
    }

    console.log(name)
    console.log(surname)
    console.log(email)
    console.log(fone)
}

