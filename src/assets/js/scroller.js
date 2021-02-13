// Unable to preventDefault inside passive event listener invocation.
var super_add_event_listener = EventTarget.prototype.addEventListener;
EventTarget.prototype.addEventListener = function (type, listener, options) {
  var super_this = this;
  //...
  var wrapped = {
    handleEvent: function (e) {
      e.__passive = false;
    }
  };
  //...
  super_add_event_listener.call(super_this, type, wrapped, false);
  //...
  super_add_event_listener.call(super_this, type, listener, false);
}