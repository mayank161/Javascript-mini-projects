const btn = document.getElementById('btn');
const nav = document.getElementById('nav');

btn.addEventListener('click', () => {
    nav.classList.toggle('update'); // toggle is used to interchange between the classes of same nav bar so can inherit the class style and tags too.
    btn.classList.toggle('update');
})