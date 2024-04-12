// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.


document.addEventListener('DOMContentLoaded', function() {

  const submitButton = document.getElementById('submit-button');


  submitButton.addEventListener('click', function(event) {
      event.preventDefault();

      const contactPage = document.getElementById('contact-page');

      contactPage.innerHTML = '';

      contactPage.style.display = 'flex'; 
      contactPage.style.flexDirection = 'column'; 
      contactPage.style.alignItems = 'center'; 
      contactPage.style.justifyContent = 'flex-start'; 

      const thankYouMessage = document.createElement('p');
      thankYouMessage.textContent = 'Thank you for your message';
      thankYouMessage.style.fontSize = '24px'; 
      thankYouMessage.style.textAlign = 'center'; 
      thankYouMessage.style.width = '100%'; 
      thankYouMessage.style.marginTop = '20px';

      contactPage.appendChild(thankYouMessage);
  });
});

