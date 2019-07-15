import $ from "jquery";
import "../scss/style.scss"

import Header from "./modules/header"
import MobileMenu from "./modules/mobile"
import scrollEffects from "./modules/scrollEffect"

window.onload = (() => {
  'use strict'

  new Header();
  new MobileMenu();
  new scrollEffects($('.grid__feature'), '85%');
  new scrollEffects($('.testimonial__card'), '60%');

})