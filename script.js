window.onload = function () {
    const button1 = document.querySelector('#butt');
    button1.addEventListener('click', buttonClick2);
}

function buttonClick2() {
    let text1 = document.getElementById("string");
    let str = text1.textContent;

    str = str.replace(/\'/ig, "\"");

    text1.innerHTML = str;
}
