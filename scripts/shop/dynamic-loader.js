const path = require('path');

module.exports = function (src) {
    return "export default visr_dynamic_load(" +
        path.relative(__dirname, this.resourcePath)
        + ");";
}
