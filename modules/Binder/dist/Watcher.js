"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Watcher = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Observer = require("./Observer");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Watcher = exports.Watcher = function () {
    function Watcher(data, bindingData) {
        var _this = this;

        var debug = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        _classCallCheck(this, Watcher);

        this.__data = data;
        this.__bindingData = bindingData;
        this.oberver = new _Observer.Observer(data);
        this.__ons = {};
        this.__bindings = {};
        this.debug = debug;
        this.error = null;
        this.oberver.on("change", function (root, data, keys, value) {
            var update = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

            _this.error = null;
            if (update) {
                var bd = _this.__bindingData;
                var evalString = "bd";
                for (var i = 0; i < keys.length; i++) {
                    evalString += "[" + JSON.stringify(keys[i]) + "]";
                }
                if (_this.__bindings[evalString]) evalString = _this.__bindings[evalString];
                evalString += " = " + JSON.stringify(value);
                try {
                    eval(evalString);
                } catch (e) {
                    if (_this.debug) console.error(e);
                    _this.error = e;
                }
            }
            // console.log("change: " + keys + ": " + value);
            if (_this.haveListener("change")) {
                _this.emit("change", [root, data, keys, value]);
            }
        });
        this.oberver.init();
        this.on("update", function () {
            Object.keys(_this.__data).forEach(function (key) {
                _Observer.Observer.unbind(_this.__data, key);
            });
            _this.oberver = new _Observer.Observer(data);
        });
    }

    _createClass(Watcher, [{
        key: "on",
        value: function on(name, cb) {
            this.__ons[name] = cb;
            return this;
        }
    }, {
        key: "emit",
        value: function emit(name, argv) {
            var _ons;

            (_ons = this.__ons)[name].apply(_ons, _toConsumableArray(argv));
            return this;
        }
    }, {
        key: "haveListener",
        value: function haveListener(name) {
            return !!this.__ons[name];
        }
    }, {
        key: "bind",
        value: function bind(keys, newKeys) {
            var rk = "bd";
            for (var i = 0; i < keys.length; i++) {
                rk += "[" + JSON.stringify(keys[i]) + "]";
            }
            var nk = "bd";
            for (var _i = 0; _i < newKeys.length; _i++) {
                nk += "[" + JSON.stringify(newKeys[_i]) + "]";
            }
            this.__bindings[rk] = nk;
            if (this.error) {
                this.emit("update", []);
            }
        }
    }]);

    return Watcher;
}();
//# sourceMappingURL=Watcher.js.map