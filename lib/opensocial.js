/**
 * OpenSocial Restful Protocol.
 * http://www.opensocial.org/Technical-Resources/opensocial-spec-v081/restful-protocol
 */

var fetch = require("google/appengine/api/urlfetch").fetch;

var Container = exports.Container = function(fields) {
    this.postfix = "";
    for (var i in fields) this[i] = fields[i];
}

Container.prototype.fetchPerson = function(userId) {
    return get(this.restBase + "/people/" + (userId || "@me") + "/@self" + this.postfix);
}

var get = function(uri) {
    var response = fetch(uri);
    
    if (200 == response.statusCode)
        return JSON.parse(response.content).entry;
    else
        throw new Error("OpenSocial REST call error");
}
