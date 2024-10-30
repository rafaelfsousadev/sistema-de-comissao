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



