const notification = document.querySelector('.notification');
const title = notification.querySelector('h2');
const message = notification.querySelector('p');

notification.classList.add('success') //aqui cambiamos a warning, error o success.

if (notification.classList.contains('warning')) {
  title.textContent = 'AVISO';
  message.textContent = 'Tenga cuidado';
} else if (notification.classList.contains('error')) {
  title.textContent = 'ERROR';
  message.textContent = 'Ha surgido un error';
} else if (notification.classList.contains('success')) {
  title.textContent = 'CORRECTO';
  message.textContent = 'Los datos son correctos';
}