// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"lKzq4":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bNKaB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _simpleTag = require("simple-tag");
var _simpleTagDefault = parcelHelpers.interopDefault(_simpleTag);
(0, _simpleTagDefault.default)("jump") // import { El } from '@frameable/el'
 // import { defineComponent } from 'components-wrapper'
 // class SimpleTag extends El {
 //   render(html) {
 //     return html` <div>123</div> `
 //   }
 // }
 // const installComponent = (prefixName) =>
 //   defineComponent(SimpleTag)(`${prefixName}-tag`)
 // installComponent('jump')
;

},{"simple-tag":"kt4Py","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kt4Py":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>installComponent);
var _el = require("@frameable/el");
var _componentsWrapper = require("components-wrapper");
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) raw = strings.slice(0);
    strings.raw = raw;
    return strings;
}
var _templateObject;
var SimpleTag = /*#__PURE__*/ function(_El) {
    _inheritsLoose(SimpleTag, _El);
    function SimpleTag() {
        return _El.apply(this, arguments) || this;
    }
    var _proto = SimpleTag.prototype;
    _proto.render = function render(html) {
        return html(_templateObject || (_templateObject = _taggedTemplateLiteralLoose([
            " <div>123</div> "
        ])));
    };
    return SimpleTag;
}((0, _el.El));
var installComponent = function installComponent(prefixName) {
    return (0, _componentsWrapper.defineComponent)(SimpleTag)(prefixName + "-tag");
};

},{"@frameable/el":"cNlPl","components-wrapper":"l0Idp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cNlPl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "El", ()=>El);
class El extends HTMLElement {
    static els = {};
    static stash = {};
    static tags = {};
    static keys = new WeakMap;
    static styles = {};
    static deps = {};
    static Raw = class Raw extends String {
    };
    constructor(){
        super();
        this._id = `${this.tagName}:${this.getAttribute("key") || Math.random().toString(36).slice(2)}`;
        El.style = El.style || El.importStyle();
        this.$html = Object.assign(this.$html.bind(this), {
            raw: (x)=>new El.Raw(x)
        });
        this._cache = {
            d: {},
            clear: (_)=>this._cache.d = {}
        };
        this._memoize();
        this.$update = this.$update.bind(this);
    }
    connectedCallback() {
        El._contextId = this._id;
        this._unstash();
        this.created && !this._created && this.created();
        this._created = true;
        El.els[this._id] = this;
        this._update();
        this.mounted && this.mounted();
        if (El.tags[this.tagName] && !this.getAttribute("key")) console.warn(`Each ${this.tagName} should have a unique \`key\` attribute`);
        El.tags[this.tagName] = true;
    }
    disconnectedCallback() {
        this.unmounted && this.unmounted();
    }
    _memoize() {
        const descriptors = Object.getOwnPropertyDescriptors(this.constructor.prototype);
        for (const [key, d] of Object.entries(descriptors).filter((x)=>x[1].get))Object.defineProperty(this.constructor.prototype, key, {
            get () {
                return key in this._cache.d ? this._cache.d[key] : this._cache.d[key] = d.get.call(this);
            }
        });
        this.constructor.prototype._memoize = new Function;
    }
    $update() {
        this._queued = this._queued || requestAnimationFrame((_)=>this._update() || delete this._queued);
    }
    _update() {
        El._contextId = this._id;
        this._cache.clear();
        this._unstash();
        const html = this.render && this.render(this.$html);
        const shadow = this.shadowRoot || this.attachShadow({
            mode: "open"
        });
        El.styles[this.tagName] = El.styles[this.tagName] || `<link rel="stylesheet" href="data:text/css;base64,${btoa(El.style + (this.styles && this.styles(El.zcss)) || "")}">`;
        El.morph(shadow, document.createRange().createContextualFragment(El.styles[this.tagName] + html));
        this._unstash();
        El._contextId = null;
    }
    _unstash() {
        const camel = (s)=>s.replace(/-\w/g, (c)=>c[1].toUpperCase());
        const _contextId = El._contextId;
        El._contextId = this._id;
        for (const el of [
            ...(this.shadowRoot || this).querySelectorAll("*"),
            this
        ])for (const attr of el.attributes)if (attr.value in El.stash) el[camel(attr.name)] = El.stash[attr.value];
        else if (attr.name in el.__proto__) ;
        else try {
            el[camel(attr.name)] = attr.value;
        } catch  {}
        El._contextId = _contextId;
    }
    get $refs() {
        return new Proxy({}, {
            get: (obj, key)=>this.shadowRoot.querySelector(`[ref="${key}"]`)
        });
    }
    $watch(_, fn) {
        if (!El.dep._path) return;
        El.deps[El.dep._path] = El.deps[El.dep._path] || {};
        El.deps[El.dep._path][Math.random()] = fn;
        El.dep._path = null;
    }
    $observable() {
        return El.observable(...arguments);
    }
    async $nextTick() {
        return await El.nextTick();
    }
    $html(strings, ...vals) {
        for (const [i] of strings.entries()){
            if ((typeof vals[i]).match(/object|function/) && strings[i].endsWith("=")) {
                vals[i] = typeof vals[i] == "function" ? vals[i].bind(this) : vals[i];
                const key = El.keys.get(vals[i].__target__ || vals[i]) || "el:" + Math.random().toString(36).slice(2);
                El.keys.set(vals[i].__target__ || vals[i], key);
                El.stash[key] = vals[i];
                vals[i] = JSON.stringify(key);
            } else if (strings[i].endsWith("=")) vals[i] = JSON.stringify(vals[i]);
            else if (vals[i] instanceof Array) vals[i] = vals[i].join("");
            else vals[i] = El.escape(vals[i]);
        }
        return new El.Raw(strings.map((s, i)=>[
                s,
                vals[i]
            ].join``).join``);
    }
    static importStyle() {
        let src = "";
        for (const el of document.querySelectorAll('style, link[rel="stylesheet"]'))src += el.tagName == "STYLE" ? el.innerHTML : `\n@import url(${el.href});\n`;
        return src;
    }
    static notify(path) {
        for(const id in El.deps[path] || {})setTimeout((_)=>El.deps[path][id]());
    }
    static dep(path) {
        El.dep._path = !El._contextId && path;
        if (!El._contextId) return true;
        const contextId = El._contextId;
        El.deps[path] = El.deps[path] || {};
        return El.deps[path][El._contextId] = (_)=>El.els[contextId].$update();
    }
    static observable(x, path = Math.random().toString(36).slice(2)) {
        if ((typeof x != "object" || x === null) && El.dep(path)) return x;
        return new Proxy(x, {
            set (x, key) {
                return El.notify(path + "/" + key) || Reflect.set(...arguments);
            },
            get (x, key) {
                return x.__target__ ? x[key] : typeof key == "symbol" ? Reflect.get(...arguments) : key in x.constructor.prototype && El.dep(path + "/" + key) ? x[key] : key == "__target__" ? x : El.observable(x[key], path + "/" + key);
            }
        });
    }
    static morph(l, r) {
        let ls = 0, rs = 0, le = l.childNodes.length, re = r.childNodes.length;
        const lc = [
            ...l.childNodes
        ], rc = [
            ...r.childNodes
        ];
        const content = (e)=>e.nodeType == 3 ? e.textContent : e.nodeType == 1 ? e.outerHTML : "";
        const key = (e)=>e.nodeType == 1 && customElements.get(e.tagName.toLowerCase()) && e.getAttribute("key") || NaN;
        for (const a of r.attributes || [])if (l.getAttribute(a.name) != a.value) {
            l.setAttribute(a.name, a.value);
            if (l.constructor.prototype.hasOwnProperty(a.name) && typeof l[a.name] == "boolean") l[a.name] = true;
            l.$update && l.$update();
        }
        for (const a of l.attributes || [])if (!r.hasAttribute(a.name)) {
            l.removeAttribute(a.name);
            if (l.constructor.prototype.hasOwnProperty(a.name) && typeof l[a.name] == "boolean") l[a.name] = false;
        }
        while(ls < le || rs < re)if (ls == le) l.insertBefore(lc.find((l)=>key(l) == key(rc[rs])) || rc[rs], lc[ls]) && rs++;
        else if (rs == re) l.removeChild(lc[ls++]);
        else if (content(lc[ls]) == content(rc[rs])) ls++, rs++;
        else if (content(lc[le - 1]) == content(rc[re - 1])) le--, re--;
        else if (lc[ls] && rc[rs].children && lc[ls].tagName == rc[rs].tagName) El.morph(lc[ls++], rc[rs++]);
        else lc[ls++].replaceWith(rc[rs++]);
    }
    static async nextTick(f) {
        await new Promise((r)=>setTimeout((_)=>requestAnimationFrame((_)=>{
                    f && f();
                    r();
                })));
    }
    static zcss(...args) {
        let lines = [], stack = [], open, opened, close;
        const src = args.join("").replace(/,\n/gs, ",");
        for (let line of src.split(/\n/)){
            line = line.replace(/(.+,.+){/, ":is($1){");
            if (line.match(/^\s*@[msdk].*\{/)) opened = open = close = opened && !lines.push("}") || lines.push(line) & 0;
            else if (line.match(/\{\s*$/)) open = stack.push(line.replace("{", "").trim()) | 1;
            else if (line.match(/\s*\}\s*$/)) close = (!stack.pop() && lines.push("}")) | 1;
            else {
                if (!line.trim()) continue;
                if (opened && (open || close)) opened = close = lines.push("}") & 0;
                if (open || close) opened = (open = lines.push(stack.join` `.replace(/ &/g, "") + "{") & 0, true);
                lines.push(line);
            }
        }
        return close && lines.push("}") && lines.join("\n");
    }
    static escape(v) {
        return v instanceof El.Raw ? v : v === 0 ? v : String(v || "").replace(/[<>'"]/g, (c)=>`&#${c.charCodeAt(0)}`);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"l0Idp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defineComponent", ()=>defineComponent);
parcelHelpers.export(exports, "defineComponents", ()=>defineComponents);
var defineComponent = function defineComponent(component) {
    return function(componentName) {
        customElements.define(componentName, component);
    };
};
var defineComponents = function defineComponents(prefix) {
    return function(componentName, component) {
        customElements.define(prefix + "-" + componentName, component);
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["lKzq4","bNKaB"], "bNKaB", "parcelRequire6330")

//# sourceMappingURL=index.0641b553.js.map
