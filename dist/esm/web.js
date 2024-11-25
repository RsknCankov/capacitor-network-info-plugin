import { WebPlugin } from '@capacitor/core';
export class CapacitorNetworkInfoWeb extends WebPlugin {
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
//# sourceMappingURL=web.js.map