const View = require("sf-core/ui/view");
const extend = require("js-base/core/extend");

const ListviewIndex = extend(View)(
    function(_super, params) {

        _super(this);

        
        // Assign parameters given in constructor
        if (params) {
            for (var param in params) {
                this[param] = params[param];
            }
        }
    }
);
module.exports = ListviewIndex;
