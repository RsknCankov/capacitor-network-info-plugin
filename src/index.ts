import { registerPlugin } from '@capacitor/core';

import type { CapacitorNetworkInfoPlugin } from './definitions';

const CapacitorNetworkInfo = registerPlugin<CapacitorNetworkInfoPlugin>(
  'CapacitorNetworkInfo',
  {
    web: () => import('./web').then(m => new m.CapacitorNetworkInfoWeb()),
  },
);

export * from './definitions';
export { CapacitorNetworkInfo };
