import $ from "jquery";

class MobileMenu {
  constructor() {
    this.navigation = $(".page-nav");
    this.menuIcon = $(".page-nav__menu-icon");
    this.menuContent = $(".page-nav__nav-items");
    this.toggleNavigation = this.toggleNavigation.bind(this)
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleNavigation);
  }
  toggleNavigation() {
    this.menuContent.toggleClass("page-nav__isVisible");
    this.navigation.toggleClass("page-nav__fadeIn");
    this.menuIcon.toggleClass("hamburger");
  }
}

export default MobileMenu;
