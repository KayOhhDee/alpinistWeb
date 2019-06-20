import $ from "jquery";
import "waypoints/lib/noframework.waypoints.min";

class ScrollEffects {
  constructor(className, Offset) {
    this.elements = className;
    this.offset = Offset;
    this.initiallyHide();
    this.itemsVisible();
  }

  initiallyHide() {
    this.elements.addClass("initiallyHide");
  }

  itemsVisible() {
    const self = this;
    this.elements.each(function() {
      let el = this;
      new Waypoint({
        element: el,
        handler: () => {
          $(el).addClass("itemsVisible");
        },
        offset: self.offset
      });
    });
  }
}

export default ScrollEffects;