if (Device.deviceOS === "iOS") {
  module.exports = require('./listviewindex-iOS');
} else if (Device.deviceOS === "Android") {
  module.exports = require('./listviewindex-Android');
}