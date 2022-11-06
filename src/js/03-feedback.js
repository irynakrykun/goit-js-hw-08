import throttle from 'lodash.throttle';

const formEL = document.querySelector(".feedback-form");
const emailEl = document.querySelector('[type="email"]');
const textareaEl = document.querySelector('[name="message"]');

const LOCALSTORAGE_KEY = "feedback-form-state";
const object = localStorage.getItem(LOCALSTORAGE_KEY) || {};

formEL.addEventListener('input', throttle(onFormInput, 500));
formEL.addEventListener('submit', onFormSubmit);

// function onUpdatePage()

function onFormInput(e) {
    object.textareaEl = textareaEl.value;
    object.emailEl = emailEl.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(object) );
         
};
function onFormSubmit(e) {
    e.preventDefault();
    e.target.reset();
    console.log(e.target);
    localStorage.removeItem(LOCALSTORAGE_KEY);
    console.log(object);
};

function onUpdatePage() {
    const saveValue = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    
    if ( saveValue ) {
        textareaEl.value = saveValue.textarea;
        emailEl.value = saveValue.email;
    }
};
onUpdatePage()