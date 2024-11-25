var capacitorCapacitorNetworkInfo = (function (exports, core) {
    'use strict';

    const CapacitorNetworkInfo = core.registerPlugin('CapacitorNetworkInfo', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.CapacitorNetworkInfoWeb()),
    });

    class CapacitorNetworkInfoWeb extends core.WebPlugin {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        getMacAddressLegacy({ interfaceName: interfaceName, }) {
            console.log('CapacitorNetworkInfo not available on web');
            return new Promise(resolve => resolve({
                macAddress: '',
                success: false,
            }));
        }
        getInfo() {
            console.log('CapacitorNetworkInfo not available on web');
            return new Promise(resolve => resolve({
                interfaceName: '',
                ipAddress: '',
                subnetMask: '',
                dnsServers: '',
                connectionMode: '',
            }));
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
