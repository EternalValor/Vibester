"use strict";

import { app, protocol, BrowserWindow, ipcMain, dialog } from "electron";
import * as path from "path";
import { format as formatUrl } from "url";
import {
  createProtocol,
  installVueDevtools
} from "vue-cli-plugin-electron-builder/lib";
const isDevelopment = process.env.NODE_ENV !== "production";
if (isDevelopment) {
  // Don't load any native (external) modules until the following line is run:
  require("module").globalPaths.push(process.env.NODE_MODULES_PATH);
}

// global reference to mainWindow (necessary to prevent window from being garbage collected)
let mainWindow: any;

// Standard scheme must be registered before the app is ready
protocol.registerStandardSchemes(["app"], { secure: true });
function createMainWindow() {
  const window = new BrowserWindow({
    width: 1500,
    height: 800,
    resizable:true,
    icon: path.join(__static, "icons/128x128.png"),
    webPreferences: { webSecurity: false }
  });

  if (isDevelopment) {
    // Load the url of the dev server if in development mode
    window.loadURL(process.env.WEBPACK_DEV_SERVER_URL as string);
    if (!process.env.IS_TEST) window.webContents.openDevTools();
  } else {
    createProtocol("app");
    //   Load the index.html when not in development
    window.loadURL(
      formatUrl({
        pathname: path.join(__dirname, "index.html"),
        protocol: "file",
        slashes: true
      })
    );
  }

  window.on("closed", () => {
    mainWindow = null;
  });

  window.webContents.on("devtools-opened", () => {
    window.focus();
    setImmediate(() => {
      window.focus();
    });
  });

  return window;
}

// quit application when all windows are closed
app.on("window-all-closed", () => {
  // on macOS it is common for applications to stay open until the user explicitly quits
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // on macOS it is common to re-create a window even after all windows have been closed
  if (mainWindow === null) {
    mainWindow = createMainWindow();
  }
});

// create main BrowserWindow when electron is ready
app.on("ready", async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    await installVueDevtools();
  }
  mainWindow = createMainWindow();
});

ipcMain.on("setFolder", event => {
  dialog.showOpenDialog(mainWindow, { properties: ["openDirectory"] }, path => {
    if (path) {
      event.sender.send("setFolder", path[0]);
    }
  });
});
