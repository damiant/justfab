import { Capacitor } from "@capacitor/core";
import { StatusBar, Style } from "@capacitor/status-bar";

async function init(url: string) {
    if (Capacitor.getPlatform() !== "web") {
        await StatusBar.setStyle({ style: Style.Light });
        await StatusBar.hide();
    }
    window.location.href = url;
}

init("https://justfab.com");
