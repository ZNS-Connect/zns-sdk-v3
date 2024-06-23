export type ChainDetails = {
  id: number;
  name: string;
  iconBackground?: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpcUrls: {
    default: {
      http: string[];
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
      blockCreated: number;
    };
  };
};

export type ChainRegistry = {
  registryAddress: string;
  chain: any;
};

export const getChainDetailsByTLD = (tld: string): ChainRegistry => {
  tld = tld.toLowerCase();
  let registryAddress: string;
  let chain: ChainDetails;
  switch (tld) {
    case 'nft':
      registryAddress = '0x59B9Ac688e39A14b938AC8C3269db66D8aDB9aF6';
      chain = {
        id: 185,
        name: 'Mint Mainnet',
        iconBackground: '#fff',
        nativeCurrency: { name: 'Mint', symbol: 'ETH', decimals: 18 },
        rpcUrls: {
          default: { http: ['https://rpc.mintchain.io'] },
        },
        blockExplorers: {
          default: { name: 'Mint', url: 'https://explorer.mintchain.io/' },
        },
      };
      break;
    case 'honey':
      registryAddress = '0xf180136DdC9e4F8c9b5A9FE59e2b1f07265C5D4D';
      chain = {
        id: 80084,
        name: 'Bartio Testnet',
        iconBackground: '#000',
        nativeCurrency: { name: 'BERA', symbol: 'BERA', decimals: 18 },
        rpcUrls: {
          default: { http: ['https://bartio.rpc.berachain.com'] },
        },
        blockExplorers: {
          default: { name: 'BERA', url: 'https://bartio.beratrail.io/' },
        },
      };
      break;
    case 'cz':
      registryAddress = '0xa83Fd30EF08f96b198f86C4d107c7D78AF1752d2';
      chain = {
        id: 56,
        name: 'BNB Smart Chain',
        nativeCurrency: {
          decimals: 18,
          name: 'BNB',
          symbol: 'BNB',
        },
        rpcUrls: {
          default: { http: ['https://rpc.ankr.com/bsc'] },
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
    case 'xlayer':
      registryAddress = '0x71709A5f1831bA48C414375Fb6a58662A40C01b5';
      chain = {
        id: 196,
        name: 'X Layer',
        iconBackground: '#fff',
        nativeCurrency: { name: 'xLayer', symbol: 'OKB', decimals: 18 },
        rpcUrls: {
          default: { http: ['https://rpc.xlayer.tech/'] },
        },
        blockExplorers: {
          default: { name: 'xLayer', url: 'https://www.oklink.com/xlayer' },
        },
      };
      break;
    case 'tabi':
      registryAddress = '0x47D3EbdD10DCd834289484DeD9BfddFdE410b419';
      chain = {
        id: 9789,
        name: 'Tabi Testnet',
        iconBackground: '#000',
        nativeCurrency: { name: 'Tabi', symbol: 'TABI', decimals: 18 },
        rpcUrls: {
          default: { http: ['https://rpc.testnet.tabichain.com'] },
        },
        blockExplorers: {
          default: { name: 'Tabi', url: 'https://testnet.tabiscan.com/' },
        },
      };
      break;
    case '🥁':
      registryAddress = '0xFb2Cd41a8aeC89EFBb19575C6c48d872cE97A0A5';
      chain = {
        id: 167000,
        name: 'Taiko Mainnet',
        iconBackground: '#fff',
        nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
        rpcUrls: {
          default: { http: ['https://rpc.mainnet.taiko.xyz'] },
        },
        blockExplorers: {
          default: { name: 'Taiko Mainnet', url: 'https://taikoscan.io' },
        },
      };
      break;
    case 'scroll':
      registryAddress = '0xB00910Bac7DA44c0D440798809dbF8d51FDBb635';
      chain = {
        id: 534352,
        name: 'Scroll Mainnet',
        iconBackground: '#FFDBB0',
        nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
        rpcUrls: {
          default: { http: ['https://scroll.blockpi.network/v1/rpc/public'] },
        },
        blockExplorers: {
          default: { name: 'Scroll', url: 'https://scrollscan.com/' },
        },
      };
      break;
    default:
      return { registryAddress, chain };
  }
  return { registryAddress, chain };
};
