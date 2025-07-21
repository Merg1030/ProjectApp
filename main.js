const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    fullscreen: true,       // Open in fullscreen
    frame: false,           // Removes the default window frame & title bar
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  // Load your site or local file
  win.loadURL('https://chrischishe.com/');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
