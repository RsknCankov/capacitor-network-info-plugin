import { WebPlugin } from '@capacitor/core';
import type { CapacitorNetworkInfoPlugin } from './definitions';
export declare class CapacitorNetworkInfoWeb extends WebPlugin implements CapacitorNetworkInfoPlugin {
    getMacAddressLegacy({ interfaceName: interfaceName, }: {
        interfaceName: string;
    }): Promise<{
        macAddress: string;
        success: boolean;
    }>;
    getInfo(): Promise<{
        interfaceName: string;
        ipAddress: string;
        subnetMask: string;
        dnsServers: string;
        connectionMode: string;
    }>;
}
