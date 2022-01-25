let events = []
let keyCodes =[]
let eventName = document.getElementById("event")
let keyCode = document.getElementById("keyCode")

let partition = (arr, low, high) => {
  let i = (low - 1);
  let pivot = arr[high];
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return (i + 1);
}

let quickSort = (arr, low, high) => {
  if (arr.length === 1) {
    return arr;
  }
  
  if (low < high) {
  	p = partition(arr, low, high);
    
    quickSort(arr, low, p-1);
    quickSort(arr, p+1, high)
  }
}


Object.keys(window).forEach(key => {
  if (/^on/.test(key)) {
    window.addEventListener(key.slice(2), event => {

    	events.push(event.type)
      eventName.textContent = event.type;
      console.log(events);

      if (key.slice(2) === "keypress") {
        keyCode.textContent = event.which;
        keyCodes.push(event.which)
        n = keyCodes.length;
        quickSort(keyCodes, 0, n-1);
        console.log(keyCodes);
      }
    })
  }
  
})