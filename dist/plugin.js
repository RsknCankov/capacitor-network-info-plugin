var capacitorCapacitorNetworkInfo = (function (exports, core) {
    'use strict';

    const CapacitorNetworkInfo = core.registerPlugin('CapacitorNetworkInfo', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.CapacitorNetworkInfoWeb()),
    });

    class CapacitorNetworkInfoWeb extends core.WebPlugin {
        getInfo() {
            throw new Error('Method not implemented.');
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        CapacitorNetworkInfoWeb: CapacitorNetworkInfoWeb
    });

    exports.CapacitorNetworkInfo = CapacitorNetworkInfo;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
