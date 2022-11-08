
// import throttle from 'lodash.throttle';

// const formEL = document.querySelector(".feedback-form");

// const LOCALSTORAGE_KEY = "feedback-form-state";
 
// formEL.addEventListener('input', throttle(onFormInput, 500));
// formEL.addEventListener('submit', onFormSubmit);

// const object = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};

// onUpdatePage();

// function onFormInput(e) {
//     object[e.target.name] = e.target.value
//     localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(object));
// };

// function onFormSubmit(e) {
//     e.preventDefault();
//     e.target.reset();
//     localStorage.removeItem(LOCALSTORAGE_KEY);
// };

// function onUpdatePage() {    
//     Object.entries(object).forEach(([key, value]) => {
//             formEL[key].value = value
//     })
// };

import throttle from 'lodash.throttle';

const formEL = document.querySelector(".feedback-form");

const LOCALSTORAGE_KEY = "feedback-form-state";
 
formEL.addEventListener('input', throttle(onFormInput, 500));
formEL.addEventListener('submit', onFormSubmit);

onUpdatePage();

function onFormInput(e) {
     let object = localStorage.getItem(LOCALSTORAGE_KEY);
             object =  object ? JSON.parse(object):object = {} ;
        object[e.target.name] = e.target.value
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(object));
       console.log(object)  
          
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
         formEL.elements[name].value = value;
        });
            }
};