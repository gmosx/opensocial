var Container = require("opensocial").Container;

/**
 * Google FriendConnect.
 * http://www.google.com/friendconnect
 *
 * FriendConnect as an OpenSocial container.
 */
var FriendConnect = exports.FriendConnect = function(fields) {
    Container.call(this, fields);
    this.restBase = "http://www.google.com/friendconnect/api";
    this.postfix = "?fcauth=" + this.fcauth;
}

FriendConnect.prototype = Object.create(Container.prototype);
FriendConnect.prototype.constructor = FriendConnect;

