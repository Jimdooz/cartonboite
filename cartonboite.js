const root = document.documentElement;

function updateWindowSize(){
    root.style.setProperty('--vh', window.innerHeight);
    root.style.setProperty('--vw', window.innerWidth);
    root.style.setProperty('--vmax', window.innerWidth > window.innerHeight ? window.innerWidth : window.innerHeight);
    root.style.setProperty('--vmin', window.innerWidth < window.innerHeight ? window.innerWidth : window.innerHeight);
}

updateWindowSize();
window.addEventListener("resize", updateWindowSize);