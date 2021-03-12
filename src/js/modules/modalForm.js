const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]');

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) e.preventDefault();

                windows.forEach(item => item.style.display = 'none');

                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';

            });
        });

        close.addEventListener('click', (e) => {
            windows.forEach(item => item.style.display = 'none');
            modal.style.display = 'none';
            document.body.overflow = '';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                windows.forEach(item => item.style.display = 'none');
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }

    bindModal('[data-open-modal]', '.modal-form', '[data-close-modal]');
};

export default modals;