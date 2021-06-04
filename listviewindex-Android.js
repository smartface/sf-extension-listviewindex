const View = require("sf-core/ui/view");

function ListviewIndex() {
    View.apply(this, arguments);
  }

ListviewIndex.prototype = Object.create(View.prototype);
ListviewIndex.prototype.constructor = ListviewIndex;

module.exports = ListviewIndex;
