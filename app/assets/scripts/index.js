import "../scss/style.scss"
import Modal from "./modules/modal"
import Header from "./modules/header"
import MobileMenu from "./modules/mobile"

window.onload = (() => {
  'use strict'

  new Modal();
  new Header();
  new MobileMenu();

})