import "./App.css";
import { useMemo } from "react";
import { Router } from "src/router";
import { BlogProvider } from "src/context/Blog";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

export const App = () => {
  const endpoint = // Endpoint link here
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
    ],
    []
  )

    return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <BlogProvider>
          <Router />
        </BlogProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
