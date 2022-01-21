let events = []
let eventName = document.getElementById("event")

Object.keys(window).forEach(key => {
  if (/^on/.test(key)) {
    window.addEventListener(key.slice(2), event => {
    	events.push(event.type)
        eventName.textContent = event.type
    })
  }
})