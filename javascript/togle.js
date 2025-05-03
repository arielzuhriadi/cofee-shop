const togle = document.getElementById("togle");
const mainContent = document.getElementById("mainContent");
const navPhone = document.getElementById("navPhone");


togle.onclick = function(){
    navPhone.style.display = 'flex';
}

mainContent.onclick = function(){
    navPhone.style.display = 'none';
}