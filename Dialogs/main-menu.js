const { app,Menu, BrowserWindow } = require('electron');
const isWindows = process.platform === 'win32';
const {showMessage} = require('./dialogs');

module.exports={
	setMainMenu
};

function setMainMenu(mainWindow){
	const template = [
	{
      label: app.getName(),
      submenu: [
        {
          label: 'Say Hello',
          click() {
            showMessage(mainWindow);
          }
        },
        {
          label: 'Save Memory Usage Info',
          click() {
            showSaveDialog(mainWindow);
          }
        },
        {
          label: 'Open File',
          click() {
            showOpenDialog(mainWindow);
          }
        },
        { type: 'separator' },
        { role: 'quit' }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}