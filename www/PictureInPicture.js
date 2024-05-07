var exec = require('cordova/exec');

function plugin() {

}

plugin.prototype.enter = function(width, height, success, error) {
    exec(success, error, "PictureInPicture", "enter", [width, height]);
}

plugin.prototype.isPip = function(success, error) {
    exec(success, error, "PictureInPicture", "isPip", []);
}

plugin.prototype.onPipModeChanged = function(success, error) {
    exec(success, error, "PictureInPicture", "onPipModeChanged", []);
}

plugin.prototype.isPipModeSupported = function(success, error) {
    exec(success, error, "PictureInPicture", "isPipModeSupported", []);
}

// 2024-05-07 yoon: PIP Change Mode Event 삭제
plugin.prototype.offPipModeChanged = function(success, error) {
    exec(success, error, "PictureInPicture", "offPipModeChanged", []);
}

module.exports = new plugin();