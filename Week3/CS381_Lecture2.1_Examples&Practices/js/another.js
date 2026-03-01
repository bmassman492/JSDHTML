//console.log(today)
//console.log(hourNow)
//console.log(greeting)

function hello(text) {
  const newp = document.createElement('p')
  newp.textContent = `Hello ${text}`
  document.body.appendChild(newp)
}

hello("Tina")

