export interface CapacitorNetworkInfoPlugin {
    getInfo(): Promise<{
        interfaceName: string;
        ipAddress: string;
        subnetMask: string;
        dnsServers: string;
        connectionMode: string;
    }>;
}
