let heartIcon = document.querySelectorAll(".fa-regular");
let heartLikedIcon = document.querySelectorAll(".fa-solid");
let likes = document.getElementById("likes");

let likesNumber = Math.floor(Math.random()*158486);
likes.textContent = likesNumber;

let likesToGive = 4;

heartIcon.forEach((icon) => {
    icon.addEventListener("click", () => {
        if (icon.classList.contains("fa-regular")) {
            icon.classList.remove("fa-regular")
            icon.classList.add("fa-solid")
            if (likesToGive > 0) {
                likesNumber++;
                likesToGive--
            }
            likes.textContent = likesNumber;
        } else if (icon.classList.contains("fa-solid")) {
            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");
            if (likesToGive > 0) {
                likesNumber--;
                likesToGive++
            }
            likes.textContent = likesNumber;
        }
    });
});

window.addEventListener('load', function() {
  // seleciona as barras de progresso
  const progressBar1 = document.querySelector('.progress-bar-1');
  const progressBar2 = document.querySelector('.progress-bar-2');

  // adiciona uma classe para iniciar a animação
  progressBar1.classList.add('animate');
  progressBar2.classList.add('animate');
});