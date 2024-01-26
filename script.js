//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
  const inputField = document.getElementById('fname');

  
  function convertToUppercase() {
    const value = inputField.value;
    inputField.value = value.toUpperCase();
  }

  
  inputField.addEventListener('blur', convertToUppercase);
});
