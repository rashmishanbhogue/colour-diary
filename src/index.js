import { app, BrowserWindow, ipcMain } from 'electron';
import { writeFileSync, readFileSync } from 'fs';
import { join } from 'path';

const DATA_PATH = join(app.getPath('userData'), 'diary.json');

ipcMain.handle('save-diary', (_, data) => writeFileSync(DATA_PATH, data));
ipcMain.handle('load-diary', () => {
  try { return readFileSync(DATA_PATH, 'utf8'); } catch { return '{}'; }
});
ipcMain.handle('minimise-window', () => {
  BrowserWindow.getAllWindows()[0]?.minimize();
});

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 320,
    frame: false,
    transparent: true,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  win.loadFile('src/index.html');
};

app.whenReady().then(createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });