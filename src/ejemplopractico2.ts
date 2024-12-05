/* const listaFrutas: string[] = ['Platano','fresa','pera','naranja'];

//const $listFrutasDOM = document.querySelector<HTMLUListElement>('#listadoFrutas')!
const $listFrutasDOM = document.getElementById('listadoFrutas') as HTMLUListElement

listaFrutas.forEach((fruta)=>{
    const item = document.createElement('li')
    item.textContent = fruta;
    $listFrutasDOM.appendChild(item);
}) */

interface Fruta{
    nombre:string,
    precio:number,
}

const listadoFrutas:Fruta[] = [
    { nombre: 'platano', precio: 1.5},
    { nombre: 'manzana', precio: 2 },
    { nombre: 'pera', precio: 3 },
    { nombre: 'fresa', precio: 4 },
    { nombre: 'naranja', precio: 1.5 },
    { nombre: 'uva', precio: 2 }
]

const $listFrutasDOM = document.getElementById('listadoFrutas') as HTMLUListElement

listadoFrutas.forEach((fruta)=>{
    const item = document.createElement('li')
    item.textContent =  `${fruta.nombre} - ${fruta.precio}`;
    $listFrutasDOM.appendChild(item)
})