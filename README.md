
# ZNSConnect SDK Documentation

The ZNSConnect SDK provides a set of functionalities to interact with blockchain domain names, including resolving addresses, getting metadata, checking domain availability, and more. Below is the documentation for each function available in the SDK.

## Functions

### `resolveAddress`

Resolves the blockchain address for a given top-level domain (TLD) and address.

| Parameter | Type     | Description                                      |
|-----------|----------|--------------------------------------------------|
| `tld`     | `string` | The top-level domain (e.g., 'nft', 'xterio').    |
| `address` | `string` | The blockchain address to resolve (prefixed with `0x`). |

**Returns:** `Promise<any>` - The resolution result.

**Example:**

```typescript
const result = await ZNSConnect.resolveAddress('nft', '0x123...');
console.log(result);
```

### [`resolveDomain`](command:_github.copilot.openSymbolFromReferences?%5B%7B%22%24mid%22%3A1%2C%22path%22%3A%22%2Fhome%2Fekansh%2FDocuments%2Fzns-sdk-v3%2Fsrc%2Futils%2FresolveDomain.ts%22%2C%22scheme%22%3A%22file%22%7D%2C%7B%22line%22%3A4%2C%22character%22%3A0%7D%5D "src/utils/resolveDomain.ts")

Resolves the owner of a given domain.

| Parameter | Type     | Description                       |
|-----------|----------|-----------------------------------|
| [`domain`](command:_github.copilot.openSymbolFromReferences?%5B%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2Fhome%2Fekansh%2FDocuments%2Fzns-sdk-v3%2Fsrc%2Findex.ts%22%2C%22external%22%3A%22file%3A%2F%2F%2Fhome%2Fekansh%2FDocuments%2Fzns-sdk-v3%2Fsrc%2Findex.ts%22%2C%22path%22%3A%22%2Fhome%2Fekansh%2FDocuments%2Fzns-sdk-v3%2Fsrc%2Findex.ts%22%2C%22scheme%22%3A%22file%22%7D%2C%7B%22line%22%3A29%2C%22character%22%3A22%7D%5D "src/index.ts")  | `string` | The domain name to resolve.       |

**Returns:** [`Promise<string>`](command:_github.copilot.openSymbolFromReferences?%5B%7B%22%24mid%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fhome%2Fekansh%2F.vscode%2Fextensions%2Fms-vscode.vscode-typescript-next-5.6.20240624%2Fnode_modules%2Ftypescript%2Flib%2Flib.es2015.iterable.d.ts%22%2C%22path%22%3A%22%2Fhome%2Fekansh%2F.vscode%2Fextensions%2Fms-vscode.vscode-typescript-next-5.6.20240624%2Fnode_modules%2Ftypescript%2Flib%2Flib.es2015.iterable.d.ts%22%2C%22scheme%22%3A%22file%22%7D%2C%7B%22line%22%3A215%2C%22character%22%3A0%7D%5D "../../.vscode/extensions/ms-vscode.vscode-typescript-next-5.6.20240624/node_modules/typescript/lib/lib.es2015.iterable.d.ts") - The owner's address.

**Example:**

```typescript
const owner = await ZNSConnect.resolveDomain('example.nft');
console.log(owner);
```

### `getRegistry`

Gets the registry information for a given domain.

| Parameter | Type     | Description                  |
|-----------|----------|------------------------------|
| `domain`  | `string` | The domain to get info for.  |

**Returns:** `Promise<any>` - The registry information.

**Example:**

```typescript
const registry = await ZNSConnect.getRegistry('example.nft');
console.log(registry);
```

### [`getMetadata`](command:_github.copilot.openSymbolFromReferences?%5B%7B%22%24mid%22%3A1%2C%22path%22%3A%22%2Fhome%2Fekansh%2FDocuments%2Fzns-sdk-v3%2Fsrc%2Futils%2FgetMetadata.ts%22%2C%22scheme%22%3A%22file%22%7D%2C%7B%22line%22%3A5%2C%22character%22%3A0%7D%5D "src/utils/getMetadata.ts")

Retrieves metadata for a given domain.

| Parameter | Type     | Description                |
|-----------|----------|----------------------------|
| [`domain`](command:_github.copilot.openSymbolFromReferences?%5B%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2Fhome%2Fekansh%2FDocuments%2Fzns-sdk-v3%2Fsrc%2Findex.ts%22%2C%22external%22%3A%22file%3A%2F%2F%2Fhome%2Fekansh%2FDocuments%2Fzns-sdk-v3%2Fsrc%2Findex.ts%22%2C%22path%22%3A%22%2Fhome%2Fekansh%2FDocuments%2Fzns-sdk-v3%2Fsrc%2Findex.ts%22%2C%22scheme%22%3A%22file%22%7D%2C%7B%22line%22%3A29%2C%22character%22%3A22%7D%5D "src/index.ts")  | `string` | The domain to get metadata for. |

**Returns:** [`Promise<any>`](command:_github.copilot.openSymbolFromReferences?%5B%7B%22%24mid%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fhome%2Fekansh%2F.vscode%2Fextensions%2Fms-vscode.vscode-typescript-next-5.6.20240624%2Fnode_modules%2Ftypescript%2Flib%2Flib.es2015.iterable.d.ts%22%2C%22path%22%3A%22%2Fhome%2Fekansh%2F.vscode%2Fextensions%2Fms-vscode.vscode-typescript-next-5.6.20240624%2Fnode_modules%2Ftypescript%2Flib%2Flib.es2015.iterable.d.ts%22%2C%22scheme%22%3A%22file%22%7D%2C%7B%22line%22%3A215%2C%22character%22%3A0%7D%5D "../../.vscode/extensions/ms-vscode.vscode-typescript-next-5.6.20240624/node_modules/typescript/lib/lib.es2015.iterable.d.ts") - The domain metadata.

**Example:**

```typescript
const metadata = await ZNSConnect.getMetadata('example.nft');
console.log(metadata);
```

### `checkDomain`

Checks if a domain is already registered.

| Parameter | Type     | Description               |
|-----------|----------|---------------------------|
| `domain`  | `string` | The domain to check.      |

**Returns:** `Promise<boolean>` - `true` if the domain is registered, otherwise `false`.

**Example:**

```typescript
const isRegistered = await ZNSConnect.checkDomain('example.nft');
console.log(isRegistered ? 'Registered' : 'Available');
```

### [`getPrice`](command:_github.copilot.openSymbolFromReferences?%5B%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2Fhome%2Fekansh%2FDocuments%2Fzns-sdk-v3%2Fsrc%2Findex.ts%22%2C%22external%22%3A%22file%3A%2F%2F%2Fhome%2Fekansh%2FDocuments%2Fzns-sdk-v3%2Fsrc%2Findex.ts%22%2C%22path%22%3A%22%2Fhome%2Fekansh%2FDocuments%2Fzns-sdk-v3%2Fsrc%2Findex.ts%22%2C%22scheme%22%3A%22file%22%7D%2C%7B%22line%22%3A67%2C%22character%22%3A2%7D%5D "src/index.ts")

Gets the total price for registering a list of domains under a specific TLD.

| Parameter    | Type       | Description                           |
|--------------|------------|---------------------------------------|
| [`domainArray`](command:_github.copilot.openSymbolFromReferences?%5B%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2Fhome%2Fekansh%2FDocuments%2Fzns-sdk-v3%2Fsrc%2Findex.ts%22%2C%22external%22%3A%22file%3A%2F%2F%2Fhome%2Fekansh%2FDocuments%2Fzns-sdk-v3%2Fsrc%2Findex.ts%22%2C%22path%22%3A%22%2Fhome%2Fekansh%2FDocuments%2Fzns-sdk-v3%2Fsrc%2Findex.ts%22%2C%22scheme%22%3A%22file%22%7D%2C%7B%22line%22%3A67%2C%22character%22%3A17%7D%5D "src/index.ts")| `string[]` | The list of domains to check the price for. |
| [`tld`](command:_github.copilot.openSymbolFromReferences?%5B%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2Fhome%2Fekansh%2FDocuments%2Fzns-sdk-v3%2Fsrc%2Findex.ts%22%2C%22external%22%3A%22file%3A%2F%2F%2Fhome%2Fekansh%2FDocuments%2Fzns-sdk-v3%2Fsrc%2Findex.ts%22%2C%22path%22%3A%22%2Fhome%2Fekansh%2FDocuments%2Fzns-sdk-v3%2Fsrc%2Findex.ts%22%2C%22scheme%22%3A%22file%22%7D%2C%7B%22line%22%3A9%2C%22character%22%3A4%7D%5D "src/index.ts")        | `string`   | The top-level domain.                 |

**Returns:** [`Promise<any>`](command:_github.copilot.openSymbolFromReferences?%5B%7B%22%24mid%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fhome%2Fekansh%2F.vscode%2Fextensions%2Fms-vscode.vscode-typescript-next-5.6.20240624%2Fnode_modules%2Ftypescript%2Flib%2Flib.es2015.iterable.d.ts%22%2C%22path%22%3A%22%2Fhome%2Fekansh%2F.vscode%2Fextensions%2Fms-vscode.vscode-typescript-next-5.6.20240624%2Fnode_modules%2Ftypescript%2Flib%2Flib.es2015.iterable.d.ts%22%2C%22scheme%22%3A%22file%22%7D%2C%7B%22line%22%3A215%2C%22character%22%3A0%7D%5D "../../.vscode/extensions/ms-vscode.vscode-typescript-next-5.6.20240624/node_modules/typescript/lib/lib.es2015.iterable.d.ts") - The total price.

**Example:**

```typescript
const price = await ZNSConnect.getPrice(['example1', 'example2'], 'nft');
console.log(price);
```

### `register`

Registers a list of domains under a specific TLD to specified owner addresses.

| Parameter      | Type             | Description                                   |
|----------------|------------------|-----------------------------------------------|
| `walletClient` | `WalletClient`   | The wallet client instance.                   |
| `domainNames`  | `string[]`       | The list of domains to register.              |
| `ownerAddresses`| `string[]`      | The list of owner addresses for the domains.  |
| `tld`          | `string`         | The top-level domain.                         |

**Returns:** `Promise<any>` - The registration result.

**Example:**

```typescript
await ZNSConnect.register(walletClient, ['example1', 'example2'], ['0x123...', '0x456...'], 'nft');
```

This documentation provides a comprehensive guide to using the ZNSConnect SDK for interacting with blockchain domains.
```
