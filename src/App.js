import Router from './Router'
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { DarkModeProvider } from "./context/dark_mode";
import { WalletProvider } from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import "@solana/wallet-adapter-react-ui/styles.css";
import './App.css'

const App = () => {
  const wallets = [new PhantomWalletAdapter()]
  return (
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
        <DarkModeProvider>
          <Router />
        </DarkModeProvider>
      </WalletModalProvider>
    </WalletProvider>
  )

}

export default App;
