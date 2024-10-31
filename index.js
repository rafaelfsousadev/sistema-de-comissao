let contador01 = 0

function adicionarNumero() {
   contador01++
   let valor01 = document.getElementById('valor1').value
   const p = document.createElement('p')
   p.id = 'p'+contador01
   p.textContent = valor01
   document.getElementById('campo01').appendChild(p)
   document.getElementById('valor1').value = ''

}

function adicionarNumero2() {
    contador01++
    let valor02 = document.getElementById('valor2').value
    const p = document.createElement('p')
    p.id = 'p'+contador01
    p.textContent = valor02
    document.getElementById('campo02').appendChild(p)
    document.getElementById('valor2').value = ''
 

 }

 let rafael = 0
 let juliano = 0

function somarTotal1(){
   const campo01 = document.querySelectorAll("#campo01 p")

   const arrayNumeros = Array.from(campo01, p => Number(p.innerText))

   rafael = arrayNumeros.reduce(function(accumulador,valor){
      return accumulador + valor

   })
   document.getElementById('resultado1').innerText = `Total R$${rafael}`

}

function somarTotal2(){
   const campo01 = document.querySelectorAll("#campo02 p")

   const arrayNumeros = Array.from(campo01, p => Number(p.innerText))

   juliano = arrayNumeros.reduce(function(accumulador,valor){
      return accumulador + valor

   })
   document.getElementById('resultado2').innerText = `Total R$${juliano}`

}

function calcularPorcentagem(valor, percentual) {
   return (valor * percentual) / 100;
}

function armazenar1(){
   let permissao = window.confirm('deseja finalizar o dia e armazenar?')
   if(permissao){
      if(typeof localStorage.rafael === "undefined"){
         localStorage.rafael = rafael
         let resultado = calcularPorcentagem(localStorage.rafael, 2)
         document.getElementById('fim1').innerText = `Vendas do mês :R$${localStorage.rafael}\n\n    comissão :R$${resultado}`
      }else{
         localStorage.rafael2 = Number(localStorage.rafael) + rafael
         let resultado = calcularPorcentagem(localStorage.rafael2, 2)
         localStorage.rafael = localStorage.rafael2
         document.getElementById('fim1').innerText = `Vendas do mês :R$${localStorage.rafael}\n\n    comissão :R$${resultado}`
      }
      
   }


}


function armazenar2(){
   let permissao = window.confirm('deseja finalizar o dia e armazenar?')
   if(permissao){
      if(typeof localStorage.juliano === "undefined"){
         localStorage.juliano = juliano
         let resultado = calcularPorcentagem(localStorage.juliano, 2)
         document.getElementById('fim2').innerText = `Vendas do mês :R$${localStorage.juliano}\n\n    comissão :R$${resultado}`
      }else{
         localStorage.juliano2 = Number(localStorage.juliano) + juliano
         let resultado = calcularPorcentagem(localStorage.juliano2, 2)
         localStorage.juliano = localStorage.juliano2
         document.getElementById('fim2').innerText = `Vendas do mês :R$${localStorage.juliano}\n\n    comissão :R$${resultado}`
      }
      
   }


}

function zerar(){
   let confirma = window.confirm('Desejá resetar o mês. Isso apagarar as irmações do ultimo mês!')
   if(confirma){
      localStorage.clear()
   }
}


