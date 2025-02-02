function getTelegramUserData() {
    if (window.Telegram && Telegram.WebApp) {
        let user = Telegram.WebApp.initDataUnsafe.user;
        if (user) {
            document.getElementById("profile-pic").src = user.photo_url || "default.jpg";
            document.getElementById("profile-name").innerText = user.first_name + " " + (user.last_name || "");
        }
    }
}

window.onload = getTelegramUserData;
