# capacitor-network-info

Capacitor plugin for fetching all possible details around device's network info

## Install

```bash
npm install capacitor-network-info
npx cap sync
```

## API

<docgen-index>

* [`getInfo()`](#getinfo)
* [`getMacAddressLegacy(...)`](#getmacaddresslegacy)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getInfo()

```typescript
getInfo() => Promise<{ interfaceName: string; ipAddress: string; subnetMask: string; dnsServers: string; connectionMode: string; }>
```

**Returns:** <code>Promise&lt;{ interfaceName: string; ipAddress: string; subnetMask: string; dnsServers: string; connectionMode: string; }&gt;</code>

--------------------


### getMacAddressLegacy(...)

```typescript
getMacAddressLegacy({ interfaceName: interfaceName, }: { interfaceName: string; }) => Promise<{ macAddress: string; success: boolean; }>
```

| Param     | Type                                    |
| --------- | --------------------------------------- |
| **`__0`** | <code>{ interfaceName: string; }</code> |

**Returns:** <code>Promise&lt;{ macAddress: string; success: boolean; }&gt;</code>

--------------------

</docgen-api>
