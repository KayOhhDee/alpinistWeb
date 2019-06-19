import $ from 'jquery';

class Modal {
  constructor() {
    this.modalBtn = $(".open-modal");
    this.modalOverlayer = $(".modal");
    this.closeIcon = $(".modal__close");
    this.showModal = this.showModal.bind(this);
    this.closeOverlayer = this.closeOverlayer.bind(this);
    this.events();
  }

  events() {
    this.modalBtn.click(this.showModal);
    this.closeIcon.click(this.closeOverlayer);
    $(document).keyup((e) => {
      if (e.keyCode === 27) {
        let close = this.closeOverlayer;
        close();
      }
    });
  }

  showModal(e) {
    this.modalOverlayer.addClass("modal__isopened");
    e.preventDefault();
  }

  closeOverlayer() {
    this.modalOverlayer.removeClass("modal__isopened");
  }
}

export default Modal;