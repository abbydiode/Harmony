const { app, BrowserWindow } = require('electron');

app.once('ready', () => {
    const window = new BrowserWindow({
        width: 1280,
        height: 720,
        autoHideMenuBar: true
    });

    window.loadFile('index.html');
});