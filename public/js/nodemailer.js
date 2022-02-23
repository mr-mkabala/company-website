const form = document.querySelector(".contact-form"); 
const formEvent = form.addEventListener("submit", (event) => {
  // event.preventDefault();
  let mail = new FormData(form);
  sendMail(mail);
  window.alert("Dziękuję za wiadomość! Odpowiem Ci na nią w najkrótszym możliwym terminie.")
});

const sendMail = (mail) => {
    fetch("http://localhost:3000/", {
      method: "post",
      body: mail,
    }).then((response) => {
      return response.json();
    });
  };
  
