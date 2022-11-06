import throttle from 'lodash.throttle';

const formEL = document.querySelector(".feedback-form");
const textareaEl = document.querySelector('textarea');
const inputEl = document.querySelector('input');

const LOCALSTORAGE_KEY = "feedback-form-state";
const object = localStorage.getItem(LOCALSTORAGE_KEY) || {};

formEL.addEventListener('input', throttle(onFormInput, 500));
formEL.addEventListener('submit', onFormSubmit);



function onFormInput(e) {
    object[e.target.name] = e.target.value
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(object));
         
};
function onFormSubmit(e) {
    e.preventDefault();
    e.target.reset();
     localStorage.removeItem(LOCALSTORAGE_KEY);
    console.log(object);
};

function onUpdatePage() {
    const saveValue = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    
    if ( saveValue ) {
        textareaEl.value = saveValue.message;
        inputEl.value = saveValue.email;
    }
};
onUpdatePage()