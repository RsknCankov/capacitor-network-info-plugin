export interface CapacitorNetworkInfoPlugin {
    getInfo(): Promise<{
        interfaceName: string;
        ipAddress: string;
        subnetMask: string;
        dnsServers: string;
        connectionMode: string;
    }>;
    getMacAddressLegacy({ interfaceName: interfaceName, }: {
        interfaceName: string;
    }): Promise<{
        macAddress: string;
        success: boolean;
    }>;
}
