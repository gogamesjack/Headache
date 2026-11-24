function saveCookie(name, dictionary, days = 3650) {
    const value = encodeURIComponent(JSON.stringify(dictionary));
    const expires = new Date(Date.now() + days * 86400000);

    document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
}

function loadCookie(name) {
    const cookies = document.cookie.split("; ");

    for (const cookie of cookies) {
        if (cookie.startsWith(name + "=")) {
            const value = cookie.substring(name.length + 1);
            return JSON.parse(decodeURIComponent(value));
        }
    }

    return null;
}

