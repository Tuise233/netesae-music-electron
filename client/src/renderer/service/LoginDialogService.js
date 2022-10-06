import { BrowserWindow, ipcMain } from "electron";
import { winURL } from "../../main/index";

let loginDialog = null;

ipcMain.on("loginDialog:open", () => {
    if(loginDialog == null){
        loginDialog = new BrowserWindow({
            width: 350,
            height: 420,
            resizable: false,
            frame: false
        });
        loginDialog.loadURL(winURL + "#/loginDialog");
        loginDialog.on("close", () => {
            loginDialog = null;
        });
    }
});

ipcMain.on("loginDialog:close", () => {
    if(loginDialog != null){
        loginDialog.close();
        loginDialog = null;
    }
});