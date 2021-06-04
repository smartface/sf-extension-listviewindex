const Color = require("sf-core/ui/color");
const View = require("sf-core/ui/view");

let _backgroundView = undefined;
function ListViewIndex() {
  View.apply(this, arguments);
  this.nativeObject = new __SF_SMFTableViewIndex();
}

ListViewIndex.prototype = Object.create(View.prototype);
ListViewIndex.prototype.constructor = ListViewIndex;
ListViewIndex.prototype.nativeObject = new __SF_SMFTableViewIndex();

ListViewIndex.prototype.nativeObject.indexItemsForTableViewIndex = function () {
  const returnValue = [];
  if (this.indexItems) {
    returnValue = this.indexItems().map((value, index, array) => {
      if (typeof value !== "string") {
        return value.nativeObject;
      }
      return value;
    });
  }
  return returnValue;
}

ListViewIndex.prototype.nativeObject.tableViewIndexDidSelect = function (e) {
  return this.indexDidSelect ? this.indexDidSelect(e.index) : false; //haptic
};
ListViewIndex.prototype.reloadData = function () {
  this.nativeObject.reloadData();
}

Object.defineProperty(ListViewIndex.prototype, "backgroundView", {
  get: function () {
    if (_backgroundView === undefined) {
      _backgroundView = new View();
      _backgroundView.nativeObject = this.nativeObject.backgroundView;
    }
    return _backgroundView;
  },
  enumerable: true,
});

Object.defineProperty(ListViewIndex.prototype, "tintColor", {
  get: function () {
    return new Color({ color: this.nativeObject.tintColor });
  },
  set: function (value) {
    this.nativeObject.tintColor = value.nativeObject;
  },
  enumerable: true,
  configurable: true,
});

Object.defineProperty(ListViewIndex.prototype, "itemSpacing", {
  get: function () {
    return this.nativeObject.itemSpacing;
  },
  set: function (value) {
    this.nativeObject.itemSpacing = value;
  },
  enumerable: true,
  configurable: true,
});

Object.defineProperty(ListViewIndex.prototype, "font", {
  get: function () {
    return this.nativeObject.font;
  },
  set: function (value) {
    this.nativeObject.font = value;
  },
  enumerable: true,
  configurable: true,
});

Object.defineProperty(ListViewIndex.prototype, "indexInset", {
  get: function () {
    return this.nativeObject.indexInsetDictionary;
  },
  set: function (value) {
    this.nativeObject.indexInsetDictionary = value;
  },
  enumerable: true,
  configurable: true,
});

Object.defineProperty(ListViewIndex.prototype, "indexOffset", {
  get: function () {
    return this.nativeObject.indexOffsetDictionary;
  },
  set: function (value) {
    this.nativeObject.indexOffsetDictionary = value;
  },
  enumerable: true,
  configurable: true,
});

Object.defineProperty(ListViewIndex.prototype, "ListViewIndexMinimumWidth", {
  get: function () {
    return this.nativeObject.minWidth;
  },
  set: function (value) {
    this.nativeObject.minWidth = value;
  },
  enumerable: true,
  configurable: true,
});

ListViewIndex.prototype.resetFont = function () {
  this.nativeObject.resetFont();
};

ListViewIndex.prototype.resetItemSpacing = function () {
  this.nativeObject.resetItemSpacing();
};

ListViewIndex.prototype.resetIndexInset = function () {
  this.nativeObject.resetIndexInset();
};

ListViewIndex.prototype.resetIndexOffset = function () {
  this.nativeObject.resetIndexOffset();
};

ListViewIndex.prototype.resetAppearance = function () {
  this.nativeObject.resetAppearance();
};

module.exports = ListViewIndex;
