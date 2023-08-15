// index.js

document.getElementById('email').addEventListener('keyup', function(event) {
    const emailInput = event.target;
    const emailContainer = emailInput.parentElement;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
  
    if (isValidEmail) {
      emailContainer.classList.remove('invalid');
    } else {
      emailContainer.classList.add('invalid');
    }
  });




  

  
  
  

  