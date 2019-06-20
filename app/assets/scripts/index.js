import "../scss/style.scss"
import Modal from "./modules/modal"
import Header from "./modules/header"

window.onload = (() => {
  'use strict'

  new Modal();
  new Header();


})