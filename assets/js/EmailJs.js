document.addEventListener("DOMContentLoaded", function() {
  emailjs.init("sB-nzFibMzkuUMmT5");

  document.getElementById("contact-form").addEventListener("submit", function(event) {
      event.preventDefault();
      emailjs.sendForm("service_mjzycfn", "template_aun29p8", this)
          .then(function() {
              document.getElementById("response-message").innerText = "Messaggio inviato con successo!";
          }, function(error) {
              document.getElementById("response-message").innerText = "Errore nell'invio del messaggio.";
          });
  });
});