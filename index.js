// Спец. символы используемые в реуглярных выражениях: $ ^ . * + ? \ / {} [] () | 
let loginInput = document.getElementById('input_login'),
passwordInput = document.getElementById('input_pasword'),

loginTipsCollection = document.querySelectorAll('.login_tips'),
passwordTipsCollection = document.querySelectorAll('.password_tips'),

firstLoginTip = document.getElementById('first_login_tip'),
secondLoginTip = document.getElementById('second_login_tip'),

firstPasswordTip = document.getElementById('first_password_tip'),
secondPasswordTip = document.getElementById('second_password_tip'),

button = document.querySelector('.form__btn');

console.log(loginTipsCollection);

const patterns = {
    login: /^[A-z]+$/,
    loginLength: /^.{8,}$/,
    password: /^[0-9]+$/,
    passwordLength: /^.{11,11}$/
}

console.log(patterns.login)
// Показать подсказки
function showTips(tipsCollection) {
    tipsCollection.forEach(element => {
        if(element.classList.contains('hide')) {
            element.classList.remove('hide');
            element.classList.add('visible');
        }
            
    });
}
// Спрятать подсказки
function hideTips(tipsCollection) {
    tipsCollection.forEach(element => {
        if(element.classList.contains('visible')) {
            element.classList.remove('visible');
            element.classList.add('hide');  
        }
    })
}

loginInput.addEventListener('click', ()=> {
    showTips(loginTipsCollection);
})

loginInput.addEventListener('focusout', ()=> {
    hideTips(loginTipsCollection);
})

passwordInput.addEventListener('click', ()=> {
    showTips(passwordTipsCollection);
})

passwordInput.addEventListener('focusout', ()=> {
    hideTips(passwordTipsCollection);
})
// Валидация поля логина
function validateLogin() {
    if(firstLoginTip.classList.contains('textValid') && secondLoginTip.classList.contains('textValid')) {
        loginInput.classList.remove('inputInvalid')
        loginInput.classList.add('inputValid')
        console.log('true');
    }
    if(firstLoginTip.classList.contains('textInvalid') || secondLoginTip.classList.contains('textInvalid')) {
        loginInput.classList.remove('inputValid')
        loginInput.classList.add('inputInvalid')
    }
    if(loginInput.value == "") {
        loginInput.classList.remove('inputValid')
        loginInput.classList.remove('inputInvalid')
    }
}
// Валидация подсказок логина(их подсвечивание)
function validateLoginTips() {
    loginInput.addEventListener('keyup', ()=> {
        // FirstTip
        if(patterns.loginLength.test(loginInput.value)) {
            firstLoginTip.classList.remove('textInvalid')
            firstLoginTip.classList.add('textValid')
        }
        else {
            firstLoginTip.classList.remove('textValid')
            firstLoginTip.classList.add('textInvalid')
        }

        // SecondTip
        if(patterns.login.test(loginInput.value)) {
            secondLoginTip.classList.remove('textInvalid')
            secondLoginTip.classList.add('textValid')
        }
        else  {
            secondLoginTip.classList.remove('textValid')
            secondLoginTip.classList.add('textInvalid')
        }

        if(loginInput.value == "") {
            firstLoginTip.classList.remove('textValid')
            firstLoginTip.classList.remove('textInvalid')
            secondLoginTip.classList.remove('textValid')
            secondLoginTip.classList.remove('textInvalid')
        }
        validateLogin() 
    })
}
// Валидация пароля
function validatePassword() {
    if(firstPasswordTip.classList.contains('textValid') && secondPasswordTip.classList.contains('textValid')) {
        passwordInput.classList.remove('inputInvalid')
        passwordInput.classList.add('inputValid')
        console.log('true');
    }
    if(firstPasswordTip.classList.contains('textInvalid') || secondPasswordTip.classList.contains('textInvalid')) {
        passwordInput.classList.remove('inputValid')
        passwordInput.classList.add('inputInvalid')
    }
    if(passwordInput.value == "") {
        passwordInput.classList.remove('inputValid')
        passwordInput.classList.remove('inputInvalid')
    }
}
// валидация подсказок пароля(их подсвечивание)
function validatePasswordTips() {
    passwordInput.addEventListener('keyup', ()=> {
        // FirstTip
        if(patterns.passwordLength.test(passwordInput.value)) {
            firstPasswordTip.classList.remove('textInvalid')
            firstPasswordTip.classList.add('textValid')
        }
        else {
            firstPasswordTip.classList.remove('textValid')
            firstPasswordTip.classList.add('textInvalid')
        }
        // SecondTip
        if(patterns.password.test(passwordInput.value)) {
            secondPasswordTip.classList.remove('textInvalid')
            secondPasswordTip.classList.add('textValid')
        }
        else  {
            secondPasswordTip.classList.remove('textValid')
            secondPasswordTip.classList.add('textInvalid')
        }

        if(passwordInput.value == "") {
            firstPasswordTip.classList.remove('textValid')
            firstPasswordTip.classList.remove('textInvalid')
            secondPasswordTip.classList.remove('textValid')
            secondPasswordTip.classList.remove('textInvalid')
        }
        validatePassword() 
    })
}

validateLoginTips();
validatePasswordTips();
