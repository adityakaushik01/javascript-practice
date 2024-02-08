const button = document.querySelectorAll('.button');

button.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        document.body.style.backgroundColor = e.target.id;
    })
})