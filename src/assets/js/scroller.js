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

var super_remove_event_listener = EventTarget.prototype.removeEventListener;
EventTarget.prototype.removeEventListener = function (type, listener, options) {
  var super_this = this;
  //...
  super_remove_event_listener.call(super_this, type, listener, false);
}

// 赋值默认事件原型链的 preventDefault
var super_prevent_default = Event.prototype.preventDefault;
Event.prototype.preventDefault = function () {
  // 判断是否设置了
  if (this.__passive) {
    console.warn("Ignored attempt to preventDefault an event from a passive listener");
    return;
  }
  super_prevent_default.apply(this);
}