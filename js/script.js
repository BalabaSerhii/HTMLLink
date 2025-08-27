const whatsappButton = document.querySelector(".whatsApp");

function triggerJiggle() {
  whatsappButton.classList.add("jiggle");

  setTimeout(() => {
    whatsappButton.classList.remove("jiggle");

    setTimeout(triggerJiggle, 800);
  }, 1000);
}

setTimeout(triggerJiggle);
