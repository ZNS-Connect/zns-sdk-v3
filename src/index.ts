import { resolveAddress } from './utils/resolveAddress';
import { resolveDomain } from './utils/resolveDomain';
import { getMetadata } from './utils/getMetadata';
import {getTotalPrice} from './utils/getPrice';
import { registerDomain } from './utils/registerDomain';
import type { WalletClient, zeroAddress } from 'viem';

const ZNSConnectClass = class {
  async resolveAddress(
    tld:
      | 'nft'
      | 'xterio'
      | 'honey'
      | 'cz'
      | 'xlayer'
      | 'tabi'
      | 'taiko'
      | 'scroll',
    address: `0x${string}`
  ): Promise<any> {
    try {
      return await resolveAddress(tld, address);
    } catch (error) {
      // Handle specific error scenarios or log the error
      console.error('Error resolving address:', error);
      throw error; // Rethrow the error to propagate it
    }
  }

  async resolveDomain(domain: string): Promise<string> {
    try {
      const result: any = await resolveDomain(domain);
      return result.owner;
    } catch (error) {
      console.error('Error resolving domain:', error);
      throw error;
    }
  }

  async getRegistry(domain: string): Promise<any> {
    try {
      return await resolveDomain(domain);
    } catch (error) {
      console.error('Error getting registry:', error);
      throw error;
    }
  }

  async getMetadata(domain: string): Promise<any> {
    try {
      return await getMetadata(domain);
    } catch (error) {
      console.error('Error getting metadata:', error);
      throw error;
    }
  }

async checkDomain(domain: string): Promise<boolean> {
  try {
    const domainData:any = await resolveDomain(domain);
    return domainData.owner !== '0x0000000000000000000000000000000000000000';
  } catch (error) {
    console.error('Error checking domain:', error);
    return false;
  }
}

async getPrice(domainArray:string[], tld:string):Promise<any>{
  try{
    const {totalPrice} = await getTotalPrice(domainArray, tld)
    return totalPrice
  }catch(error){
    console.error('Error getting Price', error);
    return false;
  }
}

async register(  walletClient: WalletClient,
  domainNames: string[],
  ownerAddresses: string[],
  tld: string,
  referralAddress: string,
  credits = 0):Promise<any>{
  try{
    await registerDomain(walletClient,
      domainNames,
      ownerAddresses,
      tld,
      referralAddress,
      credits)
  }catch(error){
    console.error('Unable to mint domain(s)', error);
    throw error;
  }
}

};

function ZNSConnect() {
  return new ZNSConnectClass();
}

export { ZNSConnect };
