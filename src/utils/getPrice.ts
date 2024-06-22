import { createPublicClient, http } from 'viem';
import { abi } from './abi';
import { getChainDetailsByTLD } from './getChainDetailsbyTLD';

export async function getTotalPrice(domainArray: string[], tld: string) {
  try {
    const chainDetails = getChainDetailsByTLD(tld);
    if (!chainDetails) {
      throw new Error('Invalid TLD');
    }

    const { registryAddress, chain } = chainDetails;

    const publicClient = createPublicClient({
      chain: chain,
      transport: http(),
    });

    const contractCallRegisterPromises = domainArray.map(item =>
      publicClient.readContract({
        abi: abi,
        address: registryAddress as `0x${string}`,
        functionName: 'priceToRegister',
        args: [item.length],
      })
    );

    const contractCallRenewPromises = domainArray.map(item =>
      publicClient.readContract({
        abi: abi,
        address: registryAddress as `0x${string}`,
        functionName: 'priceToRenew',
        args: [item.length],
      })
    );

    const cartItemsPriceRegister = await Promise.all(
      contractCallRegisterPromises
    );
    const cartItemsPriceRenew = await Promise.all(contractCallRenewPromises);

    if (cartItemsPriceRegister && cartItemsPriceRenew) {
      const cartItemsPrice = domainArray.map((item, index) => ({
        name: item,
        priceToRegister: cartItemsPriceRegister[index],
        priceToRenew: cartItemsPriceRenew[index],
      }));

      return { cartItemsPrice };
    } else {
      throw new Error('Failed to fetch prices');
    }
  } catch (error) {
    // Handle specific types of errors
    if (error instanceof SyntaxError) {
      console.error('Syntax error:', error.message);
    } else if (error instanceof TypeError) {
      console.error('Type error:', error.message);
    } else {
      console.error('An error occurred:', error.message);
    }

    // Optionally, you can re-throw the error to propagate it to the caller
    throw error;
  }
}
