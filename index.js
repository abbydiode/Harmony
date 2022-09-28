const { app, BrowserWindow, shell } = require('electron');
let mainWindow;

app.once('ready', () => {
    const window = new BrowserWindow({
        width: 1280,
        height: 720,
        autoHideMenuBar: true
    });

    shell.openExternal('https://discord.com/api/oauth2/authorize?client_id=1024475705033109545&response_type=code&scope=identify%20guilds%20messages.read')

    window.loadFile('index.html');
});