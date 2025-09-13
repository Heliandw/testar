 
let pontos = Number(localStorage.getItem("pontuacao"))


let paragrafo = document.getElementById("pontos")

paragrafo.innerText = pontos

let numeroaleatorio1 = Number(localStorage.getItem("numero1"))

let numeroaleatorio2 = Number(localStorage.getItem("numero2"))

let resultado = 0

const numero1 = document.getElementById("numero1")
const numero2 = document.getElementById("numero2")
let input = document.getElementById("InputDoUsuario")


const btn = document.getElementById("btn")





btn.addEventListener("click", checar)

   if (numeroaleatorio1 === null || numeroaleatorio2 === null) {
    
numeroaleatorio1 = Math.floor(Math.random() * 100) + 1

numeroaleatorio2 = Math.floor(Math.random() * 100) + 1

localStorage.setItem("numero1", numeroaleatorio1)
localStorage.setItem("numero2", numeroaleatorio2)





}

numero1.innerText = numeroaleatorio1
numero2.innerText = numeroaleatorio2
resultado = numeroaleatorio1 + numeroaleatorio2


function NovoNumero() {





numeroaleatorio1 = Math.floor(Math.random() * 100) + 1;
  numeroaleatorio2 = Math.floor(Math.random() * 100) + 1;

  localStorage.setItem("numero1", numeroaleatorio1);
  localStorage.setItem("numero2", numeroaleatorio2);






input.value = " "

numero1.innerText = numeroaleatorio1
numero2.innerText = numeroaleatorio2

resultado = numeroaleatorio1 + numeroaleatorio2


}


function checar() {

    


if (Number(input.value) === resultado) {
    
    pontos += 1

    localStorage.setItem("pontuacao", pontos)

document.getElementById("paragrafo").style.display = "none"

paragrafo.innerText = pontos

NovoNumero()




}
else {
    document.getElementById("paragrafo").style.display = "block"
}

}






