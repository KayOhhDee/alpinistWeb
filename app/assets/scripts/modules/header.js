import $ from "jquery";
import "waypoints/lib/noframework.waypoints.min";
import smoothScroll from "jquery-smooth-scroll";

class Header {
  constructor() {
    this.pageHeader = $(".page-nav");
    this.triggerElement = $(".page-nav__brand");
    this.pageSections = $(".page-section");
    this.links = $(".link");
    this.showHeader = this.showHeader.bind(this);
    this.showHeader();
    this.addsmoothScrolling();
    this.currentSection();
  }

  showHeader() {
    let changeClass = direction => {
      return direction === "down"
        ? this.pageHeader.addClass("page-nav__isdarker")
        : this.pageHeader.removeClass("page-nav__isdarker");
    };

    new Waypoint({
      element: this.triggerElement[0],
      handler: function(direction) {
        return changeClass(direction);
      },
      offset: "-15%"
    });
  }

  addsmoothScrolling() {
    this.links.smoothScroll();
  }

  currentSection() {
    let self = this;
    this.pageSections.each(function () {
      let el = this;
        new Waypoint({
            element: el,
            handler: (direction) => {
                if (direction === "down") {
                    let matchedLink = el.getAttribute('data-link');
                    self.links.removeClass("isCurrentActive");
                    $(matchedLink).addClass("isCurrentActive");
                }
            },
            offset: "18%"
        });

        new Waypoint({
            element: el,
            handler: (direction) => {
                if (direction === "up") {
                    let matchedLink = el.getAttribute('data-link');
                    self.links.removeClass("isCurrentActive");
                    $(matchedLink).addClass("isCurrentActive");
                }
            },
            offset: "-40%"
        });
    });
  }
}

export default Header

