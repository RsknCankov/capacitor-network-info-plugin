import { registerPlugin } from '@capacitor/core';
const CapacitorNetworkInfo = registerPlugin('CapacitorNetworkInfo', {
    web: () => import('./web').then(m => new m.CapacitorNetworkInfoWeb()),
});
export * from './definitions';
export { CapacitorNetworkInfo };
//# sourceMappingURL=index.js.map