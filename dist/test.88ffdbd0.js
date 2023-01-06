// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"test.js":[function(require,module,exports) {
var squirtleStyle = '\n#squirtle {\n    background : #4bc5d0;\n}\n\n.Squirtle * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n.Squirtle *::after,\n.Squirtle *::before {\n    box-sizing: border-box;\n}\n\n.Squirtle {\n    position: relative;\n}\n\n.head {\n    width: 300px;\n    height: 280px;\n    background: #a6def5;\n    border: 3px solid #000;\n    position: absolute;\n    left: 50%;\n    top: 50px;\n    margin-left: -160px;\n    border-radius: 280px 285px 260px 280px;\n    z-index: 9;\n}\n\n\n\n.headLeft {\n    width: 150px;\n    height: 90px;\n    position: absolute;\n    top: 161px;\n    right: 159px;\n    border-bottom: 3px solid #000;\n    border-left: 3px solid #000;\n    border-radius: 50%/40% 50% 50% 51%;\n    background: #a6def5;\n    transform: rotate(37deg);\n    z-index: -1;\n}\n\n.head::after {\n    content: \'\';\n    width: 120px;\n    height: 120px;\n    background: #a6def5;\n    border-radius: 50%;\n    position: absolute;\n    left: 0px;\n    top: 80px;\n}\n\n.head::before {\n    content: \'\';\n    width: 50px;\n    height: 50px;\n    background: #a6def5;\n    border-radius: 50%;\n    position: absolute;\n    right: 169px;\n    top: 217px;\n}\n\n.eyesBox {\n    position: relative;\n}\n\n.eyes {\n    position: absolute;\n    top: 120px;\n    left: 50%;\n    margin-left: -15px;\n    width: 30px;\n    height: 34px;\n    background: #231200;\n    z-index: 5;\n}\n\n.eyes.left {\n    transform: translateX(-70px);\n    border-radius: 45% 46% 47% 48%;\n}\n\n.eyes.right {\n    transform: translateX(50px);\n    border-radius: 48% 47% 46% 45%;\n}\n\n.nose {\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    border: 4px solid #1d0a04ef;\n    border-top: none;\n    border-left: none;\n    left: 50%;\n    top: 145px;\n    margin-left: -10px;\n    transform: translateX(-14px) rotate(48deg);\n}\n\n.nose::after {\n    content: \'\';\n    width: 5px;\n    height: 5px;\n    border-radius: 50%;\n    background: #1d0a04;\n    position: absolute;\n    top: 16px;\n    left: 16px;\n    opacity: .7;\n}\n\n.faceBox {\n    position: relative;\n}\n\n.face {\n    position: absolute;\n    width: 40px;\n    height: 25px;\n    border-radius: 45% 45% 50% 50%;\n    top: 150px;\n    left: 50%;\n    margin-left: -20px;\n    z-index: 6;\n    background: #fec5b2df;\n}\n\n.face.left {\n\n    transform: translateX(-100px);\n\n\n}\n\n.face.right {\n    transform: translateX(80px);\n}\n\n.soma {\n    position: relative;\n}\n\n.body {\n    position: absolute;\n\n    top: 280px;\n    left: 50%;\n    margin-left: -100px;\n    transform: translateX(-20px);\n    width: 210px;\n    height: 200px;\n    border: 4px solid #000;\n    border-radius: 50% 40% 40% 45%;\n    background: #ffdfbc;\n    overflow: hidden;\n    z-index: 8;\n}\n\n.big.liftTop {\n    position: absolute;\n    top: 5px;\n    left: -10px;\n    width: 100px;\n    height: 100px;\n    border: 2px solid #0000008f;\n    border-radius: 5%;\n}\n\n.big.rightTop {\n    position: absolute;\n    top: 5px;\n    right: -6px;\n    width: 120px;\n    height: 100px;\n    border: 2px solid #0000008f;\n    border-left: none;\n    border-radius: 5%;\n}\n\n.big.liftBottom {\n    position: absolute;\n    top: 102px;\n    left: -10px;\n    width: 100px;\n    height: 140px;\n    border: 2px solid #0000008f;\n    border-radius: 0%;\n    border-top: none;\n}\n\n.smallTop {\n    position: absolute;\n    top: 28px;\n    left: 75px;\n    transform: rotate(49deg);\n    border: 2px solid #0000008f;\n    background: #ffdfbc;\n    z-index: 9;\n    width: 30px;\n    height: 30px;\n}\n\n.smallRight {\n    position: absolute;\n    top: 82px;\n    right: -29px;\n    transform: rotate(51deg);\n    border: 2px solid #0000008f;\n    background: #ffdfbc;\n    z-index: 9;\n    width: 50px;\n    height: 50px;\n}\n\n.smallBottom {\n    position: absolute;\n    bottom: -22px;\n    left: 71px;\n    transform: rotate(41deg);\n    border: 2px solid #0000008f;\n    background: #ffdfbc;\n    z-index: 9;\n    width: 40px;\n    height: 40px;\n}\n\n.smallTop {\n    position: absolute;\n    top: 87px;\n    left: -19px;\n    transform: rotate(49deg);\n    border: 2px solid #0000008f;\n    /* background: #ffdfbc; */\n    z-index: 9;\n    width: 30px;\n    height: 30px;\n}\n\n.back {\n    position: absolute;\n    top: 268px;\n    left: 50%;\n    margin-left: -113px;\n    width: 230px;\n    height: 210px;\n    border: 4px solid #000;\n    border-left: none;\n    border-radius: 60% 60% 50% 45%;\n    background: #c66449;\n    z-index: 1;\n    overflow: hidden;\n}\n\n.topBack {\n    position: absolute;\n    top: 15px;\n    right: 0;\n    border: 3px solid #000;\n    transform: rotate(240deg);\n    width: 50px;\n    height: 50px;\n    background: ;\n}\n\n.bottomBack {\n    position: absolute;\n    bottom: 15px;\n    right: 0;\n    border: 3px solid #000;\n    transform: rotate(30deg);\n    width: 50px;\n    height: 50px;\n}\n\n.hand {\n    position: relative;\n}\n\n.leftHand {\n    position: absolute;\n    top: 325px;\n    left: 50%;\n    margin-left: -160px;\n    transform: rotate(-35deg);\n    border-radius: 0 0 0 17px;\n    width: 100px;\n    height: 35px;\n    border: 3px solid #000;\n    background: #a7ddf7;\n    border-bottom: 4px solid #000;\n}\n\n.leftHand::after {\n    content: \'\';\n    position: absolute;\n    top: -4px;\n    left: 14px;\n    width: 8px;\n    height: 8px;\n    background: #a7ddf7;\n    z-index: 1;\n}\n\n.leftHandOne {\n    position: absolute;\n    top: -10px;\n    left: 11px;\n    transform: rotate(-175deg);\n    border-radius: 0 0 10px 29px;\n    width: 15px;\n    height: 10px;\n    border: 3px solid #000;\n    border-bottom: 3px solid #000;\n    border-top: none;\n    background: #a7ddf7;\n    z-index: 1;\n}\n\n.leftHandTow {\n    position: absolute;\n    top: -6px;\n    left: 1px;\n    transform: rotate(-148deg);\n    width: 10px;\n    height: 7px;\n    border: 3px solid #000;\n    border-radius: 30%;\n    border-bottom: 3px solid #000;\n    border-top: none;\n    border-left: none;\n    background: #a7ddf7;\n    z-index: 1;\n}\n\n.leftHandThree {\n    position: absolute;\n    top: 5px;\n    left: 10px;\n    transform: rotate(-45deg);\n    width: 10px;\n    height: 10px;\n    border: 3px solid #000;\n    border-radius: 50%;\n    border-bottom: 3px solid #000;\n    border-top: none;\n    border-left: none;\n    background: #a7ddf7;\n    z-index: 2;\n}\n\n.rightHand {\n    position: absolute;\n    top: 335px;\n    left: 50%;\n    margin-left: 50px;\n    transform: rotate(60deg);\n    border-radius: 50% 5px 45px 50%/90%;\n    width: 80px;\n    height: 35px;\n    border: 3px solid #000;\n    border-top: 4px solid #000;\n    background: #a7ddf7;\n    border-bottom: 4px solid #000;\n    z-index: 9;\n}\n\n.rightHandOne {\n    position: absolute;\n    top: -9px;\n    left: 61px;\n    transform: rotate(36deg);\n    border-radius: 40%;\n    width: 12px;\n    height: 12px;\n    border: 2px solid #000;\n    border-bottom: none;\n    border-right: none;\n    background: #a7ddf7;\n    z-index: 1;\n}\n\n.rightHandTow {\n    position: absolute;\n    top: -7px;\n    left: 45px;\n    transform: rotate(-140deg);\n    border-radius: 50%/20% 50% 50% 50%;\n    width: 20px;\n    height: 12px;\n    border: 2px solid #000;\n    border-left: none;\n    /* border-right: none; */\n    background: #a7ddf7;\n    z-index: 1;\n}\n\n.rightHandTow::after {\n    content: \'\';\n    position: absolute;\n    top: -6px;\n    left: -8px;\n    width: 17px;\n    height: 17px;\n    background: #a7ddf7;\n    border-radius: 50%;\n    z-index: 1;\n}\n\n.rightHandThree {\n    position: absolute;\n    top: 14px;\n    left: 48px;\n    transform: rotate(110deg);\n    width: 10px;\n    height: 10px;\n    border: 3px solid #000;\n    border-radius: 50%;\n    border-bottom: 3px solid #000;\n    border-top: none;\n    border-left: none;\n    background: #a7ddf7;\n    z-index: 2;\n}\n\n.leg {\n    position: relative;\n}\n\n.leftLeg {\n    position: absolute;\n    top: 435px;\n    left: 50%;\n    margin-left: -100px;\n    width: 50px;\n    height: 70px;\n    border: 3px solid #000;\n    background: #a7ddf7;\n    border-radius: 50%/70%;\n\n}\n\n.rightLeg {\n    position: absolute;\n    top: 435px;\n    left: 50%;\n    margin-left: 30px;\n    width: 50px;\n    height: 70px;\n    border: 3px solid #000;\n    transform: rotate(-6deg);\n    border-radius: 50%/60%;\n    background: #a7ddf7;\n    z-index: 9;\n}\n\n.tail {\n    position: absolute;\n    right: 50%;\n    top: 270px;\n    margin-right: -210px;\n    /* border: 1px solid red; */\n    width: 200px;\n    height: 200px;\n}\n\n.leftTail {\n    position: absolute;\n    bottom: 50px;\n    left: 50px;\n    width: 100px;\n    height: 50px;\n    border: 3px solid #000;\n    background: #a3dff9;\n    border-right: none;\n    border-radius: 30%;\n    transform: rotate(-57deg);\n    z-index: -1;\n}\n\n.rightTail {\n    position: absolute;\n    bottom: 99px;\n    left: 107px;\n    width: 60px;\n    height: 70px;\n    border: 3px solid #000;\n    background: #a3dff9;\n    /* border-right: none; */\n    border-radius: 50% 45% 45% 45%;\n    transform: rotate(-19deg);\n    z-index: -1;\n}\n\n.smallTail {\n    position: absolute;\n    bottom: -2px;\n    right: 15px;\n    width: 25px;\n    height: 30px;\n    border: 3px solid #000;\n    border-radius: 50% 45% 45% 50%;\n    transform: rotate(55deg);\n    background: #a3dff9;\n    border-right: none;\n    z-index: 1;\n}\n\n.leftTail2 {\n    position: absolute;\n    top: 89px;\n    right: 59px;\n    width: 35px;\n    height: 8px;\n    /* border: 1px solid red; */\n    border-radius: 50% 45% 45% 50%;\n    transform: rotate(30deg);\n    background: #a3dff9;\n    /* border-right: none; */\n    z-index: 1;\n}\n';

var html = document.querySelector('#html');
var text = document.querySelector('#text');

var styleLength = 1;

html.innerHTML = squirtleStyle.substring(0, styleLength);
text.innerText = squirtleStyle.substring(0, styleLength);

var time = 50;

var run = function run() {
    styleLength += 1;
    if (styleLength > squirtleStyle.length) {
        window.clearInterval(id);
        return;
    }

    html.innerHTML = squirtleStyle.substring(0, styleLength);
    text.innerText = squirtleStyle.substring(0, styleLength);
    text.scrollTop = text.scrollHeight;
};

var id = setInterval(run, time);

var Pause = function Pause() {
    window.clearInterval(id);
};

var play = function play() {
    return id = setInterval(run, time);
};

btnPause.onclick = function () {
    Pause();
};

btnPlay.onclick = function () {
    play();
};

btnSlow.onclick = function () {
    Pause();
    time = 100;
    play();
};

btnNormal.onclick = function () {
    Pause();
    time = 50;
    play();
};

btnFast.onclick = function () {
    Pause();
    time = 0;
    play();
};

btnAll.onclick = function () {
    Pause();
    html.innerHTML = '';
    text.innerText = '';
    html.innerHTML = squirtleStyle;
    text.innerText = squirtleStyle;
    text.scrollTop = text.scrollHeight;
};

btnRenew.onclick = function () {
    Pause();
    styleLength = 1;
    html.innerHTML = '';
    text.innerText = '';
    play();
};
},{}],"C:\\Users\\jackie\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '53528' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["C:\\Users\\jackie\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.88ffdbd0.map