const close_popUp = () => {
    const popup = document.querySelector('.popUp')
    const modal = document.querySelector('.modal')

    if (popup) {
        popup.remove();
        modal.style.display = "none";
        document.body.style.overflow = 'auto';


    };

}
