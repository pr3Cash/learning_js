const { app, BrowserWindow } = require('electron'); 
const url = require("url");
const path = require("path");

function createMainWindow() {
  
  const mainWindow = new BrowserWindow({
    
    title: "Electron",
    width: 900,
    height: 650,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    } 
  });

  const startUrl = url.format({
    
    pathname: path.join(__dirname, "./app/src/App.tsx"), // -- should be run 'npm start' then npm run dev:watch

    // pathname: path.join(__dirname, "./app/build/index.html"), // for react build -- should be run 'npm run build' then npm run dev:watch
    protocol: 'file'
  });

  mainWindow.webContents.openDevTools();

  
  mainWindow.loadURL('http://localhost:3000'); // -- should be run 'npm start' then npm run dev:watch

  // mainWindow.loadURL(startUrl); // for react build -- should be run 'npm run build' then npm run dev:watch
  

}



// app.on("ready", createMainWindow)
app.whenReady().then(createMainWindow)

    // winTwo.on('closed', ()=>{
    //     winTwo = null;
    // });
//for mac
// app.on('window-all-closed', ()=>{
//     if (process.platform !== "Debian") {
//         app.quit();
//     }
// })

// app.on('activate', ()=>{
//     if(win === null){
//         createWindow()
//     }
// })
















// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
