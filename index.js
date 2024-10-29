let contador01 = 0

function adicionarNumero() {
   contador01++
   let valor01 = document.getElementById('valor1').value
   const p = document.createElement('p')
   p.id = 'p'+contador01
   p.textContent = `R$ ${valor01}`
   document.getElementById('campo01').appendChild(p)
   document.getElementById('valor1').value = ''

}

function adicionarNumero2() {
    contador01++
    let valor02 = document.getElementById('valor2').value
    const p = document.createElement('p')
    p.id = 'p'+contador01
    p.textContent = `R$ ${valor02}`
    document.getElementById('campo02').appendChild(p)
    document.getElementById('valor2').value = ''
 
 }
