//console.log("its working");

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");



// app.on("ready", () => {
//     let win = new BrowserWIndow({
//         //frame: false,
//         //backgroundColor: 'grey'
//     });
//     win.loadURL(url.format({
//         pathname: path.join(__dirname, "index.html"),
//         protocol: "file",
//         slashes: "true"
//     }))
//     //win.webContents.openDevTools();
//     win.on("closed", () => {
//         win = null;
//     })
// });

function createWindow() {
    let quoteWidget = new BrowserWindow({
        title: "working now",
        // webPreferences: {
        //     nodeIntegration: true
        // },
        show: false,
        frame: false,
        height: 300,
        width: 800,
        maxHeight: 300,
        maxWidth: 800,
        webPreferences: {
            nodeIntegration: true
        }
    });

    quoteWidget.loadURL(url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: "file",
        slashes: "true"
    }))

    quoteWidget.once('ready-to-show', () => {
        quoteWidget.show();
    })

    quoteWidget.on('closed', () => {
        quoteWidget = null
    })

}

app.on('ready', createWindow);
