function updateTheme() {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}
updateTheme();

function setTheme(theme) {
    localStorage.theme = theme;
    updateTheme();
}

function unsetTheme() {
    localStorage.removeItem('theme');
    updateTheme();
}
