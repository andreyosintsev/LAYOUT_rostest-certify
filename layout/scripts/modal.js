document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.modal-overlay');
    const closeButton = document.querySelector('.modal__close');

    if (closeButton) closeButton.addEventListener('click', () => closeModal(body, modal, overlay));
    if (overlay) overlay.addEventListener('click', () => closeModal(body, modal, overlay));

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeModal(body, modal, overlay);
    })
})

function closeModal(body, modal, overlay) {
    if (modal) modal.classList.remove('modal_visible');
    if (overlay) overlay.classList.remove('modal-overlay_visible');
    if (body) body.classList.remove('no-scroll');
}
