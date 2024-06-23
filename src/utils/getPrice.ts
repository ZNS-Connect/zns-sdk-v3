import { createPublicClient, http } from 'viem';
import { abi } from './abi';
import { getChainDetailsByTLD } from './getChainDetailsbyTLD';

export async function getTotalPrice(
  domainArray: string[],
  tld: string
): Promise<{ totalPrice: bigint }> {
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

    const contractCallPromises = domainArray.map(
      item =>
        publicClient.readContract({
          abi: abi,
          address: registryAddress as `0x${string}`,
          functionName: 'priceToRegister',
          args: [item.length],
        }) as Promise<bigint> // Explicitly cast the promise to return a bigint
    );

    const cartItemsPriceRegister = await Promise.all(contractCallPromises);

    if (cartItemsPriceRegister) {
      const totalPrice = cartItemsPriceRegister.reduce(
        (total, price) => total + price,
        BigInt(0)
      );

      return { totalPrice };
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
