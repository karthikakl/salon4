// const validateEmail = () => {
//     const emailInput = document.getElementById('email');
//     const emailValue = emailInput.value;
//     // const emailRegex = /^[a-zA-Z0-9._-]+[@]+[gmail yahoo]+[.]+[com]+$/;
//     const emailRegex = /^[a-z0-9]+[@]+[gmail yahoo rediff]+[.]+[com]+$/;
    
  
//     const errorElement = document.getElementById('email-error');
  
//     if (!emailRegex.test(emailValue)) {
//         errorElement.textContent = 'Invalid email format';
//         errorElement.style.display = 'block';
//     } else {
//         errorElement.textContent = '';
//         errorElement.style.display = 'none';
//     }
//   };
  
  const validateName = () => {
    const nameInput = document.getElementById('name');
    const nameValue = nameInput.value;
    const nameRegex =  /^[A-Za-z" "]+$/; 
  
    const errorElement = document.getElementById('name-error');
  
    if (!nameRegex.test(nameValue)) {
        // errorElement.textContent = 'Invalid name';
        // errorElement.style.display = 'block';
        alert("Invalid name")}

    // } else {
    //     errorElement.textContent = '';
    //     errorElement.style.display = 'none';
    // }
  };
  
// const emailInput = document.getElementById('email');
const nameInput = document.getElementById('name');

// emailInput.addEventListener('input', validateEmail);
nameInput.addEventListener('input', validateName);