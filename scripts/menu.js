document.getElementById('menu-button').addEventListener('click', function() {
    document.getElementById('side-menu').classList.add('active');
});

document.getElementById('close-button').addEventListener('click', function() {
    document.getElementById('side-menu').classList.remove('active');
});
