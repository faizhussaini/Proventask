document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', function () {
        document.querySelectorAll('.box').forEach(b => b.classList.remove('expanded'));
        
        this.classList.add('expanded');
    });
});
