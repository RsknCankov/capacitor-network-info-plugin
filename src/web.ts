import { WebPlugin } from '@capacitor/core';

import type { CapacitorNetworkInfoPlugin } from './definitions';

export class CapacitorNetworkInfoWeb
  extends WebPlugin
  implements CapacitorNetworkInfoPlugin
{
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  getMacAddressLegacy({
    interfaceName: interfaceName,
  }: {
    interfaceName: string;
  }): Promise<{ macAddress: string; success: boolean }> {
    console.log('CapacitorNetworkInfo not available on web');
    return new Promise(resolve =>
      resolve({
        macAddress: '',
        success: false,
      }),
    );
  }

  getInfo(): Promise<{
    interfaceName: string;
    ipAddress: string;
    subnetMask: string;
    dnsServers: string;
    connectionMode: string;
  }> {
    console.log('CapacitorNetworkInfo not available on web');
    return new Promise(resolve =>
      resolve({
        interfaceName: '',
        ipAddress: '',
        subnetMask: '',
        dnsServers: '',
        connectionMode: '',
      }),
    );
  }
}
