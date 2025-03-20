const elements = {
    navbarBtn : document.querySelector('#navbar'),
    navModal : document.querySelector('.bar-modal'),
    navDismiss: document.getElementById('dismiss-navbar')
}

function bloquearScroll(event) {
    event.preventDefault();
}
elements.navbarBtn.addEventListener('click', function() {
    elements.navModal.classList.toggle('bar-modal--active');
    document.addEventListener("wheel", bloquearScroll, { passive: false });
    document.addEventListener("touchmove", bloquearScroll, { passive: false });
    
    
    console.log("clicado");
});

elements.navDismiss.addEventListener('click', function() {
    elements.navbarBtn.dispatchEvent(new Event('click'));
    window.location.reload();
});
