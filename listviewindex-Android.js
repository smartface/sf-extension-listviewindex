const View = require("@smartface/native/ui/view");

function ListviewIndex() {
    View.apply(this, arguments);
  }

ListviewIndex.prototype = Object.create(View.prototype);
ListviewIndex.prototype.constructor = ListviewIndex;

module.exports = ListviewIndex;
