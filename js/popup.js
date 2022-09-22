const overLay = document.getElementById(overLay');
const popup = document.getElementById('popup');
const btncerrarpopup = document.getElementById('btncerrarpopup');

open.addEventListtener('click', () => {
    popup.classList.add('show');
    alert('prueba');
});

close.addEventListtener('click', () => {
    popup.classList.remove('show');
    alert('prueba');
});