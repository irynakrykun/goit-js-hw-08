import throttle from 'lodash.throttle';

const formEL = document.querySelector(".feedback-form");

const LOCALSTORAGE_KEY = "feedback-form-state";
 
formEL.addEventListener('input', throttle(onFormInput, 500));
formEL.addEventListener('submit', onFormSubmit);

let object = localStorage.getItem(LOCALSTORAGE_KEY) || {};

onUpdatePage();

function onFormInput(e) {
    object ? JSON.stringify(object) : {};
    object[e.target.name] = e.target.value
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(object));
       console.log(object[e.target.name])  
};


function onFormSubmit(e) {
    e.preventDefault();
    e.target.reset();
     localStorage.removeItem(LOCALSTORAGE_KEY);
   
};

function onUpdatePage() {
    let saveValue = localStorage.getItem(LOCALSTORAGE_KEY);
    
    if (saveValue) {
        saveValue = JSON.parse(saveValue);
        Object.entries(saveValue).forEach(([name, value]) => {
            object[name] = value;
            formEL.elements[name].value = value;
        });
        
    }
};
