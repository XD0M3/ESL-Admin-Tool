const {app, BrowserWindow, Tray, ipcMain} = require('electron')
const path = require('path')
const url = require('url')
const Store = require('electron-store');
const store = new Store();
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

var back = "";
ipcMain.on('setBackPage', (event, args) => {
  back = args;
});
ipcMain.on('getBackPage', (event, args) => {
  event.sebder.send('backPage', back);
});

function createWindow () {
  const appIcon = new Tray("esl/_Web/ESL_Logo_Vert_light.png")
  // Create the browser window.
  win = new BrowserWindow({
    width: 600,
    height: 800,
    frame: false,
    resizable: false,
    minHeight: 700,
    minWidth: 500,
    background: "#1076e5",
    icon: 'esl/_Web/ESL_Logo_Vert_light.png'
  })
  if(store.get('name') != null){
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    }));
  } else {
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'createUser.html'),
      protocol: 'file:',
      slashes: true
    }));
  }

  // Open the DevTools.
  win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})
