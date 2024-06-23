import { zeroAddress } from 'viem';
import { abi } from './abi';
import { getChainDetailsByTLD } from './getChainDetailsbyTLD';

import type { WalletClient } from 'viem';
import { getTotalPrice } from './getPrice';
import { resolveDomain } from './resolveDomain';

async function checkDomain(domain: string): Promise<boolean> {
  try {
    const domainData: any = await resolveDomain(domain);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return domainData.owner !== '0x0000000000000000000000000000000000000000';
  } catch (error) {
    console.error('Error checking domain:', error);
    return false;
  }
}

export async function registerDomain(
  walletClient: WalletClient,
  domainNames: string[],
  ownerAddresses: string[],
  tld: string,
  referralAddress: string = zeroAddress,
  credits = 0
): Promise<void> {
  try {
    if (domainNames.length !== ownerAddresses.length)
      throw new Error('Domain names and owner addresses length mismatch');

    const chainDetails = getChainDetailsByTLD(tld);
    if (!chainDetails) {
      throw new Error('Invalid TLD');
    }
    const { registryAddress, chain } = chainDetails;

    const totalPriceObject = await getTotalPrice(domainNames, tld);
    const totalPrice = totalPriceObject.totalPrice;

    for (let i = 0; i < domainNames.length; i++) {
      const domain = `${domainNames[i]}.${tld}`;
      const exists = await checkDomain(domain);
      if (exists) {
        throw new Error(`Domain ${domain} already exists`);
      }
    }

    const expiries: number[] = new Array(ownerAddresses.length).fill(1);
    await walletClient.writeContract({
      account: walletClient.account,
      chain: chain,
      address: registryAddress as `0x${string}`,
      abi: abi,
      functionName: 'registerDomains',
      value: totalPrice,
      args: [ownerAddresses, domainNames, expiries, referralAddress, credits],
    });
  } catch (error) {
    console.error('An error occurred during domain registration:', error);
    throw new Error(`Domain registration failed: ${error.message}`);
  }
}
