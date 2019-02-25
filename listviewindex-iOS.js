const Color = require("sf-core/ui/color");
const View = require("sf-core/ui/view");
const extend = require("js-base/core/extend");

const ListviewIndex = extend(View)(
    function(_super, params) {
        var self = this;

        self.nativeObject = new __SF_SMFTableViewIndex();

        _super(this);

        self.nativeObject.indexItemsForTableViewIndex = function() {
            var returnValue = [];
            if (self.indexItems) {
                returnValue = self.indexItems().map((value, index, array) => {
                    if (typeof value !== "string") {
                        return value.nativeObject;
                    }
                    return value;
                });
            }
            return returnValue;
        };

        self.nativeObject.tableViewIndexDidSelect = function(e) {
            return self.indexDidSelect ? self.indexDidSelect(e.index) : false; //haptic
        }

        self.reloadData = function() {
            self.nativeObject.reloadData();
        };

        var _backgroundView = undefined;
        Object.defineProperty(self, 'backgroundView', {
            get: function() {
                if (_backgroundView === undefined) {
                    _backgroundView = new View();
                    _backgroundView.nativeObject = self.nativeObject.backgroundView;
                }
                return _backgroundView;
            },
            enumerable: true
        });

        Object.defineProperty(self, 'tintColor', {
            get: function() {
                return new Color({ color: self.nativeObject.tintColor });
            },
            set: function(value) {
                self.nativeObject.tintColor = value.nativeObject;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(self, 'itemSpacing', {
            get: function() {
                return self.nativeObject.itemSpacing;
            },
            set: function(value) {
                self.nativeObject.itemSpacing = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(self, 'font', {
            get: function() {
                return self.nativeObject.font;
            },
            set: function(value) {
                self.nativeObject.font = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(self, 'indexInset', {
            get: function() {
                return self.nativeObject.indexInsetDictionary;
            },
            set: function(value) {
                self.nativeObject.indexInsetDictionary = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(self, 'indexOffset', {
            get: function() {
                return self.nativeObject.indexOffsetDictionary;
            },
            set: function(value) {
                self.nativeObject.indexOffsetDictionary = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(self, 'listviewIndexMinimumWidth', {
            get: function() {
                return self.nativeObject.minWidth;
            },
            set: function(value) {
                self.nativeObject.minWidth = value;
            },
            enumerable: true,
            configurable: true
        });

        self.resetFont = function() {
            self.nativeObject.resetFont();
        };

        self.resetItemSpacing = function() {
            self.nativeObject.resetItemSpacing();
        };

        self.resetIndexInset = function() {
            self.nativeObject.resetIndexInset();
        };

        self.resetIndexOffset = function() {
            self.nativeObject.resetIndexOffset();
        };

        self.resetAppearance = function() {
            self.nativeObject.resetAppearance();
        };

        // Assign parameters given in constructor
        if (params) {
            for (var param in params) {
                this[param] = params[param];
            }
        }
    }
);
module.exports = ListviewIndex;
