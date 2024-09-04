import { WebPlugin } from '@capacitor/core';

import type { CapacitorNetworkInfoPlugin } from './definitions';

export class CapacitorNetworkInfoWeb
  extends WebPlugin
  implements CapacitorNetworkInfoPlugin
{
  getInfo(): Promise<{
    interfaceName: string;
    ipAddress: string;
    subnetMask: string;
    dnsServers: string;
    connectionMode: string;
  }> {
    throw new Error('Method not implemented.');
  }
}
