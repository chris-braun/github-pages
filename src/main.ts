import { setupCounter } from "./counter.ts";
import "./style.css";
import box1 from "./svgs/box1.svg";
import box2 from "./svgs/box2.svg";
import typescriptLogo from "./svgs/typescript.svg";
import viteLogo from "/vite.svg";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
    <div style="display:flex; justify-content: center; gap: 1rem">
      <img src="${box1}" width="32" height="32" />
      <img src="${box2}" width="32" height="32" />
    </div>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
