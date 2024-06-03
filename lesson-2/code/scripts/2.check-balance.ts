/**
 * Demonstrate, using code, how to retrieve the current balance of a Solana wallet.
 */
import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  clusterApiUrl,
} from "@solana/web3.js";

(async () => {
  const endpoint = clusterApiUrl('devnet');
  const connection = new Connection(endpoint, "confirmed");

  const publicKey = new PublicKey(
    "H2emDWkhB8reDXySZmcri5VgsUyKpE2XnyXbE97MzNrN"
  );

  const balanceInLamports = await connection.getBalance(publicKey);

  console.log(
    `💰 The balance for the wallet at address ${publicKey} is ${balanceInLamports} lamports!`
  );

  const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

  console.log(
    `💰 The balance for the wallet at address ${publicKey} is ${balanceInSOL} SOL!`
  );
})();
