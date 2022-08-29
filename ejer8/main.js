const form = document.querySelector('.decT')
const formTwo = document.querySelector('.decR')
const arr = []

form.addEventListener('click', (e) =>{
  e.preventDefault()

  let total = 0;

  const price = document.getElementById('precio').value

  if(isNaN(parseInt(price)) === false){
    if(e.target.matches("input[name=agregar]")){
      arr.push(parseInt(price));
  
      document.getElementById('list').innerHTML = ""
  
      arr.forEach(elemt=>{
        document.getElementById('list').innerHTML += `<li>$${elemt}</li>`
      })
    }
  }

  if(e.target.matches("input[name=calcular")){
    if(document.getElementById('descuento_1').checked === true){
      arr.forEach(elemt=>{
        total += parseInt(elemt)
      })

      total -= (total * 0.15)

      document.getElementById('list').innerHTML += `<li>Total $${total}</li>`
    }

    else if(document.getElementById('descuento_2').checked === true){
      arr.forEach(elemt=>{
        total += parseInt(elemt)
      })

      total -= (total * 0.20)

      document.getElementById('list').innerHTML += `<li>Total $${total}</li>`
    }

    else if(document.getElementById('descuento_3').checked === true){
      arr.forEach(elemt=>{
        total += parseInt(elemt)
      })

      total -= (total * 0.25)

      document.getElementById('list').innerHTML += `<li>Total $${total}</li>`
    }

    else{
      arr.forEach(elemt=>{
        total += parseInt(elemt)
      })

      document.getElementById('list').innerHTML += `<li>Total $${total}</li>`
    }
  }

  if(e.target.matches("input[name=reiniciar]")){
    window.location.reload()
  }
})