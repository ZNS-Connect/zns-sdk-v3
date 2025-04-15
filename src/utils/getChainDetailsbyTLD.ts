/**
 * Enum for chain IDs
 */
export enum ChainEnum {
  // Updated to match NETWORKS enum
  INK = 57073,
  UNICHAIN = 130,
  SONEIUM = 1868,
  ABSTRACT = 2741,
  BERA = 80094,
  COTI = 2632500,
  ZORA = 7777777,
  PLUME = 98865,
  APECHAIN = 33139,
  BSC = 56,
  BASE = 8453,
  SONIC = 146,
  SCROLL = 534352,
  BLAST = 81457,
  TAIKO = 167000,
  POLYGON = 137,
  HEMI = 43111,
  CREATOR_TESTNET = 66665,
  MONAD_TESTNET = 10143,
  NEXUS_TESTNET = 393,
  SOMNIA_TESTNET = 50312,
  TABI_TESTNET_V2 = 9788,
  ATHENE_PARTHENON = 281123,
  XRPL_TESTNET = 1449000,
  SAHARA_TESTNET = 313313,
}

/**
 * Enum for registry addresses
 */
export enum RegistryAddressEnum {
  // Chain-specific registry addresses
  BERA_REGISTRY = '0xFb2Cd41a8aeC89EFBb19575C6c48d872cE97A0A5',
  BSC_REGISTRY = '0x7e2CF06F092c9F5cF5972eF021635b6c8E1C5bb2',
  INK_REGISTRY = '0xFb2Cd41a8aeC89EFBb19575C6c48d872cE97A0A5',
  ZORA_REGISTRY = '0xf180136DdC9e4F8c9b5A9FE59e2b1f07265C5D4D',
  BASE_REGISTRY = '0x55B867a955e4384bcAc03eF7F2E492F68016C152',
  SONIC_REGISTRY = '0xFb2Cd41a8aeC89EFBb19575C6c48d872cE97A0A5',
  ABSTRACT_REGISTRY = '0xe0971a2B6E34bd060866081aE879630e83C4A0BD',
  SONEIUM_REGISTRY = '0x2253F8BE85A2505b89fD5E8BcD3Bb915bbd8A6A3',
  PLUME_REGISTRY = '0xf180136DdC9e4F8c9b5A9FE59e2b1f07265C5D4D',
  SCROLL_REGISTRY = '0xb00910bac7da44c0d440798809dbf8d51fdbb635',
  BLAST_REGISTRY = '0x59B9Ac688e39A14b938AC8C3269db66D8aDB9aF6',
  TAIKO_REGISTRY = '0xfb2cd41a8aec89efbb19575c6c48d872ce97a0a5',
  POLYGON_REGISTRY = '0x8ccD9c0A9C084412416A85Fd748c7f1E9b86442D',
  UNICHAIN_REGISTRY = '0xf180136DdC9e4F8c9b5A9FE59e2b1f07265C5D4D',
  COTI_REGISTRY = '0x4293b8907d403b397A4050ebc92a4722aa600720',
  APE_REGISTRY = '0xFb2Cd41a8aeC89EFBb19575C6c48d872cE97A0A5',
  HEMI_REGISTRY = '0xf180136DdC9e4F8c9b5A9FE59e2b1f07265C5D4D',
  CREATOR_REGISTRY = '0x12e82FEd1f64C10783Dd780151ac80e734AF9ae3',
  MONAD_REGISTRY = '0xf180136DdC9e4F8c9b5A9FE59e2b1f07265C5D4D',
  NEXUS_REGISTRY = '0xf180136DdC9e4F8c9b5A9FE59e2b1f07265C5D4D',
  SOMNIA_REGISTRY = '0xf180136DdC9e4F8c9b5A9FE59e2b1f07265C5D4D',
  TABI_V2_REGISTRY = '0xf180136DdC9e4F8c9b5A9FE59e2b1f07265C5D4D',
  ATHENE_REGISTRY = '0xf180136DdC9e4F8c9b5A9FE59e2b1f07265C5D4D',
  XRPL_REGISTRY = '0xf180136DdC9e4F8c9b5A9FE59e2b1f07265C5D4D',
  SAHARA_REGISTRY = '0x59B9Ac688e39A14b938AC8C3269db66D8aDB9aF6',
}

/**
 * Enum for RPC URLs
 */
export enum RpcUrlEnum {
  BSC_MAINNET = 'https://rpc.ankr.com/bsc/b1e63c150bbe954e3bc4f05a832210c0e138120d2b5c1b6722af984713ca78c2',
  TAIKO_MAINNET = 'https://rpc.ankr.com/taiko/b1e63c150bbe954e3bc4f05a832210c0e138120d2b5c1b6722af984713ca78c2',
  SCROLL = 'https://rpc.ankr.com/scroll/b1e63c150bbe954e3bc4f05a832210c0e138120d2b5c1b6722af984713ca78c2',
  BASE = 'https://rpc.ankr.com/base/b1e63c150bbe954e3bc4f05a8322',
  BERACHAIN = 'https://rpc.berachain.com/',
  INK_MAINNET = 'https://ink.drpc.org',
  ZORA = 'https://rpc.zora.energy',
  SONIC_MAINNET = 'https://rpc.ankr.com/sonic_mainnet/',
  ABSTRACT = 'https://api.mainnet.abs.xyz',
  SONEIUM_MAINNET = 'https://rpc.soneium.org',
  PLUME_MAINNET = 'https://rpc.plumenetwork.xyz',
  BLAST = 'https://rpc.ankr.com/blast/b1e63c150bbe954e3bc4f05a832210c0e138120d2b5c1b6722af984713ca78c2',
  POLYGON = 'https://rpc.ankr.com/polygon/b1e63c150bbe954e3bc4f05a832210c0e138120d2b5c1b6722af984713ca78c2',
  UNICHAIN_MAINNET = 'https://mainnet.unichain.org',
  COTI_MAINNET = 'https://mainnet.coti.io/rpc',
  APECHAIN = 'https://apechain.calderachain.xyz/http',
  HEMI_MAINNET = 'https://rpc.hemi.network/rpc',
  CREATOR_TESTNET = 'https://rpc.creatorchain.io',
  MONAD_TESTNET = 'https://testnet-rpc.monad.xyz/',
  NEXUS_TESTNET = 'https://rpc.nexus.xyz/http',
  SOMNIA_TESTNET = 'https://rpc.ankr.com/somnia_testnet/b1e63c150bbe954e3bc4f05a832210c0e138120d2b5c1b6722af984713ca78c2',
  TABI_TESTNET_V2 = 'https://rpc.testnetv2.tabichain.com',
  ATHENE_TESTNET = 'https://rpc.parthenon.athenescan.io',
  XRPL_TESTNET = 'https://rpc.testnet.xrplevm.org/',
  SAHARA_TESTNET = 'https://testnet.saharalabs.ai',
}

export type ChainDetails = {
  id: number;
  name: string;
  shortName?: string;
  iconBackground?: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpcUrls: {
    default: {
      http: string[];
      webSocket?: string[];
    };
  };
  blockExplorers: {
    default: {
      name: string;
      url: string;
      apiUrl?: string;
    };
  };
  contracts?: {
    multicall3: {
      address: string;
      blockCreated?: number;
    };
  };
  testnet?: boolean;
};

export type ChainRegistry = {
  registryAddress: string;
  chain: any;
};

/**
 * Enum for mapping TLDs to their respective chains
 */
export enum TldEnum {
  CZ = 'cz',
  TABI = 'tabi',
  TAIKO = '%f0%9f%a5%81',
  SCROLL = 'scroll',
  BASE = 'boss',
  BERA = 'honey',
  INK = 'ink',
  ZORA = 'gold',
  SONIC = 'speed',
  ABSTRACT = 'abs',
  SONEIUM = 'future',
  PLUME = 'goon',
  BLAST = 'blast',
  POLY = 'poly',
  UNICHAIN = 'defi',
  COTI = 'coti',
  APE = 'ape',
  HEMI = 'hvm',
  CREATOR = 'ceo',
  MONAD = 'mnd',
  NEXUS = 'nexus',
  SOMNIA = 'somnia',
  TABI_V2 = 'tabi',
  ATHENE = 'athene',
  XRPL = 'xrpl',
  SAHARA = 'sahara',
}

export const getChainDetailsByTLD = (tld: string): ChainRegistry => {
  tld = tld.toLowerCase();
  let registryAddress: string;
  let chain: ChainDetails;
  switch (tld) {
    case TldEnum.BERA:
      registryAddress = RegistryAddressEnum.BERA_REGISTRY;
      chain = {
        id: ChainEnum.BERA,
        name: 'Berachain Mainnet',
        iconBackground: '#000',
        nativeCurrency: { name: 'BERA', symbol: 'BERA', decimals: 18 },
        rpcUrls: {
          default: { http: [RpcUrlEnum.BERACHAIN] },
        },
        blockExplorers: {
          default: { name: 'Beracan', url: 'https://beracan.io' },
        },
      };
      break;
    case TldEnum.CZ:
      registryAddress = RegistryAddressEnum.BSC_REGISTRY;
      chain = {
        id: ChainEnum.BSC,
        name: 'BNB Smart Chain Mainnet',
        shortName: 'BSC Mainnet',
        iconBackground: '#F0B90B',
        nativeCurrency: {
          decimals: 18,
          name: 'BNB',
          symbol: 'BNB',
        },
        rpcUrls: {
          default: {
            http: [RpcUrlEnum.BSC_MAINNET],
            webSocket: ['wss://bsc-rpc.publicnode.com'],
          },
        },
        blockExplorers: {
          default: {
            name: 'BscScan',
            url: 'https://bscscan.com',
            apiUrl: 'https://api.bscscan.com/api',
          },
        },
        contracts: {
          multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 15921452,
          },
        },
      };
      break;
    case TldEnum.TABI:
      registryAddress = RegistryAddressEnum.TABI_V2_REGISTRY;
      chain = {
        id: ChainEnum.TABI_TESTNET_V2,
        name: 'Tabi Testnet',
        iconBackground: '#000',
        nativeCurrency: { name: 'Tabi', symbol: 'TABI', decimals: 18 },
        rpcUrls: {
          default: { http: [RpcUrlEnum.TABI_TESTNET_V2] },
        },
        blockExplorers: {
          default: { name: 'Tabi', url: 'https://testnet.tabiscan.com/' },
        },
      };
      break;
    case TldEnum.TAIKO:
      registryAddress = RegistryAddressEnum.TAIKO_REGISTRY;
      chain = {
        id: ChainEnum.TAIKO,
        name: 'Taiko Mainnet',
        iconBackground: '#fff',
        nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
        rpcUrls: {
          default: { http: [RpcUrlEnum.TAIKO_MAINNET] },
        },
        blockExplorers: {
          default: { name: 'Taiko Mainnet', url: 'https://taikoscan.io' },
        },
      };
      break;
    case TldEnum.SCROLL:
      registryAddress = RegistryAddressEnum.SCROLL_REGISTRY;
      chain = {
        id: ChainEnum.SCROLL,
        name: 'Scroll',
        shortName: 'Scroll',
        iconBackground: '#FFDBB0',
        nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
        rpcUrls: {
          default: {
            http: [RpcUrlEnum.SCROLL],
            webSocket: ['wss://wss-rpc.scroll.io/ws'],
          },
        },
        blockExplorers: {
          default: {
            name: 'Scrollscan',
            url: 'https://scrollscan.com',
            apiUrl: 'https://api.scrollscan.com/api',
          },
        },
        contracts: {
          multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 14,
          },
        },
      };
      break;
    case TldEnum.BASE:
      registryAddress = RegistryAddressEnum.BASE_REGISTRY;
      chain = {
        id: ChainEnum.BASE,
        name: 'Base',
        shortName: 'Base',
        iconBackground: '#0052FF',
        nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
        rpcUrls: {
          default: { http: [RpcUrlEnum.BASE] },
        },
        blockExplorers: {
          default: { name: 'ETH', url: 'https://basescan.org/' },
        },
        contracts: {
          multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
          },
        },
      };
      break;
    case TldEnum.INK:
      registryAddress = RegistryAddressEnum.INK_REGISTRY;
      chain = {
        id: ChainEnum.INK, // Updated to 57073
        name: 'Ink Mainnet',
        shortName: 'Ink',
        iconBackground: '#fff',
        nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
        rpcUrls: {
          default: { http: [RpcUrlEnum.INK_MAINNET] },
        },
        blockExplorers: {
          default: { name: 'ETH', url: 'https://explorer.inkonchain.com/' },
        },
        contracts: {
          multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
          },
        },
      };
      break;
    case TldEnum.ZORA:
      registryAddress = RegistryAddressEnum.ZORA_REGISTRY;
      chain = {
        id: ChainEnum.ZORA,
        name: 'Zora',
        shortName: 'Zora',
        iconBackground: '#000',
        nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
        rpcUrls: {
          default: {
            http: [RpcUrlEnum.ZORA],
            webSocket: ['wss://rpc.zora.energy'],
          },
        },
        blockExplorers: {
          default: {
            name: 'Explorer',
            url: 'https://explorer.zora.energy',
            apiUrl: 'https://explorer.zora.energy/api',
          },
        },
        contracts: {
          multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
          },
        },
      };
      break;
    case TldEnum.SONIC:
      registryAddress = RegistryAddressEnum.SONIC_REGISTRY;
      chain = {
        id: ChainEnum.SONIC,
        name: 'Sonic Mainnet',
        shortName: 'Sonic',
        iconBackground: '#fff',
        nativeCurrency: { name: 'S', symbol: 'S', decimals: 18 },
        rpcUrls: {
          default: { http: [RpcUrlEnum.SONIC_MAINNET] },
        },
        blockExplorers: {
          default: { name: 'S', url: 'https://sonicscan.org/' },
        },
        contracts: {
          multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
          },
        },
      };
      break;
    case TldEnum.ABSTRACT:
      registryAddress = RegistryAddressEnum.ABSTRACT_REGISTRY;
      chain = {
        id: ChainEnum.ABSTRACT,
        name: 'Abstract',
        shortName: 'Abstract',
        iconBackground: '#fff',
        nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
        rpcUrls: {
          default: { http: [RpcUrlEnum.ABSTRACT] },
        },
        blockExplorers: {
          default: { name: 'ETH', url: 'https://abscan.org/' },
        },
        contracts: {
          multicall3: {
            address: '0xAa4De41dba0Ca5dCBb288b7cC6b708F3aaC759E7',
          },
        },
      };
      break;
    case TldEnum.SONEIUM:
      registryAddress = RegistryAddressEnum.SONEIUM_REGISTRY;
      chain = {
        id: ChainEnum.SONEIUM,
        name: 'Soneium Mainnet',
        shortName: 'Soneium',
        iconBackground: '#fff',
        nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
        rpcUrls: {
          default: { http: [RpcUrlEnum.SONEIUM_MAINNET] },
        },
        blockExplorers: {
          default: { name: 'ETH', url: 'https://soneium.blockscout.com/' },
        },
        contracts: {
          multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
          },
        },
      };
      break;
    case TldEnum.PLUME:
      registryAddress = RegistryAddressEnum.PLUME_REGISTRY;
      chain = {
        id: ChainEnum.PLUME,
        name: 'Plume Mainnet',
        shortName: 'Plume',
        iconBackground: '#fff',
        nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
        rpcUrls: {
          default: { http: [RpcUrlEnum.PLUME_MAINNET] },
        },
        blockExplorers: {
          default: { name: 'ETH', url: 'https://explorer.plumenetwork.xyz/' },
        },
        contracts: {
          multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
          },
        },
      };
      break;
    case TldEnum.BLAST:
      registryAddress = RegistryAddressEnum.BLAST_REGISTRY;
      chain = {
        id: ChainEnum.BLAST,
        name: 'Blast',
        shortName: 'Blast',
        iconBackground: '#5734E5',
        nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
        rpcUrls: {
          default: { http: [RpcUrlEnum.BLAST] },
        },
        blockExplorers: {
          default: { name: 'Blastscan', url: 'https://blastscan.io/' },
        },
        contracts: {
          multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 212929,
          },
        },
      };
      break;
    case TldEnum.TAIKO:
      registryAddress = RegistryAddressEnum.TAIKO_REGISTRY;
      chain = {
        id: ChainEnum.TAIKO,
        name: 'Taiko Mainnet',
        shortName: 'Taiko',
        iconBackground: '#fff',
        nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
        rpcUrls: {
          default: { http: [RpcUrlEnum.TAIKO_MAINNET] },
        },
        blockExplorers: {
          default: { name: 'Taiko Mainnet', url: 'https://taikoscan.io' },
        },
        contracts: {
          multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 11269,
          },
        },
      };
      break;
    case TldEnum.POLY:
      registryAddress = RegistryAddressEnum.POLYGON_REGISTRY;
      chain = {
        id: ChainEnum.POLYGON,
        name: 'Polygon',
        shortName: 'Polygon',
        iconBackground: '#8247E5',
        nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
        rpcUrls: {
          default: { http: [RpcUrlEnum.POLYGON] },
        },
        blockExplorers: {
          default: {
            name: 'PolygonScan',
            url: 'https://polygonscan.com',
            apiUrl: 'https://api.polygonscan.com/api',
          },
        },
        contracts: {
          multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 25770160,
          },
        },
      };
      break;
    case TldEnum.UNICHAIN:
      registryAddress = RegistryAddressEnum.UNICHAIN_REGISTRY;
      chain = {
        id: ChainEnum.UNICHAIN,
        name: 'Unichain Mainnet',
        shortName: 'Unichain',
        iconBackground: '#fff',
        nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
        rpcUrls: {
          default: { http: [RpcUrlEnum.UNICHAIN_MAINNET] },
        },
        blockExplorers: {
          default: { name: 'ETH', url: 'https://uniscan.xyz' },
        },
        contracts: {
          multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
          },
        },
      };
      break;
    case TldEnum.COTI:
      registryAddress = RegistryAddressEnum.COTI_REGISTRY;
      chain = {
        id: ChainEnum.COTI,
        name: 'COTI Mainnet',
        shortName: 'COTI',
        iconBackground: '#fff',
        nativeCurrency: { name: 'COTI', symbol: 'COTI', decimals: 18 },
        rpcUrls: {
          default: { http: [RpcUrlEnum.COTI_MAINNET] },
        },
        blockExplorers: {
          default: { name: 'COTI', url: 'https://mainnet.cotiscan.io' },
        },
      };
      break;
    case TldEnum.APE:
      registryAddress = RegistryAddressEnum.APE_REGISTRY;
      chain = {
        id: ChainEnum.APECHAIN,
        name: 'ApeChain',
        shortName: 'Apechain',
        iconBackground: '#fff',
        nativeCurrency: { name: 'APE', symbol: 'APE', decimals: 18 },
        rpcUrls: {
          default: { http: [RpcUrlEnum.APECHAIN] },
        },
        blockExplorers: {
          default: {
            name: 'APE',
            url: 'https://apechain.calderaexplorer.xyz/',
          },
        },
        contracts: {
          multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
          },
        },
      };
      break;
    case TldEnum.HEMI:
      registryAddress = RegistryAddressEnum.HEMI_REGISTRY;
      chain = {
        id: ChainEnum.HEMI,
        name: 'Hemi Mainnet',
        shortName: 'Hemi',
        iconBackground: '#fff',
        nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
        rpcUrls: {
          default: { http: [RpcUrlEnum.HEMI_MAINNET] },
        },
        blockExplorers: {
          default: { name: 'ETH', url: 'https://explorer.hemi.xyz' },
        },
        contracts: {
          multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
          },
        },
      };
      break;
    case TldEnum.CREATOR:
      registryAddress = RegistryAddressEnum.CREATOR_REGISTRY;
      chain = {
        id: ChainEnum.CREATOR_TESTNET,
        name: 'Creator Testnet',
        shortName: 'Creator',
        iconBackground: '#fff',
        nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
        rpcUrls: {
          default: { http: [RpcUrlEnum.CREATOR_TESTNET] },
        },
        blockExplorers: {
          default: { name: 'ETH', url: 'https://explorer.creatorchain.io' },
        },
        contracts: {
          multicall3: {
            address: '0x9062BfAdE2AA883361F02C87E831e0fcB15a833B',
          },
        },
        testnet: true,
      };
      break;
    case TldEnum.MONAD:
      registryAddress = RegistryAddressEnum.MONAD_REGISTRY;
      chain = {
        id: ChainEnum.MONAD_TESTNET,
        name: 'Monad Testnet',
        shortName: 'MONAD',
        iconBackground: '#fff',
        nativeCurrency: { name: 'MON', symbol: 'MON', decimals: 18 },
        rpcUrls: {
          default: { http: [RpcUrlEnum.MONAD_TESTNET] },
        },
        blockExplorers: {
          default: { name: 'MON', url: 'http://testnet.monadexplorer.com/' },
        },
        contracts: {
          multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
          },
        },
        testnet: true,
      };
      break;
    case TldEnum.NEXUS:
      registryAddress = RegistryAddressEnum.NEXUS_REGISTRY;
      chain = {
        id: ChainEnum.NEXUS_TESTNET,
        name: 'Nexus Testnet',
        shortName: 'Nexus',
        iconBackground: '#fff',
        nativeCurrency: { name: 'NEX', symbol: 'NEX', decimals: 18 },
        rpcUrls: {
          default: { http: [RpcUrlEnum.NEXUS_TESTNET] },
        },
        blockExplorers: {
          default: { name: 'NEX', url: 'https://explorer.nexus.xyz/' },
        },
        testnet: true,
      };
      break;
    case TldEnum.SOMNIA:
      registryAddress = RegistryAddressEnum.SOMNIA_REGISTRY;
      chain = {
        id: ChainEnum.SOMNIA_TESTNET,
        name: 'Somnia Testnet',
        shortName: 'Somnia',
        iconBackground: '#fff',
        nativeCurrency: { name: 'STT', symbol: 'STT', decimals: 18 },
        rpcUrls: {
          default: { http: [RpcUrlEnum.SOMNIA_TESTNET] },
        },
        blockExplorers: {
          default: {
            name: 'STT',
            url: 'https://shannon-explorer.somnia.network/',
          },
        },
        testnet: true,
      };
      break;
    case TldEnum.TABI_V2:
      registryAddress = RegistryAddressEnum.TABI_V2_REGISTRY;
      chain = {
        id: ChainEnum.TABI_TESTNET_V2,
        name: 'Tabi Testnet V2',
        shortName: 'Tabi',
        iconBackground: '#000',
        nativeCurrency: { name: 'Tabi', symbol: 'TABI', decimals: 18 },
        rpcUrls: {
          default: { http: [RpcUrlEnum.TABI_TESTNET_V2] },
        },
        blockExplorers: {
          default: { name: 'Tabi', url: 'https://testnetv2.tabiscan.com/' },
        },
        contracts: {
          multicall3: {
            address: '0x237B529ABD68C4b2DedCc644F9772b46007be441',
          },
        },
        testnet: true,
      };
      break;
    case TldEnum.ATHENE:
      registryAddress = RegistryAddressEnum.ATHENE_REGISTRY;
      chain = {
        id: ChainEnum.ATHENE_PARTHENON,
        name: 'Athene Parthenon',
        shortName: 'Athene',
        iconBackground: '#fff',
        nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
        rpcUrls: {
          default: { http: [RpcUrlEnum.ATHENE_TESTNET] },
        },
        blockExplorers: {
          default: { name: 'ETH', url: 'https://athenescan.io/' },
        },
        contracts: {
          multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
          },
        },
        testnet: true,
      };
      break;
    case TldEnum.XRPL:
      registryAddress = RegistryAddressEnum.XRPL_REGISTRY;
      chain = {
        id: ChainEnum.XRPL_TESTNET,
        name: 'XRPL EVM Sidechain Testnet',
        shortName: 'XRPL',
        iconBackground: '#fff',
        nativeCurrency: { name: 'XRP', symbol: 'XRP', decimals: 18 },
        rpcUrls: {
          default: { http: [RpcUrlEnum.XRPL_TESTNET] },
        },
        blockExplorers: {
          default: {
            name: 'XRP',
            url: 'https://explorer.testnet.xrplevm.org/',
          },
        },
        contracts: {
          multicall3: {
            address: '0x82Cc144D7d0AD4B1c27cb41420e82b82Ad6e9B31',
          },
        },
        testnet: true,
      };
      break;
    case TldEnum.SAHARA:
      registryAddress = RegistryAddressEnum.SAHARA_REGISTRY;
      chain = {
        id: ChainEnum.SAHARA_TESTNET,
        name: 'SaharaAI Testnet',
        shortName: 'SaharaAI',
        iconBackground: '#fff',
        nativeCurrency: { name: 'SAHARA', symbol: 'SAHARA', decimals: 18 },
        rpcUrls: {
          default: { http: [RpcUrlEnum.SAHARA_TESTNET] },
        },
        blockExplorers: {
          default: {
            name: 'SAHARA',
            url: 'https://testnet-explorer.saharalabs.ai/',
          },
        },
        testnet: true,
      };
      break;
    default:
      return { registryAddress, chain };
  }
  return { registryAddress, chain };
};
