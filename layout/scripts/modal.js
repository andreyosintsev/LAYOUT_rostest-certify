document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.modal-overlay');
    const closeButton = document.querySelector('.modal__close');

    if (closeButton) closeButton.addEventListener('click', () => closeModal(modal, overlay));
    if (overlay) overlay.addEventListener('click', () => closeModal(modal, overlay));

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeModal(modal, overlay);
    })
})

function closeModal(modal, overlay) {
    if (modal) modal.classList.remove('modal_visible');
    if (overlay) overlay.classList.remove('modal-overlay_visible');
}