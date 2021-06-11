const Color = require("@smartface/native/ui/color");
const View = require("@smartface/native/ui/view");

function ListViewIndex() {
  this.nativeObject = new __SF_SMFTableViewIndex();
  View.apply(this, arguments);
  this.nativeObject.indexItemsForTableViewIndex = () => {
    let returnValue = [];
    returnValue = this.items.map((value, index, array) => {
      if (typeof value !== "string") {
        return value.nativeObject;
      }
      return value;
    });
    return returnValue;
  }
  this.nativeObject.tableViewIndexDidSelect = (e) => {
    return this.indexDidSelect ? this.indexDidSelect(e.index) : false; //haptic
  };
}

ListViewIndex.prototype._backgroundView = undefined;
ListViewIndex.prototype._items = [];
ListViewIndex.prototype = Object.create(View.prototype);
ListViewIndex.prototype.constructor = ListViewIndex;

ListViewIndex.prototype.reloadData = function () {
  this.nativeObject.reloadData();
}

Object.defineProperty(ListViewIndex.prototype, "items", {
  get: function () {
    return this._items;
  },
  set: function (value) {
    this._items = value.slice();
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(ListViewIndex.prototype, "backgroundView", {
  get: function () {
    if (this._backgroundView === undefined) {
      this._backgroundView = new View();
      this._backgroundView.nativeObject = this.nativeObject.backgroundView;
    }
    return this._backgroundView;
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
