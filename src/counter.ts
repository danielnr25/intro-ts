export function setupCounter(element: HTMLButtonElement) {
  let counter =10
  
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `Contador es ${counter}`
  }

  element.addEventListener('click', () => setCounter(counter + 1))
  
  setCounter(10)
}


export function setAlerta(element:any){
    let nombreaux = 'Daniel'
    const setMostrar = (nombre:any) =>{
        nombreaux = nombre    
        element.innerHTML = 'Hola mundo ' + nombreaux
    }
    setMostrar('DANIEL ')
}