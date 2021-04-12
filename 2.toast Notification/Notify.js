const btn = document.getElementById('btn');
const container = document.getElementById('container');

btn.addEventListener('click',() =>createNotification());

function createNotification() {
    const notify = document.createElement('li');
    notify.classList.add('notify');
    notify.textContent = 'WELCOME';
 
    container.appendChild(notify);

    setTimeout(() => {
        notify.remove();
    },2000);
}