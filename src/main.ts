
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter,setAlerta } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>TypeScript</h1>
    <div class="card">
      <button id="contador" type="button"></button>
    </div>
    <div class="card">
      <button id="alerta" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#contador')!)
setAlerta(document.querySelector('#alerta'))